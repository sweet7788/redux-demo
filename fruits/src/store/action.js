import {FRUIT_BUY} from './keys'

export function fruitBuy(num){
    return {
        type : FRUIT_BUY,
        payload : {
            number : num
        }
    }
}