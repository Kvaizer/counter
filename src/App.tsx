import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import SetMenu from './components/SetMenu/SetMenu';

function App() {

    return (
        <div className='App_container'>
            <Counter/>
            <SetMenu/>
        </div>
    );
}

export default App;
