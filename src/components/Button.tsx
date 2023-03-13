import React from 'react';
import s from "./Counter.module.css";

type ResetBtnPropsType = {
    title: string,
    setValue: () => void,
    disabled: boolean,
}

const Button = (props: ResetBtnPropsType) => {
    let { title, setValue, disabled } = props;

    const onClickHandler = () => {
        setValue();
    }

    //let button = disabled ? s.button : s.

    return (
        <div>
            <button className={s.button} onClick={onClickHandler} disabled={disabled}>{title}</button>
        </div>
    );
};

export default Button;