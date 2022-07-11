import React, { useEffect, useState } from 'react';
import {
    Form,
    Submit,
    ScoreWrap,
    ListElement,
    ScoreInput
} from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { getMatches } from '../../store/selectors';
import { addMatchResult } from '../../store/actions/teamActions';

export const ScoreForm = () => {
    const [matchResults, setMatchResults] = useState({})
    const dispatch = useDispatch();
    const matches = useSelector(getMatches);

    useEffect(() => {
        setMatchResults(matches)
    }, [matches])

    const addMatchesHandler = () => {
        dispatch(addMatchResult(matchResults))
    }

    const matchesList = matches ? Object.keys(matches).map(match => {
            const firstTeam = match.split('-')[0]
            const secondTeam = match.split('-')[1]
            const scoreFirst = matches[match]
                ? matches[match][0]
                : <ScoreInput
                    type="number"
                    min={0}
                    onChange={
                        (e) => setMatchResults((s) => ({ ...s, [match]: [+e.target.value, s[match] ? s[match][1] : 0] }))
                    }
                    value={matchResults[match] ? matchResults[match][0] : 0}
                />
            const scoreSecond = matches[match]
                ? matches[match][1]
                : <ScoreInput
                    type="number"
                    min={0}
                    onChange={
                        (e) => setMatchResults((s) => ({ ...s, [match]: [ s[match] ? s[match][0] : 0, +e.target.value ] }))
                    }
                    value={matchResults[match] ? matchResults[match][1] : 0}
                />
            return <ListElement>{firstTeam} - {scoreFirst} : {scoreSecond} - {secondTeam}</ListElement>
        }
    ) : null

    return (
        <Form>
            <ScoreWrap>
                {matchesList}
            </ScoreWrap>
            <Submit
                type="button"
                value="Submit"
                onClick={() => addMatchesHandler()}
            />
        </Form>
    );
};

export default ScoreForm;
