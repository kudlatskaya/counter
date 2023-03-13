import React, {useState} from 'react';
import Button from "./Button";
import s from "./Counter.module.css";


const Counter = () => {
    let incrementBtnTitle = 'inc';
    let resetBtnTitle = 'reset';

    let [value, setValue] = useState(0);

    const Increment = () => {
        setValue(++value);
    }

    const Reset = () => {
        setValue(0);
    }

    let disabledIncrementBtn = (value >= 5);
    let disabledResetBtn = (value == 0);
    let valueClassName = disabledIncrementBtn ? s.maxValue : s.value;

    return (
        <div className={s.counter}>
            <div className={s.valueContainer}><span className={valueClassName}>{value}</span></div>
            <div className={s.buttons}>
                <Button title={incrementBtnTitle} setValue={Increment} disabled={disabledIncrementBtn}/>
                <Button title={resetBtnTitle} setValue={Reset} disabled={disabledResetBtn}/>
            </div>
        </div>
    );
};

export default Counter;