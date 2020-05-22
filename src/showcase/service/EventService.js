import axios from 'axios';

export class EventService {
    
    getEvents() {
        return axios.get('showcase/demo/data/events.json')
                .then(res => res.data.data);
    }
}