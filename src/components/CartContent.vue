<template>
  <tr>
    <td><img class="cart" :src="image"/>
    </td>
    <td class="align-middle">{{ title }}</td>
    <td class="align-middle">{{ place }}</td>
    <td class="align-middle">{{ time }}</td>
    <td class="align-middle"><input v-model="quantity.default" placeholder="1"/></td>
    <td class="text-right align-middle"> {{multiply().price}}&euro;</td>
    <td class="text-right align-middle">
      <button @click="deleteEvent" class="btn btn-sm btn-danger">
        <font-awesome-icon icon="trash"/>
      </button>
    </td>
  </tr>
</template>

<script>

  import {cartItems} from "../cartItems";

  export default {
    name: "CartContent",
    data() {
      return {
        quantity: {
          default: 1,
          type: Number
        },
      }
    },
    props: {
      id: String,
      image: String,
      description: String,
      title: String,
      time: String,
      place: String,
      price: Number

    },
    methods: {
      multiply() {
        return {
          price: this.quantity.default * this.price
        }
      },
      deleteEvent() {
        console.log(this.id);
        for (let i = 0; i < cartItems.length; i++) {
          if (cartItems[i].id === this.id) {
            cartItems.splice(i, 1)
          }
        }
      }
      // addPrice: function () {
      //   totalPrice += this.multiply().price
      // }
    }
  }
</script>

<style scoped>
  img {
    width: 80px;
    height: 100%;
  }
</style>
