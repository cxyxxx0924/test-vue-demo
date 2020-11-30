export default store => {
  if (localStorage) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.name === 'admin') {
      store.commit('user/login', user.name);
    }
  }

  store.subscribe((mutation, state) => {
    if (mutation.type.startsWith('user/')) {
      localStorage.setItem('user', JSON.stringify(state.user))
    } else if (mutation.type === 'user/logout') {
      localStorage.removeItem('user')
    }
  })
}