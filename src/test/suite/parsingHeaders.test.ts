import * as assert from 'assert';

import { CharlesInputStrategy } from '../../strategy/CharlesInputStrategy';
import { ChromeInputStrategy } from '../../strategy/ChromeInputStrategy';

import { chromeRawHeadersInput, charlesRawHeadersInput, chromeParsedHeaders, charlesParsedHeaders } from './sources';

suite('Header Parsing Test Suite', () => {
    test('Chrome parses Chrome', () => {
        const parsedHeaders = new ChromeInputStrategy(chromeRawHeadersInput).parseValues();
        const exceptedObject = chromeParsedHeaders;

        for (const [key, value] of Object.entries(exceptedObject)) {
            assert.strictEqual(value, parsedHeaders[key], `${key} isn't matching exceptedValue of ${value} (${parsedHeaders[key]})`);
        }
    });

    test('Charles parses Charles', () => {
        const parsedHeaders = new CharlesInputStrategy(charlesRawHeadersInput).parseValues();
        const exceptedObject = charlesParsedHeaders;

        for (const [key, value] of Object.entries(exceptedObject)) {
            assert.strictEqual(value, parsedHeaders[key], `${key} isn't matching exceptedValue of ${value} (${parsedHeaders[key]})`);
        }
    });
});

