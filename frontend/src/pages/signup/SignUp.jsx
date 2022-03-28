import React from 'react'
import Title from "../../component/title/Title"
import LinkTo from "../../component/Linkto/LinkTo"
import Input from "../../component/input/Input"
import SubmitButton from "../../component/submitButton/SubmitButton"
import "./SignUp.css"


const SignUp = () => {
  return (
    <div className='signUp'>
      <Title>Signup</Title>
      <LinkTo to="/">Login</LinkTo>
      <div className="name">
        <Input placeholder="First name" type="text"/>
        <Input placeholder="Last name" type="text"/>
      </div>
      <Input placeholder="Email" type="text"/>
      <Input placeholder="Password" type="password"/>
      <Input placeholder="Confirm Password" type="password"/>
<SubmitButton>Signup</SubmitButton>
    </div>
  )
}

export default SignUp