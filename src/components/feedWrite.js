import React from 'react'
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap'
import Add from './addFeed'

export default ({ toggle, onChange, onSubmit, status, title, content }) => {
  if (status) {
    return (
      <div>
        <form className='write-form' onSubmit={onSubmit}>
          <InputGroup className='input-box'>
            <InputGroupAddon addonType='prepend'>Title</InputGroupAddon>
            <Input
              id='title'
              onChange={onChange}
              value={title}
              className='input-box-input'
              placeholder='제목'
            />
          </InputGroup>
          <InputGroup>
            <InputGroupAddon addonType='prepend'>Contents</InputGroupAddon>
            <Input
              id='content'
              onChange={onChange}
              value={content}
              className='input-box-input'
              placeholder='내용'
            />
          </InputGroup>
          <Button type='submit' color='primary' className='submit-button'>
            만들기
          </Button>
        </form>
        <div onClick={toggle} className='overlay' />
      </div>
    )
  } else {
    return <Add toggle={toggle} />
  }
}
