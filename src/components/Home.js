import React from 'react'
import Item from './feedItem'
function Home ({ feed, status, toggle }) {
  if (feed) {
    return (
      <div className='Home'>
        {feed.map(res => (
          <Item
            className='Home-item'
            key={res.id}
            data={res}
            status={status}
            toggle={toggle}
          />
        ))}
      </div>
    )
  } else {
    return (
      <div>
        <p>글이 없습니다 :(</p>
      </div>
    )
  }
}

export default Home
