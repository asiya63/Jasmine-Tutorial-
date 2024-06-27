//ADDITION FUNCTION//////////
function Calculator ()
{}
    Calculator.prototype.add=(a,b)=>
       {
            return a+b;
        };



        /////////////EXPONENTIAL FUNCTION/////////////////
        function exponential(base, exponent) {
            // Special case: base 0 and exponent < 0 results in Infinity
            if (base === 0 && exponent < 0) {
                return Infinity;
            }
        
            // General case: using Math.pow for exponentiation
            return Math.pow(base, exponent);
        }
        
//CONCATENATION FUNCTION//////////
//1.Stops converting any type of input to string to avoid errors in the code
function concat(str1, str2) {
    return str1 + str2;
 }
//2.concatenate non string I puts irrespective of their type 
function concat(a, b) {
  return String(a) + String(b);
}

  ////////////MAX AND MIN FUNCTION////////////
  // Code to find maximum and minimum values in an array
  function findMax(arr) {
    if (arr.length === 0) {
      return null;
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  function findMin(arr) {
    if (arr.length === 0) {
      return null;
    }
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
///BUBBLE SORTING FUNCTION///////////

function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (compare(arr[j], arr[j + 1]) > 0) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function compare(a, b) {
    // Check if both elements are numbers
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    }
    // Convert both values to strings for comparison if they are not both numbers
    const strA = String(a);
    const strB = String(b);

    // Compare strings
    if (strA < strB) {
        return -1;
    } else if (strA > strB) {
        return 1;
    } else {
        return 0;
    }
}

