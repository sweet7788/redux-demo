import { USERS } from './key'

import { combineReducers } from 'redux'

const initState = {
    name : 'swt'
}

function users(state=initState,action){
    switch(action.type){
        case USERS : 
            return Object.assign({},state,{
                name : action.payload.name
            })
        default :
            return state
    }
}

export default combineReducers({
    users
})
