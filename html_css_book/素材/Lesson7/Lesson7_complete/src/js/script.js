var LightBox = window.Lightbox.default;
Vue.use(VueLazyload);
Vue.component('light-box', LightBox);
Vue.use(VueMasonry);

// JSONファイル
var JSON_FILE = './json/photos.json';

// 表示件数
var VIEW_LIMIT = 9;

var app = new Vue({
  el: '#main',
  data: {
    filter: 'all',
    photos: [],
    photoCount: VIEW_LIMIT,
  },
  created: function() {
    window.addEventListener('scroll', this.handleScroll);
  },
  mounted: function() {
    var self = this;
    axios.get(JSON_FILE)
      .then(function(response) {
        self.photos = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    updateFilter: function(filterName) {
      this.photoCount = VIEW_LIMIT;
      this.filter = filterName;
    },
    handleScroll: function() {
      var scrollHeight = window.scrollY;
      var maxHeight = window.document.body.scrollHeight - window.document.documentElement.clientHeight;

      if (scrollHeight >= maxHeight - 200) {
        this.photoCount += VIEW_LIMIT;
      }
    },
    openPhoto: function(index) {
      this.$refs.lightbox.showImage(index);
    },
  },
  computed: {
    filteredPhotos: function() {
      var filter = this.filter;
      if (filter === 'all') {
        return this.photos.slice(0, this.photoCount);
      } else {
        var photos = this.photos.filter(function(photo) {
            return filter === photo.category;
          });
        return photos.slice(0, this.photoCount);
      }
    }
  },
});