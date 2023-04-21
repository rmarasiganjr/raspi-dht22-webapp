<template>
  <div>
    <h1>Raspi DHT22 Temperature Reading</h1>
    <h2>Temperature: {{ temperature }}</h2>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return { temperature: 0 };
  },
  methods: {
    fetchDataFromAPI() {
      axios
        .get('http://192.168.50.77:5000/api/temperature/view')
        .then((response) => {
          this.temperature = response.data.reverse()[0].temperature;
          console.log(this.temperature);
        });
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.fetchDataFromAPI();
    }, 2000);
  },
};
</script>

<style></style>
