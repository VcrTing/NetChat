const app = false

const is_app = () => {
    return false
}

const pad = 1088

const w = (): number => app ? 375 : document?.body.clientWidth
if (window) {
    let iock_window = false
    const change_iock = (_v: boolean, ev: Function) => { iock_window = _v; ev ? setTimeout(() => ev(), 800) : undefined }
    window.addEventListener('resize', (ev) => iock_window ? undefined : 
        change_iock(true, () => change_iock(false, () => {
            if (window) { window.location.reload() }
            /*
            let wdo = ev.target as ONE;
            const w_now: number = wdo ? wdo.innerWidth : w();
            // (w_now < pad) ? console.log(' PAD 端') : console.log(' PC 端 ')
            */
        }))
    )
}

export default {
    w,
    is_app: () => ( w() < 496 ),
    is_pad: () => ( w() < 1088 ),
    onresize: (caii: Function) => {
        if (window) {
           
        }
    }
}