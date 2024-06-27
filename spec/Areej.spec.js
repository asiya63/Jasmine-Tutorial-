
////////PRIME NUMBER FUNCTION/////////
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}


/////////USER AUTHENTICATION/////

function authenticateUser(username, password, users) {
    const user = users.find(u => u.username === username);
    if (user && user.password === password) {
        return true;
    }
    return false;
}

/////////////CELCIUS TO FAHRENHEIT////////////


function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
////////////REMOVE WHITE SPACES /////////////

function removeWhiteSpace(str) {
    return str.replace(/\s/g, "");
  }
  
  
  

/////////////COUNT OCCURANCES OF EACH ELEMENT///////////
function countOccurrencesInArray(arr) {
    const count = {};
    for (const item of arr) {
        count[item] = (count[item] || 0) + 1;
    }
    return count;
}





  