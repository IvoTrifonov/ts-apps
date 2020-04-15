import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

export class WinsAnalysis implements Analyzer {

  constructor(public teamName: string) {

  }

  run(matches: MatchData[]): string {
    let wins = 0;

    matches.forEach(match => {
      const homeTeam = match[1];
      const awayTeam = match[2];
      const result = match[5];

      if (homeTeam === this.teamName
        && result === MatchResult.HomeWin) {
        wins++;
      } else if (awayTeam === this.teamName && result === MatchResult.AwayWIn) {
        wins++;
      }
    });

    return `Team ${this.teamName} won ${wins} games`;
  }
}