import { createStore, applyMiddleware } from 'redux'

import multi from 'redux-multi';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import { reducers } from './reducers';

export const store = createStore(reducers, applyMiddleware(multi, thunk, promise))
