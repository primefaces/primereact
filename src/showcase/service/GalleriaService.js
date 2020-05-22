import axios from 'axios';

export class GalleriaService {

    getImages() {
        return axios.get('showcase/demo/data/galleria.json')
                .then(res => res.data.data);
    }
}
