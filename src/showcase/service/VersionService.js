import axios from 'axios';

export class VersionService {
    
    getVersions() {
        return axios.get('https://www.primefaces.org/primereact/versions.json')
                .then(res => res.data.versions);
    }
}