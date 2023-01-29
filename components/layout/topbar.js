import { useEffect, useRef } from 'react';
import { StyleClass } from '../lib/styleclass/StyleClass';

export default function Topbar(props) {
    const versionsRef = useRef(null);
    const versions = [
        {
            name: 'v9',
            version: '9.0.0-beta.1',
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

    const onMenuButtonClick = () => {
        props.onMenuButtonClick();
    };

    const onConfigButtonClick = () => {
        props.onConfigButtonClick();
    }

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
            <button type="button" className="p-link menu-button" onClick={onMenuButtonClick} aria-haspopup aria-label="Menu">
                <i className="pi pi-bars"></i>
            </button>

            <ul className="flex list-none m-0 p-0 ml-auto gap-2">
                <li>
                    <a href="https://primefaces.github.io/primereact" className="flex border-1 p-2 surface-border border-round surface-card h-full align-items-center justify-content-center transition-all transition-duration-300 hover:border-primary">
                        <i className="pi pi-github text-700"></i>
                    </a>
                </li>
                <li>
                    <a href="https://discord.gg/gzKFYnpmCY" className="flex border-1 p-2 surface-border border-round surface-card h-full align-items-center justify-content-center transition-all transition-duration-300 hover:border-primary">
                        <i className="pi pi-discord text-700"></i>
                    </a>
                </li>
                <li>
                    <button type="button" className="p-button flex border-1 p-2 h-full align-items-center justify-content-center transition-all transition-duration-300"
                        onClick={onConfigButtonClick}>
                        <i className="pi pi-cog"></i>
                    </button>
                </li>
                
                <li className="relative">
                    <StyleClass nodeRef={versionsRef} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                        <button ref={versionsRef} type="button" className="p-link flex align-items-center surface-card py-2 px-3 hover:surface-hover border-1 border-solid surface-border transition-all transition-duration-300 hover:border-primary">
                            <span>{versions && versions.length ? versions[0].version : ''}</span>
                            <span className="ml-2 pi pi-angle-down text-600"></span>
                        </button>
                    </StyleClass>
                    <div className="p-3 surface-overlay hidden absolute right-0 top-auto border-round shadow-2 origin-top w-12rem">
                        <ul className="list-none m-0 p-0">
                            {versions.map((version) => {
                                return (
                                    <li role="none" key={version.version}>
                                        <a href={version.url} className="block p-2 text-900 border-round hover:surface-hover w-full">
                                            <span className="font-bold">{version.name}</span>
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
    );
}
