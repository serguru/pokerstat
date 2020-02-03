import { Card } from './card';

export class Hand {

    first: Card = null;
    second: Card = null;
  
    toString(): string {
      return `${this.first.toString()}${this.second.toString()}`;
    }
  
    static str2hand(s: string): Hand {
      const first: Card = Card.str2card(s.substr(0, 1).toUpperCase() + s.substr(1, 1).toLowerCase());
      const second: Card = Card.str2card(s.substr(2, 1).toUpperCase() + s.substr(3, 1).toLowerCase());
      const result: Hand = new Hand();
      result.first = first;
      result.second = second;
      return result;
    }
  
    get caption(): string {
      return this.first.ranking + this.second.ranking;
    }
    get captionReverted(): string {
      return this.second.ranking + this.first.ranking;
    }

    get isSuited(): boolean {
      return this.first.suite == this.second.suite;
    }

  }
  