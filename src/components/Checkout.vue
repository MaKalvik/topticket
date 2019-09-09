<template>
  <div class="container">
    <div class="col-md-6 mt-4">
      <div class="card w-100">
        <div class="card-body">
          <div class="form-group">
            <strong>Eesnimi:</strong>
            <input type="text" name="first_name" class="form-control" value="">
          </div>
          <div class="form-group">
            <strong>Perekonnanimi:</strong>
            <input type="text" name="last_name" class="form-control" value="">
          </div>
          <div class="form-group">
            <div><strong>Telefoninumber:</strong></div>
            <div><input type="text" name="phone_number" class="form-control" value=""/></div>
          </div>
          <div class="form-group">
            <div><strong>Email:</strong></div>
            <div><input type="text" name="email_address" class="form-control" value=""/></div>
          </div>

          <h4><strong>Maksemeetod: </strong></h4>
          <div class="row mt-3">
            <div class="col col-md-3">
              <a @click="toCompleted" class="btn btn-block btn-outline-dark">SEB</a>
            </div>
            <div class="col col-md-3">
              <a @click="toCompleted" class="btn btn-block btn-outline-dark">Swedbank</a>
            </div>
            <div class="col col-md-3">
              <a @click="toCompleted" class="btn btn-block btn-outline-dark">LHV</a>
            </div>
            <div class="col col-md-3">
              <a @click="toCompleted" class="btn btn-block btn-outline-dark">PayPal?</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col col-md-5">
        <a @click="toLanding" class="btn btn-block btn-light mt-4">Avaleht</a>
      </div>
    </div>
  </div>
</template>

<script>

  import {cartItems} from "../cartItems";

  export default {
    name: "Checkout",
    methods: {
      toCompleted() {
        this.$router.push('completed');
        cartItems.length = 0
      },
      toLanding() {
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>

</style>
