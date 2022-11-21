import { RegisterVehicle } from '../controllers/register-vehicle';

describe('Register Vehicles tests', () => {
  test('if the name field does not exist, return 400', async () => {
    const stu = new RegisterVehicle();

    const httpRequest = {
      body: {
        // name: 'Nissan',
        model: 'Versa',
        year: 2019
      }
    };

    const httpResponse = stu.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toStrictEqual(new Error('Missing param: name'));
  });

  test('if the model field does not exist, return 400', async () => {
    const stu = new RegisterVehicle();

    const httpRequest = {
      body: {
        name: 'Nissan',
        // model: 'Versa',
        year: 2019
      }
    };

    const httpResponse = stu.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toStrictEqual(new Error('Missing param: model'));
  });
});
