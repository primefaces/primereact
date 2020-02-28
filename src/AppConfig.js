import React, { Component } from 'react';

export class AppConfig extends Component {

    constructor() {
        super();

        this.onThemeChange = this.onThemeChange.bind(this);
    }

    onThemeChange(event, theme, dark) {
        if (this.props.onThemeChange) {
            this.props.onThemeChange({
                originalEvent: event,
                theme,
                dark
            })
        }
    }

    render() {
        return (
            <div className="layout-config" onClick={this.props.onConfiguratorClick}>
                <div className="layout-config-content-wrapper">
                    <button type="button" className="p-link layout-config-button" onClick={this.props.toggleConfigurator}>
                        <i className="pi pi-cog"></i>
                    </button>
                    <button type="button" className="p-link layout-config-close" onClick={this.props.hideConfigurator}>
                        <i className="pi pi-times"></i>
                    </button>

                    <div className="layout-config-content">
                        <div className="free-themes">
                            <h1 style={{ 'marginTop': 0 }}>FREE THEMES</h1>
                            <p>Built-in component themes created by the <a href="https://www.primefaces.org/designer/primereact">PrimeReact Theme Designer</a>.</p>
                            <div className="p-grid">
                                <div className="p-col-3">
                                    <button type="button" className="p-link">
                                        <img src="showcase/resources/images/layouts/themeswitcher-nova-light.png" alt="Nova Light" onClick={e => this.onThemeChange(e, 'nova-light', false)} />
                                        {this.props.activeTheme === 'nova-light' && <i className="pi pi-check" />}
                                    </button>
                                    <span>Nova-Light</span>
                                </div>
                                <div className="p-col-3">
                                    <button type="button" className="p-link">
                                        <img src="showcase/resources/images/layouts/themeswitcher-nova-dark.png" alt="Nova Dark" onClick={e => this.onThemeChange(e, 'nova-dark', false)} />
                                        {this.props.activeTheme === 'nova-dark' && <i className="pi pi-check" />}
                                    </button>
                                    <span>Nova-Dark</span>
                                </div>
                                <div className="p-col-3">
                                    <button type="button" className="p-link">
                                        <img src="showcase/resources/images/layouts/themeswitcher-nova-colored.png" alt="Nova Colored" onClick={e => this.onThemeChange(e, 'nova-colored', false)} />
                                        {this.props.activeTheme === 'nova-colored' && <i className="pi pi-check" />}
                                    </button>
                                    <span>Nova-Colored</span>
                                </div>
                                <div className="p-col-3">
                                    <button type="button" className="p-link">
                                        <img src="showcase/resources/images/layouts/themeswitcher-luna-amber.png" alt="Luna Amber" onClick={e => this.onThemeChange(e, 'luna-amber', true)} />
                                        {this.props.activeTheme === 'luna-amber' && <i className="pi pi-check" />}
                                    </button>
                                    <span>Luna-Amber</span>
                                </div>
                                <div className="p-col-3">
                                    <button type="button" className="p-link">
                                        <img src="showcase/resources/images/layouts/themeswitcher-luna-blue.png" alt="Luna Blue" onClick={e => this.onThemeChange(e, 'luna-blue', true)} />
                                        {this.props.activeTheme === 'luna-blue' && <i className="pi pi-check" />}
                                    </button>
                                    <span>Luna-Blue</span>
                                </div>
                                <div className="p-col-3">
                                    <button type="button" className="p-link">
                                        <img src="showcase/resources/images/layouts/themeswitcher-luna-green.png" alt="Luna Green" onClick={e => this.onThemeChange(e, 'luna-green', true)} />
                                        {this.props.activeTheme === 'luna-green' && <i className="pi pi-check" />}
                                    </button>
                                    <span>Luna-Green</span>
                                </div>
                                <div className="p-col-3">
                                    <button type="button" className="p-link">
                                        <img src="showcase/resources/images/layouts/themeswitcher-luna-pink.png" alt="Luna Pink" onClick={e => this.onThemeChange(e, 'luna-pink', true)} />
                                        {this.props.activeTheme === 'luna-pink' && <i className="pi pi-check" />}
                                    </button>
                                    <span>Luna-Pink</span>
                                </div>
                                <div className="p-col-3">
                                    <button type="button" className="p-link">
                                        <img src="showcase/resources/images/layouts/themeswitcher-rhea.png" alt="Rhea" onClick={e => this.onThemeChange(e, 'rhea', false)} />
                                        {this.props.activeTheme === 'rhea' && <i className="pi pi-check" />}
                                    </button>
                                    <span>Rhea</span>
                                </div>
                            </div>
                        </div>

                        <div className="premium-themes">
                            <h1>PREMIUM CREATE-REACT-APP TEMPLATES</h1>
                            <p>Based on <a href="https://github.com/facebookincubator/create-react-app">create-react-app</a>, develop awesome applications in no time using the premium templates
                                of PrimeReact and impress your users.</p>
                            <div className="p-grid">
                                <div className="p-col-12 p-md-6">
                                    <a href="https://www.primefaces.org/layouts/sapphire-react" rel="noopener noreferrer" target="_blank">
                                        <img alt="Sapphire" src="showcase/resources/images/layouts/sapphire-react.jpg" />
                                    </a>
                                </div>
                                <div className="p-col-12 p-md-6">
                                    <a href="https://www.primefaces.org/layouts/serenity-react" rel="noopener noreferrer" target="_blank">
                                        <img alt="Serenity" src="showcase/resources/images/layouts/serenity-react.jpg" />
                                    </a>
                                </div>
                                <div className="p-col-12 p-md-6">
                                    <a href="https://www.primefaces.org/layouts/ultima-react" rel="noopener noreferrer" target="_blank">
                                        <img alt="Ultima" src="showcase/resources/images/layouts/ultima-react.jpg" />
                                    </a>
                                </div>
                                <div className="p-col-12 p-md-6">
                                    <a href="https://www.primefaces.org/layouts/babylon-react" rel="noopener noreferrer" target="_blank">
                                        <img alt="Babylon" src="showcase/resources/images/layouts/babylon-react.jpg" />
                                    </a>
                                </div>
                                <div className="p-col-12 p-md-6">
                                    <a href="https://www.primefaces.org/layouts/avalon-react" rel="noopener noreferrer" target="_blank">
                                        <img alt="Avalon" src="showcase/resources/images/layouts/avalon-react.jpg" />
                                    </a>
                                </div>
                                <div className="p-col-12 p-md-6">
                                    <a href="https://www.primefaces.org/layouts/apollo-react" rel="noopener noreferrer" target="_blank">
                                        <img alt="Apollo" src="showcase/resources/images/layouts/apollo-react.jpg" />
                                    </a>
                                </div>
                                <div className="p-col-12 p-md-6">
                                    <a href="https://www.primefaces.org/layouts/roma-react" rel="noopener noreferrer" target="_blank">
                                        <img alt="Roma" src="showcase/resources/images/layouts/roma-react.jpg" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default AppConfig;
