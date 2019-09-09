<template>
  <div class="container mt-5">
    <p>Aitäh ostu sooritamise eest. Pilet saadetakse meilile</p>
    <p>Pileti saab ka alla laadida siit: <a href="#">pilet.pdf</a></p><br>

    <div class="col col-md-2 btn btn-block btn-light">
      <a @click="clickMethod">Avaleht</a>
    </div>

    <div>
      <i class="fa fa-trash" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Completed",
      methods: {
          clickMethod() {
            this.$router.push('/')
          }
      }
    }
</script>

<style scoped>

</style>
