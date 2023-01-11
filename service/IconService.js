import getConfig from 'next/config';

const contextPath = getConfig().publicRuntimeConfig.contextPath;
let icons = [];
let selectedIcon = null;

export const IconService = {
    getIcons() {
        return fetch(contextPath + '/data/icons.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.icons);
    },

    getIcon(id) {
        if (icons) {
            selectedIcon = icons.find((x) => x.properties.id === id);

            return selectedIcon;
        }
    }
};
