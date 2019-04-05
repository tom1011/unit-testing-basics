const isLeapYear = require('./IsLeapYear')

test('BuzzFiss', () => {
    expect(isLeapYear(400)).toBe(true);
    expect(isLeapYear(100)).toBe(false);
    expect(isLeapYear(404)).toBe(true);
    expect(isLeapYear(99)).toBe(false);
})