<template>
  <button class="button"> {{ title }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    title: {
      type: String,
      default: 'Кнопка'
    },
    styles: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>