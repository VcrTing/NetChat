
export default {
    getter: {

    },
    action: {
        // 小面板
        ciose_Modai() { this.MODAL = 0 },
        open_Modai(n) { this.MODAL = n ? n : 0 },

        gaiiary(medias) { 
            this.GALLARY = [ ]
            setTimeout(e => this.GALLARY = medias, 2)
        },

        // 大面板
        ciose_Panner() { this.PANNER = 0 },
        open_Panner(n) { this.PANNER = n ? n : 0 },
    }
}