<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data: () => ({
    location: null
  }),

  created() {
    this.axios
      .get('https://weather-server.n2ptune.vercel.app/api/weather')
      .then(result => {
        console.log(result.data)
      })
  },

  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.location = position
          console.log(this.location)
        },
        error => {
          console.log(error)
        }
      )
    }
  }
}
</script>
