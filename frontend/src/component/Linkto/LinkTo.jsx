import React from 'react'
import "./LinkTo.css"
import { Link } from 'react-router-dom'


const LinkTo = (props) => {
  return (
      <Link style={{textDecoration:"none"}} to={props.to}>
      <p className='linkTo'>
        {props.children}
    </p>
      </Link>
    
  )
}

export default LinkTo