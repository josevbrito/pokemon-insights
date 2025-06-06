<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Page Not Found</p>
    <router-link to="/">Go back to Home</router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 5rem;
}
h1 {
  font-size: 6rem;
  color: #ef5350;
}
p {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
a {
  color: #ef5350;
  text-decoration: underline;
}
</style>
