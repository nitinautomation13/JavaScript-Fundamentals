let user = {
 name : 'Tom',
 age : 30,
 city : 'LA',
 isActive : true,
}

//for in loop - type of key always in string here
for(let key in user){
    console.log(key, ':' , user[key]);
}