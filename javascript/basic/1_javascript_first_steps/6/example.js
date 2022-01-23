const numbers = [1, 2, 3, 4, 5];
function queue(arr, num) {
    arr.push(num);
    let removed = arr.shift();
    return removed;
}

console.log('before: ' + JSON.stringyfy(numbers));
console.log(queue(numbers, 10));
console.log('after: ' + JSON.stringify(numbers));