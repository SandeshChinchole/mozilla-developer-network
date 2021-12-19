const myObj = {
    name: 'Steve',
    age: 2,
    friends: ['Ricky', 'Bill', 'Elon']
}

Object.freeze(myObj);

myObj.location = 'NYC';
myObj.email = 'email@email.com';

console.log(myObj);