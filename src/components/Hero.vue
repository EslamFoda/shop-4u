<template>
<div v-if="show">
<Cart  @close='showCart' @closeit='showCart'/>
</div>
<div v-if="showFavourite">
    <Wishlist @close='showWishlist' @closeit='showWishlist'/>
</div>
  <swiper
    effect="fade"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :autoplay="{autoplay: true}"
  >
    <swiper-slide class="swip first-img-hero">
        <div class="container">
  <nav>
   <ul>
       <li class="basic-4"><a href="#">HOME</a></li>
       <li class="none basic-4"><a href="#">SHOP</a></li>
       <li class="none basic-4"><a href="#">FEATURED</a></li>
       <li class="none basic-4"><a href="#">PAGES</a></li>
       <li class="none basic-4"><a href="#">BLOGS</a></li>
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
        <div class="hero">
            <transition name="slide" appear>
        <h2>DONT MISS TODAY'S FEATURED DEALS</h2>
            </transition>
                <transition name="scale" appear>
        <h1>Start A Day With Coffee</h1>
                </transition>
                <transition name="right-slide" appear>
        <h3>Here to bring your life style to the next level.</h3>
                </transition>
        <transition name='bottom-sl' appear>
        <a href="#" class="hero-btn">SHOP NOW</a>
        </transition>
        </div>
    </swiper-slide>
    <swiper-slide class="swip sec-img-hero">
        <div class="container">
  <nav>
   <ul>
       <li class='basic-4'><a href="#">HOME</a></li>
       <li class="none basic-4"><a href="#">SHOP</a></li>
       <li class="none basic-4"><a href="#">FEATURED</a></li>
       <li class="none basic-4"><a href="#">PAGES</a></li>
       <li class="none basic-4"><a href="#">BLOGS</a></li>
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
         <div class="hero">
        <h2>NEED-IT-NOW</h2>
        <h1>Start A Day With Coffee</h1>
        <h3>Contemporary, minimal and beautifully iconic.</h3>
        <a href="#" class="hero-btn sec-btn">BUY NOW</a>
        </div>
    </swiper-slide>
    ...
  </swiper>
</template>
<script>
  // import Swiper core and required modules
  import SwiperCore, { Navigation, Pagination, A11y, Autoplay, EffectFade } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/swiper-bundle.css';
  
  import getCollection from '../composition/getCollection'
  import Nav from '../components/Nav.vue'
  import Cart from '../components/Cart.vue'
  import Wishlist from '../components/Wishlist.vue'
import { ref } from '@vue/reactivity';

  // install Swiper modules
  SwiperCore.use([ Pagination, A11y,Navigation,Autoplay,EffectFade]);

  // Import Swiper styles
  export default {
    components: {Swiper,SwiperSlide,Nav,Cart,Wishlist},
    setup(props) {
        const {documents:items} = getCollection('cart')
        const show = ref(false)
        const showFavourite = ref(false)
        const showWishlist = ()=>{
            showFavourite.value = !showFavourite.value
        }
        const showCart = ()=>{
            show.value = !show.value
        }
        return{showCart,show,items,showFavourite,showWishlist}
        
    }
  };
</script>
<style>
.swip{
  padding: 2rem 0;
}
 .first-img-hero{
     background-image: url(https://cdn.shopify.com/s/files/1/0411/0660/4200/files/slideshow-v1.jpg?v=1592212267);
     background-repeat: no-repeat;
     background-position: center;
     background-size: cover;
 }
 .sec-img-hero{
     background-image: url(https://cdn.shopify.com/s/files/1/0411/0660/4200/files/slideshow-v1-2.jpg?v=1592212908);
      background-repeat: no-repeat;
     background-position: center;
     background-size: cover;
 }
 .swiper-button-prev, .swiper-button-next{
     color: white ;
 }
 .hero{
     color: white;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     text-align: center;
     padding: 7rem 1rem;
 }
 .hero h1{
     margin: 1.2rem 0;
     font-size: 4rem;
     font-family: tah sans-serif;
     font-weight: 500;
 }
 .hero h2{
     font-family: tah sans-serif;
     font-size: 1.1rem;
     font-weight: 500;
     letter-spacing: 3px;
     color: rgba(255, 255, 255, 0.885);
 }
 .hero h3{
     font-family: tah sans-serif;
     font-size: 1.2rem;
     font-weight: 500;
     letter-spacing: 1px;
     color: rgba(255, 255, 255, 0.953);
 }
 .hero-btn{
     display: inline-block;
     text-decoration: none;
     color: white;
     padding: 1rem 2rem;
     margin-top: 2.5rem;
     font-size: 12px;
     font-weight: 800;
     border: solid 1px white;
     transition: all .4s ease;
 }
 .hero-btn:hover{
     background-color: white;
     color: black;
 }
 .sec-btn:hover{
     background-color: black;
     color: white;
     border-color: black;
 }
 .swiper-pagination-bullet{
     padding: .3rem;
     border: white solid 2px;
 }
 .swiper-pagination-bullet-active {
     background: white;
 }
 .slide-enter-from{
     opacity: 0;
     transform: translateX(-100px);
 }
 .slide-enter-to{
     opacity: 1;
     transform: translateX(0);
 }
 .slide-enter-active{
     transition: all 1s ease;
 }
 .bottom-sl-enter-from{
     opacity: 0;
     transform: translateY(100px);
 }
 .bottom-sl-enter-to{
     opacity: 1;
     transform: translateY(0);
 }
 .bottom-sl-enter-active{
     transition: all 1s ease;
 }
.scale-enter-from{
    opacity: 0;
    transform: scale(.8);
}
.scale-enter-to{
    opacity: 1;
    transform: scale(1);
}
.scale-enter-active{
    transition: all 1s ease;
}
.right-slide-enter-from{
     opacity: 0;
     transform: translateX(100px);
 }
 .right-slide-enter-to{
     opacity: 1;
     transform: translateX(0);
 }
 .right-slide-enter-active{
     transition: all 1s ease;
 }
.cartSlide-enter-from{
     opacity: 0;
     transform: translateX(100px);
 }
 .cartSlide-enter-to{
     opacity: 1;
     transform: translateX(0);
 }
 .cartSlide-enter-active{
     transition: all .5s ease;
     transition-delay: .3s;

 }
 .bag{
     cursor: pointer;
 }
 .red-dot{
     background-color: rgb(247, 0, 0);
     height: .5rem;
     width: .5rem;
     border-radius: 50%;
 }

</style>