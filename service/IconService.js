import getConfig from 'next/config';

export class IconService {

    constructor() {
        this.icons = [];
        this.selectedIcon = null;
        this.contextPath = getConfig().publicRuntimeConfig.contextPath;
    }

    getIcons() {
        return fetch(this.contextPath + '/data/icons.json', { headers: { 'Cache-Control' : 'no-cache' } }).then(res => res.json())
            .then(d => d.icons);
    }

    getIcon(id){
        if (this.icons) {
            this.selectedIcon = this.icons.find(x => x.properties.id === id);
            return this.selectedIcon;
        }
    }
}
