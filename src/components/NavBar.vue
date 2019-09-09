<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="navbar-frame">
    <div class="container">
      <a class="navbar-brand navbar--brand--clickable hover--style"  @click="toLanding">TopTicket</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
              aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link hover--style" @click="toLanding">Piletid</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Uudised</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Muudatused</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Korraldajale</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">KKK</a>
          </li>
          <li class="nav-item icon--style hover--style" @click="toCart">
            <font-awesome-icon icon="shopping-cart"/>
<!--            <a class="nav-link fa fa-shopping-cart clickable-icon" @click="toCart"></a>-->
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "NavBar",
      methods: {
          toCart() {
            this.$router.push('/cart')
          },
        toLanding() {
            this.$router.push('/')
        }
      }
    }
</script>

<style scoped>
  li.icon--style {
    margin-top: 8px;
  }

  li.icon--style:hover {
    color: grey;
  }

  a.navbar--brand--clickable {
    color: lightgrey;
  }

  .hover--style {
    cursor: pointer;
  }
  

</style>
