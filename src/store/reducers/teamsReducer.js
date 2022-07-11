import { createReducer } from '@reduxjs/toolkit';
import {
    removeCountry,
    addDefaultTeams,
    addCountry,
    addMatchResult,
} from '../actions/teamActions';
import { getMatchId } from '../../components/common/getMatchId';

const initialTeamsState = {
    countries: [],
    matches: {},
};

const teamsReducer = createReducer(initialTeamsState, (builder) => {
    builder
        .addCase(addDefaultTeams, (state) => {
            const result = [];
            const result1 = {};
            try {
                const storedCountries = state.countries
                const storedMatches = state.matches
                if (Array.isArray(storedCountries) && storedCountries.length) {
                    result.push(...storedCountries)
                }
                if (storedMatches && Object.keys(storedMatches).length) {

                    Object.assign(result1, {...storedMatches})
                }
            } catch (e) {
                console.log(e)
            }
            state.countries = result
            state.matches = result1
        })
        .addCase(addCountry, (state, action) => {
            let savedCountries = null
            try {
                savedCountries = state.countries || []
                    savedCountries.forEach((country) => {
                        if (action.payload !== country) {
                            const matchName = getMatchId(action.payload, country);
                            state.matches[matchName] = null;
                        }
                    });

            } catch (e) {

            }

            state.countries.push(action.payload)

        })
        .addCase(removeCountry, (state, action) => {
            state.countries = state.countries.filter(country => country !== action.payload)
            Object.keys(state.matches)
                .filter(match => match.includes(action.payload))
                .forEach(match => {
                    delete state.matches[match]
                })
        })
        .addCase(addMatchResult, (state, action) => {
            state.matches = { ...state.matches, ...action.payload }
        })
})

export default teamsReducer;
