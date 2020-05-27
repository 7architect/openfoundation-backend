<template>
  <button :disabled="_disabled" :class="['button', colorClasses]">
    <slot />
    <span class="button__timer" v-if="timer > 0">({{ timer }})</span>
  </button>
</template>

<script>
  export default {
    name: "o-button",
    props: {
      color: {
        type: String,
        required: false
      },
      disabled: {
        default: false
      }
    },
    data() {
      return {
        timer: false
      }
    },
    mounted() {
      this.$root.$on('app:shown', () => {
        if (Number.isInteger(this.disabled)) this.startTimer()
      })
    },
    methods: {
      startTimer() {
        this.timer = this.disabled

        const timeout = setInterval(() => this.timer -= 1, 1000)

        setTimeout(() => clearInterval(timeout), this.timer * 1000)
      }
    },
     computed: {
      _disabled() {
        if (Number.isInteger(this.disabled)) return this.timer > 0

        return Boolean(this.disabled)
      },
      colorClasses() {
        return {
          'button--color-red': this.color === 'red',
          'button--disabled': this._disabled
        }
      }
    }
  }
</script>

<style scoped>
  .button {
    border-radius: 4px;
    border: 1px solid transparent;
    background-clip: border-box!important;
    background-origin: border-box!important;
    background-image: linear-gradient(135deg,#8fbbff,#297eff);
    outline: none;
    color: #ffffff;
    padding: .3rem 1rem;
    font-weight: 300;
    font-family: inherit;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: lowercase;
    transition-property: opacity, transform;
    transition: .1s ease;
    cursor: pointer;
  }
  .button:active:not(.button--disabled) {
    background-image: linear-gradient(135deg,#91b7f3,#206de2);
  }
  .button:not(:last-of-type) {
    margin-right: .5rem;
  }
  .button--color-red {
    background-image: linear-gradient(135deg,#ff8fbe,#ff2929);
  }
  .button--color-red:active:not(.button--disabled) {
    background-image: linear-gradient(135deg,#ec83b0,#de2323);
  }
  .button--disabled {
    opacity: .3;
  }
</style>