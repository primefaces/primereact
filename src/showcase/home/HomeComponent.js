import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class HomeComponent extends Component {

    render() {
        return (
            <div className="home">
                <div className="introduction">
                    <h1>The Most Complete UI Framework</h1>
                    <h2>for REACT</h2>

                    <Link to="/setup" className="link-button">Get Started</Link>
                </div>
                <div className="features">
                    <h3>Why PrimeReact?</h3>
                    <p className="features-tagline">Congratulations! <span role="img" aria-label="celebrate">🎉</span> Your quest to find the UI library for React is complete.</p>

                    <p className="features-description">PrimeReact is a collection of rich UI components for React. All widgets are open source and free to use under MIT License. PrimeReact is developed by PrimeTek Informatics,
                        a vendor with years of expertise in developing open source UI solutions. For project news and updates, please <a href="https://twitter.com/primereact" className="layout-content-link">follow us on twitter</a> and <a href="https://www.primefaces.org/category/primereact/" className="layout-content-link">visit our blog</a>.</p>

                    <div className="p-grid">
                        <div className="p-col-12 p-md-4">
                            <div className="feature-card">
                                <img alt="components" src="showcase/resources/images/home/react-components.png" />
                                <div className="feature-card-detail">
                                    <span className="feature-name">70+ COMPONENTS</span>
                                    <p>The most complete set of native widgets featuring 70+ easy to use components for all your UI requirements.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <div className="feature-card">
                                <img alt="opensource" src="showcase/resources/images/home/react-opensource.png" />
                                <div className="feature-card-detail">
                                    <span className="feature-name">OPEN SOURCE</span>
                                    <p>Hosted at <a href="https://github.com/primefaces/primereact" className="layout-content-link">GitHub</a>, all widgets are open source and free to use under MIT license. Feel the power of open source.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <div className="feature-card">
                                <img alt="themes" src="showcase/resources/images/home/react-themes.png" />
                                <div className="feature-card-detail">
                                    <span className="feature-name">THEMES</span>
                                    <p>Don’t get tied up in just one look&feel. Choose from a variety of options including material and bootstrap design.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <div className="feature-card">
                                <img alt="templates" src="showcase/resources/images/home/react-templates.png" />
                                <div className="feature-card-detail">
                                    <span className="feature-name">TEMPLATES</span>
                                    <p>Professionally designed highly customizable PrimeReact application templates to get started in no time.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <div className="feature-card">
                                <img alt="accesibility" src="showcase/resources/images/home/react-accesibility.png" />
                                <div className="feature-card-detail">
                                    <span className="feature-name">ACCESSIBILITY</span>
                                    <p>Fully accessible and in compliance with Section 508 standards.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <div className="feature-card">
                                <img alt="pro" src="showcase/resources/images/home/react-pro.png" />
                                <div className="feature-card-detail">
                                    <span className="feature-name">PRO SUPPORT</span>
                                    <p>With the exclusive services of Pro account, you no longer need to post your questions in the community forum and your issues to community issue tracker.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <div className="feature-card">
                                <img alt="productivity" src="showcase/resources/images/home/react-productivity.png" />
                                <div className="feature-card-detail">
                                    <span className="feature-name">PRODUCTIVITY</span>
                                    <p>Allocate your valuable time on business logic rather than dealing with the complex user interface requirements.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <div className="feature-card">
                                <img alt="community" src="showcase/resources/images/home/react-community.png" />
                                <div className="feature-card-detail">
                                    <span className="feature-name">COMMUNITY</span>
                                    <p>Join PrimeReact community to become a part of an active, vibrant and growing open source foundation.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <div className="feature-card">
                                <img alt="mobile" src="showcase/resources/images/home/react-mobile.png" />
                                <div className="feature-card-detail">
                                    <span className="feature-name">MOBILE</span>
                                    <p>Enhanced mobile user experience with touch optimized responsive design elements.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="whouses">
                    <h3>Key Users</h3>
                    <p>Open source products of <a href="http://www.primetek.com.tr">PrimeTek</a> are used all around the world by 1M+ developers in Fortune 500 companies, corporations, government and educational
                        institutions.</p>
                    <div className="p-grid">
                        <div className="p-col-6 p-md-2"><img alt="airbus" src="showcase/resources/images/home/airbus.svg"/></div>
                        <div className="p-col-6 p-md-2"><img alt="amex" src="showcase/resources/images/home/amex.svg"/></div>
                        <div className="p-col-6 p-md-2"><img alt="bmw" src="showcase/resources/images/home/bmw.svg"/></div>
                        <div className="p-col-6 p-md-2"><img alt="ebay" src="showcase/resources/images/home/ebay.svg"/></div>
                        <div className="p-col-6 p-md-2"><img alt="ford" src="showcase/resources/images/home/ford.svg"/></div>
                        <div className="p-col-6 p-md-2"><img alt="fox" src="showcase/resources/images/home/fox.svg"/></div>
                        <div className="p-col-6 p-md-2"><img alt="lufthansa" src="showcase/resources/images/home/lufthansa.svg"/></div>
                        <div className="p-col-6 p-md-2"><img alt="mercedes" src="showcase/resources/images/home/mercedes.svg"/></div>
                        <div className="p-col-6 p-md-2"><img alt="sap" src="showcase/resources/images/home/sap.svg"/></div>
                        <div className="p-col-6 p-md-2"><img alt="unicredit" src="showcase/resources/images/home/unicredit.svg"/></div>
                        <div className="p-col-6 p-md-2"><img alt="verizon" src="showcase/resources/images/home/verizon.svg"/></div>
                        <div className="p-col-6 p-md-2"><img alt="viacom" src="showcase/resources/images/home/viacom.svg"/></div>
                    </div>
                </div>
                <div className="templates">
                    <h3>Free Application Template for PrimeReact</h3>
                    <p>Sigma is a free and open source admin template based on <a href="https://github.com/facebookincubator/create-react-app" className="layout-content-link">create-react-app</a>.</p>

                    <div className="p-grid">
                        <div className="p-col-12">
                            <a href="https://www.primefaces.org/sigma-react">
                                <img alt="Sigma" src="showcase/resources/images/layouts/sigma-biggest.jpg" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="templates">

                    <h3>Premium Application Templates for PrimeReact</h3>
                    <p>Based on <a href="https://github.com/facebookincubator/create-react-app" className="layout-content-link">create-react-app</a>, develop awesome applications in no time using the premium templates
                        of PrimeReact and impress your users.</p>

                    <div className="p-grid templates-grid">
                        <div className="p-col-12 p-md-4">
							<a href="https://www.primefaces.org/layouts/sapphire-react">
								<img alt="Sapphire" src="showcase/resources/images/layouts/sapphire-react.jpg" />
							</a>
						</div>
                        <div className="p-col-12 p-md-4">
                            <a href="https://www.primefaces.org/layouts/serenity-react">
                                <img alt="Serenity" src="showcase/resources/images/layouts/serenity-react.jpg" />
                            </a>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <a href="https://www.primefaces.org/layouts/ultima-react">
                                <img alt="Ultima" src="showcase/resources/images/layouts/ultima-react.jpg" />
                            </a>
                        </div>
                        <div className="p-col-12 p-md-4">
							<a href="https://www.primefaces.org/layouts/babylon-react">
								<img alt="Babylon" src="showcase/resources/images/layouts/babylon-react.jpg" />
							</a>
						</div>
                        <div className="p-col-12 p-md-4">
                            <a href="https://www.primefaces.org/layouts/avalon-react">
                                <img alt="Avalon" src="showcase/resources/images/layouts/avalon-react.jpg" />
                            </a>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <a href="https://www.primefaces.org/layouts/apollo-react">
                                <img alt="Apollo" src="showcase/resources/images/layouts/apollo-react.jpg" />
                            </a>
                        </div>
                        <div className="p-col-12 p-md-4">
							<a href="https://www.primefaces.org/layouts/roma-react">
								<img alt="Roma" src="showcase/resources/images/layouts/roma-react.jpg" />
							</a>
						</div>
                    </div>
                </div>

                <div className="primereact-designer">
                    <h3>PrimeReact Designer API</h3>
                    <div className="p-grid">
                        <div className="p-col-12">
                            <img alt="PrimeReact Designer" src="showcase/resources/images/primereact-designer.jpg" />
                            <p><a href="https://www.primefaces.org/designer/primereact">Designer API</a> is a SASS based theme engine to create PrimeReact themes easily featuring over 500 variables,
                                a demo application and a base sample theme. Whether you have your own style guide or just need a custom theme, Designer API is the right tool to design and bring them to existence.</p>

                            <p>Visit <a href="https://www.primefaces.org/designer/primereact">Designer API HomePage</a> for more information, live demos and access to a trial version.</p>
                        </div>
                    </div>
                </div>

                <div className="prosupport">
                    <div className="p-grid">
                        <div className="p-col-12 p-md-6">
                            <h3>PrimeReact PRO Support</h3>
                            <p>With PrimeReact PRO, it is easy to support, tune and add features to PrimeReact as if it were an in-house framework.</p>
                            <p>PrimeReact PRO is a term based commercial support service. With the exclusive services of Pro account, you no longer need to post your questions in the community forum and your issues to community issue tracker.</p>
                            <a className="link-button2" href="mailto:contact@primetek.com.tr">
                                Get a Quote
                            </a>
                        </div>
                        <div className="p-col-12 p-md-6">
                            <img alt="PRO" src="showcase/resources/images/home/icon-pro.svg"></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
