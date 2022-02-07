import getConfig from 'next/config';
import { StyleClass } from '../../components/lib/styleclass/StyleClass';
import DomHandler from '../../components/lib/utils/DomHandler';
import { useRef } from 'react';

export default function HeroSection() {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const menubutton = useRef();
    const navMenu = useRef();

    const onItemClick = () => {
        DomHandler.addClass(navMenu.current, 'hidden');
    }

    return (
        <section className="landing-header flex align-items-center justify-content-between h-10rem pad-section">
            <span>
                <img src={`${contextPath}/images/landing-new/primereact-logo-black.svg`} alt="primereact logo" />
            </span>

            <div className="flex align-items-center">
                <nav id="landing-menu" ref={navMenu} className="hidden lg:block fixed h-screen lg:h-auto top-0 left-0 w-full lg:static origin-top p-8 lg:p-0">
                    <ol className="list-none m-0 p-0 flex flex-column lg:flex-row flex-wrap lg:flex-nowrap lg:align-items-center lg:font-semibold">
                        <li>
                            <a href="#component-section" className="block px-3 lg:py-2 p-4 text-center transition-colors transition-duration-300" onClick={onItemClick}>Components</a>
                        </li>
                        <li>
                            <a href="#theme-section" className="block lg:py-2 p-4 text-center transition-colors transition-duration-300" onClick={onItemClick}>Themes</a>
                        </li>
                        <li>
                            <a href="#blocks-section" className="block lg:py-2 p-4 text-center transition-colors transition-duration-300" onClick={onItemClick}>Blocks</a>
                        </li>
                        <li>
                            <a href="#designer-section" className="block lg:py-2 p-4 text-center transition-colors transition-duration-300" onClick={onItemClick}>Designer</a>
                        </li>
                        <li>
                            <a href="#template-section" className="block lg:py-2 p-4 text-center transition-colors transition-duration-300" onClick={onItemClick}>Templates</a>
                        </li>
                    </ol>
                </nav>
                <button type="button" className="p-link linkbox header-button mx-3 inline-flex align-items-center justify-content-center">
                    <i className="pi pi-moon"></i>
                </button>
                <StyleClass nodeRef={menubutton} selector="#landing-menu" enterClassName="hidden" enterActiveClassName="scalein">
                    <button ref={menubutton} type="button" className="p-link linkbox header-button inline-flex align-items-center justify-content-center lg:hidden">
                        <i className="pi pi-bars"></i>
                    </button>
                </StyleClass>
            </div>
        </section>
    );
}

