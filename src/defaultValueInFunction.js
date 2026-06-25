/**
 * 
 * @param {*} username 
 * @param {*} password 
 * @param {*} role 
 * @param {*} status 
 */
function login(username, password, role = 'admin', status = 'active'){
    console.log(username, password, role, status);
}
login('nitinshukla9012@gmail.com', 'nitins@4321' )//if we dont pass anything then by default role should be admin

login('nitinshukla9012@gmail.com', 'nitins@4321', 'seller' )
login('nitinshukla9012@gmail.com', 'nitins@4321', 'null', 'inactive')