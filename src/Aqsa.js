

///////////////FACTORIAL CALCULATION/////////////

describe("Factorial function", () => {
  it("should return 1 for 0!", () => {
      expect(factorial(0)).toBe(1);
  });

  it("should return 120 for 5!", () => {
      expect(factorial(5)).toBe(120);
  });

  it("should return 720 for 6!", () => {
      expect(factorial(6)).toBe(720);
  });
});



/////////////////CAPITALIZE FIRST LETTER OF EACH WORD/////////////
describe("Capitalize function", () => {
  it("should capitalize the first letter of each word", () => {
      expect(capitalize("hello world")).toBe("Hello World");
  });

  it("should handle an empty string", () => {
      expect(capitalize("")).toBe("");
  });

  it("should handle a single word", () => {
      expect(capitalize("javascript")).toBe("Javascript");
  });
});





//////////////REMOVE DUPLICATION FUNCTION///////////
describe("removeDuplicates ", () => {
  it("should remove duplicates from an array", () => {
      expect(removeDuplicates([1, 2, 2, 3, 4, 4])).toEqual([1, 2, 3, 4]);
  });

  it("should handle an array with no duplicates", () => {
      expect(removeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("should handle an empty array", () => {
      expect(removeDuplicates([])).toEqual([]);
  });
});

///////////////////STACK INSERTION FUNCTION/////////////////////

describe("Stack", function() {
  let stack;

  beforeEach(function() {
      stack = new Stack();
  });

  it("should initialize an empty stack", function() {
      expect(stack.isEmpty()).toBe(true);
      expect(stack.size()).toBe(0);
      expect(stack.getElements()).toEqual([]);
  });

  it("should push elements onto the stack", function() {
      stack.push(1);
      expect(stack.isEmpty()).toBe(false);
      expect(stack.size()).toBe(1);
      expect(stack.peek()).toBe(1);
      expect(stack.getElements()).toEqual([1]);

      stack.push(2);
      expect(stack.size()).toBe(2);
      expect(stack.peek()).toBe(2);
      expect(stack.getElements()).toEqual([1, 2]);

      stack.push(3);
      expect(stack.size()).toBe(3);
      expect(stack.peek()).toBe(3);
      expect(stack.getElements()).toEqual([1, 2, 3]);
  });

  it("should pop elements from the stack", function() {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.pop()).toBe(3);
      expect(stack.size()).toBe(2);
      expect(stack.peek()).toBe(2);
      expect(stack.getElements()).toEqual([1, 2]);

      expect(stack.pop()).toBe(2);
      expect(stack.size()).toBe(1);
      expect(stack.peek()).toBe(1);
      expect(stack.getElements()).toEqual([1]);

      expect(stack.pop()).toBe(1);
      expect(stack.size()).toBe(0);
      expect(stack.peek()).toBe(null);
      expect(stack.getElements()).toEqual([]);
  });

  it("should throw an error when popping from an empty stack", function() {
      expect(function() {
          stack.pop();
      }).toThrowError("Stack underflow - cannot pop from an empty stack");
  });

  it("should clear the stack", function() {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.clear();

      expect(stack.isEmpty()).toBe(true);
      expect(stack.size()).toBe(0);
      expect(stack.getElements()).toEqual([]);
  });
});

////////////////PHONE NUMBER VALIDATION FUNCTION//////////////

describe("isValidPhoneNumber", function() {
  // Test case 1: Valid phone number with dashes
  it("should return true for a valid phone number with dashes", function() {
      expect(isValidPhoneNumber("123-456-7890")).toBe(true);
  });

  // Test case 2: Valid phone number without dashes
  it("should return true for a valid phone number without dashes", function() {
      expect(isValidPhoneNumber("1234567890")).toBe(true);
  });

  // Test case 3: Invalid phone number with alphabets
  it("should return false for a phone number with alphabets", function() {
      expect(isValidPhoneNumber("123-abc-4567")).toBe(false);
  });

  // Test case 4: Invalid phone number with special characters
  it("should return false for a phone number with special characters", function() {
      expect(isValidPhoneNumber("123-456-789@")).toBe(false);
  });

  // Test case 5: Invalid phone number with incorrect format
  it("should return false for a phone number with incorrect format", function() {
      expect(isValidPhoneNumber("12-3456-7890")).toBe(false);
  });
});




  







  