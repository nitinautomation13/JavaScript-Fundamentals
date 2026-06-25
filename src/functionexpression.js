//function expression - it means the below function value can we assign to variable also
//now below fimction has been two name one is addToCart and another one is cart
//function expression name - cart
//addToCart is actual function name that we have created

let cart = function addToCart(productName){
    console.log('add to cart', productName);
    return 100;
}

// so when we call the function so we have to use the expression name
//addToCart();// addToCart is not defined

//call the function

let n1 = cart('mackbook pro');
console.log(n1);
//
