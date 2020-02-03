
export class Row {

  success: number = null;
  expected: number = null;
  fact: number = null;
  hands: string[] = null;

  get delta(): number {
    return this.fact - this.expected;
  }

  
}
