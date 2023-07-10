import { IHttpHeaders } from "../types/IHttpHeaders";

abstract class AbstractInputStrategy {
    public constructor(protected input: string) {}

    public static recognizeInput(input: string): boolean {
        throw new Error(`Method isn't implemented for this file type`);
    }

    public abstract parseValues(): IHttpHeaders;
};

export { AbstractInputStrategy };
