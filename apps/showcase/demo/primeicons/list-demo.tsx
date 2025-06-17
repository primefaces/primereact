import * as React from 'react';
import { InputText } from 'primereact/inputtext';
import { IconService } from '@/services/icon.service';

export default function ListDemo() {
    const [icons, setIcons] = React.useState(null);
    const [filteredIcons, setFilteredIcons] = React.useState(null);

    React.useEffect(() => {
        IconService.getIcons().then((data) => {
            const d_data = data;
            const d_icons = d_data.filter((value) => {
                return value.icon.tags.indexOf('deprecate') === -1;
            });

            d_icons.sort((icon1, icon2) => {
                if (icon1.properties.name < icon2.properties.name) return -1;
                else if (icon1.properties.name > icon2.properties.name) return 1;
                else return 0;
            });

            setIcons(d_icons);
            setFilteredIcons(d_icons);
        });
    }, []);

    const onFilter = (event) => {
        if (!icons) {
            setFilteredIcons([]);
        }

        if (!event.target.value) {
            setFilteredIcons(icons);
        }

        if (event.target.value && icons) {
            const sanitizedInput = event.target.value.replace(/[^\w\s]/gi, '').replace(/\s/g, '');

            const newFilteredIcons = icons.filter((icon) => {
                return (
                    icon.icon.tags.some((tag) =>
                        tag
                            .replace(/[^\w\s]/gi, '')
                            .replace(/\s/g, '')
                            .includes(sanitizedInput.toLowerCase())
                    ) ||
                    icon.properties.name
                        .replace(/[^\w\s]/gi, '')
                        .replace(/\s/g, '')
                        .toLowerCase()
                        .includes(sanitizedInput.toLowerCase())
                );
            });

            setFilteredIcons(newFilteredIcons);
        }
    };

    return (
        <div>
            <InputText onChange={(e) => onFilter(e)} className="w-full p-4 mt-4 mb-6" placeholder="Search an icon" />

            <div className="card">
                <div className="grid grid-cols-12 gap-4 text-center">
                    {filteredIcons?.map((icon) => (
                        <div key={icon.properties.name} className="col-span-12 md:col-span-2 mb-8">
                            <i className={`text-2xl mb-4 text-surface-500 dark:text-surface-400 pi pi-${icon.properties.name}`}></i>
                            <div>pi-{icon.properties.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
