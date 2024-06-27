//ADDITION FUNCTION///////////
describe('Aqsa.js', () => {
    //testcase1
    it("should return the sum of two positive numbers", () => {
        const calculator = new Calculator();
        expect(calculator.add(1, 2)).toBe(3);
     });
  //testcase2
     it("should return the sum of a positive and a negative number", () => {
         const calculator = new Calculator();
        expect(calculator.add(1, -2)).toBe(-1);
     });
  //testcase3
     it("should return the sum of two negative numbers", () => {
         const calculator = new Calculator();
         expect(calculator.add(-1, -2)).toBe(-3);
     });
  
  });
  
////////////////EXPONENTIAL FUNCTION/////////////

describe('exponential', () => {
    it('should return correct result for positive base and exponent', () => {
        expect(exponential(2, 3)).toEqual(8);
    });

    it('should return 1 when exponent is 0', () => {
        expect(exponential(5, 0)).toEqual(1);
    });

    it('should return correct result for negative base and positive exponent', () => {
        expect(exponential(-2, 2)).toEqual(4);
    });

    it('should return correct result for base 0 and positive exponent', () => {
        expect(exponential(0, 5)).toEqual(0);
    });

    it('should return correct result for base 0 and exponent 0', () => {
        expect(exponential(0, 0)).toEqual(1);
    });

    it('should return Infinity for base 0 and exponent < 0', () => {
        expect(exponential(0, -3)).toEqual(Infinity);
    });
});





  //CONCATENATION FUNCTION//////////////
  describe("concat", function() {
    it("should concatenate two strings", function() {
        expect(concat("Hello, ", "world!")).toBe("Hello, world!");
        expect(concat("foo", "bar")).toBe("foobar");
    });
    
    it("should handle empty strings", function() {
        expect(concat("", "world!")).toBe("world!");
        expect(concat("Hello, ", "")).toBe("Hello, ");
        expect(concat("", "")).toBe("");
    });
    
    it("should handle non-string inputs", function() {
        expect(concat(123, 456)).toBe("123456");
         expect(concat(true, false)).toBe("truefalse");
         expect(concat(null, undefined)).toBe("nullundefined");
    
    });
    });
    

 ////////MAX AND MIN FUNCTION
describe("Find Max and Min in Array", function() {
    it("should return null for an empty array", function() {
      expect(findMax([])).toBeNull();
      expect(findMin([])).toBeNull();
    });
  
    it("should return the maximum value in the array", function() {
      expect(findMax([1, 2, 3, 4, 5])).toEqual(5);
      expect(findMax([-1, -2, -3, -4, -5])).toEqual(-1);
      expect(findMax([5, 3, 9, 1, 8])).toEqual(9);
    });
  
    it("should return the minimum value in the array", function() {
      expect(findMin([1, 2, 3, 4, 5])).toEqual(1);
      expect(findMin([-1, -2, -3, -4, -5])).toEqual(-5);
      expect(findMin([5, 3, 9, 1, 8])).toEqual(1);
    });
  });
    //BUBBLE SORTING FUNCTION//////////////
    describe("Bubble Sort", function() {

        // Test case 1: Sorting an empty array
        it("should return an empty array if input is empty", function() {
            expect(bubbleSort([])).toEqual([]);
        });
    
        // Test case 2: Sorting an already sorted array
        it("should return the same array if it is already sorted", function() {
            expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
        });
    
        // Test case 3: Sorting an array with negative numbers
        it("should sort an array with negative numbers", function() {
            expect(bubbleSort([3, -2, 1, -5, 4])).toEqual([-5, -2, 1, 3, 4]);
        });
    
        // Test case 4: Sorting an array with duplicate elements
        it("should sort an array with duplicate elements", function() {
            expect(bubbleSort([5, 3, 1, 5, 2, 4])).toEqual([1, 2, 3, 4, 5, 5]);
        });
    
        // Test case 5: Sorting an array with mixed data types
        it("should sort an array with mixed data types", function() {
            expect(bubbleSort([5, 'a', 2, 'c', 1])).toEqual([1, 2, 5, 'a', 'c']);
        });
    
    });
    
