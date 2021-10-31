export class CountryService {

    getCountries() {
        return fetch('showcase/demo/data/countries.json').then(res => res.json())
            .then(d => d.data);
    }
}
