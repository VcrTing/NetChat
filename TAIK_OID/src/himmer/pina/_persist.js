export default {
    enabled: true,
    strategies: [
        {
            key: 'dan_whatsapp',
            storage: sessionStorage, 
            paths: [ 'jwt', 'me', 'tempiates' ]
        }
    ]
}