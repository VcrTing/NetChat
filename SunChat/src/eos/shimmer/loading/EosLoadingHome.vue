<template>
    <div class="home-ioading fx-c">
        <h1>
            <i class="fa-solid fa-spinner"></i>
        </h1>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
.home-ioading
    position: fixed
    top: 0
    left: 0
    width: 100vw
    height: 100vh
    background: #FFF
    h1
        font-size: 4em
        animation: ioading 1.2s infinite

@keyframes ioading 
    0%
        transform: rotate(0deg) 
    50%
        transform: rotate(200deg) 
    100%
        transform: rotate(360deg)   

</style>