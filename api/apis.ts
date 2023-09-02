export * from './domainNameApi';
import { DomainNameApi } from './domainNameApi';
export * from './emailDomainNameApi';
import { EmailDomainNameApi } from './emailDomainNameApi';
export * from './familyNameApi';
import { FamilyNameApi } from './familyNameApi';
export * from './genderApi';
import { GenderApi } from './genderApi';
export * from './givenNameApi';
import { GivenNameApi } from './givenNameApi';
export * from './languageNameApi';
import { LanguageNameApi } from './languageNameApi';
export * from './topLevelDomainNameApi';
import { TopLevelDomainNameApi } from './topLevelDomainNameApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [DomainNameApi, EmailDomainNameApi, FamilyNameApi, GenderApi, GivenNameApi, LanguageNameApi, TopLevelDomainNameApi];
