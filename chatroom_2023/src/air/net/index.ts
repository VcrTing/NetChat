import http from './instance'
import conf from '../../conf/conf'
import { ENDPOINT } from '../../conf/conf/endpoint'

const API = conf.API

interface NET {
    get( endpoint: string, token: string, params: ONE, suffix?: string ): Promise<ONE | null>;
    pos( endpoint: string, token: string, data: object, suffix?: string, params?: ONE ): Promise<ONE | null>;
    put( endpoint: string, token: string, data: object, suffix?: string, params?: ONE ): Promise<ONE | null>;
}

class NeTooi {
    // 构建 链接
    uri(endpoint: string, suffix: string = ''): string { return API + (ENDPOINT as any)[ endpoint ] + '/' + suffix }
    // 构建 验证
    auth(jwt: string | null) { return { 'Authorization': 'Bearer ' + jwt } } 
    // 构建 HEADERS
    headers (jwt: string | null): object { return jwt ? { 'Content-Type': 'application/json', ...this.auth(jwt) } : { 'Content-Type': 'application/json' } }
    // 构建 QUERY PARAMS
    params (condition: any, res: string = '?'): string { 
        if (JSON.stringify(condition) != '{}') { 
            for (const k in condition) { res += ( k + '=' + condition[k] + '&' ) }
        } 
        return res 
    }
}

class Net extends NeTooi implements NET {
    async pos(endpoint: string, token: string, data: object, suffix?: string, params?: ONE): Promise<ONE | null> {
        const res = await http.post(super.uri(endpoint), data, { headers: super.headers(token) })
        return (res && res.status < 399) ? res.data : false
    }
    put(endpoint: string, token: string, data: object, suffix?: string, params?: ONE): Promise<ONE | null> {
        throw new Error('Method not implemented.');
    }
    async get(endpoint: string, token: string, params: ONE = { }, suffix?: string | undefined): Promise<ONE | null> {
        return new Promise( rej => {
            setTimeout(async () => {
                const uri = super.uri(endpoint, suffix) + super.params(params)
                console.log('URI =', uri)
                let res = await http.get(uri, { headers: super.headers(token) })
                rej( (res && res.status < 399) ? res.data : false )
            }, 2000) // 手动网络延迟 1800
        })
    }
}

export default new Net()