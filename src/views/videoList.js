var VideoListView = Backbone.View.extend({

	el: '.list',
  template: templateURL('src/templates/videoList.html'),

  initialize: function() {
  	this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    for (var i = 0; i < this.collection.length; i++) {
   	  new VideoListEntryView(this.collection[i]);
    }
    return this;
  }




});

    // new VideoListEntry({
    // 	collection: this.videos
    // });
