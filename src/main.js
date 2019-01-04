import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'

Vue.use(VueResource);

//custom directives
// Vue.directive('rainbow',{
//   bind(el, binding, vnode){
//     el.style.color = '#'+Math.random().toString().slice(2,8);
//   }
// });

Vue.directive('theme',{
  bind(el, binding, vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth = "1200px";
    }
    if(binding.arg == 'column'){
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  }
})

// //filters
// Vue.filter('to-uppercase',function(value){
//   return value.toUpperCase();
// })

Vue.filter('snippet',function(value){
  return value.slice(0,100)+'..';
})

//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
