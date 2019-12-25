import React from 'react'

export default ({
  pageContext: {
    twitchVideos: { data: videos },
  },
}) => {
  return (
    <div>
      <h2>all the videos</h2>
      <ul>
        {videos.map(video => (
          <li key={video.id}>
            <p>{video.title}</p>
            <p>
              <strong>{video.id}</strong>
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
