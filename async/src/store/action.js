import { USERS, CLEAR_USERLIST } from './key'
import { todos } from './service'

export function users(){
    // return {
    //     type : USERS,
    //     payload : {
    //         name : 'demon'
    //     }
    // }
    
    // return dispatch=>fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())
    // .then(json => dispatch({
    //     type : USERS,
    //     payload : {
    //         name : json.title
    //     }
    // }))
    return dispatch=>{
        todos().then((data)=>dispatch({
            type : USERS,
            payload : {
                userlist : data
            }
        }))
    }
}

export function clearUserList(){
    return{
        type : CLEAR_USERLIST,
        payload : {
            userlist : []
        }
    }
}