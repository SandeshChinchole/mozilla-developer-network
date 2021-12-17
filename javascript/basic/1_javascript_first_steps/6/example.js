let str = 'kayak';
let reverseStr = str.split('').reverse().join('');
if (str === reverseStr) {
    console.log('palindrome')
} else {
    console.log('not p')
}