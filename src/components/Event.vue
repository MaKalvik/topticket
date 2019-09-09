<template>
  <div class="col-md-3 mb-4">
    <div class="card h-100" @click="clickMethod(id)">
      <img class="card-img-top" :src="image" alt="image alt">
      <div class="card-body d-flex flex-column">
        <p class="card-text"><strong>Kirjeldus:</strong> {{ title }} </p>
        <!--        <div v-html="place"></div>-->
        <div class="mt-auto">
          <p class="card-text align-self-end"><strong>Asukoht:</strong> {{ place }} </p>
        </div>
      </div>
      <div class="card-footer">
        <h5><strong>Hind:</strong> {{ price }}&euro; </h5>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Event",
    props: {
      id: String,
      image: String,
      description: String,
      place: String,
      price: Number,
      title: String
    },
    methods: {
      clickMethod(id) {
        this.$router.push('product/' + id)
      }
    }
  }
</script>

<style scoped>
  .card:hover {
    cursor: pointer;
  }

  img {
    width: 100%;
    height: auto;
  }
</style>
