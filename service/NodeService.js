import getConfig from 'next/config';

export class NodeService {

    constructor() {
        this.contextPath = getConfig().publicRuntimeConfig.contextPath;
    }

    getTreeTableNodes() {
        return fetch(this.contextPath + '/data/treetablenodes.json').then(res => res.json())
                .then(d => d.root);
    }

    getTreeNodes() {
        return fetch(this.contextPath + '/data/treenodes.json').then(res => res.json())
                .then(d => d.root);
    }
}
