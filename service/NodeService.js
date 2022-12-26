import getConfig from 'next/config';

const contextPath = getConfig().publicRuntimeConfig.contextPath;

export const NodeService = {
    getTreeTableNodes() {
        return fetch(contextPath + '/data/treetablenodes.json')
            .then((res) => res.json())
            .then((d) => d.root);
    },

    getTreeNodes() {
        return fetch(contextPath + '/data/treenodes.json')
            .then((res) => res.json())
            .then((d) => d.root);
    }
};
