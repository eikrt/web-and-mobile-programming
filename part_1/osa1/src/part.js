import React from 'react'
import ReactDOM from 'react-dom'

const Part = (props) => {
  const part1 = 'Basics of React'
  const part2 = 'Using props'
  const part3 = 'Component states'

  return (
    <div>
      <p>{props.part.name} {props.part.exercises}</p>
      
    </div>
  )
}

export default Part;
