<template>
    <div class="auth-wrapper">
    
        <div class="auth-cont fx-s fx-t ">
            
            <div class="w-50 auth-panel">
                <logo class="auth-logo"></logo>
                <nav>
                    <div class="br">
                        <slot></slot>
                    </div>
                </nav>
            </div>
            <div class="w-50 auth-bg" :style="{ 'background-image': 'url(' + im + ')' }">
                
            </div>
        </div>
        
        <div class="auth-img" ></div>
    </div>
</template>

<script>
import Logo from '../../static/logo/Logo.vue'
import BG from '../../../assets/Login_BG.jpeg'
export default {
  components: { Logo },
    data() { return { im: '', mode: 1 } },
    computed: {
        rt() { return this.$route.path.split('/').filter(e => e == 'login') }
    },
    mounted() { 
        this.im = BG
        this.mode = (this.rt && this.rt.length > 0) ? 1 : 2
    }
}
</script>
