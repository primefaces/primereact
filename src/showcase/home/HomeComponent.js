import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class HomeComponent extends Component {

    render() {
        return (
            <div className="home">
                <div className="introduction">
                    <h1>The Most Complete UI Framework</h1>
                    <h2>for REACT</h2>

                    <Link to="/setup" className="home-button">Get Started</Link>
                </div>
                <div className="features">
                    <h3>Why PrimeReact?</h3>
                    <p className="features-tagline">Congratulations! <span role="img" aria-label="celebrate">🎉</span> Your quest to find the UI library for React is complete.</p>

                    <p className="features-description">PrimeReact is a collection of rich UI components for React. All widgets are open source and free to use under MIT License. PrimeReact is developed by PrimeTek Informatics,
                        a vendor with years of expertise in developing open source UI solutions. For project news and updates, please <a href="https://twitter.com/primereact">follow us on twitter</a> and <a href="https://www.primefaces.org/category/primereact/">visit our blog</a>.</p>

                    <div className="ui-g">
                        <div className="ui-g-12 ui-md-3">
                            <img alt="component" src="showcase/resources/images/home/icon-component.svg" />
                            <span className="feature-name">70+ COMPONENTS</span>
                            <p>The most complete set of native widgets featuring 70+ easy to use components for all your UI requirements.</p>
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <img alt="opensource" src="showcase/resources/images/home/icon-opensource.svg" />
                            <span className="feature-name">OPEN SOURCE</span>
                            <p>Hosted at <a href="https://github.com/primefaces/primereact">GitHub</a>, all widgets are open source and free to use under MIT license. Feel the power of open source.</p>
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <img alt="themes" src="showcase/resources/images/home/icon-themes.svg" />
                            <span className="feature-name">THEMES</span>
                            <p>Don’t get tied up in just one look&feel. Choose from a variety of options including material and flat design.</p>
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <img alt="community" src="showcase/resources/images/home/icon-community.svg" />
                            <span className="feature-name">COMMUNITY</span>
                            <p>Join PrimeReact community to become a part of an active, vibrant and growing open source foundation.</p>
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <img alt="productive" src="showcase/resources/images/home/icon-productive.svg" />
                            <span className="feature-name">PRODUCTIVITY</span>
                            <p>Allocate your valuable time on business logic rather than dealing with the complex user interface requirements.</p>
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <img alt="mobile" src="showcase/resources/images/home/icon-mobile.svg" />
                            <span className="feature-name">MOBILE</span>
                            <p>Enhanced mobile user experience with  touch optimized responsive design elements.</p>
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <img alt="templates" src="showcase/resources/images/home/icon-templates.svg" />
                            <span className="feature-name">TEMPLATES</span>
                            <p>Professionally designed highly customizable native React application templates to get started in no time. </p>
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <img alt="templates" src="showcase/resources/images/home/icon-sigma.svg" />
                            <span className="feature-name">FREE ADMIN TEMPLATE</span>
                            <p>An elegant admin template powered by create-react-app.</p>
                        </div>
                    </div>
                </div>
                <div className="whouses">
                    <h3>Key Users</h3>
                    <p>Open source products of <a href="http://www.primetek.com.tr">PrimeTek</a> are used all around the world by 1M+ developers in Fortune 500 companies, corporations, government and educational
                        institutions.</p>
                    <div className="ui-g">
                        <div className="ui-g-6 ui-md-2"><img alt="airbus" src="showcase/resources/images/home/airbus.svg"/></div>
                        <div className="ui-g-6 ui-md-2"><img alt="amex" src="showcase/resources/images/home/amex.svg"/></div>
                        <div className="ui-g-6 ui-md-2"><img alt="bmw" src="showcase/resources/images/home/bmw.svg"/></div>
                        <div className="ui-g-6 ui-md-2"><img alt="ebay" src="showcase/resources/images/home/ebay.svg"/></div>
                        <div className="ui-g-6 ui-md-2"><img alt="ford" src="showcase/resources/images/home/ford.svg"/></div>
                        <div className="ui-g-6 ui-md-2"><img alt="fox" src="showcase/resources/images/home/fox.svg"/></div>
                        <div className="ui-g-6 ui-md-2"><img alt="lufthansa" src="showcase/resources/images/home/lufthansa.svg"/></div>
                        <div className="ui-g-6 ui-md-2"><img alt="mercedes" src="showcase/resources/images/home/mercedes.svg"/></div>
                        <div className="ui-g-6 ui-md-2"><img alt="sap" src="showcase/resources/images/home/sap.svg"/></div>
                        <div className="ui-g-6 ui-md-2"><img alt="unicredit" src="showcase/resources/images/home/unicredit.svg"/></div>
                        <div className="ui-g-6 ui-md-2"><img alt="verizon" src="showcase/resources/images/home/verizon.svg"/></div>
                        <div className="ui-g-6 ui-md-2"><img alt="viacom" src="showcase/resources/images/home/viacom.svg"/></div>
                    </div>
                </div>
                <div className="templates">
                    <h3>Free Application Template for PrimeReact</h3>
                    <p>Sigma is a free and open source admin template based on <a href="https://github.com/facebookincubator/create-react-app">create-react-app</a>.</p>

                    <div className="ui-g">
                        <div className="ui-g-12">
                            <a href="https://www.primefaces.org/sigma-react">
                                <img alt="Sigma" src="showcase/resources/images/layouts/sigma-biggest.jpg" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="templates">
                    <h3>Premium Application Templates for PrimeReact</h3>
                    <p>Based on <a href="https://github.com/facebookincubator/create-react-app">create-react-app</a>, develop awesome applications in no time using the premium templates
                        of PrimeReact and impress your users.</p>

                    <div className="ui-g">
                        <div className="ui-g-12 ui-md-4">
                            <h4>Serenity with Material Design</h4>
                            <a href="https://www.primefaces.org/layouts/serenity-react">
                                <img alt="Serenity" src="showcase/resources/images/layouts/serenity-react-sqr.jpg" />
                            </a>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <h4>Ultima with Material Design</h4>
                            <a href="https://www.primefaces.org/layouts/ultima-react">
                                <img alt="Ultima" src="showcase/resources/images/layouts/ultima-react-sqr.jpg" />
                            </a>
                        </div>
                        <div className="ui-g-12 ui-md-4">
                            <h4>Avalon with Bootstrap Styling</h4>
                            <a href="https://www.primefaces.org/layouts/avalon-react">
                                <img alt="Avalon" src="showcase/resources/images/layouts/avalon-react-sqr.jpg" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="prosupport">
                    <div className="ui-g">
                        <div className="ui-g-12 ui-md-6">
                            <h3>PrimeReact PRO Support</h3>
                            <p>With PrimeReact PRO, it is easy to support, tune and add features to PrimeReact as if it were an in-house framework.</p>
                            <p>PrimeReact PRO is a term based commercial support service. With the exclusive services of Pro account, you no longer need to post your questions in the community forum and your issues to community issue tracker.</p>
                            <a className="home-button2" href="mailto:contact@primetek.com.tr">
                                Get a Quote
                            </a>
                        </div>
                        <div className="ui-g-12 ui-md-6">
                            <img alt="PRO" src="showcase/resources/images/home/icon-pro.svg"></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}