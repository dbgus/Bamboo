import React from 'react'
import { Card, CardText, CardBody, CardTitle } from 'reactstrap'
import CommentContainer from '../containers/CommentContainer'

function feedItem ({ data, status, toggle }) {
  return (
    <Card className='Home-item'>
      <CardBody>
        <CardTitle>{data.feedTitle}</CardTitle>
        <CardText>{data.feedContents}</CardText>
        <CommentContainer id={data.id} />
      </CardBody>
    </Card>
  )
}

export default feedItem
