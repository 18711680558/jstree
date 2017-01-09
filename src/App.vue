<template>
  <div id="app">
    <h1>{{ msg }}</h1>
  </div>
  <validator></validator>
</template>

<script>
import $ from 'jquery'
import validator from './validator.js'
export default {
  data () {
    return {
      msg: 'Hello, Vue!'
    }
  },

  ready () {
    $('h1', this.$el).css({color : 'blue'})
  },

  components : {
    validator
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
