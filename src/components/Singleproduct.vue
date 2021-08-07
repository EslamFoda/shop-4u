<template>
  <div class="single-product">
            <div class="img-container">
            <img :src="product.imgUrl">
            <div class="overview">
                <transition name="slide-top">
                <div class="overview-icons">
                    <div class="tooltip">
                     <span @click="addToCart(product)" class="material-icons-outlined">shopping_bag</span>
                     <span class="tooltiptext">Add to Cart</span>
                    </div>
                    <div class="tooltip">
                     <span @click="openOverview(product)" class="material-icons-outlined">search</span>
                     <span class="tooltiptext">Quickview</span>
                    </div>
                    <div v-if="!product.fav" class="tooltip">
                     <span @click="addToFav(product.docId,product)" class="material-icons-outlined">favorite_border</span>
                     <span class="tooltiptext">Wishlist</span>
                    </div>
                    <div v-if="product.fav" class="tooltip">
                     <span @click="addToFav(product.docId,product)" class="material-icons-outlined wishTrue">favorite_border</span>
                     <span class="tooltiptext">Wishlist</span>
                    </div>
                </div>
                </transition>
            </div>
            </div>
            <div class="product-details">
                <router-link class="routerLink" :to="{name:'Product', params:{id:product.docId}}">
            <h4>{{product.title}}</h4>
                </router-link>
            <span>${{product.price}}</span>
            </div>
        </div>
        <div v-if="showModel" class="model-overlay">
            <transition name="slideTop" appear>
        <div class="model-container">
        <h3>item Added</h3>
    </div>
        </transition>
</div>
    <transition name="overview">
<div v-if="showOverview" class="opacity-overlay">
    <div v-if="item" class="overlay-view-contianer">
        <div class="overviewFlex">
        <div class="img-overview-cont">
        <img :src="item.imgUrl" alt="">
        </div>
        <div class="overview-right">
        <div class="overview-details">
             <router-link class="routerLink" :to="{name:'Product', params:{id:item.docId}}">
            <h2>{{item.title}}</h2>
             </router-link>
            <span>${{item.price}} USD</span>
        </div>
        <p class="prod-description">{{item.description}}</p>
        </div>
        <span @click="handleClose" class="material-icons-outlined close-view">close</span>
        </div>
    </div>
</div>
    </transition>
</template>

<script>
import { ref } from '@vue/reactivity'
import useCollection from '../composition/useCollection'
import useDocument from '../composition/useDocument'
export default {
    props:['product'],
    setup(props) {
        const showOverview = ref(false)
        const showModel = ref(false)
        const {addDoc} = useCollection('cart')
        const addToCart = async(product)=>{
            showModel.value = true
            const item = {
                title: product.title,
                imgUrl: product.imgUrl,
                description: product.description,
                mainPrice: Math.floor(product.price),
                quantity: 1,
                price: Math.floor(product.price)

            }
            await addDoc(item)
             await new Promise( ()=>{
              setTimeout(()=>{
                showModel.value = false
              },1100)
            })

        }
        const item = ref(null)

        const openOverview = (product)=>{
            item.value = product
            showOverview.value = true
        }
        const handleClose = ()=>{
             showOverview.value = false
        }

         let toggle = false

        const addToFav = async(id,product)=>{
            const {updateDoc} = useDocument('products',id)
              
            toggle = !toggle
              
           await updateDoc({
               fav: toggle
           })
           if(!product.fav){
               showModel.value = true
             await updateDoc({
                   wishlist:[{
                       title: product.title,
                        imgUrl: product.imgUrl,
                        description: product.description,
                        price: product.price
                   }]
               })
           }else{
              await updateDoc({
                   wishlist:[]
               })
           }
            await new Promise( ()=>{
              setTimeout(()=>{
                showModel.value = false
              },1100)
            })
           
        }


        return{addToCart,showModel,showOverview,openOverview,item,handleClose,addToFav}
    }

}
</script>

<style>
.wishTrue{
    background-color: #b87c55 !important;
    color: white;
}
.routerLink{
    text-decoration: none;
    color: black;
}
.routerLink:hover{
    color: #b87c55;
}
.model-overlay{
    position: fixed;
    z-index: 654546546546545;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: #00000000;
    padding: 1rem;
}
.model-container{
    background-color: crimson;
    width: fit-content;
    color: white;
    margin: 3rem auto;
    border-radius: 10px;
    padding: .5rem 2rem;
    line-height: 1.7;
    text-align: center;
}
.overlay-view-contianer{
    background-color: white;
    width: 700px;
    margin: 2rem auto;
    padding: 1rem;
    position: relative;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.164);
}
.opacity-overlay{
    position: fixed;
    z-index: 654546546546545;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: #00000009;
    padding: 1rem;
}
.close-view{
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    display: inline-block;
}
.close-view:hover{
    color: #b87c55;
}
.img-overview-cont{
    width: 350px;
    height: 450px;
    margin-right: 2rem;
    flex-basis: 100%;
    
}
.img-overview-cont img{
    height: 100%;
    width: 100%;
}
.overviewFlex{
    display: flex;
}
.overview-right{
    width: 100%;
}
.overview-details{
    line-height: 1.8;
    border-bottom: 1px solid rgba(0, 0, 0, 0.302);
    height: fit-content;
    flex-basis: 100%;
    padding-bottom: 1.6rem;
}
.overview-details h2{
    font-size: 1.4rem;
}
.prod-description{
    line-height: 1.6;
    color: #a9a9a9;
    margin: 1rem 0;
    font-size: 1rem;
    font-weight: 400;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.overview-enter-from{
    opacity: 0;
    transform: scale(.8);
}
.overview-enter-to{
    opacity: 1;
    transform: scale(1);
}
.overview-enter-active{
    transition: all .5s ease;
}
.overview-leave-from{
    opacity: 1;
    transform: scale(1);
}
.overview-leave-to{
    opacity: 0;
    transform: scale(.8);
}
.overview-leave-active{
    transition: all .5s ease;
}
</style>