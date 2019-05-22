import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

function Reigster ({ submit, change, changeView, id, pw, nick, real }) {
  return (
    <div>
      <h1 className='typogrip'>welcome blog</h1>
      <Form onSubmit={submit}>
        <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
          <Label for='id' className='mr-sm-2'>
            Email
          </Label>
          <Input
            name='email'
            id='id'
            placeholder='id'
            value={id}
            onChange={change}
          />
        </FormGroup>
        <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
          <Label for='pw' className='mr-sm-2'>
            Password
          </Label>
          <Input
            type='password'
            name='password'
            id='pw'
            placeholder='password'
            value={pw}
            onChange={change}
          />
        </FormGroup>{' '}
        <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
          <Label for='nick' className='mr-sm-2'>
            Password
          </Label>
          <Input
            type='text'
            name='nick'
            id='nick'
            placeholder='nick name'
            value={nick}
            onChange={change}
          />
        </FormGroup>
        <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
          <Label for='real' className='mr-sm-2'>
            Password
          </Label>
          <Input
            type='text'
            name='real'
            id='real'
            placeholder='rela name'
            value={real}
            onChange={change}
          />
        </FormGroup>
        <Button color='primary' className='submit-button'>
          회원가입
        </Button>
      </Form>
      <Button color='primary' className='submit-button' onClick={changeView}>
        로그인
      </Button>
    </div>
  )
}

export default Reigster
