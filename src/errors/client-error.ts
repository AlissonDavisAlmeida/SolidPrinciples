export class MissingFormalParameter extends Error {
  constructor(public name: string) {
    super(`Missing param: ${name}`);
  }
}

export class InvalidArgs extends Error {
  constructor(public name: string) {
    super(`Invalid args: ${name}`);
  }
}
