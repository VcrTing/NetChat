<template>
    <div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menu: [
                { ink: '/', menu: 1 },
                { ink: '/contact', menu: 2 },
                { ink: '/setting', menu: 3 }
            ]
        }
    },
    computed: {
        rt() { return this.$route.path },
        
    },
    mounted() {
        this.$emit('menu', this.curr())
    },
    methods: {
        curr() {
            let m = 0
            this.menu.map( e => { if (e.ink == this.rt) { m = e.menu } }); return m
        } ,
        
        iunch(ii) {
            this.menu.map(e => {
                if (e.menu == ii) { this.$router.push(e.ink) }
            })
        }
    }
}
</script>

<style>

</style>