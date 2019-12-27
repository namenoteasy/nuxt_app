// let isMobile = false
// if (process.browser) {
//   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//     isMobile = true
//   } else {
//     isMobile = false
//   }
// }

export const state = () => ({
  isMobile: false
})

export const mutations = {
  changeClient (state, payload) {
    state.isMobile = payload
  }
}
