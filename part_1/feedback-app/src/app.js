import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './button';
import Statistics from './statistics'
const App = () => {
const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);

    return (
        <div>
            <h2> Anna palautetta </h2>
            <Button title="hyvä" s={good} setS={setGood}/>
            <Button title="neutraali" s={neutral} setS={setNeutral}/>
            <Button title="huono"s={bad} setS={setBad}/>
            { (good > 0 || neutral > 0 || bad > 0) ? <> 
                <h3>Statistiikka</h3>
                <Statistics good={good} neutral={neutral} bad={bad}/>
                </>
                : <p> ei yhtään palautetta annettu </p>
            }
        </div>
    )
}
export default App;
