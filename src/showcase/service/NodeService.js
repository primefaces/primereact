export class NodeService {

    getTreeTableNodes() {
        return fetch('showcase/demo/data/treetablenodes.json').then(res => res.json())
                .then(d => d.root);
    }

    getTreeNodes() {
        return fetch('showcase/demo/data/treenodes.json').then(res => res.json())
                .then(d => d.root);
    }
}
