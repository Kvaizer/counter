import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {counterReducer} from './counterReducer';

export const rootReducer = combineReducers({
    counter: counterReducer
})

export type StoreType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))