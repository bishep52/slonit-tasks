const obj = {
  name: "Egor",
  salary: 200,
  age: 19,
  height: 182,
};

function getSumOfObjNumsFields(obj) {
  return Object.values(obj)
    .filter((it) => typeof it === "number")
    .reduce((acc, val) => acc + val, 0);
}

console.log(getSumOfObjNumsFields(obj));

// *

function getSortedKeysOfObjNumsFields(obj) {
  const result = [];

  for (let key in obj) {
    if (typeof obj[key] === "number") {
      result.push(key);
    }
  }

  result.sort((a, b) => obj[b] - obj[a]);

  return result;
}

console.log(getSortedKeysOfObjNumsFields(obj));
