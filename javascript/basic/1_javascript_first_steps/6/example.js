function endsWith(str, target) {
    return str.slice(-target.length) === target;
}

console.log(endsWith('hello people', 'o'));