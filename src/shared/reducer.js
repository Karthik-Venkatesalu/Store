import { ActionTypes } from './action';

var initialState = {
    appBarTitle: "Configuration Manager"
} ;

export function reducer(state = initialState, action){

    switch (action.type) {
        case ActionTypes.setAppBarTitle:
            return {
                ...state,
                appBarTitle: action.title
            };
            
        default:
            return state;
    }    
}