<template>
<div v-if="show">
<Cart  @close='showCart' @closeit='showCart'/>
</div>
<div v-if="showFavourite">
    <Wishlist @close='showWishlist' @closeit='showWishlist'/>
</div>
   <div class="container details-nav">
  <nav>
   <ul>
       <router-link class="ho" :to="{name:'Home'}">
       <li class="basic-4"><a href="#">HOME</a></li>
       </router-link>
       <li class="none"><a class="basic-4" href="#">SHOP</a></li>
       <li class="none"><a class="basic-4" href="#">FEATURED</a></li>
       <li class="none"><a class="basic-4" href="#">PAGES</a></li>
       <li class="none"><a class="basic-4" href="#">BLOGS</a></li>
   </ul>
   <div class="nav-icons">
       <span class="material-icons-outlined">search</span>
       <span class="material-icons-outlined">perm_identity</span>
       <span @click="showWishlist" class="material-icons-outlined bag">favorite_border</span>
       <span @click="showCart" class="material-icons-outlined bag">shopping_bag</span>
       <div class="red-dot" v-if="items && items.length"></div>
   </div>
  </nav>
  
</div>
<div class="img-viewcart">
<div class="viewcart">
    <div class="center-viewcart-hero">
    <h1 class="font-cart">Cart</h1>
     <div class="viewcart-nav">
        <router-link class="home-viewcart"  :to="{name:'Home'}">
<span>Home</span>
        </router-link>
<span class="material-icons arrow-icon">keyboard_arrow_right</span>
<span class="product-name">Your Shopping Cart</span>
    </div>
    </div>
</div>
</div>
<div class="center-viewcart">
<div class="viewcart-grid">
    <div class="prod-name-grid">
        <span>PRODUCT NAME</span>
    </div>
    <div class="prod-price-grid">
        <span>PRICE</span>
    </div>
    <div class="prod-quantity-grid">
        <span>quantity</span>
    </div>
    <div class="prod-total-grid">
        <span>total</span>
    </div>
    <div class="prod-remove-grid">
        <span>remove</span>
    </div>

</div>
<div v-if="items" class="maincart-grid">
    <div v-for="item in items" :key="item.docId">
        <div class="single-item-cart">
            <div class="viewcart-productname">
         <div class="viewcart-imgcontainer">
             <img :src="item.imgUrl" alt="">
         </div>
         <span class="viewcart-thetitle">{{item.title}}</span>
            </div>
            <div class="viewcart-price">
                <span>${{item.mainPrice}}</span>
            </div>
             <div  class="viewcart-qunatity">
            <div class="add-flex">
            <input class="input-width" readonly type="number" id="quantity" name="quantity" v-model="item.quantity">
            <div class="add-right">
            <span @click="addItem(item.quantity,item.docId,item.price,item.mainPrice)" class="material-icons-outlined select">add</span>
            <span @click="removeItem(item.quantity,item.docId,item.price,item.mainPrice)"  class="material-icons-outlined select">remove</span>
            </div>
            </div>
            </div>
            <div class="viwecart-main-price">
                <span>${{item.price}}</span>
            </div>
            <div class="viewcart-remove">
                <span @click="remove(item.docId)" class="material-icons-outlined deletedFromCart">close</span>
            </div>
        </div>
    </div>
</div>
<div v-else>
    <Spinner/>
</div>
</div>
<div v-if="items" class="mobile-viewcart">
    <div v-for="item in items" :key="item.docId">
        <div class="single-mobile-viewcart">
            <div class="mobile-productname">
                <div class="mobile-productname-left">
                <span class="some-padd">Product Name</span>
                <h4>{{item.title}}</h4>
                </div>
                <div class="viewcart-imgcontainer no-right-m">
             <img :src="item.imgUrl" alt="">
         </div>
            </div>
            <div class="mobile-productname">
                <span class="product-name">Product Price</span>
                <span class="product-name">${{item.mainPrice}}</span>
            </div>
            <div class="mobile-productname">
                <span>Quantity</span>
                 <div  class="viewcart-qunatity">
            <div class="add-flex">
            <input class="input-width" readonly type="number" id="quantity" name="quantity" v-model="item.quantity">
            <div class="add-right">
            <span @click="addItem(item.quantity,item.docId,item.price,item.mainPrice)" class="material-icons-outlined select">add</span>
            <span @click="removeItem(item.quantity,item.docId,item.price,item.mainPrice)"  class="material-icons-outlined select">remove</span>
            </div>
            </div>
            </div>
            </div>
            <div class="mobile-productname">
                <span class="product-name">total</span>
                <span class="product-name">${{item.price}}</span>
            </div>
            <div class="mobile-productname remove-mar">
                <span>Remove</span>
               <span @click="remove(item.docId)" class="material-icons-outlined deletedFromCart">close</span>
            </div>
        </div>
    </div>

</div>
<div class="mobile-viewcart" v-else>
    <Spinner/>
</div>
<div class="cart-totals">
    <div class="cart-total-text">
    <h3>CART TOTALS</h3>
    </div>
    <div class="totals-price">
        <span>Total</span>
        <span class="the-final-price">${{total}}</span>
    </div>
    <button @click="checkOut" class="checkout">PROCEED TO CHECKOUT</button>
</div>

<div class="footer sec-footer">
    <div class="footer-top">
        <div class="footer-box-left">
            <h1 class="logo">Shop 4U</h1>
            <p>Subscribe our newsletter and get discount 30% off</p>
            <div class="footer-icons">
                <img src="../assets/twitter.svg" alt="">
                <img src="../assets/facebook.svg" alt="">
                <img src="../assets/behance.svg" alt="">
                <img src="../assets/instagram.svg" alt="">
            </div>
        </div>
        <div class="footer-box">
            <h4>Customer Care</h4>
            <div class="footer-line"></div>
            <h5 href="#">About Us</h5>
            <h5 href="#">Privacy Policy</h5>
            <h5 href="#">Terms & Conditions</h5>
            <h5 href="#">Products Return</h5>
            <h5 href="#">Wholesale Policy</h5>
        </div>
        <div class="footer-box">
            <h4>Quick Shop</h4>
            <div class="footer-line"></div>
            <h5 href="#">Pagination</h5>
            <h5 href="#">Terms & Conditions</h5>
            <h5 href="#">Contact</h5>
            <h5 href="#">Accessories</h5>
            <h5 href="#">Term of use</h5>
        </div>
        <div class="footer-box">
            <h4>Company</h4>
            <div class="footer-line"></div>
            <h5 href="#">Help Center</h5>
            <h5 href="#">Address Store</h5>
            <h5 href="#">Privacy Policy</h5>
            <h5 href="#">Receivers & Amplifiers</h5>
            <h5 href="#">Clothings</h5>
        </div>
    </div>
    <div class="footer-bottom">
        <p>© Copyright 2021 | Shop By <span class="myName">Eslam Mohamed.</span> Powered by <span class="vue">Vue js</span>.</p>
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
import Cart from '../components/Cart.vue'
import ThankYou from '../components/ThankYou.vue'
import Spinner from '../components/Spinner.vue'
import Wishlist from '../components/Wishlist.vue'
import getCollection from '../composition/getCollection'
import {projectFirestore} from '../firebase/config'
import useDocument from '../composition/useDocument'
import { onMounted, onUpdated } from '@vue/runtime-core'
export default {
    components:{Cart,Wishlist,Spinner,ThankYou},
    setup(props) {
         const show = ref(false)
         const  thankYou = ref(false)
        const showCart = ()=>{
            show.value = !show.value
        }
         const showFavourite = ref(false)
        const showWishlist = ()=>{
            showFavourite.value = !showFavourite.value
        }
          const {documents:items} = getCollection('cart')
          const total = ref(null)
            const quant = ref(null)
            const addAndRemove = ref(null)
          const addItem = async(quantity,id,total,price)=>{
              const {updateDoc} = useDocument('cart',id)
               quant.value = quantity
               quant.value++
               addAndRemove.value = total + price
               await updateDoc({
                   quantity: quant.value,
                   price: addAndRemove.value
               }) 
               
               
              
              
          }
          const removeItem = async(quantity,id,total,price)=>{
              const {updateDoc} = useDocument('cart',id)
               if(quantity != 1){
                    quant.value = quantity
                    quant.value--
                    addAndRemove.value = total - price
               await updateDoc({
                   quantity: quant.value,
                   price: addAndRemove.value
               })
               }    
          }

          const remove = async(id)=>{
               const {deleteDoc} = useDocument('cart',id)
               await deleteDoc()
          }
    onUpdated(() => {
            let price = null
            const tot = items.value.map(item=>{
                return item.price
            })
            tot.forEach(item=>{
                price += parseInt(item)
            })
            total.value = price
        })

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
     



     return {items,addItem,removeItem,remove,total,showWishlist,showCart,show,showFavourite,thankYou,checkOut}
    }

}
</script>

<style>
.img-viewcart{
     background: url(https://cdn.shopify.com/s/files/1/0411/0660/4200/files/bgcount-downt-v1.jpg?v=1592211552);
    justify-content: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.viewcart{
   display: flex;
   align-items: center;
   justify-content: center;
}
.viewcart-nav{
    display: flex;
    align-items: center;
}
.home-viewcart{
    text-decoration: none;
    color: black;
    font: bolder;
}

.center-viewcart-hero{
    margin: 10rem 0;
    text-align: center;
    line-height: 1.8;
}
.font-cart{
    font-family: sans-serif;
    font-weight: 300;
    font-size: 3rem;
}
.viewcart-grid{
    display: grid;
    grid-template-columns: repeat(6,1fr);
    margin: 3rem 7rem 0;
}
.prod-name-grid,.prod-price-grid,.prod-quantity-grid,.prod-total-grid,.prod-remove-grid{
    border: 1px solid rgba(128, 128, 128, 0.35);
    padding: 1rem;
    text-align: center;
   
}
.prod-total-grid{
    border-right: none;
    border-left: none;
}
.prod-price-grid{
    border-left: none;
    border-right: none;
}
.prod-name-grid{
    text-align: left;
    grid-column: 1/3;
}
.maincart-grid{
    margin-bottom: 2rem;
}
.single-item-cart{
   display: grid;
   grid-template-columns: repeat(6,1fr);
   margin: 0 7rem 0;
    
}
.viewcart-imgcontainer{
    height: 6rem;
    width: 6rem;
    margin-right: 1rem;
}
.viewcart-imgcontainer img{
    height: 100%;
    width: 100%;
}
.viewcart-productname{
    display: flex;
    align-items: center;
    grid-column: 1/3;
    border-left: 1px solid rgba(128, 128, 128, 0.35);
    border-bottom: 1px solid rgba(128, 128, 128, 0.35);
    padding: 1rem;
}
.viewcart-price,.viwecart-main-price,.viewcart-qunatity{
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(128, 128, 128, 0.35);
}
.viewcart-remove{
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(128, 128, 128, 0.35);
    border-right: 1px solid rgba(128, 128, 128, 0.35);
}
.deletedFromCart{
    cursor: pointer;
}
.cart-totals{
    border: solid 1px rgba(128, 128, 128, 0.35);
    margin: 0 7rem 2rem;
}
.cart-total-text{
    border-bottom: 1px solid rgba(128, 128, 128, 0.35);
    margin: 0 2rem;
    padding: 2rem;
    font-size: .9rem;
}
.totals-price{
    padding: 2rem 4rem;
    display: flex;
    justify-content: space-between;
}
.the-final-price{
    font-weight: bolder;
}
.checkout{
    border: none;
    background-color: #bc8059;
    border: none;
    font-size: .9rem;
    font-weight: bold;
    letter-spacing: 1.5px;
    color: white;
    padding: 1.2rem 1rem;
    transition: all .3s ease;
    margin-left: 4rem;
    margin-bottom: 2rem;
    cursor: pointer
}
.checkout:hover{
    background-color: black;
    color: white;
}
.select{
    user-select: none;
}
.mobile-viewcart{
    display: none;
}
.single-mobile-viewcart{
   margin: 2rem 1rem;
   border: 1px solid rgba(128, 128, 128, 0.35);
}
.mobile-productname{
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.5rem;
    padding: 1rem 1rem 0 1rem;
}
.mobile-productname-left{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}
.no-right-m{
    margin-right: 0;
}
.some-padd{
    padding-bottom: 4rem;
}
.remove-mar{
    margin-bottom: 1rem;
}
</style>