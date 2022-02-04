import React from 'react';
import ReactDOM from 'react-dom';
const Statistic = (props) => {

    return (
        <div>
            {props.title}
            {props.data}
        </div>
    )
}
export default Statistic;
