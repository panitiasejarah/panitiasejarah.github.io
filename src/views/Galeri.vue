<template>
  <div>
    <Header title="Galeri" desc="Gambar Kenangan Panitia Sejarah"/>

    <div class="container content">
      <div class="p-3">
        <!-- title -->
        <div class="pt-4 pb-3">
          <h5>Bilik Panitia Sejarah</h5>
          <hr>
        </div>

        <div class="p-2">
          <img src="../assets/galeri/sample_image.jpg" class="img-fluid" alt="Gambar Sample">
        </div>

        <!-- title -->
        <div class="pt-3 pb-3">
          <h5>Bilik Panitia Sejarah</h5>
          <hr>
        </div>

        <div class="row">
          <img src="../assets/galeri/sample_image.jpg" class="img-thumbnail mx-auto" style="max-width: 400px; height: auto;" alt="Gambar Sample">
          <img src="../assets/galeri/sample_image.jpg" class="img-thumbnail mx-auto" style="max-width: 400px; height: auto;" alt="Gambar Sample">
          <img src="../assets/galeri/sample_image.jpg" class="img-thumbnail mx-auto" style="max-width: 400px; height: auto;" alt="Gambar Sample">
          <img src="../assets/galeri/sample_image.jpg" class="img-thumbnail mx-auto" style="max-width: 400px; height: auto;" alt="Gambar Sample">
          <img src="../assets/galeri/sample_image.jpg" class="img-thumbnail mx-auto" style="max-width: 400px; height: auto;" alt="Gambar Sample">
          <img src="../assets/galeri/sample_image.jpg" class="img-thumbnail mx-auto" style="max-width: 400px; height: auto;" alt="Gambar Sample">
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style scoped>
.content {
  min-height: 50vh;
}
</style>