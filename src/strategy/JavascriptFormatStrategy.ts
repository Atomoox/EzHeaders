import { AbstractFormatStrategy } from "../models/AbstractFormatStrategy";
import { getFormatQuote } from "../utils";

class JavascriptFormatStrategy extends AbstractFormatStrategy{
    public toString(): string {
        const result: Array<string> = [];
        for (const [headerName, headerValue] of Object.entries(this.headers)) {
            const nameQuotes = getFormatQuote(headerName, true);
            const valueQuotes = getFormatQuote(headerValue);

            const formattedLine = [
                nameQuotes,
                headerName,
                nameQuotes,
                ': ',
                valueQuotes,
                headerValue,
                valueQuotes
            ];

            result.push(formattedLine.join(''));
        }
        return result.join(',\n');
    }
};

export { JavascriptFormatStrategy };