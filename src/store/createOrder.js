export default {
  state: {
    order: []
  },
  mutations: {
    createOrder (state, payload) {
      state.order.push(payload)
    }
  },
  actions: {
    async createOrder () {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 4000)
      })
    }
  },
  getters: {}
}
