var VideoPlayerView = Backbone.View.extend({

  el: '.player',
  template: templateURL('src/templates/videoPlayer.html'),

  initialize: function() {
  	this.render();
  },

  render: function() {
    //this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
