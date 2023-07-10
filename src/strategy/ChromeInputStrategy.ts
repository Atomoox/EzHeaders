import { getFormatQuote } from "../utils";

import { AbstractInputStrategy } from "../models/AbstractInputStreatgy";

import { IHttpHeaders } from "../types/IHttpHeaders";

class ChromeInputStrategy extends AbstractInputStrategy {
    public static recognizeInput(input: string): boolean {
        const lines = input.split('\n');
        const validLines = lines.filter(line => line.endsWith(':'));
        return lines.length === validLines.length * 2;
    };

    public parseValues(): IHttpHeaders {
        const result: IHttpHeaders = {};

        const line = this.input.split('\n');
        for(let lineIndex = 0; lineIndex < line.length; lineIndex += 2) {
            const headerNameLine = line[lineIndex];
            const headerValueLine = line[lineIndex + 1];

            const headerName = headerNameLine.split(':')[0].trim();
            const headerValue = headerValueLine.trim();

            result[headerName] = headerValue;
        }

        return result;
    }
};

export { ChromeInputStrategy };