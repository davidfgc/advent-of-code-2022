const {
  getElfsCalories, getMax, getMaxCalories, getTopThree, getTopThreeCalories,
} = require('./day-1');
const data = require('./day-1.data');

const exampleData = [
  '1000',
  '2000',
  '3000',
  '',
  '4000',
  '',
  '5000',
  '6000',
  '',
  '7000',
  '8000',
  '9000',
  '',
  '10000',
];

describe('day 1', () => {
  describe('part 1', () => {
    describe('getElfsCalories', () => {
      test('with 1000 expects 1000', () => {
        expect(getElfsCalories(['1000'])).toEqual([1000]);
      });
      test('with 1000,2000 expects 3000', () => {
        expect(getElfsCalories(['1000', '2000'])).toEqual([3000]);
      });
      test('with 1000,2000,,3000 expects 3000,3000', () => {
        expect(getElfsCalories(['1000', '2000', '', '3000'])).toEqual([3000, 3000]);
      });
    });
    describe('getMax', () => {
      test('with 1000 expects 1000', () => {
        expect(getMax([1000])).toBe(1000);
      });
      test('with 1000,2000 expects 2000', () => {
        expect(getMax([1000, 2000])).toBe(2000);
      });
      test('with 2000, 1000 expects 2000', () => {
        expect(getMax([2000, 1000])).toBe(2000);
      });
    });
    describe('getMaxCalories', () => {
      test('with example expects 24000', () => {
        expect(getMaxCalories(exampleData)).toBe(24000);
      });
      test('with data', () => {
        const res = getMaxCalories(data);
        console.log(`Most calories: ${res}`);
      });
    });
  });
  describe('part 2', () => {
    describe('getTopThreeSum', () => {
      test('with 1000, 2000, 3000, 4000 expects 9000', () => {
        expect(getTopThree([1000, 2000, 3000, 4000])).toBe(9000);
      });
      test('with 2000, 3000, 4000, 1000 expects 9000', () => {
        expect(getTopThree([2000, 3000, 4000, 1000])).toBe(9000);
      });
      test('with 6000, 4000, 11000, 24000 expects 41000', () => {
        expect(getTopThree([6000, 4000, 11000, 24000])).toBe(41000);
      });
      test('with 6000, 4000, 11000, 24000, 10000 expects 41000', () => {
        expect(getTopThree([6000, 4000, 11000, 24000, 10000])).toBe(45000);
      });
      test('with example expects 45000', () => {
        expect(getTopThreeCalories(exampleData)).toBe(45000);
      });
      test('with data', () => {
        const res = getTopThreeCalories(data);
        console.log(`Top three calories: ${res}`);
      });
    });
  });
});
