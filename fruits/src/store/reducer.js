// import { fruitBuy } from './action.js'

import { combineReducers } from 'redux'

import {FRUIT_BUY} from './keys.js'

const initialState = {
    num : 0
}

function fruitbuy(state = initialState ,action){
    switch(action.type){
        case FRUIT_BUY :
            return Object.assign({},state,{
                num : action.payload.number
            })
            
        default :
            return state
    }
}

export const fruitApp = (
    fruitbuy
) 
