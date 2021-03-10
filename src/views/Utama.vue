<template>
<div class="homepage-header">
  <div class="mx-auto text-center" style="padding-top: 14vh;">
    <h1 class="font-weight-bold">Selamat Datang <br> Ke Website Panitia Sejarah</h1>
    <h3>SK Teluk Kemang</h3>
    <div class="pt-3">
      <router-link class="nav-link text-dark" to="/maklumat-kami"><button class="btn btn-primary">Ketahui Selanjutnya</button></router-link>
      
    </div>
  </div>
</div>

<Card />

<Carousel />

<div>
  <div class="p-5">
      <h2 class="text-center font-weight-bold">Perihal Sejarah</h2>
  </div>
  <div class="container text-center">
    <p class="text-maksud-sejarah">
      Menurut Wikipedia, iaitu ensiklopedia bebas, 
      Sejarah (سجاره) bermaksud "menyiasat/inkuiri, ilmu yang diperolehi melalui 
      pekara penyiasatan adalah penemuan, pengumpulan, pengurusan, dan persembahan 
      maklumat terhadap peristiwa silam atau lampau.Ia juga bermaksud tempoh masa yang lalu 
      selepas catatan penulisan telah dicipta. Ilmuwan yang menulis mengenai sejarah dipanggil 
      sejarawan. Ia juga adalah satu medan penyelidikan yang menggunakan suatu naratif atau pengisahan 
      untuk memeriksa dan menganalisa turutan peristiwa, dan kadangkala ia cuba untuk menyiasat secara 
      objektif corak-corak sebab dan akibat yang menilai peristiwa-peristiwa
    </p>
    <img src="@/assets/tugu_negara.png" alt="" style="width: 70%">
  </div>
</div>
<Footer />
</template>

<script>
import Card from '@/components/Card.vue'
import Carousel from '@/components/Carousel.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Card,
    Footer,
    Carousel,
  }
}
</script>

<style scoped>
.homepage-header {
  width: 100%;
  height: 50vh;
  background-image: url('../assets/banner_image.jpg');
  background-color: black;
  background-repeat: no-repeat;
  background-position: 50% 30%;
  background-size: 100% auto;
  text-align: center;
  text-shadow: 2px 2px 6px black;
  color: white;
}

.text-maksud-sejarah {
  font-size: 21px;
}
</style>