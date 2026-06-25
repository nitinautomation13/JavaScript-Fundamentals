//anonymous function - means a function has no name .
//we can not write anonymous function without the expression name or identifer name.

let World = function(){
    console.log('Hello World');
    return 100;

};

//console.log(World());
let t1 = World();
console.log(t1);

console.log('-----------------------------------------');
/**
 * 
 * @param {string} broweserName 
 */
let intDriver =function(broweserName){

    console.log(`browser name is : ${broweserName}`);
    switch (broweserName.trim().toLocaleLowerCase) {
        case 'chrome':
            console.log('launch chrome')
            return true;
          
            case 'firefox':
            console.log('launch ff')
            return true;

            case 'edge':
            console.log('launch edge')
            return true;
    
        default:
            console.log('please pass the right browser name', broweserName)
            return false;
                }
};

let isInit = intDriver('chrome');
if(isInit){
console.log('enter the url  : google.com')
}









