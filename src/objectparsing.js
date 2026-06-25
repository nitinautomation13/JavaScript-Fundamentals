let user = {
 name : 'Tom',
 age : 30,
 city : 'LA',
 isActive : true,
}

//JS object to JSON: serialization
let userJson = JSON.stringify(user, null, 2);
console.log(userJson);
console.log(typeof userJson);

//JSON to JS object : de-serialization
let userObj = JSON.parse(userJson);
console.log(userObj);
console.log(typeof userObj);

console.log(user.name === userObj.name);

