"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var matchReader = MatchReader_1.MatchReader.fromCsv('original.csv');
var summery = Summary_1.Summery.winsAnalysisWithHtmlReport('Man United');
matchReader.load();
summery.buildAndPrintReport(matchReader.matches);
