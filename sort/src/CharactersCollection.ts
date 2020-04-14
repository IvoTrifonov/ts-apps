import { Sorter } from './Sorter';

export class CharacterCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length() {
    return this.data.length;
  }

  compare(index: number): boolean {
    return this.data[index].toLowerCase() > this.data[index + 1].toLowerCase();
  }

  swap(index: number): void {
    const chars = this.data.split('');
    const leftHand = chars[index];
    chars[index] = chars[index + 1];
    chars[index + 1] = leftHand;
    this.data = chars.join('');
  }
}