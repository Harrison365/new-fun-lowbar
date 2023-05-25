function identity(x) {
  return x;
}

function fromPairs(arrPairs) {
  let obj = {};
  for (let i = 0; i < arrPairs.length; i++)
    obj[arrPairs[i][0]] = arrPairs[i][1];
  return obj;
}

function times(n, func) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(func(i));
  }
  return arr;
}

function map(collection, action) {
  const returnArr = [];
  if (Array.isArray(collection) && typeof action === "function") {
    for (let i = 0; i < collection.length; i++) {
      returnArr.push(action(collection[i]));
    }
  } else if (
    typeof collection === "object" &&
    !Array.isArray(collection) &&
    typeof action === "function"
  ) {
    for (let i in collection) {
      returnArr.push(action(collection[i]));
    }
  } else if (
    typeof collection[0] === "object" &&
    !Array.isArray(collection[0]) &&
    typeof action === "string"
  ) {
    for (let i = 0; i < collection.length; i++) {
      if (collection[i].hasOwnProperty(action)) {
        returnArr.push(collection[i][action]);
      }
    }
  }
  return returnArr;
}
console.log(map([{ a: 1 }, { b: 2 }, { a: 3 }], "a"));

module.exports = { identity, fromPairs, times };
