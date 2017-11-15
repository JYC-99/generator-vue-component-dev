<template>
  <div>
    <h3><%= packageName %> placeholder</h3>
    <span>{{ message }}</span>
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
