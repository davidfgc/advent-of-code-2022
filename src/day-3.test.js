const { getItemType, getItemTypePriority, getPrioritiesSum } = require('./day-3');
const data = require('./day-3-data');

describe('day 3', () => {
  describe('part 1', () => {
    describe('findItemType', () => {
      test('with abac expects a', () => {
        const items = 'abac';

        const itemType = getItemType(items);

        expect(itemType).toBe('a');
      });
      test('with vJrwpWtwJgWrhcsFMMfFFhFp expects p', () => {
        const items = 'vJrwpWtwJgWrhcsFMMfFFhFp';

        const itemType = getItemType(items);

        expect(itemType).toBe('p');
      });
    });
    describe('getItemTypePriority', () => {
      test('with a expects 1', () => {
        const itemType = 'a';

        const itemTypeValue = getItemTypePriority(itemType);

        expect(itemTypeValue).toBe(1);
      });
      test('with z expects 26', () => {
        const itemType = 'z';

        const itemTypeValue = getItemTypePriority(itemType);

        expect(itemTypeValue).toBe(26);
      });
      test('with a expects 27', () => {
        const itemType = 'A';

        const itemTypeValue = getItemTypePriority(itemType);

        expect(itemTypeValue).toBe(27);
      });
      test('with z expects 52', () => {
        const itemType = 'Z';

        const itemTypeValue = getItemTypePriority(itemType);

        expect(itemTypeValue).toBe(52);
      });
    });
    describe('getPrioritiesSum', () => {
      test('with example expects 157', () => {
        const exampleInput = [
          'vJrwpWtwJgWrhcsFMMfFFhFp',
          'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
          'PmmdzqPrVvPwwTWBwg',
          'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
          'ttgJtRGJQctTZtZT',
          'CrZsJsPPZsGzwwsLwLmpwMDw',
        ];

        const prioritiesSum = getPrioritiesSum(exampleInput);

        expect(prioritiesSum).toBe(157);
      });
      test('with data', () => {
        const prioritiesSum = getPrioritiesSum(data);

        console.log(`Priorities sum: ${prioritiesSum}`);
      });
    });
  });
});
