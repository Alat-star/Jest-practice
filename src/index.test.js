const {sum, getAboutUsLink, capitalizeString, reverseString, calc, caeser, scrutinize } = require('./index');

it('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

it('Returns about-us for english language', () => {
    expect(getAboutUsLink('en-US')).toBe('/about-us')
    // expect(getAboutUsLink("cs-CZ")).toBe("/o-nas");
})

test('Returns all-caps', () => {
  const name = 'jon'
  expect(capitalizeString(name)).toBe('JON')
})

test('Returns reversed string', () => {
  const name = 'mal'
  expect(reverseString(name)).toBe('lam')
})

test('Returns sum', () => {
  expect(calc.add(1,2)).toBe(3)
})

test('subtracts numbers', () => {
  expect(calc.subtract(10,2)).toBe(8)
})

test('Returns multiplication', () => {
  expect(calc.multiply(1,2)).toBe(2)
})

test('Returns sum', () => {
  expect(calc.divide(3,2)).toBeCloseTo(1.5)
})

test('Returns unicode', () => {
  const letter = 'attack';
  expect(caeser(letter, 0)).toBe('attack')
})

test('Returns unicode', () => {
  const letter = 'attack';
  expect(caeser(letter, 20)).toBe('unnuwe')
})

test('Returns unicode', () => {
  const letter = 'attack';
  expect(caeser(letter, 25)).toBe('zsszbj')
})

test('Returns sorted array', () => {
  const array = [1,4,5,6,7,8,3]
  expect(scrutinize(array)).toEqual({max: 8, min: 1, average: 4, length: 7 })
})


