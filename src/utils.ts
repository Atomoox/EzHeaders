import { AbstractInputStrategy } from "./models/AbstractInputStrategy";
import { CharlesInputStrategy } from "./strategy/CharlesInputStrategy";
import { ChromeInputStrategy } from "./strategy/ChromeInputStrategy";

import { EInputSources } from "./types/EInputSources";
import { IHttpHeaders } from "./types/IHttpHeaders";

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const isSpecialChar = (str: string) => /[^a-zA-Z0-9_]/.test(str);

const parseHeaders = (input: string): IHttpHeaders | null => {
    const inputStrategy: Array<any> = [
        ChromeInputStrategy,
        CharlesInputStrategy
    ];

    for (const strategy of inputStrategy) {
        if (strategy.recognizeInput(input)) {
            return new strategy(input).parseValues();
        }
    }

    return null;
};

const getFormatQuote = (input: string, isHeaderName: boolean = false): string => {
    const quotesTypes = [
        "'",
        '"',
        '`',
    ];

    const filteredQuotesType = quotesTypes.filter(quote => !input.includes(quote)); 

    const isValidJavascriptObjectEntry = filteredQuotesType.length === quotesTypes.length && !isSpecialChar(input) && isHeaderName;

    return isValidJavascriptObjectEntry ? '' : filteredQuotesType[0] || '';
}

export { 
    capitalize,
    getFormatQuote,
    isSpecialChar,
    parseHeaders
 };