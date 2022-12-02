const { getRoundScore, getGameScore } = require('./day-2');
const data = require('./day-2-data');

describe('day 2', () => {
  describe('part 1', () => {
    describe('getRoundScore', () => {
      test('with A X expects 4', () => {
        const score = getRoundScore('A X');

        expect(score).toBe(4);
      });
      test('with A Y expects 8', () => {
        const score = getRoundScore('A Y');

        expect(score).toBe(8);
      });
      test('with B X expects 1', () => {
        const score = getRoundScore('B X');

        expect(score).toBe(1);
      });
      test('with B Y expects 5', () => {
        const score = getRoundScore('B Y');

        expect(score).toBe(5);
      });
      test('with C Z expects 6', () => {
        const score = getRoundScore('C Z');

        expect(score).toBe(6);
      });
    });
    describe('getGameScore', () => {
      test('with example input expects 15', () => {
        const exampleInput = [
          'A Y',
          'B X',
          'C Z',
        ];

        const gameScore = getGameScore(exampleInput);

        expect(gameScore).toBe(15);
      });
      test('with data', () => {
        const gameScore = getGameScore(data);
        console.log(`Game Score: ${gameScore}`);
      });
    });
  });
});
