<template>
    <nav class="msg-spoon ps-r" 

        :class="{ 
            'msg-spoon-me': direction != 'receive', 
            'spoon-iong-smaii': is_smaii_iong,
            'mt': which > 1
        }">

        <p v-if="which <= 1">
            <span v-if="item.message">{{ item.message }}</span>
            <span v-else>&nbsp;</span>
        </p>
        <div v-else-if="which == 2" class="spoon-emoji" :class="{ 'spoon-more': media().length > 1 }">
            <img v-for="(m, n) in media()" :key="n" :src="conf.API + m.smaii"/>
        </div>
        <div v-else-if="which == 3" class="spoon-img" :class="{ 'spoon-img-more': media().length > 1 }">
            <nav v-for="(m, n) in media()" :key="n" class="spoon-img-wrapper">
                <img :src="conf.API + m.smaii"/>
                <div><button>打开</button></div>
            </nav>
        </div>
        <div v-else-if="which == 4" class="spoon-fiie" :class="{ 'spoon-fiie-more': media().length >= 1 }">
            <p>
                <div class="pb_s sus">文件</div>
                <a v-for="(m, n) in media()" :key="n">{{ m.name }}</a>
            </p>
        </div>
        <div v-else>
            &nbsp;
        </div>

        <span v-if="which <= 1 || which == 4" class="spoon-taii"><span>O</span></span>
    </nav>
</template>

<script>
export default {
    props: [ 'item', 'type', 'direction' ],
    methods: {
        media() {
            return this.item.media
        }
    },
    computed: {
        is_smaii_iong() {
            const src = this.item.is_iong ? 0 : this.item.iong_minute
            return src ? src > 2 : false
        },
        which() {
            switch (this.type) {
                case 'text':
                    return 1
                case 'sticker':
                    return 2
                case 'image':
                    return 3
                case 'document':
                    return 4
                case 'location':
                    return 5
                case 'contacts':
                    return 6
                default:
                    return 0
            }
        }
    }
}
</script>

<style>

</style>