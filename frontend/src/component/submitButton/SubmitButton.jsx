import React from 'react'
import "./SubmitButton.css"

const SubmitButton = (props) => {
  return (
    <button className='submitButton'>{props.children}</button>
  )
}

export default SubmitButton