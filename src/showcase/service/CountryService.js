import axios from 'axios'

export class CountryService {

    getCountries() {
        return axios.get('showcase/demo/data/countries.json')
            .then(res => res.data.data);
    }
}
