const dateConverter = require('../dateConverter');

describe("dateConverter", () => {
    test("returns date string to desired DD/MM/YY format", () => {
      const input = '2020-01-04T00:24:00.000Z';
      const actual = dateConverter(input);
      expect(actual).not.toBe(input);
      expect(actual).toBe('04/01/20');
    });
  });