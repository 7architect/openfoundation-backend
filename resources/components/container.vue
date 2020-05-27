<template functional>
  <div class="o-container">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'o-container'
  }
</script>

<style scoped>
  .o-container {
    padding: 1rem 2rem;
  }
</style>