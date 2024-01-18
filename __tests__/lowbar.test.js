const {
  identity,
  fromPairs,
  sumBy,
  maxBy,
  times,
  takeWhile,
  map,
} = require("../lowbar");

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

//////////sumBy///////////////////////////////////////////////////

describe("sumBy", () => {
  test("when given an empty array, returns 0", () => {
    expect(
      sumBy([], function (object) {
        return object.n;
      })
    ).toBe(0);
  });
  test("when given an array of objects and a function, returns the sum of the values of the objects at specified key", () => {
    expect(
      sumBy([{ n: 4 }, { n: 2 }, { n: 8 }], function (object) {
        return object.n;
      })
    ).toBe(14);
  });
  test("checks that the function is invoked the correct number of times with the correct arguments and return values", () => {
    const mock = jest.fn((object) => object.n);
    sumBy([{ n: 4 }, { n: 2 }, { n: 8 }], mock);
    expect(mock).toHaveBeenCalledTimes(3);
    expect(mock).toHaveBeenCalledWith({ n: 4 });
    expect(mock).toHaveBeenCalledWith({ n: 2 });
    expect(mock).toHaveBeenCalledWith({ n: 8 });
    expect(mock).toHaveReturnedWith(4);
    expect(mock).toHaveReturnedWith(2);
    expect(mock).toHaveReturnedWith(8);
  });
  test("SHORTHAND TEST - when given an array of objects and a function, returns the sum of the values of the objects at specified key", () => {
    expect(sumBy([{ n: 4 }, { n: 2 }, { n: 8 }], "n")).toBe(14);
  });
});

//////////////maxBy///////////////////////////////////////////////////

describe("maxBy", () => {
  test("when given an empty array, returns 0", () => {
    expect(
      maxBy([], function (object) {
        return object.n;
      })
    ).toBe(undefined);
  });
  test("when given an array with a single object, returns the single object", () => {
    expect(
      maxBy([{ n: 4 }], function (object) {
        return object.n;
      })
    ).toEqual({ n: 4 });
  });
  test("when given an array of objects and a function, returns the max value of the objects at specified key", () => {
    expect(
      maxBy([{ n: 4 }, { n: 2 }, { n: 8 }], function (object) {
        return object.n;
      })
    ).toEqual({ n: 8 });
  });
  test("SHORTHAND TEST - when given an array of objects and a function, returns the max value of the objects at specified key", () => {
    expect(maxBy([{ n: 4 }, { n: 2 }, { n: 8 }], "n")).toEqual({ n: 8 });
  });
  test("checks that the function is invoked the correct number of times with the correct arguments and return values", () => {
    const mock = jest.fn((object) => object.n);
    maxBy([{ n: 4 }, { n: 2 }, { n: 8 }], mock);
    expect(mock).toHaveBeenCalledTimes(3);
    expect(mock).toHaveBeenCalledWith({ n: 4 });
    expect(mock).toHaveBeenCalledWith({ n: 2 });
    expect(mock).toHaveBeenCalledWith({ n: 8 });
    expect(mock).toHaveReturnedWith(4);
    expect(mock).toHaveReturnedWith(2);
    expect(mock).toHaveReturnedWith(8);
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
    //toHaveReturnedWith is also a matcher, it checks the return value of the mock function
  });
});

//////////////takeWhile///////////////////////////////////////////////////

describe("takeWhile", () => {
  test("if array is empty, returns empty array", () => {
    let funky = (thing) => {
      return thing;
    };
    expect(takeWhile([], funky)).toEqual([]);
  });
  test("SHORTHAND TEST - takes array of objects and returns array of objects until it finds an object which doesnt match the object passed as the second arguement", () => {
    expect(
      takeWhile([{ n: true }, { n: true }, { n: false }, { n: true }], {
        n: true,
      })
    ).toEqual([{ n: true }, { n: true }]);
  });
  test("SHORTHAND TEST - takes array of objects and returns array of objects until it finds an object which doesnt match the array passed as the second arguement", () => {
    expect(
      takeWhile(
        [
          { n: true, m: false },
          { n: true, m: true },
          { n: false, m: true },
          { n: true, m: true },
        ],
        ["n", true]
      )
    ).toEqual([
      { n: true, m: false },
      { n: true, m: true },
    ]);
  });
  test("SHORTHAND TEST - takes array of objects and returns array of objects until it finds an object which is falsey at the key passed as the second arguement", () => {
    expect(
      takeWhile(
        [
          { n: true, m: false },
          { n: true, m: true },
          { n: false, m: true },
          { n: true, m: true },
        ],
        "n"
      )
    ).toEqual([
      { n: true, m: false },
      { n: true, m: true },
    ]);
  });
});

//////////////map///////////////////////////////////////////////////

describe("map", () => {
  test("if array is empty, returns empty array", () => {
    let funky = (thing) => {
      return thing;
    };
    expect(map([], funky)).toEqual([]);
  });
  test("takes an array and returns an array where each item has been passed through the function passed as the second arguement AND function called right amount of times with right arguments", () => {
    let funky = jest.fn((thing) => {
      return thing + 1;
    });
    expect(map([1, 2, 3], funky)).toEqual([2, 3, 4]);
    expect(funky).toHaveBeenCalledTimes(3);
    expect(funky).toHaveBeenCalledWith(1);
    expect(funky).toHaveBeenCalledWith(2);
    expect(funky).toHaveBeenCalledWith(3);
    expect(funky).toHaveReturnedWith(2);
    expect(funky).toHaveReturnedWith(3);
    expect(funky).toHaveReturnedWith(4);
  });
  test("SHORTHAND TEST - takes an object and returns an array where object value has been passed through the function passed as the second arguement AND function called right amount of times with right arguments", () => {
    let funky = jest.fn((thing) => {
      return thing + 1;
    });
    expect(map({ a: 1, b: 2, c: 3 }, funky)).toEqual([2, 3, 4]);
    expect(funky).toHaveBeenCalledTimes(3);
    expect(funky).toHaveBeenCalledWith(1);
    expect(funky).toHaveBeenCalledWith(2);
    expect(funky).toHaveBeenCalledWith(3);
    expect(funky).toHaveReturnedWith(2);
    expect(funky).toHaveReturnedWith(3);
    expect(funky).toHaveReturnedWith(4);
  });

  test("SHORTHAND TEST - takes an array of objects and returns an array of values from each object at the key specified in the second arguement", () => {
    expect(
      map(
        [
          { n: 4, m: 2 },
          { n: 2, m: 2 },
          { n: 8, m: 2 },
        ],
        "n"
      )
    ).toEqual([4, 2, 8]);
  });
});

//CONSOLE.LOG TESTING

//to spy on console.log calls vvv
// consoleLogSpy = jest.spyOn(console, "log");
// expect(consoleLogSpy.mock.calls[0][0]).toBe(
//   "What ever you expect the first log to be"
// );
// expect(consoleLogSpy.mock.calls[1][0]).toBe("...and the second log to be this");
// //to clear this spy vvv
// consoleLogSpy.mockRestore();
