import React from 'react';
import { TableComponent} from './table';
import { AddTeam } from './new-team-form';
import { AppContainer } from './styles'

const App = () => {
    return (
        <AppContainer>
            <AddTeam />
            <TableComponent />
        </AppContainer>
    );
};

export default App;
