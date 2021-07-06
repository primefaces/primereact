export class IconService {

    constructor() {
        this.icons = [];
        this.selectedIcon = null;
    }

    getIcons() {
        return fetch('showcase/demo/data/icons.json', { headers: { 'Cache-Control' : 'no-cache' } }).then(res => res.json())
            .then(d => d.icons);
    }

    getIcon(id){
        if (this.icons) {
            this.selectedIcon = this.icons.find(x => x.properties.id === id);
            return this.selectedIcon;
        }
    }
}
