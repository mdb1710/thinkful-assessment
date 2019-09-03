"use strict";

const fetch = require("cross-fetch");

function getNumberofMovies(substr) {
  const url = "https://jsonmock.hackerrank.com/api/movies/search/?Title=";

  let newUrl = url + substr;
  fetch(newUrl)
    .then(res => res.json())
    .then(data => console.log(data.total));
}

getNumberofMovies("maze");
