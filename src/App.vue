<template>
<nav class="navbar sticky-top navbar-expand-lg shadow-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Panitia Sejarah</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
          <router-link class="nav-link text-dark" to="/">Utama</router-link>
      </li>
      <li class="nav-item">
          <router-link class="nav-link text-dark" to="/galeri">Galeri</router-link>
      </li>
      <li class="nav-item">
          <router-link class="nav-link text-dark" to="/subjek">Subjek</router-link>
      </li>
      <li>
          <router-link class="nav-link text-dark" to="/maklumat-kami">Maklumat</router-link>
      </li>
    </ul>
  </div>
</nav>
<router-view/>
</template>

<style>
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.navbar a.router-link-exact-active {
  font-weight: bold;
}
</style>
