export class PhotoService {

    getImages() {
        return fetch('showcase/demo/data/photos.json').then(res => res.json())
                .then(d => d.data);
    }
}
