<script>
  export default {
    name: 'o-heading',
    props: {
      level: {
        type: Number,
        default: 1
      }
    },
    render(h, ctx) {
      return h(`h${this.level}`, { staticClass: 'heading' }, this.$slots.default)
    }
  }
</script>

<style scoped>
  .heading {
    margin-bottom: 1rem;
    font-size: 1.3rem;
    font-weight: 300;
  }
</style>