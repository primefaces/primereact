import axios from 'axios';

export class NodeService {
    
    getNodes() {
        return axios.get('showcase/resources/demo/data/nodes.json')
                .then(res => res.data.root);
    }

    getTreeNodes() {
        return axios.get('showcase/resources/demo/data/treenodes.json')
                .then(res => res.data.root);
    }
}