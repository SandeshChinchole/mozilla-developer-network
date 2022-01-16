function greaterThan(a, b) {
    return (a === b) ? 'a and b are equal'
    : (a > b) ? 'a is greater than b'
    : 'b is greater than a';
}

console.log(greaterThan(5,4));