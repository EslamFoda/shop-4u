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
<section v-if="product" class="product-item">
    <div class="product-nav">
        <router-link class="home-nav" :to="{name:'Home'}">
<span class="home-nav">Home</span>
        </router-link>
<span class="material-icons arrow-icon">keyboard_arrow_right</span>
<span class="product-name">{{product.title}}</span>
    </div>
    <div class="product-details-grid">
        <div class="prod-left">
            <div class="prod-img-container">
            <img :src="product.imgUrl">
            </div>
        </div>
        <div class="prod-mid">
            <div class="prod-mid-top-flex">
                <div>   
                <h1 class="mid-product-name">{{product.title}}</h1>
                <h1 class="price-mid">${{product.price}} USD</h1>
                <div class="review">
                    <span class="material-icons">star_rate</span>
                    <span class="material-icons">star_rate</span>
                    <span class="material-icons">star_rate</span>
                    <span class="material-icons">star_rate</span>
                    <span class="material-icons">star_rate</span>
                    <p>5 reviews</p>
                </div>
                </div>
                <div>
                    <div v-if="!product.fav" class="tooltip">
                <span @click="addFav" class="material-icons-outlined fav">favorite_border</span>
                <span class="tooltiptext forFav">Add to Wishlist</span>
                    </div>
                    <div v-else class="tooltip">
                <span @click="addFav" class="material-icons-outlined fav wishActive">favorite_border</span>
                <span class="tooltiptext forFav">Add to Wishlist</span>
                    </div>
                </div>
            </div>
            <p class="prod-description">{{product.description}}</p>
            <form @submit.prevent>
            <div class="add-flex">
            <input class="input-width" readonly type="number" id="quantity" name="quantity" min="1" max="5" v-model="add">
            <div class="add-right">
            <span @click="addItem" class="material-icons-outlined select">add</span>
            <span @click="removeItem"  class="material-icons-outlined select">remove</span>
            </div>
            <button @click.prevent="handleAdd" class="add-to-cart">ADD TO CART</button>
            </div>
            <button class="buy-it-now">BUY IT NOW</button>
            </form>
            <span class="categ resize">Categories :</span>
            <span class="gray-color resize"> Home page,</span>
            <span class="gray-color resize"> New,</span>
            <span class="gray-color resize"> Sale</span>
        </div>
        <div class="right-grid">
            <div class="right-box">
                <h3>Why Choose Us ?</h3>
                <div class="right-line"></div>
                <p class="prod-description">Official Herschel stockist Australian warranty assistance & support Australian shipping & returns.Customer first experience environmentally focused</p>
            </div>
            <div class="right-box">
                <h3>Returns</h3>
                <div class="right-line"></div>
                <p class="prod-description">Return this product within 100 days if you change your mind. Get a refund/replacement & free return shipping if it arrives damaged or not as described</p>
            </div>
            <div class="right-box">
                <h3>Shipping</h3>
                <div class="right-line"></div>
                <p class="prod-description">Free if stated near price. $9.95 Australia wide (up to 10 items). $18.95 for Express Post (generally 1 business day).</p>
            </div>
        </div>
    </div>


<div class='description-detail'>
    <div class="tabs">
        <h4 class="tabs active" @click="handleSwitch">Description</h4>
        <h4 class='tabs' @click="handleSwitch"  >Additional Information</h4>
        <span>{{product.reviews.length}}</span>
        <h4  class='tabs' @click="handleSwitch"  >Reviews</h4>
    </div>
    <div class="main-description pages numberone show">
        <div class="main-description-flex">
            <div class="description-flex-left">
                <div class="description-left-img-container">
                    <img src="https://cdn.shopify.com/s/files/1/0411/0660/4200/files/description-1.jpg?v=1592043788">
                </div>
            </div>
            <div class="description-flex-right">
                <div class="description-flex-right-top">
                    <h3 class="mid-product-name">Calf-length dress in airy, textured cotton fabric with a printed pattern</h3>
                    <p class="prod-description">Sed hendrerit. Cras risus ipsum, faucibus ut, ullamcorper id, varius estibulum ante ipsum primis in faucibus</p>
                </div>
                <div class="description-flex-right-bottom">
                    <div class="description-flex-right-imgcontainer">
                    <img src="https://cdn.shopify.com/s/files/1/0411/0660/4200/files/description-2.jpg?v=1592043788">
                    </div>
                </div>
            </div>
        </div>

        <div class="product-detail-section">
            <div class="align-product-detail">
            <h4>Product Details</h4>
            <div class="line-colum"></div>
            <p class="prod-description">Inspired by traditional blockprinting techniques in India, our own in-house design is the vibrant pattern that every closet needs. That's why we crafted our party standout tiered maxi dress in this royal blue-and-yellow print: It's lightweight, lined and will look great at all your most festive summer events.</p>
            </div>
            <div class="product-detail-flex">
                <div class="product-detail-flex-mid">
                    <img src="https://cdn.shopify.com/s/files/1/0411/0660/4200/files/description-3.jpg?v=1592044046" alt="">
                </div>
            </div>

        </div>
    </div>
    <div class="another-tab pages numbertwo">
        <div class="tab-two-flex">
            <div class="tab-two-left">
                <div class="tab-two-info">
                    <p class="prod-description">MORE INFORMATION TO YOU</p>
                    <h1 class="mid-product-name">Things you need to know</h1>
                    <div class="tab-two-line"></div>
                </div>
                <div class='tab-two-grid'>
                    <div class='tab-two-grid-left'>
                        <p class="prod-description">We use industry standard SSL encryption to protect your details. Potentially sensitive information such as your name, address and card details are encoded so they can only be read on the secure server.</p>
                        <h4 class="prod-description">Safe Payments</h4>
                        <h4 class="prod-description">Accept Credit Cart</h4>
                        <h4 class="prod-description">Different Payment Method</h4>
                        <h4 class="prod-description">Price Include VAT</h4>
                        <h4 class="prod-description">Easy To Order</h4>
                    </div>
                    <div class='tab-two-grid-right'>
                         <h4>Easy To Order</h4>
                         <h4 class="prod-description">Europe & USA within 2-4 days</h4>
                         <h4 class="prod-description">Rest of the world within 3-7 days</h4>
                         <h4 class="prod-description">Selected locations</h4>
                         <h4>Need more information</h4>
                         <h4 class="prod-description hov">Orders & Shipping</h4>
                         <h4 class="prod-description hov">Returns & Refunds</h4>
                         <h4 class="prod-description hov">Payments</h4>
                         <h4 class="prod-description hov">Your Orders</h4>
                    </div>
                </div>
            </div>
            <div class="tab-two-right">
                <img :src="product.imgUrl" alt="">
            </div>
            
        </div>
    </div>
    <div class="another-tab pages numberthree">
        <div class="tab-three">
            <form @submit.prevent="handleSubmit">
                <label>Name</label>
                <input v-model="name" type="text" placeholder="Enter your name" required>
                <label>Review Title</label>
                <input v-model="title" type="text" placeholder="Give your review a title" required>
                <label>Body of review</label>
                <textarea v-model="review" placeholder="Write your comments here" required></textarea>
                <button>SUBMIT REVIEW</button>
            </form>
            <div class="reviews" v-for="review in product.reviews" :key="review.id">
                <div class="single-review">
                <h3 class="prod-description">Name: {{review.name}}</h3>
                <h3 class="mid-product-name title-padd">Title: {{review.title}}</h3>
                <h4 class="mid-product-name">Review: {{review.review}}</h4>
                </div>
            </div>
        </div>

    </div>
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
</section>
<div v-else>
    <Spinner/>
</div>
  <div v-if="showModel" class="model-overlay">
            <transition name="slideTop" appear>
        <div class="model-container">
        <h3>item Added to wishlist</h3>
    </div>
        </transition>
</div>
</template>

<script>
import Spinner from '../components/Spinner.vue'
import getDocument from '../composition/getDocument'
import useDocument from '../composition/useDocument'
import useCollection from '../composition/useCollection'
import getCollection from '../composition/getCollection'
import Cart from '../components/Cart.vue'
import Wishlist from '../components/Wishlist.vue'
import Nav from '../components/Nav.vue'
import { ref } from '@vue/reactivity'
export default {
    components:{Nav,Spinner,Cart,Wishlist},
    props:['id'],
    setup(props) {
        const showModel = ref(false)
        const name = ref('')
        const title = ref('')
        const review = ref('')
         const show = ref(false)
        const showCart = ()=>{
            show.value = !show.value
        }
         const showFavourite = ref(false)
        const showWishlist = ()=>{
            showFavourite.value = !showFavourite.value
        }
        const {documents:items} = getCollection('cart')
        const {document : product} = getDocument('products',props.id)
        const {updateDoc} = useDocument('products',props.id)
        const {addDoc} = useCollection('cart')
        const add = ref(0)
        const addItem =()=>{
            add.value++
            
        }
        const removeItem = ()=>{

            if(add.value != 0){
                add.value--
                
            }
        }
        
        const handleAdd = async ()=>{
            const quant = add.value
                if(quant > 0){
                    await addDoc({
                        title: product.value.title,
                        imgUrl: product.value.imgUrl,
                        description: product.value.description,
                        price: Math.floor(product.value.price) * add.value,
                        quantity: quant,
                        mainPrice: Math.floor(product.value.price)
                        })
                    show.value = true
                }
                 
                    add.value = 0
        }
       
          const handleSwitch = (e)=>{
              const firstPage = document.querySelector('.numberone')
              const secPage = document.querySelector('.numbertwo')
              const thirdPage = document.querySelector('.numberthree')
              hidePage()
              hideActive()
              if(e.target.textContent === 'Description'){
                  firstPage.classList.add('show')
                   e.target.classList.add('active')
              }else if(e.target.textContent === 'Additional Information'){
                  secPage.classList.add('show')
                  e.target.classList.add('active')
              }else if(e.target.textContent === 'Reviews'){
                  thirdPage.classList.add('show')
                  e.target.classList.add('active')
              }
               
          }
          const hidePage = ()=>{
             const pages = document.querySelectorAll('.pages')
             pages.forEach(page=>{
                 page.classList.remove('show')
             })
          }
          const hideActive = ()=>{
              const items = document.querySelectorAll('.tabs')
              items.forEach(item=>{
                  item.classList.remove('active')
              })
          }
          const handleSubmit = async()=>{
              const newReview = {
                  name: name.value,
                  title:title.value,
                  review:review.value,
                  id: Math.floor(Math.random()* 1000000000)
              }
              await updateDoc({
                  reviews:[...product.value.reviews,newReview]
              })
              name.value = ''
              title.value = ''
              review.value = ''
          }
           let toggle = false
          const addFav = async()=>{
              toggle = !toggle
              
            
           await updateDoc({
               fav: toggle
           })
           if(product.value.fav){
              await updateDoc({
                   wishlist:[{
                       title: product.value.title,
                        imgUrl: product.value.imgUrl,
                        description: product.value.description,
                        price: product.value.price
                   }]
               })
           }else{
               await updateDoc({
                   wishlist:[]
               })
           }
              
          }
          


        return{product,add,removeItem,addItem,handleAdd,showCart,show,items,handleSwitch,name,title,review,handleSubmit,addFav,showModel,showWishlist,showFavourite}
    }
}
</script>

<style>
.wishActive{
    background:#bc8059;
    color:white;
}
.ho{
    text-decoration: none;
}
.pages{
    display:none;
}
.show{
    display: block;
}
.details-nav nav ul li a,.details-nav nav .nav-icons{
    color: black;
}
.details-nav nav ul li:hover{
    border-color: #bc8059;
}

.color{
    background-color: #bc8059;
}


.product-nav{
    display: flex;
    align-items: center;
    padding: 2rem 0 2rem 1rem ;
}
.arrow-icon{
    font-weight: 200;
    font-size: 1.2rem;
    color: gray;
    margin: 0 .2rem 0 .1rem;
}
.product-name{
    color: gray;
    font-size: .9rem;
    font-weight: 600;
}
.home-nav{
    cursor: pointer;
    font-size: .9rem;
    font-weight: 600;
    text-decoration: none;
    color: black;
}
.categ{
    font-size: .9rem;
    font-weight: 600;
    text-decoration: none;
    color: black;
}
.home-nav:hover{
   color: #bc8059;
}
.product-details-grid{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    padding: 0 1rem;
    gap: 1.5rem;
    border-bottom: 1px solid rgba(128, 128, 128, 0.248);
}
.prod-img-container{
    height: 30rem;
    width: 100%;

}
.prod-img-container img{
    width: 100%;
    height: 100%;
}
.prod-mid-top-flex{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(128, 128, 128, 0.248);
}

.fav{
    
    border: 1px solid rgba(0, 0, 0, 0.159);
    padding: .7rem;
    border-radius: 50%;
    font-size: .9rem;
    transition: all .3s ease;
    cursor: pointer;
}
.fav:hover{
    background-color: #bc8059;
    color: white;
}
.review{
    display: flex;
    align-items: center;
    margin: 1.5rem 0;
}
.review p {
    font-size: .9rem;
    margin-left: .5rem;
    color: gray;
}
.review span{
    margin-right: .1rem;
    font-size: 1rem;
    color: #f2b03d;
}
.price-mid{
    color: #bc8059;
    margin: .6rem 0 0 0;
    font-weight: 400;
}
.mid-product-name{
    font-weight: 400;
}
.prod-description{
    line-height: 1.6;
    color: #00000072;
    margin: 1rem 0;
    font-size: 1rem;
    font-weight: 400;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.tooltiptext.forFav{
    top: -2.6rem;
    width: max-content;
    left: .5rem;
    border-radius: 5px;
}
.input-width{
    border: none;
    border: solid 2px black;
    border-right: 1px solid black;
    color: black;
    padding: .6rem;
    width: 3rem;
    padding-left: .3rem;
    font-weight: bold;
    font-size: 1.1rem;
    text-align: center;
}
.input-width:focus{
    outline: none;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
.add-flex{
    display:flex;
    
}
.add-right{
    display: flex;
    flex-direction: column;
    border: black solid 2px;
    border-left: none;
}
.add-right span:first-child{
    border-bottom: 1px solid black;
}
.add-right span{
    padding: 0 .5rem;
    font-weight: bold;
    cursor: pointer;
    transition: all .3s ease;
}
.add-right span:hover{
    color: #bc8059;

}
.add-to-cart{
    background-color: #bc8059;
    border: none;
    margin-left: 1rem;
    font-size: .9rem;
    font-weight: bold;
    letter-spacing: 1.5px;
    color: white;
    padding: 0 2.5rem;
    transition: all .3s ease;
    cursor: pointer;
}
.add-to-cart:hover{
  background-color: black;
  color: white;
}
.buy-it-now{
     background-color: black;
    border: none;
    font-size: .9rem;
    font-weight: bold;
    letter-spacing: 1.5px;
    color: white;
    padding: 0 2.5rem;
    transition: all .3s ease;
    cursor: pointer;
    margin-top: 1rem;
    padding: 1.2rem 6.1rem;
}
.buy-it-now:hover{
    background-color: #bc8059;
}
form{
    margin: 1rem 0;
}
.gray-color{
    color: rgba(128, 128, 128, 0.563);
    cursor: pointer;
    transition: all .3s ease;
    font-weight: bold;
}
.gray-color:hover{
    color: #bc8059;
}
.resize{
    font-size: .8rem;
}
.right-box{
    text-align: center;
    border: solid 1px rgba(128, 128, 128, 0.248);
    padding: 1rem;
    transition: all .2s ease;
    transition-delay: .2s;
    margin-bottom: 2rem ;
}
.right-box h3{
    font-size: 1.2rem;
    font-weight: 200;
}
.right-box:hover{
    border: solid 1px black;
}
.right-line{
    height: 1px;
    width: 3rem;
    background-color: black;
    text-align: center;
    display: inline-block;
}
/** description details **/
.tabs{
    display: flex;
    padding: .7rem;
    border-bottom: 1px solid rgba(128, 128, 128, 0.248);
    align-items: center;
}

.active{
    border-bottom: 3px solid brown;
}
.tabs h4{
    margin: 1rem 2rem 1rem 0;
    cursor: pointer;
}
.main-description-flex{
    display: flex;
    justify-content: space-between;
}
.main-description{
    padding: 3rem 1rem 3rem 3rem;
}
.description-flex-right-imgcontainer{
    width: 100%;
    height: auto;
}
.description-flex-right h3{
    font-size: 2.2rem;
    font-weight: smaller;

}
.description-flex-right-imgcontainer img{
    width: 100%;
    height: 100%;

}
.description-flex-left{
    flex: 100%;
    margin-right: 10rem;
}
.description-flex-right{
    flex: 100%;
}
.description-flex-right-top{
    margin: 8em 0;
}
.description-flex-right-top h3{
    line-height: 1.5;
}
.description-left-img-container{
    width: 100%;
    height: auto;
}
.description-left-img-container img{
    width: 100%;
    height: auto;
}
.align-product-detail{
    text-align: center;
    margin: 6rem 0 2rem 0;
}
.line-colum{
    height: 3rem;
    display: inline-block;
    margin: 1rem 0 0 0;
    width: 1px;
    background-color: black;
}
.product-detail-flex{
    display: flex;
    align-items: center;
    justify-content: center;
}
.product-detail-flex-mid{
    height: auto;
}
.product-detail-flex-mid img{
    width: 100%;
    height: 100%;
}
.tab-two-line{
    width: 3rem;
    height: 2px;
    background:brown;
    margin: .5rem 0 1rem 0;
}
.tab-two-info{
    margin-bottom: 2rem;
}
.tab-two-flex{
    padding: 2rem;
    display: flex;
    justify-content: space-between;
}
.tab-two-left{
    flex: 100%;
    
}
.tab-two-right img{
    width: 100%;
    height: auto;
}
.tab-two-right{
    flex: 100%;
    flex-shrink: 2;
}
.tab-two-grid{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 2rem;
}
.hov:hover{
    color: brown;
    cursor: pointer;
}
.tab-three form{
    width: 100%;
}
.tab-three form label{
    display: block;
    margin: 1rem 0;
}
.numberthree{
    padding: 1rem;
}
.tab-three form input {
    width: 100%;
    padding: .7rem .2rem;
    font-size: 1rem;
}
.tab-three form textarea{
    width: 100%;
    padding: .7rem .2rem;
    font-size: 1rem;
}
.tab-three form button{
    margin: 1rem 0;
    border: none;
    background-color: black;
    color: white;
    cursor: pointer;
    padding: .7rem 1.5rem;
    font-weight: bold;
    letter-spacing: 2px;
    transition: all .5s ease;
}
.tab-three form button:hover{
    background-color: #bc8059;
}
.single-review{
    margin: 1rem 0;
    border-bottom: 1px solid rgba(128, 128, 128, 0.248);
    border-top: 1px solid rgba(128, 128, 128, 0.248);
    padding: 1rem 0;
}
.title-padd{
    margin: .5rem 0;
}
.sec-footer{
    background-color: #f8f8f8;
}
</style>