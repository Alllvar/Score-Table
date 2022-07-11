export const getMatchId = (countryA, countryB) => {
    if(countryA > countryB) {
        return `${countryA}-${countryB}`;
    }

    return `${countryB}-${countryA}`;
};