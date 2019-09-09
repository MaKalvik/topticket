<template>

  <div class="container">
    <div class="row mt-5" v-for="data in myJson" v-if="data.id===$route.params.id">
      <div class="col-md-5">
        <img class="mr-4"
             :src="data.image">
      </div>
      <div class="col-md-7">
        <div>
          <h2>{{ data.title }}</h2>
          <p><strong>{{ data.time }}</strong></p>
          <p><strong>{{ data.place }}</strong></p>
          <p><strong>Kirjeldus: </strong>{{ data.description }}"</p>
        </div>
        <div>
          <p><strong>Hind: </strong>{{ data.price }}&euro;</p>
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <button @click="addToCart" class="btn btn-block btn-success">Lisa korvi</button>
            </div>
            <div class="col-sm-12 col-md-6">
              <a @click="toLanding" class="btn btn-block btn-light">Tagasi</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-md-7 offset-5">
        <div v-if="!isHidden" class="alert alert-success alert-dismissible fade show" role="alert" style="width: 100%">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            <span class="sr-only">Close</span>
          </button>
          <strong>Toode lisatud korvi</strong>
        </div>
      </div>
    </div>





  </div>
</template>

<script>

  import json from '../json/data.json'
  import {cartItems} from "../cartItems";


  export default {
    name: "Product",

    data() {
      return {
        isHidden: true,
        myJson: json,
      }
    },
    methods: {
      clickMethod() {
        this.$router.push('/cart')
      },
      toLanding() {
        this.$router.push('/')
      },
      addToCart: function() {
        if (cartItems.includes(json[this.$route.params.id])) {
          alert("already in cart")
        } else {
          cartItems.push(json[this.$route.params.id]);
          this.isHidden = false
        }
      }

    }
  }
</script>

<style scoped>

  img {
    width: 100%;
    height: 100%;
  }
</style>
