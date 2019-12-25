export default function ({ store, redirect, app: { $axios } }) {
  // 数据访问前缀
  $axios.defaults.baseURL = 'http://127.0.0.1:8185/api/'
}
