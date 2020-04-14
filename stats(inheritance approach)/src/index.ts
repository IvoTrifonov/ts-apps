import { MatchReader } from './MatchReader';

const matchReader = new MatchReader('original.csv');
matchReader.read();
console.log(matchReader.data[0]);