var VideoListView = Backbone.View.extend({

	el: '.list',
  template: templateURL('src/templates/videoList.html'),

  initialize: function() {
  	this.render();
  console.log(this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    return this;
  }


});

