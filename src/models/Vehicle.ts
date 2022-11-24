import { VehicleHelper } from '../helpers/vehicle-model.helper';

export class VehicleModel {
  #name: string;
  #model: string;
  #year: number;
  #price: number;

  constructor(private readonly vehicle: VehicleHelper) {
    const { name, model, year, price } = this.vehicle;

    this.#name = name;
    this.#model = model;
    this.#year = year;
    this.#price = price;
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

  get price(): number {
    return this.#price;
  }
}
