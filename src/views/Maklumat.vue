<template>
  <div>
    <Header title="Maklumat" desc="Maklumat Tentang Kami"/>

    <div class="bg-light">
      <div class="bg-light container content">
          <div class="pt-4">
            <h5>Carta Organisasi Panitia Sejarah</h5>
            <hr>
            <CarouselOrganisasi />
          </div>
      </div>
    </div>

    <div>
      <div class="container content">
          <div class="pt-4 pb-5">
            <h5>Mengenai Kami</h5>
            <hr>
            <div class="text-center info-font">
              <p class="font-weight-bold text-primary pt-4"><i class="fas fa-map-marked-alt"></i> Lokasi</p>
              Lot 185 <br>
              Kampung Kubang Bemban <br>
              Pasir Mas <br>
              Kelantan <br>

              <p class="font-weight-bold text-primary pt-4"><i class="fas fa-phone"></i> No Telefon Dan Faks</p>
              131313113 <br>
              313131313131 <br>

              <p class="font-weight-bold text-primary pt-4"><i class="fas fa-envelope"></i> Email</p>
              panitiasejarah@gmail.com
            </div>
          </div>
      </div>
    </div>

    <div>
      <div>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1409.3192830363625!2d101.8576154100083!3d2.454820947746265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdf70e519b0ca3%3A0xb29ee4817f131824!2sSK%20Telok%20Kemang!5e0!3m2!1sen!2smy!4v1615295118684!5m2!1sen!2smy" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import CarouselOrganisasi from '@/components/CarouselOrganisasi.vue'

export default {
  components: {
    Header,
    Footer,
    CarouselOrganisasi,
  },
}
</script>

<style scoped>
.content {
  min-height: 50vh;
}

.info-font {
  font-size: 20px;
}
</style>