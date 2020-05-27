<template>
  <div :class="['o-row', alignClasses]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'o-row',
  props: {
    center: Boolean
  },
  computed: {
    alignClasses() {
      return {
        'o-row--flex': this.center,
        'o-row--flex-justify-center': this.center
      }
    }
  }
}
</script>

<style scoped>
  .o-row {
    margin-bottom: 1rem
  }
  .o-row--flex {
    display: flex;
  }
  .o-row--flex-justify-center {
    justify-content: center;
  }
</style>