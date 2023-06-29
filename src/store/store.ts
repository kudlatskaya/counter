import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import {counterReducer} from "./counterReducer";
import {loadState, saveState} from "../localStorage";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    counter: counterReducer,
})

export const store = legacy_createStore(rootReducer, loadState(), applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>

store.subscribe(() => {
    saveState( store.getState().counter);
});