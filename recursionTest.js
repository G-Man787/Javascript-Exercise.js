"use strict";
/* global pow assert */


  describe("calculate the power of any base using Recursion", function () {

    it("10000 is  10 the power of 4 ", function () {
        assert.strictEqual(power(10, 4), 10000);
    });
});

describe("reverse of a given string using Recursion", function () {

    it("apple is reversed to elppa", function () {
        assert.strictEqual(reverse("apple"), "elppa");
    });
});

describe("count the digits of a given number using Recursion", function () {

    it("The total count of the digits 1234 is 4", function () {
        assert.strictEqual(countDigits(1234), 4);
    });

});
describe("countProperties from the given Object", function () {

    it("In the object bob = { name: 'Bob', age: 10 }  there are two properties", function () {
        const bob = { name: "Bob", age: 10 }
        assert.strictEqual(countProperties(bob), 2);
    });
});
describe("Comparing two arrays by using their index ", function () {

    it("The two arrays [1, 2, 3] and [1, 2, 3] are equal ", function () {
        assert.strictEqual(isArrayEqual([1, 2, 3], [1, 2, 3]), true);
    });
});
describe("To calulate the first and the last element of an array", function () {

    it("The sum of first element -1 and last elemrnt -55 is -56", function () {
        assert.strictEqual(addends([-1, -100, 1, 2, 3, -55]), -56);
    });
    it("The sum of first element -10 and last elemrnt 20 is 10", function () {
        assert.strictEqual(addends([-10, 2, 3, 4, 20]), 10);
    });

});
describe("palindrome using push and pop methods", function () {

    it("The word aba reversed same as aba hence it is Palindrome", function () {
        assert.strictEqual(isPalindrome(["a", "b", "a"]), true);
    });
    it("The word abc reversed is not same as cba hence it is not Palindrome", function () {
        assert.strictEqual(isPalindrome(["a", "b", "c"]), false);
    });
    it("The word rotator reversed same as rotator hence it is Palindrome", function () {
        assert.strictEqual(isPalindrome(["r", "o", "t", "a", "t", "o", "r"]), true);
    });
});
describe("To check if there is a word prize or lottery in the given text", function () {

    it("The String 'there is a prize in the lottery' contains prize and lottery", function () {
        const string1 = "there is a prize in the lottery"
        assert.strictEqual(checkSpam(string1), true);
    });
    it("The string'there is a nothing in the fridge' does not contain prize or lottery", function () {
        const string2 = "there is a nothing in the fridge"
        assert.strictEqual(checkSpam(string2), false);
    });
});
describe("To check if the given names have same Suffix", function () {
    const jackson = "Jackson";
    const johnson = "Johnson";
    const wholesome = "wholesome";
    it("In jackson and johnson there is the suffix son", function () {
        assert.strictEqual(suffix(jackson, johnson), "son");
    });
    it("In Jackson and wholesome there is no common suffix", function () {
        assert.strictEqual(suffix(jackson, wholesome), "");
    });
});
describe("To find the average age of the given people object", function () {
    const people = [{name:"Sam", age:20},  {name:"Fred", age:10}];
    
    it("The average age of persons, age 20 and 10 in the people object is 15", function () {
        assert.strictEqual(getAverageAge(people), 15);
    });
});
describe("To calculate the sum of first elements of the given arrays", function () {
    const arr = [[1, 2], [3, 4], [5, 6]]  ;
    
    it("The sum of the first elements of an array [1, 2], [3, 4], [5, 6] is 9 ", function () {
        assert.strictEqual(sumFirst(arr), 9);
    });
});
describe("To change the first letter of the given to capital as a title name", function () {
    const jackson = "jackson";

    it("The name of jackson after his first letter capital is Jackson ", function () {
        assert.strictEqual(titleCase("jackson"), "Jackson");
    });
});