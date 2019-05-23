import { USERS, CLEAR_USERLIST } from './key'
import { todos } from './service'

// import { createAction } from 'redux-actions'

import createAction from '../util/createAction'

// export function users(){
//     // return {
//     //     type : USERS,
//     //     payload : {
//     //         name : 'demon'
//     //     }
//     // }
    
//     // return dispatch=>fetch('https://jsonplaceholder.typicode.com/todos/1')
//     // .then(response => response.json())
//     // .then(json => dispatch({
//     //     type : USERS,
//     //     payload : {
//     //         name : json.title
//     //     }
//     // }))
//     return dispatch=>{
//         todos().then((data)=>dispatch({
//             type : USERS,
//             payload : {
//                 userlist : data
//             }
//         }))
//     }
// }
createAction.bind(null,)

export const clearUserList=createAction(CLEAR_USERLIST,async()=>{
    return{
        type : CLEAR_USERLIST,
        payload : {
            userlist : []
        }
    }
})
export const users = createAction(USERS,async(param)=>{
    console.log(param)
    const data = await todos();
    return {
        userlist : data
    };
})