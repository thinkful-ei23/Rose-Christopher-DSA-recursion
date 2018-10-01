function reverseString(myString) {
  if (myString === "") {
    return "";
  }
  const lastChar = myString[myString.length - 1];

  return lastChar + reverseString(myString.slice(0, -1));
}
aString = "backwards String";
console.log(reverseString(aString));
