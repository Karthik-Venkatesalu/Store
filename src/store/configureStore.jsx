import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers/combineReducers';
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";


export default function configureStore(history, initialState){
      
    const middleWare = routerMiddleware(history);

    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(middleWare, thunk)
    )
}