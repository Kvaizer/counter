import React from 'react';
import style from './Buttons.module.css'


type ButtonPropsType = {
    title: string
    callBack: () => void
    disabled?: boolean
}

const Button: React.FC<ButtonPropsType> = ({title, callBack, disabled}) => {
    const onClickHandler = () => {
        callBack()
    }

    return (
        <div className={style.buttonContainer}>
            <button className={style.btn} onClick={onClickHandler} disabled={disabled}>{title}</button>
        </div>
    );
};

export default Button;