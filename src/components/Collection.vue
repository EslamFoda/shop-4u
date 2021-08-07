<template>
  <section class="collection-section">
      <div class="collection-grid">
          <div  class="collection-left">
              <div class="center-collection">
              <h1>Expresso Coffe</h1>
              <a ref="btn" class="collection-btn" href="#">SHOP NOW</a>
              </div>
          </div>
          <div class="collection-right">
              <div class="center-collection">
              <h1>Collection New</h1>
              <a ref="btnSec" class="collection-btn" href="#">SHOP NOW</a>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(props) {
        


    }
}
</script>

<style>
.collection-section{
    padding: 3rem 1rem 1rem 1rem;
}
.collection-grid{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 1.8rem;
    height: 27rem;
}
.collection-left {
  position: relative;
  overflow: hidden; 
}

.collection-grid h1{
    color: white;
}
.collection-left:hover::after,.collection-right:hover::after{
    transform: scale(1.1);
}
.collection-left:after{
    content: '';
    background-image: url(https://cdn.shopify.com/s/files/1/0411/0660/4200/files/Banner-v1-1.jpg?v=1592474649);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  object-fit: cover;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transition: all .5s ease;
  z-index: -1;
  
}
.collection-right {
  position: relative;
  overflow: hidden;
}
.collection-right h1,.collection-left h1{
    transition: all .5s ease;
    font-size: 2rem;
}
.collection-right:hover h1,.collection-left:hover h1{
    transform: translateY(-10px);
}
.collection-right:after{
    content: '';
    background-image: url(https://cdn.shopify.com/s/files/1/0411/0660/4200/files/Banner-v1-2.jpg?v=1592474668);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .5s ease;
}
.collection-right::before,.collection-left::before{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1rem;
    background-color: #b8784e;   
    transition: all .7s ease;
}
.collection-right:hover::before,.collection-left:hover::before{
    width: 100%;

}

.collection-btn{
    color: white;
    display: inline-block;
    text-decoration: none;
    border-bottom:2px solid white ;
    padding-bottom: .5rem;
    opacity: 0;
    transition: all .5s ease;
    font-weight: bold;
}
.collection-right:hover .collection-btn,.collection-left:hover .collection-btn{
    opacity: 1;
    transform: translateY(20px);
}
.center-collection{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 11rem;
}

</style>