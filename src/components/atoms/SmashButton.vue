<template>
  <button :class="classes" :disabled="disabled" type="button" @click="handleClick">
    <slot />
  </button>
</template>
<script>
export default {
  name: 'SmashButton',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      const clazz = this.type === 'text' ? ('-' + this.type) : ''
      return [`smash-button${clazz}`]
    }
  },
  methods: {
    handleClick (ev) {
      this.$emit('click', ev)
    }
  }
}
</script>
<style scoped>
  smash-botton {
    padding: .6em 1.3em;
  }
  smash-botton-text {
    padding: .6em 1.3em;
  }
</style>
