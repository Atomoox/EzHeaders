import { AbstractInputStrategy } from "./models/AbstractInputStreatgy";
import { CharlesInputStrategy } from "./strategy/CharlesInputStrategy";
import { ChromeInputStrategy } from "./strategy/ChromeInputStrategy";

import { EInputSources } from "./types/EInputSources";

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const getFormatQuote = (input: string, isHeaderName: boolean = false): string => {
    const quotesTypes = [
        "'",
        '"',
        '`',
    ];

    const filteredQuotesType = quotesTypes.filter(quote => !input.includes(quote)); 

    const isValidJavascriptObjectEntry = filteredQuotesType.length === quotesTypes.length && isHeaderName;

    return isValidJavascriptObjectEntry ? '' : filteredQuotesType[0] || '';
}

export { 
    capitalize,
    getFormatQuote
 };