<template>
  <div class="layout-wrapper">
    <Header />
    
    <main>
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'MainLayout',
  components: {
    Header,
    Footer
  }
}
</script>