import React, {useEffect} from 'react';
import Display from '../Display/Display';
import Button from '../Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {
    ActionsType, getFromLocalStorageAfterResetTC,
    getValueFromLocalStorageTC,
    saveToLocalStorageValueTC,
    selectAll
} from '../../store/counterReducer';
import s from './Counter.module.css'
import {ThunkDispatch} from 'redux-thunk';
import {StoreType} from '../../store/store';


const Counter: React.FC = () => {

    useEffect(() => {
        dispatch(getValueFromLocalStorageTC())
    }, [])

    const {
        value,
        borders,
        editMode
    } = useSelector(selectAll)

    const dispatch = useDispatch<ThunkDispatch<StoreType, unknown, ActionsType>>()

    const inc = () => {
        dispatch(saveToLocalStorageValueTC())
    }

    const reset = () => {
        dispatch(getFromLocalStorageAfterResetTC())
    }

    return (
        <div className={s.App}>
            <Display counter={value} max={borders[1]} disabled={editMode}/>
            <div className={s.container}>
                <Button callBack={inc} title={'inc'} disabled={editMode || value === borders[1]}/>
                <Button callBack={reset} title={'reset'} disabled={editMode || value === borders[0]}/>
            </div>
        </div>
    );
};

export default Counter;