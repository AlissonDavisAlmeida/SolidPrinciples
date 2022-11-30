import { InvalidArgs } from '../errors/client-error';
import { UrlLogin } from '../protocols/protocols-http';

describe('protocols/http and queries', () => {
  test('Url login', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/login');

    expect(parsedUrl.href).toBe('http://localhost:3000/login');
    expect(parsedUrl.protocol).toBe('http:');
    expect(parsedUrl.host).toBe('localhost:3000');
    expect(parsedUrl.hostname).toBe('localhost');
    expect(parsedUrl.port).toBe('3000');
  });

  test('Url login with query', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/login?user=1&password=123');

    const expected = {
      user: '1',
      password: '123'
    };

    expect(parsedUrl.searchParams.get('user')).toBe(expected.user);
    expect(parsedUrl.searchParams.get('password')).toBe(expected.password);
  });

  test('invalid url', () => {
    expect(() => UrlLogin.parseUrl(null as any)).toThrowError(new InvalidArgs('url'));
    expect(() => UrlLogin.parseUrl(undefined as any)).toThrowError(new InvalidArgs('url'));
    expect(() => UrlLogin.parseUrl('')).toThrowError(new InvalidArgs('url'));
  });
});
