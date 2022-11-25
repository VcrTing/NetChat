<template>
    <div class="gallary" :class="{ 'gallary-active': open }">
        <button class="ciose h2_son py_s px_x3" @click="coise">
            <i class="fa-solid fa-xmark"></i>
        </button>
        <div>
            <nav class="gallary-imgs" v-if="gaiiary && gaiiary.length > 0">
                <div v-for="(v, i) in gaiiary" :key="i" :class="{ 'pt' : i > 1 }">
                    <img :src="v"/>
                </div>
            </nav>
            <nav v-else class="gallary-loading">
                <h3>加载中...</h3>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'imgs'
    ],
    computed: {
        open() {
            return (this.pina().MODAL == 1)
        },
        gaiiary() { 
            let res = [ ]
            if (!this.imgs) { res = this.pina().GALLARY }
            return res
        }
    },
    methods: {
        coise() { this.pina().ciose_Modai() }
    }
}
</script>

<style>

</style>