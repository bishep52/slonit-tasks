const str = "hello world";

function makeFirstCharToUpCase(str) {
  if (str.trim().length > 0) {
    return str[0].toUpperCase() + str.slice(1);
  } else {
    return "Строка должна быть больше, чем 0 символов";
  }
}

console.log(makeFirstCharToUpCase(str));

const longStr =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugiat delectus nulla, ratione deleniti sed facere beatae dignissimos ex vero quos dolorem, fugit laborum.";

function getTrimmedString(str, limit) {
  let trimmedStr;

  if (str.length > limit) {
    trimmedStr = str.slice(0, limit) + "...";
  }

  return trimmedStr;
}

console.log(getTrimmedString(longStr, 40));

// *

function getTrimmedString(str, limit = 0) {
  if (limit < 0) throw new Error("Лимит не может быть отрицательным");
  if (str.length <= limit) return str;

  const stop = ",.!?:;";
  let index;

  for (let i = limit; i < str.length; i++) {
    if (str[i] === " " || stop.includes(str[i])) {
      index = i;
      break;
    }
  }

  return str.slice(0, index) + "...";
}

console.log(getTrimmedString(longStr, 15));

const string2 = "Получим укороченную строку";
const string1 = "строку";

function isSubstr(str1, str2) {
  return str1.includes(str2) || str2.includes(str1) ? true : false;
}

console.log(isSubstr(string1, string2));
