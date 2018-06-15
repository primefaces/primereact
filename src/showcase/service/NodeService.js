import axios from 'axios';

export class NodeService {
    
    getNodes() {
        return axios.get('showcase/resources/demo/data/nodes.json')
                .then(res => res.data.root);
    }
}