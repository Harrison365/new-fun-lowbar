const { identity, fromPairs, times } = require("../lowbar");

// don't forget to export and import each of your new functions!

describe("identity", () => {
  test("returns the value passed as an argument", () => {
    expect(identity(3)).toBe(3);
    expect(identity("hello")).toBe("hello");
    expect(identity(true)).toBe(true);
  });
  test("return value has the same reference when passed an array or object", () => {
    const arr = [];
    expect(identity(arr)).toBe(arr);
    const obj = {};
    expect(identity(obj)).toBe(obj);
  });
});

//////////////fromPairs///////////////////////////////////////////////////

describe("fromPairs", () => {
  test("when given an empty array, returns empty array", () => {
    expect(fromPairs([])).toEqual({});
  });
  test("when given 1 nested array, returns object with one propery (key:value are the same as the array values)", () => {
    expect(fromPairs([["a", 1]])).toEqual({ a: 1 });
  });
  test("when given more then one nested array, returns object with multiple properties", () => {
    expect(
      fromPairs([
        ["a", 1],
        ["b", 2],
      ])
    ).toEqual({ a: 1, b: 2 });
  });
});

//////////////times///////////////////////////////////////////////////

describe("times", () => {
  test("if n is 0, returns empty array", () => {
    let funky = (thing) => {
      return thing;
    };
    expect(times(0, funky)).toEqual([]);
  });
  test("if n is 1, returns an array with one item and invokes funky once", () => {
    count = 0;
    let funky = (thing) => {
      count++;
      return thing;
    };
    expect(times(1, funky)).toEqual([0]);
    expect(count).toBe(1);
  });
  test("if n is 2, returns an array with 2 items and invokes funky twice", () => {
    count = 0;
    let funky = (thing) => {
      count++;
      return thing;
    };
    expect(times(2, funky)).toEqual([0, 1]);
    expect(count).toBe(2);
  });
  //if you want to use a mock function instead of a count vvv
  test("if n is 2, returns an array with 2 items and invokes funky twice", () => {
    let mock = jest.fn((thing) => thing);
    expect(times(2, mock)).toEqual([0, 1]);
    expect(mock).toHaveBeenCalledTimes(2);
    expect(mock).toHaveBeenCalledWith(1); //0 or 1
  });
});
