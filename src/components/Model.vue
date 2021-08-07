<template>
  <div class="model">
      <div class="grid-model">
          <div class="left-model"></div>
          <div class="right-model">
              <div class="right-model-top">
                  <p>A NATURAL COFFEE</p>
                  <h1>Enjoy The Coffee</h1>
                  <div class="line"></div>
              </div>
              <div class="timer-flex">
                  <div class="box-timer">
                      <h2>{{days}}</h2>
                      <h3>Days</h3>
                  </div>
                  <div class="box-timer">
                      <h2>{{hours}}</h2>
                  <h3>Hours</h3>
                  </div>
                  <div class="box-timer">
                      <h2>{{min}}</h2>
                      <h3>Mins</h3>
                  </div>
                  <div class="box-timer">
                      <h2>{{sec}}</h2>
                      <h3>Sec</h3>
                  </div>
              </div>
              <div class="model-bottom"> 
              <a class="model-btn" href="#">SHOP NOW</a>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(props) {
        const days = ref('')
        const hours = ref('')
        const min = ref('')
        const sec = ref('')
        const tick =()=>{
            const now = new Date()
            const d = now.getDay()
            const h = now.getHours()
            const m = now.getMinutes()
            const s = now.getSeconds()
            days.value = d
            hours.value = h
            min.value = m
            sec.value = s
            
        }
        
    setInterval(tick,1000)
    

    return{days,hours,min,sec}
    }

}
</script>

<style>
.grid-model{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    height: 635px;
}
.left-model{
    position: relative;
    width: 100%;
    overflow: hidden;
}
.left-model:hover::after{
    transform: scale(1.1);
}
.left-model::after{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: url(https://cdn.shopify.com/s/files/1/0411/0660/4200/files/count-downt-v1-1.jpg?v=1592210193);
    transition: all .4s ease;
    background-repeat: no-repeat;
    background-size: cover;
}
.right-model{
    position: relative;
}

.right-model::after{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-image: url(https://cdn.shopify.com/s/files/1/0411/0660/4200/files/bgcount-downt-v1.jpg?v=1592211552);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    
}
.right-model-top{
    text-align: center;
    margin-top: 10rem;
}
.right-model-top p{
    font-size: .9rem;
    font-family: sans-serif;
}
.right-model-top h1{
    margin: 1rem 0;
    font-weight: 300;
    font-size: 2.5rem;
}
.line{
    width: 10rem;
    height: 2px;
    background-color: #b8784e;
    display: inline-block;
}
.timer-flex{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 3rem 0;
}
.box-timer{
    background-color: #b8784e;
    text-align: center;
    color: white;
    width: 5rem;
    height: 5rem;
}
.box-timer h2{
    margin: .5rem 0;
}
.box-timer h3{
    font-size: 1rem;
    font-weight: 400;
}
.model-bottom{
    text-align: center;
}
.model-btn{
    display: inline-block;
    background-color: black;
    color: white;
    padding: 1rem 1.5rem;
    text-decoration: none;
    text-align: center;
    transition: all .3s ease;
}
.model-btn:hover{
    background-color:#b8784e ;
}

</style>