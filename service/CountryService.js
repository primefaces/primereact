import getConfig from 'next/config';

export class CountryService {

    constructor() {
        this.contextPath = getConfig().publicRuntimeConfig.contextPath;
    }

    getCountries() {
        return fetch(this.contextPath + '/data/countries.json').then(res => res.json())
            .then(d => d.data);
    }
}
