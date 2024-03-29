import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputText } from '@/components/lib/inputtext/InputText';
import { useEffect, useState } from 'react';
import { IconService } from '../../../service/IconService';

export function ListDoc(props) {
    const [icons, setIcons] = useState(null);
    const [filteredIcons, setFilteredIcons] = useState(null);

    const onFilter = (event) => {
        if (!icons) {
            setFilteredIcons([]);
        }

        if (!event.target.value) {
            setFilteredIcons(icons);
        }

        if (event.target.value && icons) {
            let sanitizedInput = event.target.value.replace(/[^\w\s]/gi, '').replace(/\s/g, '');

            var newFilteredIcons = icons.filter((icon) => {
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
            })

            setFilteredIcons(newFilteredIcons);
        }
    };

    useEffect(() => {
        IconService.getIcons().then((data) => {
            data.sort((icon1, icon2) => {
                if (icon1.properties.name < icon2.properties.name) return -1;
                else if (icon1.properties.name < icon2.properties.name) return 1;
                else return 0;
            });

            setIcons(data);
            setFilteredIcons(data);
        });
    }, []);

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Here is the full list of PrimeIcons. More icons will be added periodically and you may also <a href="https://github.com/primefaces/primeicons/issues">request new icons</a> at the issue tracker.
                </p>
            </DocSectionText>

            <InputText className="w-full p-3 mt-3 mb-4" placeholder="Search an icon" onChange={onFilter} />

            <div className="card">
                <div className="grid text-center">
                    {filteredIcons &&
                        filteredIcons.map((iconMeta) => {
                            const { icon, properties } = iconMeta;

                            return (
                                icon.tags.indexOf('deprecate') === -1 && (
                                    <div className="col-12 md:col-2 mb-5" key={properties.name}>
                                        <i className={'text-2xl mb-3 text-color-secondary pi pi-' + properties.name}></i>
                                        <div>pi-{properties.name}</div>
                                    </div>
                                )
                            );
                        })}
                </div>
            </div>
        </>
    );
}
