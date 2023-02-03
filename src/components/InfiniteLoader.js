import React from 'react'
import infiniteloader from './infiniteloader.gif'
function InfiniteLoader() {
  return (
    <div className="d-flex justify-content-center">
      <img src={infiniteloader} alt='loading' height="100px" width="100px"></img>
    </div>
  )
}

export default InfiniteLoader
