<template>
  <div class="o-avatar">
    {{ letter }}
  </div>
</template>

<script>
export default {
  name: 'o-avatar',
  props: {
    name: String
  },
  computed: {
    letter() {
      return this.name ? this.name[0] : ''
    }
  }
}
</script>

<style scoped>
  .o-avatar {
    background: rgba(0, 0, 0, .05);
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    box-shadow: 0 0 0 4px white;
  }
</style>