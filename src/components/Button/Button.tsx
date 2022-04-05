import React from 'react';
import style from './Buttons.module.css'


type ButtonPropsType = {
    title: string
    callBack: () => void
    disabled?: boolean
}

const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button className={style.default} onClick={onClickHandler} disabled={props.disabled}>{props.title}</button>
    );
};

export default Button;