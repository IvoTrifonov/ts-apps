"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var matchReader = new MatchReader_1.MatchReader('original.csv');
matchReader.read();
console.log(matchReader.data[0]);
