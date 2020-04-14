export abstract class Sorter {
  abstract compare(leftIndex: number): boolean;
  abstract swap(leftIndex: number): void;
  abstract length: number;

  sort(): void {
    let { length } = this;

    while (length > 1) {
      for (let i = 0; i < length - 1; i++) {
        this.compare(i) ?
          this.swap(i) : null;
      }
      length--;
    }
  }
}
