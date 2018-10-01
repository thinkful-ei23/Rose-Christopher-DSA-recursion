'use strict';

// array = [1, 2, 3, 4]

function arrDbl(array) {
  if(!array.length) {
    return [];
  }   
  return [array[0] * 2, ...arrDbl(array.slice(1))];
}

console.log(arrDbl([1, 2, 3, 4]));