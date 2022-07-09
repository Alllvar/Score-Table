import { configureStore } from '@reduxjs/toolkit';
import teamsReducer from './reducers/teamsReducer';

const store = configureStore({
    reducer: {
        teams: teamsReducer
    }
});

export default store;
