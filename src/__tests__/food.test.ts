import { FoodModel } from '../models/Food';

describe('Food tests', () => {
  it('Food Model', () => {
    const food = new FoodModel('Pizza', 'Pizza de calabresa', 20.00);

    expect(food.getName()).toBe('Pizza');
    expect(food.getDescription()).toBe('Pizza de calabresa');
    expect(food.getPrice()).toBe(20.00);
    expect(food.toJSON()).toStrictEqual({
      name: 'Pizza',
      description: 'Pizza de calabresa',
      price: 20.00
    });
  });
});
