import React from 'react'
import ReactDOM from 'react-dom'
const Total = (props) => {
  return (
    <div>

      {<p>Total {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[1].exercises} exercises</p>}

    </div>
  )
}

export default Total;
