

////////////LINEAR EQUATION FUNCTION//////////


function solveLinearEquation(a, b) {
    if (a === 0) {
        throw new Error("Coefficient 'a' cannot be zero for a linear equation");
    }
    return -b / a;
}


/////////STRING REVERSAL FUNCTION/////////
function reverseString(str) {
    return str.split('').reverse().join('');
}



/////////CHECK ELEMENTS IN ARRAY FUNCTION//////////
function contains(arr, element) {
    return arr.includes(element);
}



//////////////////EMAIL VALIDATION FUNCTION////////////
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}



////////////////CHECK OBJECT PROPERTY FUNCTION////////////////////
function hasProperty(obj, property) {
    return obj.hasOwnProperty(property);
}