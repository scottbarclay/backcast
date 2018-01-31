var VideoListEntryView = Backbone.View.extend({
  // properties
  el: '.video-list',
  template: templateURL('src/templates/videoListEntry.html'),

  initialize: function() {
    this.render();
  },

  render: function() {
  	//console.log(this.model);
    this.$el.html(this.template(this.attributes));
    return this;
  }
});






