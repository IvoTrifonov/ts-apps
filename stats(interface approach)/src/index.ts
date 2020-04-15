import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';

const csvFileReader = new CsvFileReader('original.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
console.log(matchReader.matches);