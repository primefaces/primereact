import getConfig from 'next/config';

export class EventService {

    constructor() {
        this.contextPath = getConfig().publicRuntimeConfig.contextPath;
    }

    getEvents() {
        return fetch(this.contextPath + '/data/events.json').then(res => res.json())
                .then(d => d.data);
    }

}
