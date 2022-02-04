import React from 'react'
import ReactDOM from 'react-dom'
import Part from './part'

const Contents = (props) => {

  return (
    <div>
      {props.course.parts.map((part) => <Part part={part}/>)}
    </div>
  )
}

export default Contents;
