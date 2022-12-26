import getConfig from 'next/config';

const contextPath = getConfig().publicRuntimeConfig.contextPath;

export const CountryService = {
    getCountries() {
        return fetch(contextPath + '/data/countries.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }
};
