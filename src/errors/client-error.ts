export class MissingFormalParameter extends Error {
  constructor(public name: string) {
    super(`Missing param: ${name}`);
  }
}
