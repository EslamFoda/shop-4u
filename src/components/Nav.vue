<template>
<div class="container">
  <nav>
   <ul>
       <li><a href="#">HOME</a></li>
       <li class="none"><a href="#">SHOP</a></li>
       <li class="none"><a href="#">FEATURED</a></li>
       <li class="none"><a href="#">PAGES</a></li>
       <li class="none"><a href="#">BLOGS</a></li>
   </ul>
   <div class="nav-icons">
       <span class="material-icons-outlined">search</span>
       <span class="material-icons-outlined">perm_identity</span>
       <span class="material-icons-outlined">favorite_border</span>
       <span class="material-icons-outlined">shopping_bag</span>
   </div>
  </nav>
  
</div>

</template>

<script>


export default {
    setup(props) {
      

        
    }

}
</script>

<style>
.sticky{
    position: sticky;
    top: 0;
    right: 0;
}
.container{
    padding: 2rem 1rem; 
}
nav{
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
li{
    list-style: none;
}
nav ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-basis: 100%;
}
nav ul li{
    padding-bottom: .3rem;
    
    border-bottom: none;
    transition: all .3s ease;
    margin-right: 3rem;
}

.nav-icons{
    display: flex;
    flex-basis: 100%;
    justify-content: flex-end;
    align-items: center;
}
.nav-icons span{
    margin-left: 1rem;
}
nav ul li a {
    text-decoration: none;
    color: white;
}





</style>