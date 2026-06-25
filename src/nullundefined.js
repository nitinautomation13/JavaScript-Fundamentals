let obj = {
    name : 'Tom',
    age : 20
};

obj = null;

//console.log(obj.name);
//if obj = null or undefined then we cannot read properties with undefined, so overcome this we will write ?

console.log(obj?.name);// now run it udefiend and hellow world both are printed

console.log('Hello World');
