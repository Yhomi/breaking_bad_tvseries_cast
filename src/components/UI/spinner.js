import React from 'react'
import spinnerImg from '../../img/spinner.gif'

const spinner = (props) => {
  return (
    <img src={spinnerImg} alt="Loading..," style={{
        width:'250px',margin:'auto',display:'block'
      }} />
  )
}

export default spinner
