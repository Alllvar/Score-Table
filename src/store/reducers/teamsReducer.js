import { createReducer } from '@reduxjs/toolkit';
import { addTeam, removeTeam } from '../actions/teamActions';

const initialTeamsState = {
    teams: [],
};

const teamsReducer = createReducer(initialTeamsState, (builder) => {
    builder
        .addCase(addTeam, (state, action) => {
            state.teams.push(action.payload)
        })
        .addCase(removeTeam, (state, action) => {
            state.teams = state.teams.filter(team => team.id !== action.payload)
        })
})

export default teamsReducer;
