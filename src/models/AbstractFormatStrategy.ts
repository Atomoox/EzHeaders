import { IHttpHeaders } from "../types/IHttpHeaders";

abstract class AbstractFormatStrategy {
    public constructor(protected headers: IHttpHeaders) {}

    public abstract toString(): string;
};

export { AbstractFormatStrategy };