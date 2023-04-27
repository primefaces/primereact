import { DocSearch } from '@docsearch/react';
import { useEffect, useRef } from 'react';
import pkg from '../../package.json';
import { StyleClass } from '../lib/styleclass/StyleClass';

export default function Topbar(props) {
    const versionsRef = useRef(null);
    const versions = [
        {
            name: `v${pkg.version.split('.')[0]}`,
            version: pkg.version,
            url: 'https://www.primereact.org'
        },
        {
            name: 'v8',
            version: '8.7.0',
            url: 'https://www.primefaces.org/primereact-v8'
        },
        {
            name: 'v7',
            version: '7.1.0',
            url: 'https://www.primefaces.org/primereact-v7'
        },
        {
            name: 'v6',
            version: '6.6.0',
            url: 'https://www.primefaces.org/primereact-v6'
        },
        {
            name: 'v5',
            version: '5.0.2',
            url: 'https://www.primefaces.org/primereact-v5'
        },
        {
            name: 'v4',
            version: '4.2.2',
            url: 'https://www.primefaces.org/primereact-v4'
        }
    ];

    {
        /* doc https://docsearch.algolia.com/docs/api/#transformitems */
    }

    function handleDocSearchTransformItems(items) {
        const isLocalhost = process.env.NODE_ENV !== 'production';

        return items.map((item) => {
            if (isLocalhost) {
                const url = new URL(item.url);

                url.protocol = window.location.protocol;
                url.hostname = window.location.hostname;
                url.port = window.location.port;
                item.url = url.toString();
            }

            return item;
        });
    }

    const onMenuButtonClick = () => {
        props.onMenuButtonClick();
    };

    const onConfigButtonClick = () => {
        props.onConfigButtonClick();
    };

    const containerElement = useRef(null);
    const scrollListener = useRef();

    const bindScrollListener = () => {
        scrollListener.current = () => {
            if (containerElement && containerElement.current) {
                if (window.scrollY > 0) containerElement.current.classList.add('layout-topbar-sticky');
                else containerElement.current.classList.remove('layout-topbar-sticky');
            }
        };

        window.addEventListener('scroll', scrollListener.current);
    };

    const unbindScrollListener = () => {
        if (scrollListener.current) {
            window.removeEventListener('scroll', scrollListener.current);
            scrollListener.current = null;
        }
    };

    useEffect(() => {
        bindScrollListener();

        return function unbind() {
            unbindScrollListener();
        };
    }, []);

    return (
        <div ref={containerElement} className="layout-topbar">
            <div className="layout-topbar-inner">
                <button type="button" className="p-link menu-button" onClick={onMenuButtonClick} aria-haspopup aria-label="Menu">
                    <i className="pi pi-bars"></i>
                </button>
                <DocSearch appId="SCRI13XXZO" apiKey="ea9e6c8a983c5646d6b9079921d4aed7" indexName="primereact" container="" debug={false} transformItems={handleDocSearchTransformItems} />

                <ul className="flex list-none m-0 p-0 gap-2 align-items-center">
                    <li></li>
                    <li>
                        <a
                            href="https://github.com/primefaces/primereact"
                            className="flex p-link border-1 border-solid w-2rem h-2rem surface-border border-round surface-card align-items-center justify-content-center transition-all transition-duration-300 hover:border-primary"
                        >
                            <i className="pi pi-github text-700"></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://discord.gg/gzKFYnpmCY"
                            className="flex p-link border-1 border-solid w-2rem h-2rem surface-border border-round surface-card align-items-center justify-content-center transition-all transition-duration-300 hover:border-primary"
                        >
                            <i className="pi pi-discord text-700"></i>
                        </a>
                    </li>
                    <li>
                        <button type="button" className="p-button flex border-1 w-2rem h-2rem p-0 align-items-center justify-content-center transition-all transition-duration-300 min-w-0" onClick={onConfigButtonClick}>
                            <i className="pi pi-cog"></i>
                        </button>
                    </li>

                    <li className="relative">
                        <StyleClass nodeRef={versionsRef} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                            <button
                                ref={versionsRef}
                                type="button"
                                className="p-link flex align-items-center surface-card h-2rem px-3 hover:surface-hover border-1 border-solid surface-border transition-all transition-duration-300 hover:border-primary"
                            >
                                <span className="text-900">{versions && versions.length ? versions[0].version : ''}</span>
                                <span className="ml-2 pi pi-angle-down text-600"></span>
                            </button>
                        </StyleClass>
                        <div className="p-3 surface-overlay hidden absolute right-0 top-auto border-round shadow-2 origin-top w-12rem">
                            <ul className="list-none m-0 p-0">
                                {versions.map((version) => {
                                    return (
                                        <li role="none" key={version.version}>
                                            <a href={version.url} className="block p-2 border-round hover:surface-hover w-full">
                                                <span className="font-bold text-900">{version.name}</span>
                                                <span className="ml-2 text-700">({version.version})</span>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
