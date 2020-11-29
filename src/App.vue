<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/cart">Cart</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style scoped lang="scss">
$color: #42b983;
a {
  color: $color;
}
#app {
  ::v-deep a {
    color: rgb(196, 50, 140)
  }
}
</style>
