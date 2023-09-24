import Link from 'next/link';
import { useEffect, useState } from 'react';

import GetStartedSection from './getstartedsection';

const HeroSection = () => {
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        setAnimationClass('hero-animation');
        document.body.classList.remove('blocked-scroll');
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <section className={`landing-hero ${animationClass} flex align-items-center flex-column justify-content-center relative`}>
            <div className="hero-inner z-2 relative">
                <div className="flex flex-column md:align-items-center md:flex-row">
                    <div className="p-2 flex flex-row md:flex-column">
                        <div className="hero-box w-10rem h-10rem md:w-12rem md:h-12rem animation flex align-items-center justify-content-center" onClick={() => (window.location.href = 'https://www.primefaces.org/store')}>
                            <div className="flex flex-column align-items-center">
                                <img src="https://primefaces.org/cdn/primereact/images/landing-new/templates-icon.svg" alt="primereact templates" />
                                <div className="name">
                                    <b>Templates</b>
                                    <span>Spectacular Designs</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero-box w-10rem h-10rem md:w-12rem md:h-12rem animation ml-4 md:ml-0 md:mt-4 flex align-items-center justify-content-center" onClick={() => (window.location.href = 'https://designer.primereact.org')}>
                            <div className="flex flex-column align-items-center">
                                <img src="https://primefaces.org/cdn/primereact/images/landing-new/designer-icon.svg" alt="primereact templates" />
                                <div className="name">
                                    <b>Theme Designer</b>
                                    <span>Create Your Own</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 flex flex-row md:flex-column">
                        <div className="hero-box w-10rem h-10rem md:w-12rem md:h-12rem animation flex align-items-center justify-content-center" onClick={() => (window.location.href = 'https://github.com/primefaces/primereact')}>
                            <div className="flex flex-column align-items-center">
                                <img src="https://primefaces.org/cdn/primereact/images/landing-new/core-icon.svg" alt="primereact core" />
                                <div className="name">
                                    <b>Open Source</b>
                                    <span>90+ UI Components</span>
                                </div>
                            </div>
                        </div>
                        <Link href="/installation" passHref>
                            <div className="hero-box w-10rem h-10rem md:w-12rem md:h-12rem animation logo hidden md:flex my-4 align-items-center justify-content-center">
                                <div className="hero-box-inner text-center">
                                    <img src="https://primefaces.org/cdn/primereact/images/landing-new/overview-icon.svg" alt="primereact main" />
                                    <div className="name">
                                        <b className="font-bold">NEXT-GEN REACT UI</b>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="hero-box w-10rem h-10rem md:w-12rem md:h-12rem animation flex ml-4 md:ml-0 align-items-center justify-content-center" onClick={() => (window.location.href = 'https://primeflex.org')}>
                            <div className="flex flex-column align-items-center">
                                <img src="https://primefaces.org/cdn/primereact/images/landing-new/css-icon.svg" alt="primereact icons" />
                                <div className="name">
                                    <b>CSS Utilities</b>
                                    <span>PrimeFlex CSS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 flex flex-row md:flex-column">
                        <div className="hero-box w-10rem h-10rem md:w-12rem md:h-12rem animation flex align-items-center justify-content-center" onClick={() => (window.location.href = 'https://blocks.primereact.org')}>
                            <div className="flex flex-column align-items-center">
                                <img src="https://primefaces.org/cdn/primereact/images/landing-new/blocks-icon.svg" alt="primereact templates" />
                                <div className="name">
                                    <b>Prime Blocks</b>
                                    <span>400+ UI Blocks</span>
                                </div>
                            </div>
                        </div>
                        <Link href="/icons" passHref>
                            <div className="hero-box w-10rem h-10rem md:w-12rem md:h-12rem animation flex ml-4 md:ml-0 md:mt-4 align-items-center justify-content-center">
                                <div className="flex flex-column align-items-center">
                                    <img src="https://primefaces.org/cdn/primereact/images/landing-new/icons-icon.svg" alt="primereact templates" />
                                    <div className="name">
                                        <b>Icon Library</b>
                                        <span>200+ Icons</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="hero-border-top hidden md:block"></div>
                <div className="hero-border-left hidden md:block"></div>
                <div className="hero-border-right hidden md:block"></div>
            </div>
            <GetStartedSection />
            <div className="hero-bg absolute top-0 left-0 right-0 bottom-0 z-0">
                <div className="hero-strip-top"></div>
                <div className="hero-strip-left"></div>
            </div>
        </section>
    );
};

export default HeroSection;
