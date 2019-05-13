import { USERS } from './key'
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
                name : data[0].title
            }
        }))
    }
}