
import me from "../mook/me"
import users from "../mook/users"

export default () => {
    return {
        me,
        jwt: '',
        chatter: null,

        rooms: { },

        tempiates: [ ],
        contacts: [ ],
        

        gallary: [

            {
                index: 1, date_time: '2022-09-12 12:12:12',
                src: 'https://img0.baidu.com/it/u=2730793434,4174055920&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889',
            },
            {
                index: 2, date_time: '2022-09-12 12:12:12',
                src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2200a824ae3a16f39116f6dbb04f3cd9af7ef04821d48-gsh1gj_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665124745&t=b6a25fa07689d41f20ab1c345dab99ab',
            },
            {
                index: 3, date_time: '2022-10-12 12:12:12',
                src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F21%2F20210721120202_647c8.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665124745&t=1617820932df6af3cb6cc0579bfba9a8',
            },
            {
                index: 4, date_time: '2022-10-12 12:12:12',
                src: 'https://img.yalayi.net/img/gallery/441/z1.jpg!pcimg',
            },
            {
                index: 5, date_time: '2022-11-12 12:12:12',
                src: 'https://img.yalayi.net/img/gallery/825/z4.jpg!pcimg',
            },
            {
                index: 6, date_time: '2022-12-09 12:12:12',
                src: 'https://img0.baidu.com/it/u=3442531923,2171538315&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800',
            },
            {
                index: 7, date_time: '2022-12-12 12:12:12',
                src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F811%2F041914135038%2F140419135038-3-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665124955&t=6431d1056cecc2b6fb344296d76e1d70',
            }
        ],

        // 0 = 非打开，1 = 图片 Gaiiary, 2 = 新增用户添加 MODAL
        MODAL: 0,

        // 0 = 非打开，1 = 聊天用户详情面板
        PANNER: 0, 
        // 0 = 非打开，1 = 我的详情，2 = 新建聊天
        PANNER_LEFT: 0,
    }
}