const {
  getRoundScore, getGameScore, getRoundScore2, getGameScore2,
} = require('./day-2');
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
  describe('part 2', () => {
    describe('getRoundScore2', () => {
      test('with A Y expects 4', () => {
        const roundScore = getRoundScore2('A Y');

        expect(roundScore).toBe(4);
      });
      test('with B X expects 1', () => {
        const roundScore = getRoundScore2('B X');

        expect(roundScore).toBe(1);
      });
      test('with C Z expects 7', () => {
        const roundScore = getRoundScore2('C Z');

        expect(roundScore).toBe(7);
      });
    });
    describe('getGameScore2', () => {
      test('with example input expects 12', () => {
        const exampleInput = [
          'A Y',
          'B X',
          'C Z',
        ];

        const gameScore = getGameScore2(exampleInput);

        expect(gameScore).toBe(12);
      });
      test('with data', () => {
        const gameScore = getGameScore2(data);
        console.log(`Game Score 2: ${gameScore}`);
      });
    });
  });
});
