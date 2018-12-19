<template>
  <div>
    <h3><%= packageName %> placeholder</h3>
    <span>{{ message }}</span>
    <input v-model="message">
  </div>
</template>

<script>
/**
 * @vue The root component.
 */
export default {
  data() {
    return {
      message: 'hello world!',
    };
  },
};
</script>
