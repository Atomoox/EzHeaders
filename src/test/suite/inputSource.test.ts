import * as assert from 'assert';

import { CharlesInputStrategy } from '../../strategy/CharlesInputStrategy';
import { ChromeInputStrategy } from '../../strategy/ChromeInputStrategy';

import { chromeRawHeadersInput, charlesRawHeadersInput } from './sources';

suite('Input Source Test Suite', () => {
    test('Charles Raw Headers', () => {
        assert.ok(CharlesInputStrategy.recognizeInput(charlesRawHeadersInput));
    });

    test('Chrome Raw Headers', () => {
        assert.ok(ChromeInputStrategy.recognizeInput(chromeRawHeadersInput));
    });

    test('Chrome input into Charles Strat', () => {
        assert.strictEqual(
            CharlesInputStrategy.recognizeInput(chromeRawHeadersInput),
            false
        );
    });

    test('Charles input into Chrome Strat', () => {
        assert.strictEqual(
            ChromeInputStrategy.recognizeInput(charlesRawHeadersInput),
            false
        );
    });
});

