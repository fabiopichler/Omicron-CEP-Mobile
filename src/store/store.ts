import { applyMiddleware, createStore } from 'redux';

import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import { reducers } from './reducers';

export const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers);
