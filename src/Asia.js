
////////////LINEAR EQUATION FUNCTION//////////

describe("Linear Equation Solver", function() {
    it("should solve linear equation for positive coefficients", function() {
        expect(solveLinearEquation(2, 6)).toEqual(-3);
    });

    it("should solve linear equation for negative coefficients", function() {
        expect(solveLinearEquation(-3, 9)).toEqual(3);
    });

    it("should throw error if coefficient 'a' is zero", function() {
        expect(function() {
            solveLinearEquation(0, 6);
        }).toThrowError("Coefficient 'a' cannot be zero for a linear equation");
    });
});


/////////STRING REVERSAL FUNCTION//////////////

describe("String reversal function", () => {
    it("should reverse a string", () => {
        expect(reverseString("hello")).toBe("olleh");
    });

    it("should return an empty string when input is an empty string", () => {
        expect(reverseString("")).toBe("");
    });

    it("should reverse a string with special characters", () => {
        expect(reverseString("a!b@c#")).toBe("#c@b!a");
    });
}); 


/////////////////////CHECKS ELEMENTS IN ARRAY///////////////
describe("contains", () => {
    it("should return true if the array contains the element", () => {
        expect(contains([1, 2, 3], 2)).toBe(true);
    });

    it("should return false if the array does not contain the element", () => {
        expect(contains([1, 2, 3], 4)).toBe(false);
    });

    it("should return false for an empty array", () => {
        expect(contains([], 1)).toBe(false);
    });
});


////////////////EMAIL VAIDATION FUNCTION////////////
describe("isValidEmail", () => {
    it("should return true for a valid email", () => {
        expect(isValidEmail("test@example.com")).toBe(true);
    });

    it("should return false for an email without an '@' symbol", () => {
        expect(isValidEmail("testexample.com")).toBe(false);
    });

    it("should return false for an email without a domain", () => {
        expect(isValidEmail("test@")).toBe(false);
    });

    it("should return false for an email with spaces", () => {
        expect(isValidEmail("test @example.com")).toBe(false);
    });
});

/////// CHECK OBJECT PROPERTY FUNCTION/////////////////
describe("hasProperty", () => {
    it("should return true if the object has the property", () => {
        expect(hasProperty({name: "John", age: 30}, "name")).toBe(true);
    });

    it("should return false if the object does not have the property", () => {
        expect(hasProperty({name: "John", age: 30}, "address")).toBe(false);
    });
});
















