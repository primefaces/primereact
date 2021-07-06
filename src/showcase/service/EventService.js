export class EventService {

    getEvents() {
        return fetch('showcase/demo/data/events.json').then(res => res.json())
                .then(d => d.data);
    }
}
