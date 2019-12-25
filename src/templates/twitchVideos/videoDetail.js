import React from 'react'

export default ({
  pageContext: {
    video: { title, thumbnail_url },
  },
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={thumbnail_url.replace('%{width}x%{height}', '600x340')} />
    </div>
  )
}
