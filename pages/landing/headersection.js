import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { classNames } from '../../components/lib/utils/Utils';

const HeaderSection = (props) => {
    const [menuActive, setMenuActive] = useState(false);
    const colorSchemeIcon = classNames('pi', { 'pi-sun': props.dark, 'pi-moon': !props.dark });
    const containerElement = useRef(null);

    const changeColorScheme = () => {
        props.onToggleColorScheme();
    };

    const headerClassName = classNames('landing-header px-5 lg:px-8', { 'landing-header-active': menuActive });

    const scrollListener = useRef();

    const bindScrollListener = () => {
        scrollListener.current = () => {
            if (containerElement && containerElement.current) {
                if (window.scrollY > 0) containerElement.current.classList.add('landing-header-sticky');
                else containerElement.current.classList.remove('landing-header-sticky');
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

    useEffect(() => {
        if (scrollListener.current) {
            scrollListener.current();
        }
    });

    return (
        <section ref={containerElement} className={headerClassName}>
            <div className="landing-header-container">
                <span>
                    <img src={`https://primefaces.org/cdn/primereact/images/primereact-logo-${props.dark ? 'light' : 'dark'}.svg`} alt="primereact logo" className="landing-header-logo" />
                </span>

                <div className="flex align-items-center">
                    <nav className="scalein origin-top">
                        <ol className="list-none m-0 p-0 flex flex-column lg:flex-row flex-wrap lg:flex-nowrap lg:align-items-center font-semibold">
                            <li className="mr-0 lg:mr-2">
                                <Link href="/installation">
                                    <a>
                                        <img src="https://primefaces.org/cdn/primereact/images/landing-new/core-icon.svg" alt="primereact core" />
                                        <span>Components</span>
                                    </a>
                                </Link>
                            </li>
                            <li className="mr-0 lg:mr-2">
                                <a href="https://blocks.primereact.org">
                                    <img src="https://primefaces.org/cdn/primereact/images/landing-new/blocks-icon.svg" alt="primereact templates" />
                                    <span>Blocks</span>
                                </a>
                            </li>
                            <li className="mr-0 lg:mr-2">
                                <a href="https://designer.primereact.org">
                                    <img src="https://primefaces.org/cdn/primereact/images/landing-new/designer-icon.svg" alt="primereact templates" />
                                    <span>Designer</span>
                                </a>
                            </li>
                            <li className="mr-0 lg:mr-2">
                                <a href="https://www.primefaces.org/store/templates.xhtml">
                                    <img src="https://primefaces.org/cdn/primereact/images/landing-new/templates-icon.svg" alt="primereact templates" />
                                    <span>Templates</span>
                                </a>
                            </li>
                        </ol>
                    </nav>
                    <a href="https://github.com/primefaces/primereact" rel="noopener noreferrer" className="linkbox p-0 header-button mr-2 flex align-items-center justify-content-center flex-shrink-0">
                        <i className="pi pi-github"></i>
                    </a>
                    <a href="https://discord.gg/gzKFYnpmCY" rel="noopener noreferrer" className="linkbox p-0 header-button mr-2 flex align-items-center justify-content-center flex-shrink-0">
                        <i className="pi pi-discord"></i>
                    </a>
                    <button type="button" className="linkbox header-button inline-flex align-items-center justify-content-center" onClick={changeColorScheme}>
                        <i className={colorSchemeIcon}></i>
                    </button>
                    <button type="button" className="linkbox header-button inline-flex align-items-center justify-content-center lg:hidden ml-2 menu-button" onClick={() => setMenuActive(!menuActive)}>
                        <i className="pi pi-bars"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeaderSection;
