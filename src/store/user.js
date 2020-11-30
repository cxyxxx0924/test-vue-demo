export default {
  namespaced: true,
  state: {
    isLogin: false,
    username: ''
  },
  mutations: {
    login(state, username) {
      state.isLogin = true;
      state.username = username;
    },
    logout(state) {
      state.isLogin = false;
    }
  },
  getters: {
    welcome: state => {
      return state.username + ' welcome back!';
    }
  },
  actions: {
    userLogin({ commit }, username) {
      console.log(`username: ${username}`);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username === 'admin') {
            commit('login', username);
            resolve();
          } else {
            reject();
          }
        }, 1000);
      });
    },
    userLogout({ commit }) {
      console.log(`user logout`);
      return new Promise(resolve => {
        setTimeout(() => {
          commit('logout');
          resolve();
        }, 1000);
      })
    }
  },
}