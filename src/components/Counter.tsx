import React, {useState} from 'react';
import Button from "./Button";
import s from "./Counter.module.css";

const Counter = () => {
    let incrementBtnTitle = 'inc';
    let resetBtnTitle = 'reset';

    let [value, setValue] = useState<number>(0);

    const increment = () => {
        setValue(++value);
    }

    const reset = () => {
        setValue(0);
    }

    let disabledIncrementBtn = (value >= 5);
    let disabledResetBtn = (value === 0);
    let valueClassName = disabledIncrementBtn ? s.maxValue : s.value;

    return (
        <div className={s.counter}>
            <div className={s.valueContainer}><span className={valueClassName}>{value}</span></div>
            <div className={s.buttons}>
                <Button title={incrementBtnTitle} callBack={increment} disabled={disabledIncrementBtn}/>
                <Button title={resetBtnTitle} callBack={reset} disabled={disabledResetBtn}/>
            </div>
        </div>
    );
};

export default Counter;