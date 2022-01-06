function endsWith(str, target) {
    return str.slice(str.length - target.length) === target;
}

console.log(endsWith('Billy', 'l'));