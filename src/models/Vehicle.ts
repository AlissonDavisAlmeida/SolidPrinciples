export class VehicleModel {
  #name: string;
  #model: string;
  #year: number;

  constructor(name: string, model: string, year: number) {
    this.#name = name;
    this.#model = model;
    this.#year = year;
  }

  get name(): string {
    return this.#name;
  }

  get model(): string {
    return this.#model;
  }

  get year(): number {
    return this.#year;
  }
}
