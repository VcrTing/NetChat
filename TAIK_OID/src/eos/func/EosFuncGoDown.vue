<template>
    <button class="eos-func-dis-btn" :class="{ 'turn-bown': is_down, 'turn-up': !is_down }"
        @click="$emit('down')"
    >
        <i class="fa-solid fa-angle-down sus"></i>
    </button>

</template>

<script>
    export default {
        name: '',
        data() {
            return {
                is_down: true,

                screenH: 0,

                show: false,
            }
        },
        mounted() {
            this.screenH = window.screen.height
            window.addEventListener("scroll", this.handleScroll, true);
        },
        methods: {
            handleScroll() {
                
                let scrolltop = document.documentElement.scrollTop || document.body.scrollTop

                scrolltop > (this.screenH - 300) ? (this.is_down = false) : (this.is_down = true)
                this.show = document.body.offsetHeight > this.screenH ? true : false
            },


            toDis() {

                if (this.is_down) {
                    this.toDown()
                } else {
                    this.toTop()
                }
                this.is_down = !this.is_down
            },

            // 
            toTop() {
            
                let top = document.documentElement.scrollTop || document.body.scrollTop;
                // 实现滚动效果 
                const timeTop = setInterval(() => {
                    document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
                    if (top <= 0) {
                        clearInterval(timeTop);
                        this.$emit('finish_Father')
                    }
                }, 10);
            },

            toDown() {
                window.scrollTo(0, document.body.scrollHeight)
            }
        },
    }
</script>

<style lang="sass" scoped>
</style>