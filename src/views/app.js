var AppView = Backbone.View.extend({
  el: '#app',
  template: templateURL('src/templates/app.html'),
  collection: new Videos(exampleVideoData),
  initialize: function() {
    //this.videos = new Videos(exampleVideoData);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    this.search = new SearchView({
    	el: this.$el.html('.search'),
    	collection: this.collection
    }).render();
    this.videoList = new VideoListView({
    	el: this.$el.html('.videoList'),
    	collection: this.collection
    }).render();
    this.videoPlayer = new VideoPlayerView({
    	el: this.$el.html('.videoPlayer'),
    	collection: this.collection
    }).render();
    return this;
  },
});
