import getConfig from 'next/config';
import { StyleClass } from '../../components/lib/styleclass/StyleClass';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { classNames } from '../../components/lib/utils/ClassNames';

export default function HeroSection(props) {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const menubutton = useRef();
    const colorSchemeIcon = classNames('pi', {'pi-sun': props.dark, 'pi-moon': !props.dark});
    const containerElement = useRef(null);
    const changeColorScheme = () => {
        props.onToggleColorScheme();
    }

    const scrollListener = useRef();
    const bindScrollListener = () => {
        scrollListener.current = () => {
            if (window.scrollY > 0)
                containerElement.current.classList.add('landing-header-sticky');
            else
                containerElement.current.classList.remove('landing-header-sticky');
        }
        window.addEventListener('scroll', scrollListener.current);
    }

    const unbindScrollListener = () => {
        if (scrollListener.current) {
            window.removeEventListener('scroll', scrollListener.current);
            scrollListener.current = null;
        }
    }

    useEffect(() => {
        bindScrollListener();
        return function unbind() {
            unbindScrollListener();
        }
    }, []);

    return (
        <section ref={containerElement} className="landing-header flex align-items-center justify-content-between pad-section">
            <span>
                <img src={`${contextPath}/images/landing-new/primereact-logo-${props.dark ? 'light' : 'dark'}.svg`} alt="primereact logo" />
            </span>

            <div className="flex align-items-center">
                <nav id="landing-menu" className="hidden lg:block fixed h-screen lg:h-auto top-0 left-0 w-full lg:static origin-top p-8 lg:p-0">
                    <ol className="list-none m-0 p-0 flex flex-column lg:flex-row flex-wrap lg:flex-nowrap lg:align-items-center lg:font-semibold">
                        <li>
                            <Link href="/setup">
                                <a className="block px-3 lg:py-2 p-4 text-center transition-colors transition-duration-300">Components</a>
                            </Link>
                        </li>
                        <li>
                            <a href="https://www.primefaces.org/primeblocks-react" className="block lg:py-2 p-4 text-center transition-colors transition-duration-300">Blocks</a>
                        </li>
                        <li>
                            <a href="https://www.primefaces.org/designer-react" className="block lg:py-2 p-4 text-center transition-colors transition-duration-300">Designer</a>
                        </li>
                        <li>
                            <a href="https://www.primefaces.org/store/templates.xhtml" className="block lg:py-2 p-4 text-center transition-colors transition-duration-300">Templates</a>
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
                <StyleClass nodeRef={menubutton} selector="#landing-menu" enterClassName="hidden" enterActiveClassName="scalein">
                    <button ref={menubutton} type="button" className="linkbox header-button inline-flex align-items-center justify-content-center lg:hidden ml-2">
                        <i className="pi pi-bars"></i>
                    </button>
                </StyleClass>
            </div>
        </section>
    );
}

