import getConfig from 'next/config';

const contextPath = getConfig().publicRuntimeConfig.contextPath;

export const EventService = {
    getEvents() {
        return fetch(contextPath + '/data/events.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }
};
