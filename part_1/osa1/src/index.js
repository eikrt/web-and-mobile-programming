import React from 'react'
import ReactDOM from 'react-dom'
import Contents from './contents'
import Total from './total'
import Header from './header'
const App = () => {
    const course = {
        name: 'Superadvanced web and mobile programming',
        parts: [
            {
                name: 'Basics of React',
                exercises: 8
            },
            {
                name: 'Using props',
                exercises: 10
            },
            {
                name: 'Component states',
                exercises: 12
            }
        ]
    }
    return (
        <div>
        <Header course = {course}/>
        <Contents course={course}/>
        <Total course={course}/>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

