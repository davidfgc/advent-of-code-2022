const {
  isFullyContained, countFullyContained, isElfPairOverlapped, countOverlapped,
} = require('./day-4');
const data = require('./day-4-data');

describe('day 4', () => {
  const exampleInput = [
    '2-4,6-8',
    '2-3,4-5',
    '5-7,7-9',
    '2-8,3-7',
    '6-6,4-6',
    '2-6,4-8',
  ];

  describe('part 1', () => {
    describe('isFullyContained', () => {
      test('with 1-4,2-3 expects true', () => {
        const res = isFullyContained('1-4,2-3');

        expect(res).toBe(true);
      });
      test('with 2-3,1-4 expects true', () => {
        const res = isFullyContained('2-3,1-4');

        expect(res).toBe(true);
      });
      test('with 4-4,4-6 expects true', () => {
        const res = isFullyContained('4-4,4-6');

        expect(res).toBe(true);
      });
      test('with 6-6,4-6 expects true', () => {
        const res = isFullyContained('6-6,4-6');

        expect(res).toBe(true);
      });
      test('with 4-6,6-6 expects true', () => {
        const res = isFullyContained('4-6,6-6');

        expect(res).toBe(true);
      });
      test('with 1-2,3-4 expects false', () => {
        const res = isFullyContained('1-2,3-4');

        expect(res).toBe(false);
      });
      test('with 3-4,1-2 expects false', () => {
        const res = isFullyContained('3-4,1-2');

        expect(res).toBe(false);
      });
      test('with 1-2,2-3 expects false', () => {
        const res = isFullyContained('1-2,2-3');

        expect(res).toBe(false);
      });
      test('with 2-3,1-2 expects false', () => {
        const res = isFullyContained('2-3,1-2');

        expect(res).toBe(false);
      });
      test('with 1-3,2-4 expects false', () => {
        const res = isFullyContained('1-3,2-4');

        expect(res).toBe(false);
      });
      test('with 2-4,1-3 expects false', () => {
        const res = isFullyContained('2-4,1-3');

        expect(res).toBe(false);
      });
    });
    describe('countFullyContained', () => {
      test('with 6-6,4-6 1-2,3-4 expect 1', () => {
        const elfPairs = [
          '6-6,4-6',
          '1-2,3-4',
        ];
        const fullyContainedCount = countFullyContained(elfPairs);

        expect(fullyContainedCount).toBe(1);
      });
      test('with all false expect 0', () => {
        const elfPairs = [
          '1-3,5-7',
          '1-3,3-5',
          '1-3,2-4',
          '5-7,1-3',
          '3-5,1-3',
          '2-4,1-3',
        ];

        const fullyContainedCount = countFullyContained(elfPairs);

        expect(fullyContainedCount).toBe(0);
      });
      test('with example input expect 2', () => {
        const fullyContainedCount = countFullyContained(exampleInput);

        expect(fullyContainedCount).toBe(2);
      });
      test('with data input expect 2', () => {
        const fullyContainedCount = countFullyContained(data);
        console.log(`Fully contained: ${fullyContainedCount}`);
      });
    });
  });
  describe('part 2', () => {
    describe('isElfPairOverlapped', () => {
      test('with 1-3,5-7 expects false', () => {
        const elfPair = '1-3,5-7';

        const response = isElfPairOverlapped(elfPair);

        expect(response).toBe(false);
      });
      test('with 1-3,3-5 expects true', () => {
        const elfPair = '1-3,3-5';

        const response = isElfPairOverlapped(elfPair);

        expect(response).toBe(true);
      });
    });
    describe('countOverlapped', () => {
      test('with example expects 4', () => {
        const overlappedCount = countOverlapped(exampleInput);

        expect(overlappedCount).toBe(4);
      });
      test('with data', () => {
        const overlappedCount = countOverlapped(data);
        console.log(`Overlapped: ${overlappedCount}`);
      });
    });
  });
});
