"use strict";

const fetch = require("cross-fetch");

function getNumberofMovies(substr) {
  const url = "https://jsonmock.hackerrank.com/api/movies/search/?Title=";

  let newUrl = url + substr;
  fetch(newUrl)
    .then(res => res.json())
    .then(data => console.log(data.total));
}

// getNumberofMovies("maze");

/* 

String Algorithm

Implement an algorithm to determine if a string has all unique characters.

ex string = "Atlanta"
string 2 = "banker"

1. turn string into an array
2 loop through array and assign number count to each letter as object. { a: 1}
3. if any key has value > 1 return false;
4. otherwise return true;
*/

function letterCheck(string) {
  let values = [];
  let str = string.toLowerCase().split("");
  console.log(str);

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if ((letter = str[j])) {
        count++;
      }
      values.push(count);
    }
  }

  for (let i = 0; i < values.length; i++) {
    if (values[i] > 1) {
      return false;
    }
    return true;
  }
}

letterCheck("Atlanta");
