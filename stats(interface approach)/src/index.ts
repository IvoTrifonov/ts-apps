import { MatchReader } from './MatchReader';
import { Summery } from './Summary';

const matchReader = MatchReader.fromCsv('original.csv');
const summery = Summery.winsAnalysisWithHtmlReport('Man United');

matchReader.load();
summery.buildAndPrintReport(matchReader.matches);



