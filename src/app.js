var Vue = require('vue');
Vue.use(require('vue-resource'));
new Vue({
  el: "#root",
  components: {
    'cerv-table': require('./components/cervTable')
  }
});
