const buzzFizz = require('./BuzzFizz')

test('BuzzFiss', () => {
    expect(buzzFizz(15)).toBe('FizzBuzz');
    expect(buzzFizz(5)).toBe('Buzz');
    expect(buzzFizz(3)).toBe('Fizz');
    // expect(buzzFizz(0)).toBe(0); why dose this not work properly?
    expect(buzzFizz(7)).toBe(7);
    expect(buzzFizz(-7)).toBe(-7);
});