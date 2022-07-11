export  const getScoreTable = (countries = [], matches = {}) => {
    const resultMap = countries.reduce((result, country) => ({
        ...result,
        [country]: {
            wins: 0,
            loses: 0,
            draws: 0,
            points: 0,
        },
    }), {});

    Object.keys(matches).forEach((matchName) => {
        if(matches[matchName]) {
            const [countryA, countryB] = matchName.split('-');
            const [goalsA, goalsB] = matches[matchName];

            resultMap[countryA].goals += goalsA;
            resultMap[countryB].goals += goalsB;

            if (goalsA > goalsB) {
                resultMap[countryA].points += 3;
                resultMap[countryA].wins += 1;
                resultMap[countryB].loses += 1;
            } else if(goalsA === goalsB) {
                resultMap[countryA].points += 1;
                resultMap[countryB].points += 1;
                resultMap[countryA].draws += 1;
                resultMap[countryB].draws += 1;
            } else {
                resultMap[countryB].points += 3;
                resultMap[countryB].wins += 1;
                resultMap[countryA].loses += 1;
            }
        }
    });

    return resultMap;
};