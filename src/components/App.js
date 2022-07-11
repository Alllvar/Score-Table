import React, { useEffect } from 'react';
import { TableComponent } from './table';
import { AddTeam } from './new-team-form';
import { AppContainer } from './styles'
import { useDispatch } from 'react-redux';
import { addDefaultTeams } from '../store/actions/teamActions';
import ScoreForm from "./score-form";

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addDefaultTeams())
    }, []);

    return (
        <AppContainer>
            <ScoreForm />
            <AddTeam />
            <TableComponent />
        </AppContainer>
    );
};

export default App;
