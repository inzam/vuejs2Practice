<template>
  <div>
   <h1>{{ title }}</h1>
   <p>{{ greeting() }}</p>
  </div>
</template>

<script>
export default {
  
  data () {
    return {
      title: "Woo!"
    }
  },
  methods: {
    greeting: function(){
      return 'Heeeeey fucker!!!';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
