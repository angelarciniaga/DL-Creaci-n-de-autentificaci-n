<template>
  <div>
    <div>
      <router-link to="/">Home</router-link> |
      <router-link :to="{name: 'Login'}">Login</router-link> |
      <router-link :to="{name: 'Registro'}">Registro</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">

</style>
