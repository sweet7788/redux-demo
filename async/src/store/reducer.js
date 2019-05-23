import { USERS ,CLEAR_USERLIST} from './key'

import { combineReducers } from 'redux'

import createReduce from '../util/createReducer'

const initState = {
    userlist : [
        
    ]
}

// function users(state=initState,action){
//     switch(action.type){
//         case USERS : 
//             return Object.assign({},state,{
//                 userlist : action.payload.userlist
//             })
//         case CLEAR_USERLIST :
//             return Object.assign({},state,{
//                 userlist: action.payload.userlist
//             })
//         default :
//             return state
//     }
// }
const actionHandle = {
    [USERS]:(state,action)=>{
        console.log(action.payload)
        return {
            userlist : action.payload.userlist
        }
    },
    [CLEAR_USERLIST] : (state,action)=>{
        return {
            userlist : action.payload.userlist
        }
    }
}


var users = createReduce(initState,actionHandle)
export default combineReducers({
    users
})
