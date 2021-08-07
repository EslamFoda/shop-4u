<template>
<div class="overlay" @click.self="closeIt">
      <div class="cart-container">
  <div v-if="products" class="cart">
      <div class="cart-top">
          <span @click="close" class="material-icons-outlined closeCart closeIcon">close</span>
          <h3>wishlist</h3>
          <span class="itemsNumber"></span>
      </div>
      <div v-if="products">

      <div class="cart-mid" v-if="products">
          <div class="single-item" v-for="product in products" :key="product.docId">
              <div v-if="product.wishlist.length" class="item wishlist">
                  <div class="item-img-contain inWish">
                  <img :src="product.wishlist[0].imgUrl" alt="">
                  </div>
                  <div class="item-details">
                      <h4>{{product.wishlist[0].title}}</h4>
                      <span>${{product.wishlist[0].price}}</span>
                  </div>
              </div>
          </div>
      </div>
      </div>
  </div>
      </div>
</div>
</template>

<script>
import getCollection from '../composition/getCollection'
export default {
    components:{},
    emits:['close','closeit'],
    setup(props,context) {
        const {documents:products} = getCollection('products')
        const close = ()=>{
            context.emit('close')
        }
        const closeIt = ()=>{
            context.emit('closeit')
        }
        
       

        return {products,close,closeIt}
        
    }

}
</script>
<style>
.item.wishlist{
    justify-content: flex-start;
}
.inWish{
    margin-right: 1rem;
}
</style>