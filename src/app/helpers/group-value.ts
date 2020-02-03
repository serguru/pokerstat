export class GroupValue {
    constructor(public group: number, public normal: number, public fact: number) {
    }

    get delta(): number {
        return this.fact - this.normal;
    }
}