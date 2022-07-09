import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTeams } from '../../store/selectors';
import { removeTeam } from '../../store/actions/teamActions';
import { useEffect, useState } from 'react';
import { Table, Th, Td, Tr, CloseButton } from './styles'

export const TableComponent = () => {
    const teams = useSelector(getTeams);
    const [teamsPoints, setTeamsPoints] = useState([]);
    const dispatch = useDispatch();
    const removeTeamHandler = (id) => {
        dispatch(removeTeam(id))
    };

    useEffect(() => {
        const Data = JSON.parse(localStorage.getItem('teams-data'));
        if (teamsPoints) {
            setTeamsPoints(Data);
        }
    }, []);

    const renderTeams = teams.map((team, key) => {
        return (
            <tbody key={key}>
                <Tr>
                    <Td>{team.place}</Td>
                    <Td>{team.name}</Td>
                    <Td>{team.played}</Td>
                    <Td>{team.win}</Td>
                    <Td>{team.draw}</Td>
                    <Td>{team.lost}</Td>
                    <Td>{team.points}</Td>
                    <Td>
                        <CloseButton onClick={() => removeTeamHandler(team.id)}>×</CloseButton>
                    </Td>
                </Tr>
            </tbody>
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
            {renderTeams}
        </Table>
    );
};

export default TableComponent;
