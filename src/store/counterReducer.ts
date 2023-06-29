import {loadState} from "../localStorage";
import {Dispatch} from "redux";

const INCREMENT = 'INCREMENT'
const RESET = 'RESET'

export type StateCounterType = {
    value: number,
}

type ActionType =
    ReturnType<typeof incrementCounterAC>
    | ReturnType<typeof resetCounterAC>

export const counterReducer = (state: StateCounterType, action: ActionType): StateCounterType => {
    switch (action.type) {
        case INCREMENT:
            return {...state, value: action.value};

        case RESET:
            return {...state, value: 0}

        default:
            return state;
    }
}


// actions

export const incrementCounterAC = (value: number) => ({type: INCREMENT, value} as const)
export const resetCounterAC = () => ({type: RESET} as const)




