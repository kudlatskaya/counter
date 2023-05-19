import {combineReducers, legacy_createStore} from 'redux'
import {counterReducer} from "./counterReducer";
import {loadState, saveState} from "../localStorage";

const rootReducer = combineReducers({
    counter: counterReducer,
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>


// const persistedState = loadState();
// const store = legacy_createStore(
//     app,
//     persistedState
// );
store.subscribe(() => {
    saveState( store.getState().counter);
});