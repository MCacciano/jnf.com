const twitch = require('./src/axios/twitch')
const crypto = require('crypto')

exports.createPages = async ({ actions: { createPage } }) => {
  const { data: twitchVideos } = await twitch.get('/videos', {
    params: { user_id: '63801297' },
  })

  // videos index page
  createPage({
    path: `/videos`,
    component: require.resolve('./src/templates/twitchVideos'),
    context: { twitchVideos },
  })

  twitchVideos.data.map((video, i) => {
    // create detail page for each video
    createPage({
      path: `/videos/${video.id}`,
      component: require.resolve('./src/templates/twitchVideos/videoDetail.js'),
      context: { video },
    })
  })
}
