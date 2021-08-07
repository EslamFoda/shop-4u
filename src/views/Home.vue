<template>
<Hero/>
<Collection/>
<Product/>
<Model/>
<Sale/>
<News/>
<Footer/>
</template>

<script>
import Hero from '../components/Hero.vue'
import Collection from '../components/Collection.vue'
import Product from '../components/Product.vue'
import Model from '../components/Model.vue'
import Sale from '../components/Sale.vue'
import News from '../components/News.vue'
import Footer from '../components/Footer.vue'
export default {
  components:{Hero,Collection,Product,Model,Sale,News,Footer},
  setup(props) {
    
  }

}
</script>

<style>

</style>