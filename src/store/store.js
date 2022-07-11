import { combineReducers, configureStore } from '@reduxjs/toolkit';
import teamsReducer from './reducers/teamsReducer';
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist';

const reducers = combineReducers({
    teams: teamsReducer
});

const persistConfig = {
    key: 'teams',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer
});

export default store;
