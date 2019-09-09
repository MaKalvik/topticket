<template>
  <div class="container">
    <div class="row mt-5 w-100">
      <event v-for="data in myJson"
             v-bind:key="data.id"
             v-bind:id="data.id"
             v-bind:image="data.image"
             v-bind:title="data.title"
             v-bind:place="data.place"
             v-bind:price="data.price"></event>
    </div>
  </div>
</template>

<script>
  import event from '../components/Event'
  import json from '../json/data.json'

  export default {
    name: 'Landing',
    data() {
      return {
        myJson: json
      }
    },
    components: {
      event
    }
  }
</script>


<style scoped>
  a.clickable-card {
    text-decoration: none;
    color: inherit;
  }
</style>
