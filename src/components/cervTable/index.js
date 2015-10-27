var store = {
  cervejarias: [],
  openDetails: []
};

module.exports = {
  data: function () {
      return store;
  },
  methods: {
    doOpenDetails: function(id) {
      var self = this,
      index = store.openDetails.indexOf(id);
      if(index > -1) {
        store.openDetails.$remove(id);
      } else {
        store.openDetails.push(id);
      }

    }
  },
  ready: function() {
    var self = this;
    self.$http.get('https://raw.githubusercontent.com/vitorarjol/vue-series/master/cervejarias.json', function(response) {
      store.cervejarias = response;
    });
  },
  template: require('./template.html'),
  props: ['cervejarias']
};
