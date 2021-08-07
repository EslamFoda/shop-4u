<template>
  <swiper
   class="news-swiper"
    :slides-per-view="3"
    :space-between="0"
    navigation
    :autoplay="{autoplay: true}"
    :breakpoints='breakpoints'
  >
    <swiper-slide class="news-box news-one">
        <div class="date">
            <span>04</span>
            <div class="box-line"></div>
            <span>MAY</span>
        </div>
        <div class="news-details">
            <p>NEWS</p>
            <h2>Enjoy The Espresso Coffee</h2>
        </div>
    </swiper-slide>
    <swiper-slide class="news-box news-two">
        <div class="date">
            <span>07</span>
            <div class="box-line"></div>
            <span>MAY</span>
        </div>
        <div class="news-details">
            <p>NEWS</p>
            <h2>About American Coffee</h2>
        </div>
    </swiper-slide>
    <swiper-slide class="news-box news-three">
        <div class="date">
            <span>10</span>
            <div class="box-line"></div>
            <span>MAY</span>
        </div>
        <div class="news-details">
            <p>NEWS</p>
            <h2>Start A Day With Coffee</h2>
        </div>
    </swiper-slide>
    <swiper-slide class="news-box news-four">
        <div class="date">
            <span>15</span>
            <div class="box-line"></div>
            <span>MAY</span>
        </div>
        <div class="news-details">
            <p>NEWS</p>
            <h2>Start A Day With Coffee</h2>
        </div>
    </swiper-slide>
    <swiper-slide class="news-box news-five">
        <div class="date">
            <span>30</span>
            <div class="box-line"></div>
            <span>MAY</span>
        </div>
        <div class="news-details">
            <p>NEWS</p>
            <h2>Start A Day With Coffee</h2>
        </div>
    </swiper-slide>
    <swiper-slide class="news-box news-six">
        <div class="date">
            <span>03</span>
            <div class="box-line"></div>
            <span>MAY</span>
        </div>
        <div class="news-details">
            <p>NEWS</p>
            <h2>Start A Day With Coffee</h2>
        </div>
    </swiper-slide>
    ...
  </swiper>
</template>

<script>
import { ref } from '@vue/reactivity';
// import Swiper core and required modules
  import SwiperCore, { Navigation, A11y, EffectFade, Autoplay } from 'swiper';
 SwiperCore.use([ A11y,Navigation,EffectFade,Autoplay]);
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  
export default {
     components:{Swiper,SwiperSlide},
    setup(props) {
        const breakpoints = ref({
    // when window width is >= 480px
    280: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
    414: {
      slidesPerView: 1,
    },
    512: {
      slidesPerView: 2,
    },
    684:{
       slidesPerView: 3,
    }
        })


        return{breakpoints}
    }

}
</script>

<style >
.news-swiper{
    height: 15rem;
}
.news-box{
   
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
}
.news-box:hover::after{
    transform: scale(1.1);
}
.date{
    align-self: flex-end;
    background-color: white;
    text-align: center;
    padding: .5em 1.1rem;
    margin: .5rem;
}
.box-line{
    width: 100%;
    height: 1px;
    background-color: black;
    margin: .4rem 0;
    
}

.news-details{
    background-color: rgba(0, 0, 0, 0.446);
    color: white;
    padding: 1rem;
    line-height: 1.5;
}
.news-one::after{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: url(https://cdn.shopify.com/s/files/1/0411/0660/4200/articles/Blog6_1024x1024.jpg?v=1592032181);
    z-index: -546546565;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 1s ease;
}
.news-two::after{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: url(https://cdn.shopify.com/s/files/1/0411/0660/4200/articles/Blog10_1024x1024.jpg?v=1592188692);
    z-index: -546546565;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 1s ease;
}
.news-three::after{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: url(https://cdn.shopify.com/s/files/1/0411/0660/4200/articles/Blog9_1024x1024.jpg?v=1592032255);
    z-index: -546546565;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 1s ease;
}
.news-four::after{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: url(https://cdn.shopify.com/s/files/1/0411/0660/4200/articles/Blog3_1024x1024.jpg?v=1592032221);
    z-index: -546546565;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 1s ease;
}
.news-five::after{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: url(https://cdn.shopify.com/s/files/1/0411/0660/4200/articles/Blog2_1024x1024.jpg?v=1592032190);
    z-index: -546546565;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 1s ease;
}
.news-six::after{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: url(https://cdn.shopify.com/s/files/1/0411/0660/4200/articles/Blog4_5316d6a5-d616-433b-95f1-4f2963f489e5_1024x1024.jpg?v=1592032186);
    z-index: -546546565;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 1s ease;
}
</style>