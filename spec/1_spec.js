describe('Positive Sum', () => {
    it('should return a sum of all numbers if all number are positive', () => {
        expect(positiveSum([1,2,3])).toBe(6);
    });
    it('if there is a negative number in the provided array, it should not be included as part of the sum', () => {
        expect(positiveSum([-2,-2,2,2])).toBe(4);
    });
    it('if provided array is empty, it should return a sum of 0', () => {
        expect(positiveSum([])).toBe(0);
    });
    it(' if provided array is all negative numbers, it should return a sum of 0', () => {
        expect(positiveSum([-2,-3,-4])).toBe(0);
    });
});



describe('Is Divisible', () => {
    it('if number is divisible by both of the provided divisors, it should return true', () => {
        expect(isDivisible(6,3,2)).toBe(true);
    });
    it('if  number is smaller then both the provided divisors, it should return false', () => {
        expect(isDivisible(2,4,6)).toBe(false);
    });
    it('if number is not divisible by only one of the provided divisors it should return false', () => {
        expect(isDivisible(6,3,5)).toBe(false);
    });
    it('if number is not divisible by any of the provided divisors it should return false.', () => {
        expect(isDivisible(6,4,5)).toBe(false);
    });
});


describe('Solution', () => {
    it('if there is only 1 characters in the string, it returns itself', () => {
        expect(solution('g')).toBe('g');
    });
    it('if there are multiple characters in the string it returns the string, reversed', () => {
        expect(solution('abcd')).toBe('dcba');
    });
    it('if there are no characters in the string, it returns empty string', () => {
        expect(solution('')).toBe('');
    });
});

describe('Reverse Sequence', () => {
    it('if nothin passed in returns an empty array', () => {
        expect(reverseSeq()).toEqual([]);
    });
    it('if positive number is passed should return an reversed array from n to 1', () => {
        expect(reverseSeq(5)).toEqual([5,4,3,2,1]);
    });
    it('if negative number is passed returns empty array', () => {
        expect(reverseSeq(-1)).toEqual([]);
    });
    it('if zero  is passed returns empty array', () => {
        expect(reverseSeq(0)).toEqual([]);
    });
});