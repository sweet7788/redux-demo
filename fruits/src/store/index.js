import {createStore} from 'redux'

import {fruitApp} from './reducer.js'
export const store = createStore(fruitApp)