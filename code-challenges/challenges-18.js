'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    // write your code here
    const words = str.split(" ");
    const middleIndex = Math.floor(words.length / 2);
    const middleWord = words[middleIndex];

     return middleWord.length;
}

// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    // write your code here
    if (str1.length !== str2.length) {
      return false;
    }
    
    const freq1 = {};
    const freq2 = {};
    
    for (let i = 0; i < str1.length; i++) {
      const char1 = str1[i];
      const char2 = str2[i];
      
      freq1[char1] = freq1[char1] ? freq1[char1] + 1 : 1;
      freq2[char2] = freq2[char2] ? freq2[char2] + 1 : 1;
    }
    
    const keys1 = Object.keys(freq1);
    const keys2 = Object.keys(freq2);
    
    if (keys1.length !== keys2.length) {
      return false;
    }
    
    for (let i = 0; i < keys1.length; i++) {
      const key1 = keys1[i];
      if (freq1[key1] !== freq2[key1]) {
        return false;
      }
    }
    
    return true;
  }
  
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
    let left = 0;
  let right = array.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === value) {
      return mid;
    } else if (array[mid] < value) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };