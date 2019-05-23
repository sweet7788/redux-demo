import { createStore , applyMiddleware} from 'redux'

import reducer from './reducer'

import thunk from 'redux-thunk'

import { createLogger } from 'redux-logger'

import asyncAction from './asyncAction'

import promise from 'redux-promise'



let middleWares = [
    thunk,
    promise,
    asyncAction,
]
if(!process.env.NODE_ENV ||process.env.NODE_ENV === 'development'){
    const logger = createLogger()
    middleWares.push(logger)
}


export default createStore(
    reducer,
    applyMiddleware(...middleWares)
)