//key-value pair format
//duplicate key always give latest value


let user = {
name : 'Tom',
age : 30,
city : 'REWA',
isActive : true,

address :{
  flat : 101,
  zip : 43241,
  lat : 10.34,
  long : 11.22,
}
};

console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.tel);
console.log(user['city']);

console.log(user.address.flat);
console.log(user.address.lat);
console.log(user.address['zip']);

console.log('-----------------------------')

console.log(user.address);

//create a new key-value pair
user.email = 'tom@gmail.com';
console.log(user);

delete user.age;
console.log(user);

user.name = 'Tom Automation';
console.log(user);
