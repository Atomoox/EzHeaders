import { AbstractInputStrategy } from "../models/AbstractInputStreatgy";

import { IHttpHeaders } from "../types/IHttpHeaders";

class CharlesInputStrategy extends AbstractInputStrategy {
    public static recognizeInput(input: string): boolean {
        const lines = input.split('\n');
        const validLines = lines.filter(line => line.includes(': '));
        return lines.length === validLines.length;
    };

    public parseValues(): IHttpHeaders {
        const result: IHttpHeaders = {};

        const lines = this.input.split('\n');

        lines.map(line => {
            const [name, value] = line.split(': ').map(value => value.trim());
            result[name] = value;
        });

        return result;
    };
};

export { CharlesInputStrategy };