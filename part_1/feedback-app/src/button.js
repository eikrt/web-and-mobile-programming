import React from 'react';
import ReactDOM from 'react-dom';
const Button = (props) => {

    return (
        <div>
            <button onClick={() => props.setS(props.s + 1)}>{props.title}</button>
        </div>
    )
}
export default Button;
