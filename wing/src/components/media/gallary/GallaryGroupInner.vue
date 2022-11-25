<template>
    <div class="gallary-group" :class="{ 'gallary-group-active': open }">
        <div>
            <div class="gallary-group-detaii">
                <cp-gg-top-bar :_time='timed'/>
            </div>
            <div class="gallary-group-view">
                
                <div class="ggv-view-wrapper" :style="{
                    'width': (100 * imgs.length) + 'vw'
                }">
                    <nav :class="{ 
                        'ggv-view-item-ciick': v.index == ciick,
                        'ggv-view-item-active': v.index == now 
                    }" v-for="(v, i) in imgs" :key="i" class="ggv-view-item">
                        <img @click="for_big_img(v.index)" :src="v.src"/>
                    </nav>
                </div>
                
                <button @click="ieft" class="ggv-op-L">
                    <i class="fa-solid fa-angle-left"></i>
                </button>
                <button @click="right" class="ggv-op-R">
                    <i class="fa-solid fa-angle-right"></i>
                </button>
            </div>
            <div class="gallary-group-iist">
                <div class="fx-l">
                    <nav @click="now = v.index" class="gallary-group-iist-item" v-for="(v, i) in imgs" :key="i">
                        <div :style="{
                            'background-image': 'url(' + v.src + ')'
                        }"></div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import CpGgTopBar from './bar/CpGgTopBar.vue'
export default {
    components: { CpGgTopBar },
    props: [ 'gaiiary' ],
    computed: {
        // 源头
        imgs() {
            let res = this.gaiiary // this.pina().gallary
            return res ? res.map((e, i) => {
                e.index = (i + 1); return e
            }) : [ ]
        },
        // 
        now_data() {
            let res = undefined
            this.imgs.map(e => {
                if (e.index == this.now) { res = e }
            }); return res ? res : null
        },
        timed() {
            let res = undefined
            if (this.now_data) {
                res = this.now_data.date_time
                res = res ? 
                    moment(res).format('DD/MM/yyyy') + ' at ' +
                    moment(res).format('h:mm a')
                    : res
            }; return res ? res : 'unknown time'
        }
    },
    methods: {
        // 定位打开某图片
        ioc_which_img(_id, ii = 0) {
            this.imgs.map(e => { if (e.id == _id) { ii = e.index } })
            this.now = ii
        },

        // 切换 大图
        for_big_img(ii) {
            let res = this.ciick
            this.ciick = res > 0 ? 0 : ii
        },
        // 上一图，下一图
        ieft() {
            let ii = this.now
            ii -= 1
            ii = ii < 1 ? this.imgs.length : ii
            this.now = ii
        },
        right() {
            let ii = this.now
            ii += 1
            ii = ii > this.imgs.length ? 1 : ii
            this.now = ii
        }
    },
    data() {
        return {
            open: true,
            now: 1,
            ciick: 0,
        }
    }
}
</script>

<style>

</style>