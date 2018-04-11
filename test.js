"use strict";

const ordinal = require("./index");

const assertions = [
  [1, "First"],
  ["One", "First"],
  ["Two", "Second"],
  ["Three", "Third"],
  ["Four", "Fourth"],
  ["Seven", "Seventh"],
  ["Eight", "Eighth"],
  ["Nine", "Ninth"],
  ["Ten", "Tenth"],
  ["Eleven", "Eleventh"],
  ["Twelve", "Twelfth"],
  ["Seventeen", "Seventeenth"],
  ["Twenty-One", "Twenty-First"],
  ["Twenty-Seven", "Twenty-Seventh"],
  ["Thirty", "Thirtieth"],
  ["Fourty", "Fourtieth"],
  ["Fifty", "Fiftieth"],
  ["Sixty", "Sixtieth"],
  ["Seventy", "Seventieth"],
  ["Eighty", "Eightieth"],
  ["Ninety", "Ninetieth"],
  ["One Hundred", "One Hundredth"],
  ["One Hundred and One", "One Hundred and First"],
  ["One Hundred and Two", "One Hundred and Second"],
  ["One Hundred and Seven", "One Hundred and Seventh"],
  ["One Hundred and Eleven", "One Hundred and Eleventh"],
  ["One Hundred and Twelve", "One Hundred and Twelfth"],
  ["One Hundred and Seventeen", "One Hundred and Seventeenth"],
  ["One Hundred and Twenty-One", "One Hundred and Twenty-First"],
  ["One Hundred and Twenty-Seven", "One Hundred and Twenty-Seventh"],
  ["One Hundred and Thirty", "One Hundred and Thirtieth"],
]

assertions.forEach(function(assertion) {
  var actual = ordinal(assertion[0]);
  console.assert(actual === assertion[1], "'" + actual + "'" + " is not " + "'" + assertion[1] + "'");
});
