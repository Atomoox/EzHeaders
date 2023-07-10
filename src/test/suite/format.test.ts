import * as assert from 'assert';

import { JavascriptFormatStrategy } from '../../strategy/JavascriptFormatStrategy';

import { chromeParsedHeaders } from './sources';

suite('Format Test Suite', () => {
	test('Javascript Format Strategy test', () => {
	  const stringValue = new JavascriptFormatStrategy(chromeParsedHeaders).toString();
      assert.strictEqual(stringValue, 
        `Dnt: '1',
Referer: 'https://www.google.com/',
'Sec-Ch-Ua': '"Not.A/Brand";v="8", "Chromium";v="114"',
'Sec-Ch-Ua-Mobile': '?0',
'Sec-Ch-Ua-Platform': '"macOS"',
'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'`);
	});
});
  