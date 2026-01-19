type IconType = {
    properties: {
        id: string;
        name: string;
    };
};

const icons: IconType[] = [] as IconType[];
let selectedIcon = null;

export const IconService = {
    getIcons() {
        return fetch('/demo/data/icons.json', { headers: { 'Cache-Control': 'no-cache' } })
            .then((res) => res.json())
            .then((d) => d.icons);
    },

    getIcon(id: string) {
        if (icons) {
            selectedIcon = icons.find((x) => x.properties.id === id);

            return selectedIcon;
        }
    }
};
