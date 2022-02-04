import React from 'react';
import ReactDOM from 'react-dom';
import Statistic from './statistic';
const Statistics = (props) => {

    return (
        <div>
        <table>
        <tbody>
        <tr>
            <td>
                <p>hyvä</p>
            </td>
            <td>
                <Statistic data={props.good}/>
            </td>
        </tr>
        <tr>
            <td>
                <p>neutraali</p>
            </td>
            <td>
                <Statistic data={props.neutral}/>
            </td>
        </tr>
        <tr>
            <td>
                <p>huono</p>
            </td>
            <td>
                <Statistic data={props.bad}/>
            </td>
        </tr>
        <tr>
            <td>
                <p>keskiarvo</p>
            </td>
            <td>
                <Statistic data={(props.good + props.neutral + props.bad) / 3}/>
            </td>
        </tr>
        <tr>
            <td>
                <p>positiivisia</p>
            </td>
            <td>
                <Statistic data={props.good / (props.good + props.neutral + props.bad) * 100}/>
            </td>
        </tr>
        </tbody>
        </table>
        </div>
    )
}
export default Statistics;
