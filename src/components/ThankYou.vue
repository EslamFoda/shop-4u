<template>
  <div class="black-overlay">
    <div class="overlay-container">
        <h2>Thank you for purchase</h2>
        <p>Your order was completed successfully</p>
    </div>
</div>
</template>

<script>
export default {
    setup(props) {
        
    }
}
</script>

<style>
.black-overlay{
    position: fixed;
    z-index: 654546546546545;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: #0000001e;
    padding: 1rem;
}
.overlay-container{
    background-color: #bc8059;
    width: fit-content;
    color: white;
    margin: 3rem auto;
    border-radius: 10px;
    padding: .5rem 2rem;
    line-height: 1.7;
    text-align: center;
}
</style>