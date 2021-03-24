import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import AppContentContext from '../../AppContentContext';

export class HomeComponent extends Component {

    render() {
        return (
            <div className="home">
                <AppContentContext.Consumer>
                {
                    context => (
                        <div className={classNames('introduction', {'introduction-dark': context.darkTheme})}>
                            <div className="introduction-title">The Ultimate UI Component Library</div>
                            <div className="introduction-subtitle">for React</div>

                            <Link to="/setup" className="action-button">Get Started</Link>
                            <img alt="devices" className="introduction-devices" src="showcase/images/home/intro-devices.png" />
                        </div>
                    )
                }
                </AppContentContext.Consumer>

                <div className="features">
                    <h4>Features</h4>
                    <p>Congratulations! <span role="img" aria-label="celebrate" className="p-mx-2">🎉</span> Your quest to find the UI library for React is now complete.</p>

                    <div className="p-grid">
                        <div className="p-col-12 p-md-4">
                            <div className="feature-card">
                                <img alt="components" src="showcase/images/home/react-components.png" />
                                <div className="feature-card-detail">
                                    <span className="feature-name">80+ COMPONENTS</span>
                                    <p>The most complete set of native widgets featuring 80+ easy to use components for all your UI requirements.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <div className="feature-card">
                                <img alt="opensource" src="showcase/images/home/react-opensource.png" />
                                <div className="feature-card-detail">
                                    <span className="feature-name">OPEN SOURCE</span>
                                    <p>Hosted at <a href="https://github.com/primefaces/primereact" className="layout-content-link">GitHub</a>, all widgets are open source and free to use under MIT license. Feel the power of open source.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <div className="feature-card">
                                <img alt="themes" src="showcase/images/home/react-themes.png" />
                                <div className="feature-card-detail">
                                    <span className="feature-name">THEMES</span>
                                    <p>Don’t get tied up in just one look&feel. Choose from a variety of options including material and bootstrap design.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <div className="feature-card">
                                <img alt="templates" src="showcase/images/home/react-templates.png" />
                                <div className="feature-card-detail">
                                    <span className="feature-name">TEMPLATES</span>
                                    <p>Professionally designed highly customizable PrimeReact application templates to get started in no time.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <div className="feature-card">
                                <img alt="accesibility" src="showcase/images/home/react-accesibility.png" />
                                <div className="feature-card-detail">
                                    <span className="feature-name">ACCESSIBILITY</span>
                                    <p>Fully accessible and in compliance with Section 508 standards.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <div className="feature-card">
                                <img alt="pro" src="showcase/images/home/react-pro.png" />
                                <div className="feature-card-detail">
                                    <span className="feature-name">PRO SUPPORT</span>
                                    <p>With the exclusive services of Pro account, you no longer need to post your questions in the community forum and your issues to community issue tracker.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <div className="feature-card">
                                <img alt="productivity" src="showcase/images/home/react-productivity.png" />
                                <div className="feature-card-detail">
                                    <span className="feature-name">PRODUCTIVITY</span>
                                    <p>Allocate your valuable time on business logic rather than dealing with the complex user interface requirements.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <div className="feature-card">
                                <img alt="community" src="showcase/images/home/react-community.png" />
                                <div className="feature-card-detail">
                                    <span className="feature-name">COMMUNITY</span>
                                    <p>Join PrimeReact community to become a part of an active, vibrant and growing open source foundation.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <div className="feature-card">
                                <img alt="mobile" src="showcase/images/home/react-mobile.png" />
                                <div className="feature-card-detail">
                                    <span className="feature-name">MOBILE</span>
                                    <p>Enhanced mobile user experience with touch optimized responsive design elements.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="whouses">
                    <h4>Key Users</h4>
                    <p>The creator of PrimeReact is PrimeTek Informatics, the distinguished component library vendor who built popular open source projects such as PrimeFaces, PrimeNG and PrimeVue over the past years.</p>
                    <div className="p-grid">
                        <div className="p-col-6 p-md-2"><img alt="airbus" src="showcase/images/home/airbus.svg"/></div>
                        <div className="p-col-6 p-md-2"><img alt="amex" src="showcase/images/home/amex.svg"/></div>
                        <div className="p-col-6 p-md-2"><img alt="bmw" src="showcase/images/home/nvidia.svg"/></div>
                        <div className="p-col-6 p-md-2"><img alt="ebay" src="showcase/images/home/ebay.svg"/></div>
                        <div className="p-col-6 p-md-2"><img alt="ford" src="showcase/images/home/ford.svg"/></div>
                        <div className="p-col-6 p-md-2"><img alt="fox" src="showcase/images/home/fox.svg"/></div>
                        <div className="p-col-6 p-md-2"><img alt="lufthansa" src="showcase/images/home/lufthansa.svg"/></div>
                        <div className="p-col-6 p-md-2"><img alt="mercedes" src="showcase/images/home/mercedes.svg"/></div>
                        <div className="p-col-6 p-md-2"><img alt="sap" src="showcase/images/home/sap.svg"/></div>
                        <div className="p-col-6 p-md-2"><img alt="unicredit" src="showcase/images/home/unicredit.svg"/></div>
                        <div className="p-col-6 p-md-2"><img alt="verizon" src="showcase/images/home/verizon.svg"/></div>
                        <div className="p-col-6 p-md-2"><img alt="viacom" src="showcase/images/home/viacom.svg"/></div>
                    </div>
                </div>
                <div className="templates">
                    <h4>Premium Application Templates</h4>
                    <p>Based on <a href="https://github.com/facebookincubator/create-react-app" className="layout-content-link">create-react-app</a>, develop awesome applications in no time using the premium templates
                        of PrimeReact and impress your users.</p>

                    <div className="p-grid">
                        <div className="p-col-12 p-md-3">
                            <a href="https://www.primefaces.org/layouts/ultima-react">
                                <img alt="Ultima" src="showcase/images/layouts/ultima-react.jpg" />
                            </a>
                        </div>
                        <div className="p-col-12 p-md-3">
							<a href="https://www.primefaces.org/layouts/diamond-react">
								<img alt="Diamond" src="showcase/images/layouts/diamond-react.jpg" />
							</a>
						</div>
                        <div className="p-col-12 p-md-3">
							<a href="https://www.primefaces.org/layouts/sapphire-react">
								<img alt="Sapphire" src="showcase/images/layouts/sapphire-react.jpg" />
							</a>
						</div>
                        <div className="p-col-12 p-md-3">
                            <a href="https://www.primefaces.org/layouts/serenity-react">
                                <img alt="Serenity" src="showcase/images/layouts/serenity-react.jpg" />
                            </a>
                        </div>
                        <div className="p-col-12 p-md-3">
							<a href="https://www.primefaces.org/layouts/babylon-react">
								<img alt="Babylon" src="showcase/images/layouts/babylon-react.jpg" />
							</a>
						</div>
                        <div className="p-col-12 p-md-3">
                            <a href="https://www.primefaces.org/layouts/avalon-react">
                                <img alt="Avalon" src="showcase/images/layouts/avalon-react.jpg" />
                            </a>
                        </div>
                        <div className="p-col-12 p-md-3">
                            <a href="https://www.primefaces.org/layouts/apollo-react">
                                <img alt="Apollo" src="showcase/images/layouts/apollo-react.jpg" />
                            </a>
                        </div>
                        <div className="p-col-12 p-md-3">
							<a href="https://www.primefaces.org/layouts/roma-react">
								<img alt="Roma" src="showcase/images/layouts/roma-react.jpg" />
							</a>
						</div>
                    </div>
                </div>

                <div className="templates">
                    <h4>Free Application Template for PrimeReact</h4>
                    <p>Sigma is a free and open source admin template based on <a href="https://github.com/facebookincubator/create-react-app" className="layout-content-link">create-react-app</a>.</p>

                    <div className="p-grid">
                        <div className="p-col-12">
                            <a href="https://www.primefaces.org/sigma-react">
                                <img alt="Sigma" src="showcase/images/layouts/sigma-biggest.jpg" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="primereact-designer">
                    <h4>Theme Designer</h4>
                    <p>PrimeReact is a design-agnostic library and the theming system is based on the Theme Designer, the official tool to create themes for the components. Designer includes a SASS enabled infrastructure that has over 500 customizable variables, a live editor
                        and a create-react-app application to test your themes with ease along with built-in theme samples that are embedded in PrimeReact Core.</p>

                    <p>Visit <a href="https://www.primefaces.org/designer/primereact">Designer API HomePage</a> to learn more about the features and interact with the <a href="https://www.primefaces.org/designer-react">live editor</a>.</p>
                    <div className="p-grid">
                        <div className="p-col-12">
                            <img alt="PrimeReact Designer" src="showcase/images/primereact-designer.jpg" />
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
                            <img alt="PRO" src="showcase/images/home/pro.png" style={{maxWidth: '430px', width: '100%'}}></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
