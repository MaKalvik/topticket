<template>
  <div class="container mb-4">
    <div class="row">
      <div class="col-12">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Event</th>
              <th scope="col">Where</th>
              <th scope="col">When</th>
              <th scope="col" class="text-center">Quantity</th>
              <th scope="col" class="text-right">Price</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <cart-content v-for="data in items"
                          v-bind:key="data.id"
                          v-bind:id="data.id"
                          v-bind:image="data.image"
                          v-bind:title="data.title"
                          v-bind:place="data.place"
                          v-bind:time="data.time"
                          v-bind:price="data.price"></cart-content>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td class="text-right"><strong>Total:</strong></td>
              <td class="text-right"><strong>100&euro;</strong></td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col mb-2">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <a @click="toLanding" class="btn btn-block btn-light">Avaleht</a>
          </div>
          <div class="col-sm-12 col-md-6">
            <a @click="toCheckout" class="btn btn-block btn-success">Checkout</a>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>

  import {cartItems} from "../cartItems";
  import CartContent from "./CartContent";

  export default {
    name: "Cart",
    components: {CartContent},
    data() {
      return {
        items: cartItems,
      }
    },
    methods: {
      toCheckout() {
        this.$router.push('/checkout')
      },
      toLanding() {
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>

  a:hover {
    cursor: pointer;
  }
</style>
