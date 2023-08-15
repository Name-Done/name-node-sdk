export * from './emailDomainNameApi';
import { EmailDomainNameApi } from './emailDomainNameApi';
export * from './familyNameApi';
import { FamilyNameApi } from './familyNameApi';
export * from './givenNameApi';
import { GivenNameApi } from './givenNameApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [EmailDomainNameApi, FamilyNameApi, GivenNameApi];
