import React from 'react'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  Input,
  Button,
  InputGroupAddon
} from 'reactstrap'

function Comment ({ click, change, submit, comment, value }) {
  console.log(comment)
  return (
    <div>
      <UncontrolledDropdown>
        <DropdownToggle onClick={click}>
          Comment
          <i className='far fa-comment' />
        </DropdownToggle>
        <DropdownMenu className='Drop-menu'>
          <DropdownItem className='comment' header>
            add comment :)
          </DropdownItem>

          <InputGroup>
            <Input onChange={change} value={value} />
            <InputGroupAddon addonType='append'>
              <Button onClick={submit}>add</Button>
            </InputGroupAddon>
          </InputGroup>

          {comment.length >= 1 ? (
            comment.map(res => (
              <DropdownItem key={res.id} disabled className='comment-item'>
                {res.commentContent}
              </DropdownItem>
            ))
          ) : (
            <p>this feed don't have comment</p>
          )}
        </DropdownMenu>
      </UncontrolledDropdown>
    </div>
  )
}

export default Comment
