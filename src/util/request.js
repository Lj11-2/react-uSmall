import axios from 'axios'
import qs from 'qs'

axios.interceptors.response.use(res => {
    console.log(res)
    return res
})

//会员登录
export const login = (params) => {
    return axios({
        url: '/api/login',
        method: 'post',
        data: qs.stringify(params)
    })
}
//会员注册
export const res = (params) => {
    return axios({
        url: '/api/register',
        method: 'post',
        data: qs.stringify(params)
    })
}