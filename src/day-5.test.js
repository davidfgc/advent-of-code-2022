const {
  getMarkAtPosition, readLine, readLines, runMoveCommand, getTopCrates, getTopCratesFromData,
} = require('./day-5');
const data = require('./day-5-data');

describe('day 5', () => {
  describe('part 1', () => {
    describe('getMarkAtPosition', () => {
      test('with with 0 and [M]                     [N] [Z] expects M', () => {
        const line = '[M]                     [N] [Z]';

        const mark = getMarkAtPosition(0, line);

        expect(mark).toBe('M');
      });
      test('with with 1 and [M]                     [N] [Z] expects a space', () => {
        const line = '[M]                     [N] [Z]';

        const mark = getMarkAtPosition(1, line);

        expect(mark).toBe(' ');
      });
      test('with with 6 and [M]                     [N] [Z] expects N', () => {
        const line = '[M]                     [N] [Z]';

        const mark = getMarkAtPosition(6, line);

        expect(mark).toBe('N');
      });
    });
    describe('readLine', () => {
      test('with [M]                     [N] [Z] expects 0->M', () => {
        const line = '[M]                     [N] [Z]';

        const arr = readLine(line);

        expect(arr[0]).toBe('M');
        expect(arr[1]).toEqual(' ');
        expect(arr[6]).toEqual('N');
        expect(arr[7]).toEqual('Z');
        expect(arr[8]).toEqual(' ');
      });
      test('with [F]             [R] [Z] [C] [C] expects 0->F', () => {
        const line = '[F]             [R] [Z] [C] [C]';

        const arr = readLine(line);

        expect(arr[0]).toBe('F');
        expect(arr[1]).toEqual(' ');
        expect(arr[4]).toEqual('R');
        expect(arr[5]).toEqual('Z');
        expect(arr[6]).toEqual('C');
        expect(arr[7]).toEqual('C');
      });
    });
    describe('runMoveCommand', () => {
      test('with move 1 from 1 to 2 expects first empty', () => {
        const cratesMatrix = [
          ['A'],
          ['B'],
        ];

        const newCrates = runMoveCommand(cratesMatrix, 'move 1 from 1 to 2');

        expect(newCrates[0]).toEqual([]);
      });
      test('with move 1 from 1 to 2 expects B, A', () => {
        const cratesMatrix = [
          ['A'],
          ['B'],
        ];

        const newCrates = runMoveCommand(cratesMatrix, 'move 1 from 1 to 2');

        expect(newCrates[1]).toEqual(['B', 'A']);
      });
      test('with move 2 from 1 to 2 expects first empty', () => {
        const cratesMatrix = [
          ['A', 'C'],
          ['B'],
        ];

        const newCrates = runMoveCommand(cratesMatrix, 'move 2 from 1 to 2');

        expect(newCrates[0]).toEqual([]);
      });
      test('with move 2 from 1 to 2 expects B, A, C', () => {
        const cratesMatrix = [
          ['A', 'C'],
          ['B'],
        ];

        const newCrates = runMoveCommand(cratesMatrix, 'move 2 from 1 to 2');

        expect(newCrates[1]).toEqual(['B', 'A', 'C']);
      });
    });
    describe('readLines', () => {
      test('with [M]                     [N] [Z] and [F]             [R] [Z] [C] [C] expects 0->F,M', () => {
        const lines = [
          '[M]                     [N] [Z]',
          '[F]             [R] [Z] [C] [C]',
        ];

        const arr = readLines(lines);

        expect(arr[0][0]).toBe('F');
        expect(arr[0][1]).toBe('M');
        expect(arr[7][0]).toBe('C');
        expect(arr[7][1]).toBe('Z');
      });
      test('with 3 last lines expects ignore positions', () => {
        const lastLines = [
          '[L] [B] [C] [P] [S] [D] [M] [Q] [P]',
          '[B] [N] [J] [S] [Z] [W] [F] [W] [R]',
          ' 1   2   3   4   5   6   7   8   9'];

        const arr = readLines(lastLines);

        expect(arr[0][0]).toBe('B');
      });
      test('with example expects example response', () => {
        const example = [
          '    [D]    ',
          '[N] [C]    ',
          '[Z] [M] [P]',
          '',
          'move 1 from 2 to 1',
          'move 3 from 1 to 3',
          'move 2 from 2 to 1',
          'move 1 from 1 to 2',
        ];

        const newCrates = readLines(example);

        expect(newCrates[0]).toEqual(['M']);
        expect(newCrates[1]).toEqual(['C']);
        expect(newCrates[2]).toEqual(['P', 'Z', 'N', 'D']);
      });
    });
    describe('getTopCrates', () => {
      test('with A,B expects A,B', () => {
        const cratesMatrix = [
          ['A'],
          ['B'],
        ];

        const topCrates = getTopCrates(cratesMatrix);

        expect(topCrates).toEqual(['A', 'B']);
      });
      test('with A,B-C expects A,C', () => {
        const cratesMatrix = [
          ['A'],
          ['B', 'C'],
        ];

        const topCrates = getTopCrates(cratesMatrix);

        expect(topCrates).toEqual(['A', 'C']);
      });
      test('with A,,B-C expects A,,C', () => {
        const cratesMatrix = [
          ['A'],
          [],
          ['B', 'C'],
        ];

        const topCrates = getTopCrates(cratesMatrix);

        expect(topCrates).toEqual(['A', '', 'C']);
      });
      test('with example expects C,M,Z', () => {
        const cratesMatrix = [
          ['C'],
          ['M'],
          ['P', 'D', 'N', 'Z'],
        ];

        const topCrates = getTopCrates(cratesMatrix);

        expect(topCrates).toEqual(['C', 'M', 'Z']);
      });
    });
    describe('getTopCratesFromData', () => {
      test('with example expects C,M,Z', () => {
        const example = [
          '    [D]    ',
          '[N] [C]    ',
          '[Z] [M] [P]',
          '',
          'move 1 from 2 to 1',
          'move 3 from 1 to 3',
          'move 2 from 2 to 1',
          'move 1 from 1 to 2',
        ];

        const topCrates = getTopCratesFromData(example);

        expect(topCrates).toEqual(['M', 'C', 'D', '', '', '', '', '', '']);
      });
      test('with data', () => {
        const topCrates = getTopCratesFromData(data);
        console.log(`Top Crates: ${topCrates}`);
      });
    });
  });
});
