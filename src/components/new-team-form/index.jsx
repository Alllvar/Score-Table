import React, { useState } from 'react';
import {
    Form,
    FormInput,
    Submit
} from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { addTeam } from '../../store/actions/teamActions';
import { getTeams } from '../../store/selectors';

const defaultPoints = {
    place: 0,
    played: 0,
    win: 0,
    draw: 0,
    lost: 0,
    points: 0,
}

export const AddTeam = () => {
    const [team, setTeam] = useState('')
    const teams = useSelector(getTeams);

    const dispatch = useDispatch();

    const addTeamHandler = (e) => {
        e.preventDefault()
        dispatch(addTeam({
            name: team,
            id: Math.random(),
            ...defaultPoints
        }))
        setTeam('')
    }

    return (
        <Form>
            <FormInput
                type="text"
                placeholder="New team"
                value={team}
                onChange={(e) => setTeam(e.target.value)}
            />
            <Submit
                type="submit"
                value="Add"
                onClick={e => addTeamHandler(e)}
                disabled={!team}
            />
        </Form>
    );
};

export default AddTeam;
