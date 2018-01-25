"use strict"
var rfc = require('./RFC');

var name = "KARLA"
var pLname = "FLORES"
var mLname = "PACHECO"
var bDate = "1980-10-06"

var result = new rfc(name, pLname, mLname, bDate)
console.log(result.rfc)

name = "GERARDO"
pLname = "CHELINI"
mLname = "LOPEZ"
bDate = "1977-08-14"

result = new rfc(name, pLname, mLname, bDate)
console.log(result.rfc)

name = "OSCAR"
pLname = "PURO"
mLname = "TORRES"
bDate = "1980-07-14"

result = new rfc(name, pLname, mLname, bDate)
console.log(result.rfc)

name = "LIC SANDRO";
pLname = "TURIN";
mLname = "CASTILLO SANTOS ";
bDate = "1979-03-11";
result = new rfc(name, pLname, mLname, bDate);
console.log(result.rfc)

name = "LIC. SANDRO"
pLname = "TURIN"
mLname = "CASTILLO SANTOS "
bDate = "1979-03-11"

result = new rfc(name, pLname, mLname, bDate);
console.log(result.rfc)