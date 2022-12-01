import { VehicleHelper } from './../helpers/vehicle-model.helper';
import { VehicleModel } from '../models/Vehicle';

describe('Vehicle Model tests', () => {
  it('Class VehicleModel should be defined', () => {
    const vehicleModel = new VehicleModel({
      name: 'Nissan',
      model: 'Versa',
      year: 2019,
      price: 25
    });

    expect(vehicleModel).toBeDefined();
    expect(vehicleModel.name).toEqual('Nissan');
    expect(vehicleModel.model).toEqual('Versa');
    expect(vehicleModel.year).toEqual(2019);
    expect(vehicleModel.price).toEqual(25);
  });

  it('Vehicle Helper', () => {
    const vehicleHelper = new VehicleHelper(
      'Nissan',
      'Versa',
      2019,
      25
    );

    expect(vehicleHelper).toBeDefined();
  });
});
