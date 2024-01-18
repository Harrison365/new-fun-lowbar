function identity(x) {
  return x;
}

function fromPairs(arrPairs) {
  let obj = {};
  for (let i = 0; i < arrPairs.length; i++)
    obj[arrPairs[i][0]] = arrPairs[i][1];
  return obj;
}

function sumBy(objects, func) {
  let sum = 0;
  for (let i = 0; i < objects.length; i++) {
    if (typeof func === "function") {
      sum += func(objects[i]);
    } else if (typeof func === "string") {
      sum += objects[i][func];
    }
  }
  return sum;
}

function maxBy(objects, func) {
  if (objects.length === 0) {
    return undefined;
  }
  if (objects.length === 1) {
    return objects[0];
  }
  let max = 0;
  let maxObj = {};
  for (let i = 0; i < objects.length; i++) {
    if (typeof func === "function") {
      if (func(objects[i]) > max) {
        maxObj = objects[i];
      }
    } else if (typeof func === "string") {
      if (objects[i][func] > max) {
        maxObj = objects[i];
      }
    }
  }
  return maxObj;
}

function times(n, func) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(func(i));
  }
  return arr;
}

//if passed _.constant(0) as func...
//_.constant returns a function which, no matter what its passed returns the outer functions arguement. Meaning ^^^this solution will be fine if the function arguement was for example _.constant(0) as it equates to a function which returns 0 what ever its passed

function takeWhile(arr, func) {
  //function to check that the keys and values of 2 objects match
  function checkObjMatch(o1, o2) {
    for (let key in o1) {
      if (o1[key] !== o2[key]) {
        return false;
      }
    }
    return true;
  }

  let newArr = [];
  if (typeof func === "function") {
    for (let i = 0; i < arr.length; i++) {
      if (func(arr[i])) {
        newArr.push(arr[i]);
      } else {
        return newArr;
      }
    }
  } else if (typeof func === "object" && !Array.isArray(func)) {
    for (let i = 0; i < arr.length; i++) {
      if (checkObjMatch(arr[i], func)) {
        newArr.push(arr[i]);
      } else {
        return newArr;
      }
    }
  } else if (Array.isArray(func)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][func[0]] === func[1]) {
        newArr.push(arr[i]);
      } else {
        return newArr;
      }
    }
  } else if (typeof func === "string") {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][func]) {
        newArr.push(arr[i]);
      } else {
        return newArr;
      }
    }
  }
  return newArr;
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

module.exports = { identity, fromPairs, sumBy, maxBy, times, takeWhile, map };
