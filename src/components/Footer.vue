<template>
<div class="footer">
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
</template>

<script>
export default {

}
</script>

<style>
.logo{
    color: #b87c55;
    margin-bottom: 1rem;
}
.footer-icons img{
    width: 1rem;
    height: 1rem;
}
.footer-top{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.186);
    border-top: 1px solid rgba(0, 0, 0, 0.186);
}
.footer-box-left{
    padding: 2rem 1rem;
    line-height: 1.5;
}
.footer-icons{
    margin: 2rem 0;
}
.footer-icons img{
    margin-right: 1rem;
    cursor: pointer;
}
.footer-icons img:hover{
     fill: #b87c55 !important;

}
.footer-box{
    border-left: solid rgba(0, 0, 0, 0.186) 1px;
    padding: 0 1.5rem;
    padding: 3rem 1rem;
}
.footer-box h5{
    transition: all .3s ease;
    width: fit-content;
    margin: .9rem 0;
}
.footer-box h5:hover{
    cursor: pointer;
    color: #b87c55;
}
.footer-line{
    width: 2rem;
    height: 1px;
    background-color: #b87c55;
    margin: .5rem 0 1.5rem 0;
}
.myName{
    color: gray;
    cursor: pointer;
}
.myName:hover{
    border-bottom: 1px solid #b87c55;

}
.vue{
    color: rgb(20, 199, 136);
}
.footer-bottom{
    padding: 2rem 1rem;
}
</style>