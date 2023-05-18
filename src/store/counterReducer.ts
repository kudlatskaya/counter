const INCREMENT = 'INCREMENT'
const RESET = 'RESET'

export type StateCounterType = {
    value: number,
}

type ActionType = IncrementCounterACType | ResetCounterACType

let initialState: StateCounterType = {
    value: 0,
}

export const counterReducer = (state: StateCounterType = initialState, action: ActionType): StateCounterType => {
    switch (action.type) {
        case INCREMENT:
            return {...state, value: action.value};

        case RESET:
            return {...state, value: 0}

        default:
            return state;
    }

}

type IncrementCounterACType = ReturnType<typeof incrementCounterAC>

export const incrementCounterAC = (value: number) => {
    return {
        type: INCREMENT,
        value,
    } as const
}

type ResetCounterACType = ReturnType<typeof resetCounterAC>

export const resetCounterAC = () => {
    return {
        type: RESET,
    } as const
}