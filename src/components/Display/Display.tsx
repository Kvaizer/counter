import React from 'react';
import style from './Display.module.css'

type DisplayPropsType = {
    counter: number
    max: number
    disabled: boolean
}

const Display: React.FC<DisplayPropsType> = ({counter, max, disabled}) => {
    return (
        <div className={disabled ? style.editMode : style.display}>
            <div className={(counter >= max && disabled) ? style.counter  :
                (counter >= max) ? style.counterDisabled : style.counter}>{counter}</div>
        </div>
    );
};

export default Display;