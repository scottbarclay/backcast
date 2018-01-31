var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
    this.set('title', video.snippet.title);
    this.set('description', video.snippet.description);
    this.set('thumbnails', video.snippet.thumbnails.default.url);
  },

  select: function() {
    this.trigger('select', this);
  }

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

