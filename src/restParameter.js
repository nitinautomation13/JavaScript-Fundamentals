//rest parameter donating with : ... (three dot)

function selectCountryFromDropDown(...countrName) { // ...countrName : so this autometically become array []
    console.log('select country : ', countrName);
    console.log(countrName.length);

    for (let e of countrName){
        console.log(e);
    }
};
// what happend if we have a multiple value in the dropdown then ... method come into the picture so put the ... before the variable name
/**
 * 
 * @param {string} name 
 * @param  {...any} details 
 */
function filvalues(name, ...details) {
    console.log('checking the details for:' + name, details)
    console.log(filvalues.length)

    for (let e of details) {
        console.log(e);
    }
};

selectCountryFromDropDown('India', 'UK', 'China', 'Russia');
selectCountryFromDropDown('India');
selectCountryFromDropDown('India', 'UK');

filvalues('pawan', 101, 'New Colony', 'Sector 7', 'Banglore', '65444', 'India');