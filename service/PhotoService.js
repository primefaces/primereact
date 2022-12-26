import getConfig from 'next/config';

const contextPath = getConfig().publicRuntimeConfig.contextPath;

export const PhotoService = {
    getImages() {
        return fetch(contextPath + '/data/photos.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }
};
