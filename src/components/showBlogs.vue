<template>
  <div v-theme:column="'wide'" id="show-blogs">
    <h1>All Blog Article</h1>
    <div v-for="blog in blogs" class="single-blog">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
        <article>{{blog.body|snippet}}</article>
    </div>
  </div>
</template>

<script>


export default {
  components:{
    
  },
  data (){
    return{
        blogs:[]
    }
  },
  methods:{

  },
  created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
          this.blogs = data.body.slice(0,10);
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 0 auto;
    box-sizing: border-box;
    background: #eee;
}
</style>
