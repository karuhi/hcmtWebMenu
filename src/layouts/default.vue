<template>
  <div>
    <nuxt />
  </div>
</template>
<script>
export default {
  head() {
    return {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/cirrus-ui@0.5.4/dist/cirrus.min.css' },
        { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.9.0/css/all.css'}
      ]
    }
  },
}

</script>
<style>
html {
  font-family: "Nunito Sans", -apple-system, BlinkMacSystemFont, Avenir, "Avenir Next", "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

</style>
