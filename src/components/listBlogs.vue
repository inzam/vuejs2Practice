<template>
  <div v-theme:column="'wide'" id="show-blogs">
    <h1>List of Blogs</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div v-for="blog in filteredBlogs" class="single-blog">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>        
    </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchFilter';

export default {
  components:{
    
  },
  data (){
    return{
        blogs:[],
        search:''
    }
  },
  methods: {

  },
  created() {
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
          this.blogs = data.body.slice(0,10);
      })
  },
  computed: {
      
  },
  filters: {
      toUppercase(value){
          return value.toUpperCase();
      }
  },
  directives: {
      'rainbow':{
        bind(el, binding, vnode){
        el.style.color = '#'+Math.random().toString().slice(2,8);
         }
    }
  },
  mixins: [searchMixin]
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
