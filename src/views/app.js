var AppView = Backbone.View.extend({
  el: '#app',
  template: templateURL('src/templates/app.html'),
  collection: new Videos(exampleVideoData),
  initialize: function() {
<<<<<<< HEAD
    //this.videos = new Videos(exampleVideoData);
=======
    //collection of videos
    this.videos = new Videos();
>>>>>>> 8acd4f5ca589498bd2cb05ef7fbb6d38c83cbe95
    this.render();
  },

  render: function() {
    //this is the html div with the id of App
    this.$el.html(this.template());
<<<<<<< HEAD
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
=======

    new VideoPlayerView().render();
    new SearchView().render();
    new VideoListView().render(); 

>>>>>>> 8acd4f5ca589498bd2cb05ef7fbb6d38c83cbe95
    return this;
  },
});
