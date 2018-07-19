import axios from 'axios';

export class EventService {
    
    getEvents() {
        return axios.get('showcase/resources/demo/data/events.json')
                .then(res => res.data.data);
    }
}