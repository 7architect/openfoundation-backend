<template functional>
  <div class="o-list__item">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'o-list-item'
}
</script>

<style scoped>
  .o-list__item {
    font-weight: 200;
    font-size: .9rem;
    padding-bottom: .5rem;
  }
  .o-list__item:before {
    content: "—";
    transform: scaleY(0.3);
    display: inline-block;
    margin-right: .3rem;
  }
</style>