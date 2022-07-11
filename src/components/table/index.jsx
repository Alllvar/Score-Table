import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMatches, getCountries } from '../../store/selectors';
import { removeCountry } from '../../store/actions/teamActions';
import { Table, Th, Td, Tr, CloseButton } from './styles'
import { getScoreTable } from '../common/getScoreTable';

export const TableComponent = () => {
    const matches = useSelector(getMatches);
    const countries = useSelector(getCountries);
    const dispatch = useDispatch();

    const removeTeamHandler = (name) => {
        dispatch(removeCountry(name))
    };

    const scoreTable = getScoreTable(countries, matches)

    const renderTeams = Object.values(Object.assign(scoreTable)).sort((a, b) => b.points - a.points).map((team, key) => {
        return (
            <Tr key={key}>
                <Td>{key + 1}</Td>
                <Td>{countries[key]}</Td>
                <Td>{team.wins + team.loses + team.draws}</Td>
                <Td>{team.wins}</Td>
                <Td>{team.draws}</Td>
                <Td>{team.loses}</Td>
                <Td>{team.points}</Td>
                <Td>
                    <CloseButton onClick={() => removeTeamHandler(countries[key])}>×</CloseButton>
                </Td>
            </Tr>
        )
    })

    return (
        <Table>
            <thead>
                <Tr>
                    <Th>Place</Th>
                    <Th>Team</Th>
                    <Th>Played</Th>
                    <Th>Win</Th>
                    <Th>Draw</Th>
                    <Th>Lost</Th>
                    <Th>Points</Th>
                    <Th> - </Th>
                </Tr>
            </thead>
            <tbody>
                {renderTeams}
            </tbody>
        </Table>
    );
};

export default TableComponent;
