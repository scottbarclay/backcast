var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    //collection of videos
    this.videos = new Videos();
    this.render();
  },


  render: function() {
    //this is the html div with the id of App
    this.$el.html(this.template());

    new VideoPlayerView().render();
    new SearchView().render();
    new VideoListView().render(); 

    return this;
  },

  template: templateURL('src/templates/app.html')

});
