var VideoListEntryView = Backbone.View.extend({
  // properties
  

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    console.log(this.model.attributes);
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});






// <!-- {
//     etag: 'ujBKBmLk',
//     id: {
//       videoId: '000003'
//     },
//     snippet: {
//       title: 'Hack Reactor opens extension school on Mars',
//       description: 'Watch the ribbon cutting of the first coding bootcamp in space',
//       thumbnails: {
//         default: {
//           url: 'https://d3c5s1hmka2e2b.cloudfront.net/uploads/topic/image/14/hack_reactor.png',
//         }
//       }
//     }
//   } -->
