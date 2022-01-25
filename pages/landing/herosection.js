import getConfig from 'next/config';
import { useEffect, useState } from "react";

export default function HeroSection() {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const [animationClass, setAnimationClass] = useState("");

    useEffect(() => {
        setAnimationClass("animation");
    });

    return (
        <section className={`landing-hero ${animationClass} flex align-items-center justify-content-center relative`}>
            <div className="hero-inner z-2 relative">
                <div className="flex align-items-center">
                    <div className="p-2">
                        <div className="hero-box animation flex align-items-center justify-content-center">
                            <div className="flex flex-column align-items-center">
                                <img src={`${contextPath}/images/landing-new/templates-icon.svg`} alt="primereact templates" />
                                <div className="name">
                                    <b>Premium Templates</b>
                                    <span>50+ Templates</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero-box animation mt-4 flex align-items-center justify-content-center">
                            <div className="flex flex-column align-items-center">
                            <img src={`${contextPath}/images/landing-new/designer-icon.svg`} alt="primereact templates" />
                                <div className="name">
                                    <b>Theme Designer</b>
                                    <span>Custom Design</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="hero-box animation flex align-items-center justify-content-center">
                            <div className="flex flex-column align-items-center">
                            <img src={`${contextPath}/images/landing-new/core-icon.svg`} alt="primereact templates" />
                                <div className="name">
                                    <b>Open Source Core</b>
                                    <span>50+ Free Themes</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero-box animation logo flex my-4 align-items-center justify-content-center">
                            <div className="hero-box-inner">
                                <div className="flex align-items-center justify-content-center">
                                    <img src={`${contextPath}/images/landing-new/overview-icon.svg`} alt="primereact templates" />
                                </div>
                                <div className="name">
                                    <b className="font-bold">EVERYTHING YOU NEED</b>
                                </div>
                            </div>
                        </div>
                        <div className="hero-box animation flex align-items-center justify-content-center">
                            <div className="flex flex-column align-items-center">
                                <img src={`${contextPath}/images/landing-new/css-icon.svg`} alt="primereact templates" />
                                <div className="name">
                                    <b>CSS Utilities</b>
                                    <span>150+ Components</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="hero-box animation flex align-items-center justify-content-center">
                            <div className="flex flex-column align-items-center">
                                <img src={`${contextPath}/images/landing-new/blocks-icon.svg`} alt="primereact templates" />
                                <div className="name">
                                    <b>Prime Blocks</b>
                                    <span>50+ Templates</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero-box animation flex mt-4 align-items-center justify-content-center">
                            <div className="flex flex-column align-items-center">
                                <img src={`${contextPath}/images/landing-new/icons-icon.svg`} alt="primereact templates" />
                                <div className="name">
                                    <b>Icon Library</b>
                                    <span>200+ Icons</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-border-top"></div>
                <div className="hero-border-left"></div>
                <div className="hero-border-right"></div>
            </div>
            <div className="hero-bg absolute top-0 left-0 right-0 bottom-0 z-0">
                <div className="hero-strip-top"></div>
                <div className="hero-strip-left"></div>
            </div>
        </section>
    );
}