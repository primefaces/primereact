import { useEffect, useState } from 'react';

const TemplateSection = (props) => {
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        setAnimationClass('templates-animation');
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <section className="landing-templates theme-dark py-8">
            <div className="section-header relative z-3">Templates</div>
            <p className="section-detail relative z-3">Professionally designed highly customizable application templates to get started in style.</p>
            <div className="flex justify-content-center relative mt-4 z-3">
                <a href="https://www.primefaces.org/store" className="font-semibold p-3 border-round flex align-items-center linkbox active">
                    <span>Learn More</span>
                    <i className="pi pi-arrow-right ml-2"></i>
                </a>
            </div>
            <section className={`templates ${animationClass} flex justify-content-center align-items-center flex-column mt-7`}>
                <div className="flex md:flex-row flex-column gap-4 lg:gap-0">
                    <div
                        className="template-block block-1 mr-2 mb-4 lg:mb-0 flex justify-content-center align-items-center"
                        style={
                            props.dark
                                ? {
                                      backgroundImage: `url("https://primefaces.org/cdn/primereact/images/landing-new/templates/diamond-dark.jpeg")`
                                  }
                                : {
                                      backgroundImage: `url("https://primefaces.org/cdn/primereact/images/landing-new/templates/diamond-light.jpeg")`
                                  }
                        }
                    >
                        <a className="templates-btn" target="_blank" rel="noopener noreferrer" href="https://www.primefaces.org/diamond-react/">
                            Diamond Preview
                        </a>
                    </div>
                    <div
                        className="template-block block-2 ml-2 flex justify-content-center align-items-center"
                        style={
                            props.dark
                                ? {
                                      backgroundImage: `url("https://primefaces.org/cdn/primereact/images/landing-new/templates/freya-dark.jpeg")`
                                  }
                                : {
                                      backgroundImage: `url("https://primefaces.org/cdn/primereact/images/landing-new/templates/freya-light.jpeg")`
                                  }
                        }
                    >
                        <a className="templates-btn" target="_blank" rel="noopener noreferrer" href="https://www.primefaces.org/freya-react/">
                            Freya Preview
                        </a>
                    </div>
                </div>
                <div className="flex my-4 md:flex-row flex-column gap-4 lg:gap-0">
                    <div
                        className="template-block block-3 mr-2  mb-4 lg:mb-0  flex justify-content-center align-items-center"
                        style={
                            props.dark
                                ? {
                                      backgroundImage: `url("https://primefaces.org/cdn/primereact/images/landing-new/templates/atlantis-dark.jpeg")`
                                  }
                                : {
                                      backgroundImage: `url("https://primefaces.org/cdn/primereact/images/landing-new/templates/atlantis-light.jpeg")`
                                  }
                        }
                    >
                        <a className="templates-btn" target="_blank" rel="noopener noreferrer" href="https://www.primefaces.org/atlantis-react/">
                            Atlantis Preview
                        </a>
                    </div>
                    <div className="template-block block-middle border-none box-shadow-none mr-2 hidden lg:flex justify-content-center align-items-center flex-column">
                        <img
                            className="img-1"
                            src={props.dark ? 'https://primefaces.org/cdn/primereact/images/landing-new/templates/templates-text-dark.png' : 'https://primefaces.org/cdn/primereact/images/landing-new/templates/templates-text-light.png'}
                            alt="template-text"
                            height={110}
                        />
                    </div>
                    <div
                        className="template-block block-4 ml-2  flex justify-content-center align-items-center"
                        style={
                            props.dark
                                ? {
                                      backgroundImage: `url("https://primefaces.org/cdn/primereact/images/landing-new/templates/apollo-dark.jpg")`
                                  }
                                : {
                                      backgroundImage: `url("https://primefaces.org/cdn/primereact/images/landing-new/templates/apollo-light.jpg")`
                                  }
                        }
                    >
                        <a className="templates-btn" target="_blank" rel="noopener noreferrer" href="https://www.primefaces.org/apollo-react/">
                            Apollo Preview
                        </a>
                    </div>
                </div>
                <div className="flex md:flex-row flex-column gap-4 lg:gap-0">
                    <div
                        className="template-block block-5 mr-2  mb-4 lg:mb-0  flex justify-content-center align-items-center"
                        style={
                            props.dark
                                ? {
                                      backgroundImage: `url("https://primefaces.org/cdn/primereact/images/landing-new/templates/serenity-dark.jpeg")`
                                  }
                                : {
                                      backgroundImage: `url("https://primefaces.org/cdn/primereact/images/landing-new/templates/serenity-light.jpeg")`
                                  }
                        }
                    >
                        <a className="templates-btn" target="_blank" rel="noopener noreferrer" href="https://www.primefaces.org/serenity-react/">
                            Serenity Preview
                        </a>
                    </div>
                    <div
                        className="template-block block-6 ml-2 flex justify-content-center align-items-center"
                        style={
                            props.dark
                                ? {
                                      backgroundImage: `url("https://primefaces.org/cdn/primereact/images/landing-new/templates/ultima-dark.jpeg")`
                                  }
                                : {
                                      backgroundImage: `url("https://primefaces.org/cdn/primereact/images/landing-new/templates/ultima-light.jpeg")`
                                  }
                        }
                    >
                        <a className="templates-btn" target="_blank" rel="noopener noreferrer" href="https://www.primefaces.org/ultima-react/">
                            Ultima Preview
                        </a>
                    </div>
                </div>
                <div className="lines">
                    <div className="top">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="left">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default TemplateSection;
