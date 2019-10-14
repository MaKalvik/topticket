<template>
  <div id="app">
    <NavBar></NavBar>
    <transition appear name="router-anim" mode="out-in" leave-active-class="animated zoomOutLeft"
                enter-active-class="animated zoomInRight">
      <router-view/>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
    import NavBar from "./components/NavBar";
    import Footer from "./components/Footer";

    export default {

        name: 'App',

        components: {
            'NavBar': NavBar,
            'Footer': Footer
        }
    }
</script>

<style>
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

  body {
    padding-top: 50px;
  }
</style>
