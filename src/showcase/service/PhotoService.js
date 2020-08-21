import axios from 'axios';

export class PhotoService {

    getImages() {
        return axios.get('showcase/demo/data/photos.json')
                .then(res => res.data.data);
    }
}
