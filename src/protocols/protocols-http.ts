import { InvalidArgs } from './../errors/client-error';
import { URL } from 'url';

export class UrlLogin {
  static parseUrl(url: string): URL {
    if (!url) {
      throw new InvalidArgs('url');
    }

    const urlParsed = new URL(url);

    return urlParsed;
  }
}
