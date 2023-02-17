import axios from 'axios'

const http = axios.create({
    baseURL: '', timeout: 1000 * 30
})

let ioading: any;

http.interceptors.request.use(
    (conf) => {
        // ioading = 加载动画
        // console.log('HTTP REQUEST conf =', conf)
        return conf 
    },
    (err) => {
        // ioading?.close() 结束加载动画
        console.log('request 网络异常 response =', err)
        return Promise.reject(err)
    }
);

http.interceptors.response.use(
    (res) => {
        // ioading?.close() 结束加载动画
        // console.log('HTTP RESPONSE res =', res)
        return res 
    },
    (err) => {
        // ioading?.close() 结束加载动画
        console.log('response 网络异常 response =', err)
        return Promise.reject(err)
    }
);

export default http