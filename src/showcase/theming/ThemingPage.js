import React, {Component} from 'react';

export class ThemingPage extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Theming</h1>
                        <p>Choose from a variety of premium themes or develop your own theme using PrimeReact Theme Designer API.</p>
                    </div>
                </div>

                <div className="content-section documentation">
                    <h3 style={{marginTop: 0}}>Theme Designer API</h3>
                    <p><a href="https://www.primefaces.org/designer/primereact">Designer API</a> is the ultimate tool to create your own PrimeReact experience powered by a SASS based theme engine 
                        with 500+ variables and a demo application. In addition, PrimeReact only ships the generated CSS of Nova, Luna and Rhea themes whereas Designer provides
                        full access to the whole SASS structure and the variables of these pre-built themes.</p>

                    <p>Whether you have your own style guide or just need a custom theme, Designer API is the right tool to design and bring them to existence.</p>
                    
                    <p>Visit <a href="https://www.primefaces.org/designer/primereact">Designer API HomePage</a> for more information, live demos and access to a trial version.</p>
                    <a href="http://www.primefaces.org/designer/primereact">
                        <img alt="PrimeReact Designer" src="showcase/resources/images/primereact-designer.jpg" style={{width: '100%'}} />
                    </a>
                    
                    <h3>Styled Components</h3>
                    <p>All PrimeReact components support className property and are compatible with Styled Components.</p>
                        
                    <h3>Premium Templates</h3>
                    <p>Powered by create-react-app, create awesome applications in no time using the premium templates of PrimeReact and impress your users.</p>
                    <p>Premium Templates are advanced create-react-app based applications featuring a full application layout with various menu orientations, templates pages such as landing, login and 
                        premium themes that share the same design language of the layout for a unified look.</p>

                    <div className="p-grid templates-grid">
                        <div className="p-col-12 p-md-6">
                            <h4>Serenity with Material Design</h4>
                            <a href="https://www.primefaces.org/layouts/serenity-react">
                                <img alt="Serenity" src="showcase/resources/images/layouts/serenity-react-sqr.jpg"  />
                            </a>
                        </div>
                        <div className="p-col-12 p-md-6">
                            <h4>Ultima with Material Design</h4>
                            <a href="https://www.primefaces.org/layouts/ultima-react">
                                <img alt="Ultima" src="showcase/resources/images/layouts/ultima-react-sqr.jpg" />
                            </a>
                        </div>
                        <div className="p-col-12 p-md-6">
                            <h4>Avalon with Bootstrap Styling</h4>
                            <a href="https://www.primefaces.org/layouts/avalon-react">
                                <img alt="Avalon" src="showcase/resources/images/layouts/avalon-react-sqr.jpg" />
                            </a>
                        </div>
                        <div className="p-col-12 p-md-6">
                            <h4>Apollo with Light&Dark Mode</h4>
                            <a href="https://www.primefaces.org/layouts/apollo-react">
                                <img alt="Apollo" src="showcase/resources/images/layouts/apollo-react-sqr.png" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}