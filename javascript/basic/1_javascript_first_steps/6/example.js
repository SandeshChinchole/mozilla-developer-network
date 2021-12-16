const prepareGreenTea = () => 'green tea';

const prepareBlackTea = () => 'black tea';

const getTea = (prepareTea, numOfCups) => {
    const teaCups = [];
    for (let cup = 1; cup <= numOfCups; cup++) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
}

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);

console.log(tea4GreenTeamFCC);
console.log(tea4BlackTeamFCC);