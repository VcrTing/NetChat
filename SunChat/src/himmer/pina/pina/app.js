
export default {
    getter: {

    },
    action: {
        ciose_Modai() { this.MODAL = 0 },
        open_Modai(n) { this.MODAL = n ? n : 0 },

        gaiiary(medias) { 
            this.GALLARY = [ ]
            setTimeout(e => this.GALLARY = medias, 2)
        }
    }
}