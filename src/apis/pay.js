import request from '@/utils/http'

export const getOrderAPI = (id)=>{
    return request({
        //模板字符串
        url: `/member/order/${id}`
    })
}