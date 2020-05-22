import axios from 'axios';

export class CarService {
    
    getCarsSmall() {
        return axios.get('showcase/demo/data/cars-small.json')
                .then(res => res.data.data);
    }

    getCarsMedium() {
        return axios.get('showcase/demo/data/cars-medium.json')
                .then(res => res.data.data);
    }

    getCarsLarge() {
        return axios.get('showcase/demo/data/cars-large.json')
                .then(res => res.data.data);
    }
}