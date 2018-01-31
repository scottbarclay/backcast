var AppView = Backbone.View.extend({
	// set the element in index.html where the view will be added
  el: '#app',
  // the bit of html that will be plugged in to index.html at el (above)
  template: templateURL('src/templates/app.html'),
  // the collection of models created from the data (exampleVideoData)
  //collection: new Videos(),

  // initialize is called by Backbone
  initialize: function() {
  	this.videos = new Videos();
  	// call render to paint the page
    this.render();
  },

  // will paint the components invoked
  render: function() {
  	// connects the template with the #app div on index.html (el above)
    this.$el.html(this.template());
    // invoke new components
    // new SearchView();
    new VideoListView({

    	collection: this.videos});
    //new VideoPlayerView();
    // // return the AppView
    return this;
  }
});
