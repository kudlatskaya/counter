import React, {useState} from 'react';
import Button from "../Button/Button";
import s from "./Counter.module.css";
import {useDispatch, useSelector} from "react-redux";
import {incrementCounterAC, resetCounterAC, StateCounterType} from "../../store/counterReducer";
import {AppRootStateType} from "../../store/store";

const Counter = () => {
    let incrementBtnTitle = 'inc';
    let resetBtnTitle = 'reset';

    //let [value, setValue] = useState<number>(0);
    let counter = useSelector<AppRootStateType, StateCounterType>((state) => state.counter)
    let counterValue = counter.value

    const dispatch = useDispatch()

    const increment = () => {
        //setValue(++value);
        dispatch(incrementCounterAC(++counterValue))
    }

    const reset = () => {
        //setValue(0);
        dispatch(resetCounterAC())
    }

    let disabledIncrementBtn = (counterValue >= 5);
    let disabledResetBtn = (counterValue === 0);
    let valueClassName = disabledIncrementBtn ? s.maxValue : s.value;

    return (
        <div className={s.counter}>
            <div className={s.valueContainer}><span className={valueClassName}>{counterValue}</span></div>
            <div className={s.buttons}>
                <Button title={incrementBtnTitle} callBack={increment} disabled={disabledIncrementBtn}/>
                <Button title={resetBtnTitle} callBack={reset} disabled={disabledResetBtn}/>
            </div>
        </div>
    );
};

export default Counter;