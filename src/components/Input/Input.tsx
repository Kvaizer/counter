import React, {ChangeEvent} from 'react';
import style from './Input.module.css'

type InputSetType = {
    id: string
    startValue: number
    callBack: (x: number) => void
    onFocus: (editMode: boolean) => void
}

const InputSet: React.FC<InputSetType> = ({ startValue, callBack, onFocus, id}) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if(Number(event.currentTarget.value)) {
            callBack(Number(event.currentTarget.value))
        }
    }

    const onFocusHandler = () => {
        onFocus(true)
    }

    return (
        <div className={style.containerInner}>
            <span className={style.text}>{id === 'min' ? 'Set min value' : 'Set max value'}</span>
            <input className={style.inputStyle} type={'number'} step={1} onChange={onChangeHandler} value={startValue} onFocus={onFocusHandler}/>
        </div>
    );
};

export default InputSet;



