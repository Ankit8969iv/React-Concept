import React from 'react'

const TextError = (props) => {
  console.log(props);
  return (
    <div className='error'>
      {props.children}
    </div>
  )
}

export default TextError