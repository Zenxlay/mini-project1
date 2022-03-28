import React from 'react'
import Input from '../../component/input/Input'
import Title from '../../component/title/Title'
import SubmitButton from '../../component/submitButton/SubmitButton'
import "./login.css"
import LinkTo from '../../component/Linkto/LinkTo'

const Login = () => {
  return (
    <div className='login'>
      <Title>Login</Title>
      <LinkTo to="signup">Signup?</LinkTo>
        <Input placeholder="Email" type="text" />
        <Input placeholder="Password" type="password" />
        <SubmitButton>Login</SubmitButton>
    </div>
  )
}

export default Login