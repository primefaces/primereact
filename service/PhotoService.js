import getConfig from 'next/config';

export class PhotoService {

    constructor() {
        this.contextPath = getConfig().publicRuntimeConfig.contextPath;
    }

    getImages() {
        return fetch(this.contextPath + '/data/photos.json').then(res => res.json())
                .then(d => d.data);
    }
}
