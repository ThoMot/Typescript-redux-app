import { infoReducer } from './info-reducer';
import { combineReducers } from 'redux';


export const rootReducer = combineReducers({
    info: infoReducer
})

export type RootState = ReturnType<typeof rootReducer>