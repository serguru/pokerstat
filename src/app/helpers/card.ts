export class Card {
    suite: string = null;
    ranking: string = null;
  
    toString(): string {
      return `${this.ranking}${this.suite}`;
    }
  
    static str2card(s: string): Card {
      const ranking: string = s[0];
      const suite: string = s[1];
      const result: Card = new Card();
      result.ranking = ranking;
      result.suite = suite;
      return result;
  
    }
  }
  