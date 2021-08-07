<template>
<div class="container">
  <h1 class="product-header">Product Sale</h1>
  <p class="discount-header">Discount every Monday</p>
   <swiper
   v-if="sales"
   class="sale-swiper"
    :slides-per-view="4"
    :space-between="50"
    navigation
    :scrollbar="{ draggable: true }"
    :breakpoints='breakpoints'
  >
    <swiper-slide  v-for="sale, in sales" :key="sale.id">
      <div class="single-product">
            <div class="img-container">
            <img :src="sale.imgUrl">
            <div class="overview">
                <transition name="slide-top">
                <div class="overview-icons">
                    <div class="tooltip">
                     <span @click="addToCart(sale)" class="material-icons-outlined">shopping_bag</span>
                     <span class="tooltiptext">Add to Cart</span>
                    </div>
                    <div class="tooltip">
                     <span @click="openOverview(sale)" class="material-icons-outlined">search</span>
                     <span class="tooltiptext">Quickview</span>
                    </div>
                    <div v-if="!sale.fav" class="tooltip">
                     <span @click="addToFav(sale.docId,sale)" class="material-icons-outlined">favorite_border</span>
                     <span class="tooltiptext">Wishlist</span>
                    </div>
                    <div v-if="sale.fav" class="tooltip">
                     <span @click="addToFav(sale.docId,sale)" class="material-icons-outlined wishTrue">favorite_border</span>
                     <span class="tooltiptext">Wishlist</span>
                    </div>
                </div>
                </transition>
            </div>
            </div>
            <div class="product-details">
              <router-link class="sale-title-color" :to="{name:'Product',params:{id:sale.docId}}">
            <h4>{{sale.title}} <span class="sale-color">Sale</span></h4>
              </router-link>
            <span> <span class="sale-price-color">${{sale.sale}}</span> ${{sale.price}}</span>
            </div>
            <div class="sale-sticker">
              <span class="precent">- {{sale.precent}} %</span>
            </div>
        </div>
        </swiper-slide>
    ...
  </swiper>
  <div v-else>
    <Spinner/>
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
            <router-link  class="overview-titlee" :to="{name:'Product',params:{id:item.docId}}">
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
// import Swiper core and required modules
  import SwiperCore, { Navigation, A11y, EffectFade, Scrollbar } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/swiper-bundle.css';
 
  import Spinner from '../components/Spinner.vue'
  
  import getCollection from '../composition/getCollection'
  import useCollection from '../composition/useCollection'
  import useDocument from '../composition/useDocument'
import { ref } from '@vue/reactivity';
   // install Swiper modules
  SwiperCore.use([ A11y,Navigation,EffectFade,Scrollbar]);
export default {
    components:{Swiper,SwiperSlide,Spinner},
    setup(props) {
        const showOverview = ref(false)
        const {addDoc} = useCollection('cart')
        const {documents : sales} = getCollection('products')
        const showModel = ref(false)
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
            setInterval(()=>{
                showModel.value = false
            },1500)

        }
        const item = ref(null)
        const openOverview = (product)=>{
            item.value = product
            showOverview.value = true
        }
        const handleClose = ()=>{
             showOverview.value = false
        }
    const breakpoints = ref({
          280: {
      slidesPerView: 2,
      spaceBetween: 10  
    },
          320: {
      slidesPerView: 2,
      spaceBetween: 10  
    },
    // when window width is >= 480px
    375: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    640:{
       slidesPerView: 3,
      spaceBetween: 25
    },
    // when window width is >= 640px
    860: {
      slidesPerView: 4,
      spaceBetween: 30
    },
        })
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

        return{sales,addToCart,showModel,openOverview,item,showOverview,handleClose,breakpoints,addToFav}
    }

}
</script>

<style>
.discount-header{
    margin: 2rem 0;
    text-align: center;
    font-weight: bold;
    font-size: .9rem;
    color: gray;
}
.sale-swiper{
    height: auto;
    padding: 1rem 0;
}
.sale-color{
  color: crimson !important;
}
.sale-price-color{
  text-decoration: line-through;
  color: rgba(128, 128, 128, 0.768) !important;
  margin-right: .2rem;
}
.sale-title-color{
  color: black;
  text-decoration: none;
}
.single-product{
  position: relative;
}
.sale-sticker{
  width: 3rem;
  height: 1.5rem;
  background-color: #ee2e2e;
  position: absolute;
  top: .8rem;
  left: .8rem;
}
.precent{
  color: white;
  font-size: 11px;
  display: inline-block;
  margin-top: 5px;
}
.overview-titlee{
  text-decoration: none;
  color:inherit;
}
.overview-titlee:hover{
  color:#b87c55;
}
</style>