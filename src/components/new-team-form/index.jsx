import React, { useState } from 'react';
import {
    Form,
    FormInput,
    Submit
} from './styles'
import { useDispatch } from 'react-redux';
import { addCountry } from '../../store/actions/teamActions';

export const AddTeam = () => {
    const [team, setTeam] = useState('')

    const dispatch = useDispatch();

    const addTeamHandler = (e) => {
        e.preventDefault()
        dispatch(addCountry(team))

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
