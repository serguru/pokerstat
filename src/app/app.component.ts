import { Component, OnInit } from '@angular/core';
import { hands } from './helpers/data';
import { Hand } from './helpers/hand';
import { Card } from './helpers/card';
import { suites, rankings, handValues } from './helpers/consts';
import { HandValue } from './helpers/hand-value';
import { GroupValue } from './helpers/group-value';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  ns = [];

  ngOnInit(): void {

    const result: GroupValue[] = [];
    this.groupTotal = 0;

    for (let i = 1; i <= 9; i++) {
      const a = [];
      hands.forEach(x => a.push(0));
      const value = new GroupValue(i, 0, a);
      result.push(value);
    }

    handValues.forEach(x => {
      if (x.id.substr(0, 1) == x.id.substr(1, 1)) {
        result[x.notSuited - 1].normal = result[x.notSuited - 1].normal + 6;
        this.groupTotal = this.groupTotal + 6;
      } else {
        result[x.suited - 1].normal = result[x.suited - 1].normal + 4;
        result[x.notSuited - 1].normal = result[x.notSuited - 1].normal + 12;
        this.groupTotal = this.groupTotal + 16;
      }
    })

    if (this.groupTotal !== this.normalTotal) {
      throw new Error("Total != 1326 !!!")
    }


    const ns = [];

    for (let i = 0; i < hands.length; i++) {

      const hs = hands[i];

      hs.forEach(x => {

        const hand = Hand.str2hand(x);
        ns.push(hand);
        const handValue: number = this.getHandValue(hand);
        result[handValue - 1].fact[i]++;

      })
    }


    result.forEach(x => {
      x.normal = Math.round(x.normal / this.normalTotal * 100);


      x.fact.forEach(y => {


      }) 
    })


    this.ns = ns;
    this.values = result;


  }

  getRandomSuite(): string {
    return suites[Math.floor(Math.random() * 4)];
  }

  getRandomRanking(): string {
    return rankings[Math.floor(Math.random() * 13)];
  }

  getRandomCard(): Card {
    const result = new Card();
    result.suite = this.getRandomSuite();
    result.ranking = this.getRandomRanking();
    return result;
  }

  getRandomHand(): Hand {
    const result = new Hand();
    result.first = this.getRandomCard();

    let same: boolean = true;

    while (same) {
      result.second = this.getRandomCard();
      same = result.first.suite == result.second.suite && result.first.ranking == result.second.ranking;
    }

    return result;
  }


  getHandValue(hand: Hand): number {
    // const r1: string = hand.first.ranking;
    // const s1: string = hand.first.suite;

    // const r2: string = hand.second.ranking;
    // const s2: string = hand.second.suite;

    let handValue: HandValue = handValues.find(x => {

      // let rh1: string = x.id.substr(0, 1);
      // let rh2: string = x.id.substr(1, 1);

      const result: boolean = x.id == hand.caption || x.id == hand.captionReverted;
      return result;
    });

    if (!handValue) {
      throw new Error('Hand value not found')
    }

    return hand.isSuited ? handValue.suited : handValue.notSuited;
  }

  groupTotal: number;

  normalTotal = 1326;

  values = [];




}


