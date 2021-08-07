<template>
<div class="container">
    <h1 class="product-header">New Product</h1>
    <div v-if="products" class="product-grid">
    <div v-for="product in products" :key="product.docId">
        <SingleProduct :product='product'/> 
    </div>
    </div>
    <div v-else>
        <Spinner/>
    </div>
</div>
</template>

<script>
import getCollection from '../composition/getCollection'
import Spinner from '../components/Spinner.vue'
import SingleProduct from '../components/Singleproduct.vue'
export default {
    components:{SingleProduct,Spinner},
    setup(props) {
        const {documents:products} = getCollection('products')
    





    return{products}
    }

    

}
</script>

<style>
.product-header{
    text-align: center;
}
.product-grid{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 2rem;
    margin: 3rem 0 0 0;
}
.img-container{
    height: 24rem;
    position: relative;
    object-fit: fill;
}
.img-container img{
    height: 100%;
    width: 100%;
}
.single-product{
    text-align: center;
}
.overview{
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #757678a3;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all .5s ease;
}
.img-container:hover .overview{
    opacity: 1;
}
.img-container:hover .overview-icons{
    transform: translateY(0);
    opacity: 1;
}
.single-product h4{
    margin: 1rem 0;
    font-weight: 600;
    font-family: tah ;
}
.product-details{
    padding: .8rem;
}
.product-details span{
    color: #b87c55;
    font-weight: bold;
    font-size: 15px;
}
.overview-icons{
    margin-top: 12rem;
    opacity: 0;
    transition: all .5s ease;
    transform: translateY(50px);
}
.overview-icons .material-icons-outlined{
    background-color: white;
    margin: 0 .5rem;
    padding: .7rem;
    border-radius: 50%;
    cursor: pointer;
    transition: all .5s  ease; 
}
.overview-icons .material-icons-outlined:hover{
    background-color: #bc8059;
    color: white;
   
    
}

.tooltip {
  position: relative;
  display: inline-block;
}
.tooltip .tooltiptext {
  visibility: hidden;
  width: 90px;
  background-color: black;
  color: white;
  font-size: smaller;
  text-align: center;
  border-radius: 5px;
  border: solid .5px rgba(128, 128, 128, 0.207);
  padding: 5px 5px;
  
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  top: -90%;
  left: 50%;
  margin-left: -41px;
  margin-top: 10px;
}
.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>