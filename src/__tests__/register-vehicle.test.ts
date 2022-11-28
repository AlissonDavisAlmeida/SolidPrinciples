import { MissingFormalParameter } from './../errors/client-error';
import { RegisterVehicle } from '../controllers/register-vehicle';

describe('Register Vehicles tests', () => {
  test('if the name field does not exist, return 400', async () => {
    const stu = new RegisterVehicle();

    const httpRequest = {
      body: {
        // name: 'Nissan',
        model: 'Versa',
        year: 2019,
        color: 'Black'
      }
    };

    const httpResponse = stu.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toStrictEqual(new MissingFormalParameter('name'));
  });

  test('if the model field does not exist, return 400', async () => {
    const stu = new RegisterVehicle();

    const httpRequest = {
      body: {
        name: 'Nissan',
        color: 'Black',
        // model: 'Versa',
        year: 2019
      }
    };

    const httpResponse = stu.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toStrictEqual(new MissingFormalParameter('model'));
  });

  test('if the year field does not exist, return 400', async () => {
    const stu = new RegisterVehicle();

    const httpRequest = {
      body: {
        name: 'Nissan',
        model: 'Versa',
        color: 'blue'
        // year: 2019
      }
    };

    const httpResponse = stu.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toStrictEqual(new MissingFormalParameter('year'));
  });

  test('if the color field does not exist, return 400', async () => {
    const stu = new RegisterVehicle();

    const httpRequest = {
      body: {
        name: 'Nissan',
        model: 'Versa',
        year: 2019
        // color: red
      }
    };

    const httpResponse = stu.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toStrictEqual(new MissingFormalParameter('color'));
  });

  test('if all fields exist, return 200', async () => {
    const stu = new RegisterVehicle();

    const httpRequest = {
      body: {
        name: 'Nissan',
        model: 'Versa',
        year: 2019,
        color: 'red'
      }
    };

    const httpResponse = stu.handle(httpRequest);

    expect(httpResponse.statusCode).toBe(200);
    expect(httpResponse.body).toStrictEqual('ok');
  });
});
