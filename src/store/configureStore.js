import { createStore, applyMiddleware } from 'redux';
import thunk                            from 'redux-thunk';
import logger                           from 'redux-logger'

import reducers                         from '../redux/reducers/reducers';

export default function configureStore(initialState){
    return createStore(
        reducers,
        initialState,
        applyMiddleware(thunk, logger)
    );
}