import Vue from 'vue'

Vue.component(
  'o-layout',
  require('./layout.vue').default
)

Vue.component(
  'o-card',
  require('./card.vue').default
)

Vue.component(
  'o-button',
  require('./button.vue').default
)

Vue.component(
  'o-text-heading',
  require('./text.vue/heading.vue').default
)

Vue.component(
  'o-text-mark',
  require('./text.vue/mark.vue').default
)

Vue.component(
  'o-list',
  require('./list.vue/list.vue').default
)

Vue.component(
  'o-list-item',
  require('./list.vue/item.vue').default
)

Vue.component(
  'o-tip',
  require('./tip.vue').default
)

Vue.component(
  'o-row',
  require('./row.vue').default
)

Vue.component(
  'o-avatar',
  require('./avatar.vue').default
)

Vue.component(
  'o-container',
  require('./container.vue').default
)

const app = new Vue({
  mode: 'development',
  mounted() {
    setTimeout(() => this.showLayout(), 1000)
  },
  methods: {
    showLayout() {
      const layout = this.$refs.layout.$el
      layout.style.opacity = 1

      this.$root.$emit('app:shown')
    }
  },
  delimiters: ['[[', ']]'],
}).$mount('#app')

window.Vue = app