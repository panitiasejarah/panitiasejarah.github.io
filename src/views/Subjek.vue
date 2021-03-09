<template>
  <div>
    <Header title="Sejarah" desc="Informasi Subjek Sejarah"/>

    <div class="container content">
      <!-- rujukan asas -->
      <div class="p-3">
        <h5 class="pt-3 pb-3">Sumber Rujukan Utama</h5>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Tajuk</th>
              <th scope="col">Tahap</th>
              <th scope="col">Link</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in rujukan_asas" :key="item.link">
              <th scope="row">{{ item.id }}</th>
              <td>{{ item.tajuk }}</td>
              <td>{{ item.tahap }}</td>
              <td><a :href="item.link" target="_blank"><i class="fas fa-external-link-alt"></i></a></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- rujukan tambahan -->
      <div class="p-3">
        <h5 class="pt-3 pb-3">Sumber Rujukan Tambahan</h5>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Tajuk</th>
              <th scope="col">Tahap</th>
              <th scope="col">Link</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in rujukan_asas" :key="item.link">
              <th scope="row">{{ item.id }}</th>
              <td>{{ item.tajuk }}</td>
              <td>{{ item.tahap }}</td>
              <td><a :href="item.link" target="_blank"><i class="fas fa-external-link-alt"></i></a></td>
            </tr>
          </tbody>
        </table>
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
  data () {
    return {
      rujukan_asas : [
        {
          id : 1,
          tajuk : "Buku Teks Tahun 4",
          tahap : "Tahap 4",
          link : "https://www.youtube.com",
        },
        {
          id : 2,
          tajuk : "Buku Teks Tahun 5",
          tahap : "Tahap 5",
          link : "https://www.youtube.com",
        },
        {
          id : 3,
          tajuk : "Buku Teks Tahun 6",
          tahap : "Tahap 6",
          link : "https://www.youtube.com",
        },
        {
          id : 4,
          tajuk : "Buku Teks Tahun 1",
          tahap : "Tahap 1",
          link : "https://www.youtube.com",
        },
      ],
      rujukan_tambahan : [
        {
          id : 1,
          tajuk : "Buku Teks Tahun 4",
          tahap : "Tahap 4",
          link : "https://www.youtube.com",
        },
        {
          id : 2,
          tajuk : "Buku Teks Tahun 5",
          tahap : "Tahap 5",
          link : "https://www.youtube.com",
        },
        {
          id : 3,
          tajuk : "Buku Teks Tahun 6",
          tahap : "Tahap 6",
          link : "https://www.youtube.com",
        },
        {
          id : 4,
          tajuk : "Buku Teks Tahun 1",
          tahap : "Tahap 1",
          link : "https://www.youtube.com",
        },
      ]
    }
  }
}
</script>

<style scoped>
.content {
  min-height: 50vh;
}
</style>