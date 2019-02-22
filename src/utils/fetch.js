import axios from 'axios'
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(res => {
  const { code, data, msg } = res.data
  if (parseInt(code, 10) != 200) {
    // 失败 需要添加提示
    return Promise.reject(res)
  }
  return data
}, err => {
  return Promise.reject(err)
})

export default axios
