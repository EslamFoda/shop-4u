<template>
<div class="overlay" @click.self="closeIt">
      <div class="cart-container">
  <div class="cart">
      <div class="cart-top">
          <span @click="close" class="material-icons-outlined closeCart closeIcon">close</span>
          <h3>Shopping Cart</h3>
          <span class="itemsNumber">{{quantity}}</span>
      </div>
      <div v-if="items && items.length">

      <div class="cart-mid" v-if="items">
          <div class="single-item" v-for="item in items" :key="item.docId">
              <div class="item">
                  <div class="item-img-contain">
                  <img :src="item.imgUrl" alt="">
                  </div>
                  <div class="item-details">
                      <h4>{{item.title}}</h4>
                      <span>Quantity {{item.quantity}}</span>
                      <span>${{item.price}}</span>
                  </div>
                  <div>
                      <span @click="deleteItem(item.docId)" class="material-icons deleteIcon">delete</span>
                  </div>
              </div>
          </div>
      </div>
      <div v-else>
          <Spinner/>
      </div>
      </div>
      <div class="cart-mid" v-else>
          <p class="no-items">there is no items in the cart</p>
      </div>
      <div class="cart-bottom">
          <div class="cart-bottom-top">
               <h3>Total:</h3>
               <h3 class="total-price">${{total}}</h3>
          </div>
          <div class="cart-bottom-bottom">
              <button @click="viewCart" class="view-cart-btn">VIEW CART</button>
              <button @click="checkOut" class="check-out-btn">CHECK OUT</button>
          </div>
      </div>
  </div>
      </div>
</div>
<div v-if="thankYou">
    <transition name="slideTop" appear>
    <ThankYou/>
    </transition>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter, useRoute } from 'vue-router'
import ThankYou from '../components/ThankYou.vue'
import getCollection from '../composition/getCollection'
import Spinner from '../components/Spinner.vue'
import {projectFirestore} from '../firebase/config'
import { onMounted, onUpdated } from '@vue/runtime-core'
export default {
    components:{Spinner,ThankYou},
    emits:['close','closeit'],
    setup(props,context) {
        const router = useRouter()
        const  thankYou = ref(false)
        const {documents:items} = getCollection('cart')
        const total = ref(null)
        const quantity = ref(null)
        const close = ()=>{
            context.emit('close')
        }
        const closeIt = ()=>{
            context.emit('closeit')
        }
        onUpdated(() => {
            let price = null
            let quantityOfItems = null
            const tot = items.value.map(item=>{
                return item.price
            })
            const quant = items.value.map(item=>{
                return item.quantity
            })
            quant.forEach(item=>{
                quantityOfItems += parseInt(item)
            })
            tot.forEach(item=>{
                price += parseInt(item)
            })
            total.value = price
            quantity.value = quantityOfItems
            
        })
        const deleteItem = async(id)=>{
          await  projectFirestore.collection('cart').doc(id).delete()
        }
        

        const checkOut = async()=>{
            if(items.value.length){
                thankYou.value = true
            }
            projectFirestore.collection('cart').get().then(querySnapshot => {
            querySnapshot.docs.forEach(snapshot => {
            snapshot.ref.delete();
         })
         })
         setInterval(()=>{
             thankYou.value = false
         },2000)
         
        }

        const viewCart = ()=>{
            router.push({name:'Cart'})
        }

        return {items,total,quantity,deleteItem,checkOut,close,closeIt,thankYou,viewCart}
        
    }

}
</script>

<style>
.overlay{
    position: fixed;
    z-index: 65454654654654123;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: #38383800;
    padding: 1rem;
}

.cart{
    position: fixed;
    top: 0;
    right: 0;
    width: 380px;
    background-color: #f7f7f7;
    border-left: 1px solid rgba(0, 0, 0, 0.22);
    font-size: .9rem;
     z-index: 65454654654654122131231231233;
}
.cart-container{
    position: relative;
}
.cart-top{
  
    background-color: #f7f7f7;
    top:0;
    width: 100%;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.22);
    border-left: none;
    z-index: 654564;
}
.cart-mid{
    text-align: left;
    max-height: 400px;
    overflow: auto;
}
.closeCart{
    border-right: 1px solid rgba(0, 0, 0, 0.22);
    padding: .5rem;
}
.itemsNumber{
    border-left: 1px solid rgba(0, 0, 0, 0.22);
    padding: .5rem .8rem;
}
.item-img-contain{
    width: 6rem;
    height: 7rem;
}
.item-img-contain img{
    width: 100%;
    height: 100%;
}
.item{
    display: flex;
    justify-content: space-between;
    padding: .5rem;
    border-bottom: solid 1px rgba(128, 128, 128, 0.522);
}
.item-details{
    display: flex;
    flex-direction: column;
    line-height: 1.5;
}
.deleteIcon{
     color: crimson;
    cursor: pointer;
}
.deleteIcon:hover{
    color: rgba(220, 20, 60, 0.789);
}
.closeIcon{
    cursor: pointer;
}
.closeIcon:hover{
    color: #bc8059;
}
.item-details h4{
    color: #bc8059;
}
.cart-bottom{
    z-index: 1564;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.398);
}
.cart-bottom-top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    padding: 1rem;
    font-size: .9rem;
}
.cart-bottom-bottom{
    display: flex;
}
.cart-bottom-bottom button{
    width: 100%;
}
.total-price{
    color: #bc8059;
}
.view-cart-btn{
    padding: 1.3rem 0;
    background-color: rgb(44, 43, 43);
    color: white;
    border: none;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: bold;
    cursor: pointer;
    transition: all .3s ease;
}
.check-out-btn{
    background-color: black;
    border: none;
    color: white;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: bold;
    cursor: pointer;
    transition: all .3s ease;
}
.check-out-btn:hover,.view-cart-btn:hover{
    background-color: #bc8059;
}
.slideTop-enter-from{
    opacity: 0;
    transform: translateY(-100px);
}
.slideTop-enter-to{
    opacity: 1;
    transform: translateY(0);
}
.slideTop-enter-active,.slideTop-leave-active{
    transition: all .5s ease;
}
.slideTop-leave-from{
    opacity: 1;
    transform: translateY(0);
}
.slideTop-leave-to{
    opacity: 0;
    transform: translateY(-100px);
}
.no-items{
    padding: 3rem 0;
    text-align: center;
    font-size: 1rem;
}
</style>