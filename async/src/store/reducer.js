import { USERS } from './key'

import { combineReducers } from 'redux'

const initState = {
    userlist : [
        
    ]
}

function users(state=initState,action){
    switch(action.type){
        case USERS : 
            return Object.assign({},state,{
                userlist : action.payload.userlist
            })
        default :
            return state
    }
}

export default combineReducers({
    users
})
