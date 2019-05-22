import React from 'react'

function addFeed ({toggle}) {
  return (
    <div className="feed-write" onClick={toggle} >
      <i className='fas fa-plus-circle'  />
    </div>
  )
}

export default addFeed
