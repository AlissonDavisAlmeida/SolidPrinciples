import { VehicleModel } from '../models/Vehicle';

describe('Vehicle Model tests', () => {
  it('Class VehicleModel should be defined', () => {
    const vehicleModel = new VehicleModel('Nissan', 'Versa', 2019);

    expect(vehicleModel).toBeDefined();
    expect(vehicleModel.name).toEqual('Nissan');
    expect(vehicleModel.model).toEqual('Versa');
    expect(vehicleModel.year).toEqual(2019);
  });
});
