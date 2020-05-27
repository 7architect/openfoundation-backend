<template>
  <div :class="['tip', typeClasses]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'o-tip',
  props: {
    type: {
      type: String,
      default: 'info'
    }
  },

  computed: {
    typeClasses() {
      return {
        [`tip--type-${this.type}`]: true
      }
    }
  }
}
</script>

<style scoped>
  .tip {
    font-weight: 300;
    font-size: .9rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: .5rem 0;
  }
  .tip:before {
    content: "!";
    font-size: 1rem;
    border: 1px solid;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    margin-right: .5rem;
  }

  .tip--type-info {
    color: #3e7bd6;
  }
  .tip--type-error {
    color: #d63e3e;
  }
  .tip--type-error:before {
    border-radius: 4px;
  }
</style>