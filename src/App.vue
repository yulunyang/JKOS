<template>
  <div id="app">
      <vue-page-transition name="fade">
        <router-view></router-view>
      </vue-page-transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
    }
  },
  watch: {
  },
  components: {
  },
  computed: {
  },
  created: function () {
  },
  mounted: function () {
  },
  methods: {
  }
}

</script>
<style lang="scss">
  body {
    margin: 0;
    padding: 0;
  }
  #app {
    max-width: 1366px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
  }
</style>
