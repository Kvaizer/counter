import React, {useState} from 'react';
import './App.css';
import Button from './components/Button/Button';
import Display from './components/Display/Display';
import InputSet from './components/Input/Input';

function App() {
    const [minMax, setMinMax] = useState<Array<number>>([0, 5])
    const [counter, setCounter] = useState<number>(minMax[0])
    const [editMode, setEditMode] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const inc = () => {
        setCounter(counter + 1)
    }

    const reset = () => {
        setCounter(minMax[0])
    }

    const set = () => {
        if (minMax[0] >= minMax[1]) setError('Unacceptable values')
        else {
            setError(null)
            setEditMode(false)
            setCounter(minMax[0])
        }
    }

    const setMin = (min: number) => {
        console.log(min)
        setMinMax([min, minMax[1]])
    }

    const setMax = (max: number) => {
        setMinMax([minMax[0], max])
    }

    return (
        <div className='App_container'>
            <div className="App">
                <Display counter={counter} max={minMax[1]} disabled={editMode}/>
                <div className='container'>
                    <Button callBack={inc} title={'inc'} disabled={editMode || counter === minMax[1]}/>
                    <Button callBack={reset} title={'reset'} disabled={editMode || counter === minMax[0]}/>
                </div>
            </div>
            <div className='setMenu'>
                <InputSet id={'min'} startValue={minMax[0]} callBack={setMin} onFocus={setEditMode}/>
                <InputSet id={'max'} startValue={minMax[1]} callBack={setMax} onFocus={setEditMode}/>
                <Button title={'Set'} callBack={set}/>
                {error ? <div className='error'>{error}</div> : null}
            </div>
        </div>
    );
}

export default App;
