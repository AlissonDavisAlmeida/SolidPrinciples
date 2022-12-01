export class Pen {
  constructor(
    private readonly name: string,
    private readonly message: string) {}

  write(): string {
    return this.message;
  }
}
