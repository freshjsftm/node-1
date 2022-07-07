"use strict";
const {MyMath} = require('./MyMath');
const {Component} = require('./Component');
const fs = require('fs/promises');

fs.readFile('./text.txt', 'utf-8')
  .then((content)=>{
    console.log(content)
    //fs.writeFile('./newText.txt', content+'\n123456789', 'utf-8');
    fs.appendFile('./newText.txt', content+'\n123456789\n', 'utf-8');
  })
  .catch((err) => {console.log(err)})

// const res1 = MyMath.sum(2, 5);
// console.log("res1 = ", res1);
// const component1 = new Component();
// component1.render();




//require
//Resolving->Loading->Wrapping->Evalution->Caching
/*
  1) Core modules
  2) File 
      2.1) *.js
      2.2) *.json
  3)Directory
      3.1) package.json->"main"
      3.2) index.js | index.json
  4)node_modules
  5)throw new Error()
*/