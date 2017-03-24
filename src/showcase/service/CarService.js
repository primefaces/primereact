import axios from 'axios'

export class CarService {
    
    getCarsSmall(_this) {
        axios.get('public/showcase/resources/demo/data/cars-small.json')
            .then(res => res.data.data)
            .then(data => { 
                _this.setState({ cars: data });
                return data; 
            });
    }

    getCarsMedium(_this) {
        axios.get('public/showcase/resources/demo/data/cars-medium.json')
            .then(res => res.data.data)
            .then(data => { 
                _this.setState({ cars: data });
                return data; 
            });
    }

    getCarsLarge(_this) {
        axios.get('public/showcase/resources/demo/data/cars-large.json')
            .then(res => res.data.data)
            .then(data => { 
                _this.setState({ cars: data });
                return data; 
            });
    }
}