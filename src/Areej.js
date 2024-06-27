
//////////////////PRIME NUMBER FUNCTION///////////////

describe("Prime check function", () => {
    it("should return true for a prime number", () => {
        expect(isPrime(7)).toBe(true);
    });

    it("should return false for a non-prime number", () => {
        expect(isPrime(4)).toBe(false);
    });

    it("should return false for 1", () => {
        expect(isPrime(1)).toBe(false);
    });
});

////////USER AUTHENTICATION////////////

describe("authenticateUser ", () => {
    const users = [
        {username: "Mahnoor", password: "12345"},
        {username: "quality-testing", password: "54321"}
    ];

    it("should authenticate a valid user", () => {
        expect(authenticateUser("Areej", "12345", users)).toBe(true);
    });

    it("should reject an invalid user", () => {
        expect(authenticateUser("Areej", "wrongpassword", users)).toBe(false);
    });

    it("should reject a non-existent user", () => {
        expect(authenticateUser("nonexistent", "12345", users)).toBe(false);
    });
});
/////////////CELCIUS TO FAHREHEIT FUNCTION/////



describe('Celsius to Fahrenheit Converter', () => {
    it('should convert 0 Celsius to 32 Fahrenheit', () => {
      expect(celsiusToFahrenheit(0)).toEqual(32);
    });
  
    it('should convert 100 Celsius to 212 Fahrenheit', () => {
      expect(celsiusToFahrenheit(100)).toEqual(212);
    });
  
    it('should convert -40 Celsius to -40 Fahrenheit', () => {
      expect(celsiusToFahrenheit(-40)).toEqual(-40);
    });
  
    it('should convert 37 Celsius to 98.6 Fahrenheit', () => {
      expect(celsiusToFahrenheit(37)).toEqual(98.6);
    });
  });
  


/////////////REMOVE WHITE SPACES FROM STRING////////////
describe("removeWhiteSpace", function() {
    // Test case 1: Remove white spaces from a string with spaces
    it("should remove white spaces from a string", function() {
      var input = "   Hello   World   ";
      var expectedOutput = "HelloWorld";
      expect(removeWhiteSpace(input)).toEqual(expectedOutput);
    });
  
    // Test case 2: Remove white spaces from a string with tabs and newlines
    it("should remove white spaces, tabs, and newlines from a string", function() {
      var input = "\t\n\t  Jasmine \t\n\nTesting\n\tTool\t\n\n";
      var expectedOutput = "JasmineTestingTool";
      expect(removeWhiteSpace(input)).toEqual(expectedOutput);
    });
  
    // Test case 3: Remove white spaces from an empty string
    it("should return an empty string when input is empty", function() {
      var input = "";
      var expectedOutput = "";
      expect(removeWhiteSpace(input)).toEqual(expectedOutput);
    });
  
    // Test case 4: Remove white spaces from a string with no spaces
    it("should return the same string when there are no white spaces", function() {
      var input = "NoWhiteSpace";
      var expectedOutput = "NoWhiteSpace";
      expect(removeWhiteSpace(input)).toEqual(expectedOutput);
    });
  });

  ///////////////COUNT OCCURANCES OF EACH ELEMENT//////////////
  describe("countOccurrencesInArray", function() {

    it("should return an empty object for an empty array", function() {
        expect(countOccurrencesInArray([])).toEqual({});
    });

    it("should count the occurrences of each element in an array of numbers", function() {
        expect(countOccurrencesInArray([1, 2, 2, 3, 3, 3])).toEqual({
            1: 1,
            2: 2,
            3: 3
        });
    });

    it("should count the occurrences of each element in an array of strings", function() {
        expect(countOccurrencesInArray(["apple", "banana", "apple", "orange", "banana", "apple"])).toEqual({
            "apple": 3,
            "banana": 2,
            "orange": 1
        });
    });

    it("should count the occurrences of each element in a mixed array", function() {
        expect(countOccurrencesInArray([1, "apple", 2, "banana", "apple", 1, "apple"])).toEqual({
            1: 2,
            "apple": 3,
            2: 1,
            "banana": 1
        });
    });

    it("should handle an array with one element", function() {
        expect(countOccurrencesInArray([42])).toEqual({
            42: 1
        });
    });

    it("should handle an array with all identical elements", function() {
        expect(countOccurrencesInArray(["same", "same", "same"])).toEqual({
            "same": 3
        });
    });

});
