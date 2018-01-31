var VideoListEntryView = Backbone.View.extend({
  // properties
  el: '.video-list',
  template: templateURL('src/templates/videoListEntry.html'),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    console.log(this.model.attributes);
    return this;
  }
});






