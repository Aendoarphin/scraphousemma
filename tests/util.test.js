const { getCountryName } = require("../scripts/util");

test('United States -> United States of America', () => {
  expect(getCountryName("Florida, United States")).toBe("United States of America");
});

test('United States -> United States of America', () => {
  expect(getCountryName("United States")).toBe("United States of America");
});

test('England -> United Kingdom', () => {
  expect(getCountryName("London, England")).toBe("United Kingdom");
});

test('England -> United Kingdom', () => {
  expect(getCountryName("England")).toBe("United Kingdom");
});

test('undefined -> ""', () => {
  expect(getCountryName(undefined)).toBe("");
});