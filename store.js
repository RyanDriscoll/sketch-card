import {createStore, applyMiddleware, compose} from 'redux';
import { persistStore } from 'redux-persist';
import { asyncSessionStorage } from 'redux-persist/storages';
import rootReducer from './reducers/root-reducer';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk, loggerMiddleware)
));

function onCompletion() {
  console.log('store persisted...')
}

persistStore(store, {storage: asyncSessionStorage}, onCompletion);

export default store;
