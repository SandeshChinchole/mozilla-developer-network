const myObj = {
    name: 'Steve',
    age: 2,
    friends: ['Ricky', 'Bill', 'Elon']
}

Object.freeze(myObj);

myObj.location = 'NYC';

console.log(myObj);