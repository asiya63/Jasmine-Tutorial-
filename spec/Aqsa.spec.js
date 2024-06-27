///////////////FACTORIAL CALCULATION//////////
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

  /////////////////CAPITALIZE FIRST LETTER OF EACH WORD//////////////
  function capitalize(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

/////////////CELCIUS TO FAHREHEIT FUNCTION/////


function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  


  
/////REMOVE DUPLICATION FUNCTION///////////
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

///////////////////STACK INSERTION FUNCTION/////////////////////
class Stack {
    constructor() {
        this.items = [];
    }

    // Push (insert) an element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Pop (remove) an element from the stack
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack underflow - cannot pop from an empty stack");
        }
        return this.items.pop();
    }

    // Peek (view) the top element of the stack without removing it
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.items.length;
    }

    // Clear the stack
    clear() {
        this.items = [];
    }

    // Get the elements in the stack (for testing purposes)
    getElements() {
        return this.items.slice();
    }
}


///////////IS VALID NUMBER FUNCTION//////////
function isValidPhoneNumber(phoneNumber) {
    // Regular expression to match valid phone numbers (with or without dashes)
    const phoneRegex = /^(\d{3}-?\d{3}-?\d{4})$/;
    return phoneRegex.test(phoneNumber);
}


  
  
  
