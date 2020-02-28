import axios from 'axios';

export class IconService {

    constructor() {
        this.icons = [];
        this.selectedIcon = null;
    }

    getIcons() {
        return axios.get('showcase/resources/demo/data/icons.json', { headers: { 'Cache-Control' : 'no-cache' } })
            .then(res => res.data.icons);
    }

    getIcon(id){
        if (this.icons) {
            this.selectedIcon=this.icons.find(x => x.properties.id === id);
            return this.selectedIcon;
        }
    }
}
