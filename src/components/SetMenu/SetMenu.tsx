import React, {useEffect, useState} from 'react';
import InputSet from '../Input/Input';
import Button from '../Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {
    ActionsType,
    changeEditModeAC, getBordersFromLocalStorageTC,
    saveToLocalStorageBordersTC,
    selectBorders,
} from '../../store/counterReducer';
import s from './SetMenu.module.css'
import {ThunkDispatch} from 'redux-thunk';
import {StoreType} from '../../store/store';

const SetMenu: React.FC = () => {
    let borders = useSelector(selectBorders)
    const [minMax, setMinMax] = useState<Array<number>>(borders)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        dispatch(getBordersFromLocalStorageTC())
    }, [])

    useEffect(() => {
        if(borders.toString() !== minMax.toString()) setMinMax(borders)
    }, [borders])

    const dispatch = useDispatch<ThunkDispatch<StoreType, unknown, ActionsType>>()

    const set = () => {
        if (minMax[0] >= minMax[1]) setError('Unacceptable values')
        else {
            setError(null)
            dispatch(saveToLocalStorageBordersTC(minMax))
        }
    }

    const setMin = (min: number) => {
        setMinMax([min, minMax[1]])
    }

    const setMax = (max: number) => {
        setMinMax([minMax[0], max])
    }

    const onFocusHandler = () => {
        dispatch(changeEditModeAC(true))
    }

    return (
        <div className={s.setMenu}>
            <InputSet id={'min'} startValue={minMax[0]} callBack={setMin} onFocus={onFocusHandler}/>
            <InputSet id={'max'} startValue={minMax[1]} callBack={setMax} onFocus={onFocusHandler}/>
            <Button title={'Set'} callBack={set}/>
            {error ? <div className={s.error}>{error}</div> : null}
        </div>
    );
};

export default SetMenu;