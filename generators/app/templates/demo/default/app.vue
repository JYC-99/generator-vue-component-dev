<template>
  <div>
    <h3><%= exportName %> - default demo</h3>
    <child />
  </div>
</template>

<script>
import <%= exportName %> from '<%= packageName %>'; // eslint-disable-line

export default {
  components: {
    child: <%= exportName %>,
  },
};
</script>

