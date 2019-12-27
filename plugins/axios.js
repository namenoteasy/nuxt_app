export default function ({ store, redirect, app: { $axios } }) {
  // 数据访问前缀
  $axios.defaults.baseURL = 'http://222.84.250.158:54566'
  // 添加响应拦截器
  $axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
    return response.data
  }, function (error) {
  // 对响应错误做点什么
    return Promise.reject(error)
  })
}
