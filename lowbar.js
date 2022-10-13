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

module.exports = { identity, fromPairs, times };
