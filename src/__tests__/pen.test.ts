import { Pen } from '../models/Pen';

describe('Pen', () => {
  test('write ', () => {
    const pen = new Pen('blue', 'Hello World');

    expect(pen.write()).toBe('Hello World');
  });
});
