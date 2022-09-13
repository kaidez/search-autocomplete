import { buildList } from '../helpers';

const testDataOne = [{ age: 21 }, { name: 'joe' }];
const testDataTwo = [
  { age: 21, name: 'joe', city: 'NYC' },
  { age: 15, name: 'jill' },
];

describe('helpers.ts --> tests', () => {
  describe('buildList() method', () => {
    it('returns an array with one string', () => {
      expect(buildList(testDataOne, 'name')).toStrictEqual(['joe']);
    });

    it('returns an array with two strings', () => {
      expect(buildList(testDataTwo, 'name')).toStrictEqual(['joe', 'jill']);
    });

    it('returns an array with one number', () => {
      expect(buildList(testDataOne, 'age')).toStrictEqual([21]);
    });

    it('returns an array with two numbers', () => {
      expect(buildList(testDataTwo, 'age')).toStrictEqual([21, 15]);
    });
  });
});
