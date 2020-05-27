<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
  .card {
    min-width: 320px;
    padding: 2rem;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 10px 30px -16px rgba(9, 9, 16, .2);
  }

  @media screen and (max-width: 400px) {
    .card {
      box-shadow: none;
      background: none;
    }
  }
</style>

<script>
export default {
  name: 'o-card',
}
</script>