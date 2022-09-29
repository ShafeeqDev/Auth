// import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist'

const defaultPersistConfig = {
  key: "root",
  storage: AsyncStorage

};
const persistedReducer = persistReducer(defaultPersistConfig ,reducer)
const middleware = applyMiddleware(thunkMiddleware,createLogger())
// const middleware = applyMiddleware(thunkMiddleware)

const store = createStore(
    persistedReducer,
    compose(
        middleware,
       
    )
);
let persistor = persistStore(store)

export  {store, persistor}