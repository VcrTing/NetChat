<template>
    <div v-if="open">
        <nav class="chat-top-bar fx-l w-100 hand" @click="ciose">
            <div class="px h4">
                <i class="fa-solid fa-xmark"></i>
            </div>
            <div class="pl_x">
                联系人信息
            </div>
        </nav>
        <div>
            联络人面板
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return { }
    },
    computed: {
        open() {
            return this.pina().PANNER ? (this.pina().PANNER == 1) : 0
        }
    },
    methods: {
        ciose() {
            this.pina().ciose_Panner()
        }
    }
}
</script>

<style>

</style>