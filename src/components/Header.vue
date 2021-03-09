<template>
  <div class="pt-5 pb-5 bg-primary banner-header">
    <div class="pt-5 pb-5 text-center">
      <h1 class="font-weight-bold">{{ title }}</h1>
      <p class="font-weight-bold">{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    desc: String
  }
}
</script>

<style scoped>
.banner-header {
  background-image: url('../assets/banner_header.jpg');
  background-position: 50% 10%;
}
</style>