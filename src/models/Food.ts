interface FoodOutput {
  name: string
  description: string
  price: number
}

export class FoodModel {
  constructor(
    private readonly name: string,
    private readonly description: string,
    private readonly price: number
  ) { }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getPrice(): number {
    return this.price;
  }

  toJSON(): FoodOutput {
    return {
      name: this.name,
      description: this.description,
      price: this.price
    };
  }
}
