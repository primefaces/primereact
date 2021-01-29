import React, { Component } from 'react';
import { Button } from '../src/components/button/Button';
import { InputSwitch } from '../src/components/inputswitch/InputSwitch';
import classNames from 'classnames';
import { AppInputStyleSwitch } from './AppInputStyleSwitch';
import AppContentContext from './AppContentContext';

export class AppConfig extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: false,
            scale: 14,
            scales: [12,13,14,15,16]
        }

        this.onThemeChange = this.onThemeChange.bind(this);
        this.toggleConfigurator = this.toggleConfigurator.bind(this);
        this.incrementScale = this.incrementScale.bind(this);
        this.decrementScale = this.decrementScale.bind(this);
        this.hideConfigurator = this.hideConfigurator.bind(this);
    }

    toggleConfigurator(event) {
        this.setState((prevState) => ({
            active: !prevState.active
        }), () => {
            if (this.state.active)
                this.bindOutsideClickListener();
            else
                this.unbindOutsideClickListener();
        });

        event.preventDefault();
    }

    hideConfigurator(event) {
        this.setState({ active: false });
        this.unbindOutsideClickListener();
        event.preventDefault();
    }

    onThemeChange(event, theme, dark) {
        if (this.props.onThemeChange) {
            this.props.onThemeChange({
                originalEvent: event,
                theme,
                dark
            })
        }

        event.preventDefault();
    }

    bindOutsideClickListener() {
        if (!this.outsideClickListener) {
            this.outsideClickListener = (event) => {
                if (this.state.active && this.isOutsideClicked(event)) {
                    this.hideConfigurator(event);
                }
            };
            document.addEventListener('click', this.outsideClickListener);
        }
    }

    unbindOutsideClickListener() {
        if (this.outsideClickListener) {
            document.removeEventListener('click', this.outsideClickListener);
            this.outsideClickListener = null;
        }
    }

    isOutsideClicked(event) {
        return !(this.config.isSameNode(event.target) || this.config.contains(event.target));
    }

    decrementScale() {
        this.setState((prevState) => ({
            scale: --prevState.scale
        }), () => {
            document.documentElement.style.fontSize = this.state.scale + 'px';
        });
    }

    incrementScale() {
        this.setState((prevState) => ({
            scale: ++prevState.scale
        }), () => {
            document.documentElement.style.fontSize = this.state.scale + 'px';
        });
    }

    render() {
        const configClassName = classNames('layout-config', {
            'layout-config-active': this.state.active
        });

        return (
            <div ref={(el) => this.config = el} className={configClassName}>
                <div className="layout-config-content-wrapper">
                    <button className="layout-config-button p-link" onClick={this.toggleConfigurator}>
                        <i className="pi pi-cog"></i>
                    </button>
                    <button className="layout-config-close p-link" onClick={this.hideConfigurator}>
                        <i className="pi pi-times"></i>
                    </button>

                    <div className="layout-config-content">
                        <div>
                            <h4>Component Scale</h4>
                            <div className="config-scale">
                                <Button icon="pi pi-minus" onClick={this.decrementScale} className="p-button-text" disabled={this.state.scale === this.state.scales[0]} />
                                {
                                    this.state.scales.map((scale) => {
                                        return <i className={classNames('pi pi-circle-on', {'scale-active': scale === this.state.scale})} key={scale}/>
                                    })
                                }
                                <Button icon="pi pi-plus" onClick={this.incrementScale} className="p-button-text" disabled={this.state.scale === this.state.scales[this.state.scales.length - 1]} />
                            </div>

                            <AppContentContext.Consumer>
                                { context => <AppInputStyleSwitch id="config" value={context.inputStyle} onChange={({value}) => context.onInputStyleChange(value)} /> }
                            </AppContentContext.Consumer>


                            <h4>Ripple Effect</h4>
                            <InputSwitch checked={this.props.ripple} onChange={(e) => this.props.onRippleChange(e.value)} />

                            <h4>Free Themes</h4>
                            <p>Built-in component themes created by the <a href="https://www.primefaces.org/designer/primereact">PrimeReact Theme Designer</a>.</p>

                            <h5>Bootstrap</h5>
                            <div className="p-grid free-themes">
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/bootstrap4-light-blue.svg" alt="Bootstrap Light Blue" onClick={(e) => this.onThemeChange(e, 'bootstrap4-light-blue')}/>
                                    </button>
                                    <span>Blue</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/bootstrap4-light-purple.svg" alt="Bootstrap Light Blue" onClick={(e) => this.onThemeChange(e, 'bootstrap4-light-purple')}/>
                                    </button>
                                    <span>Purple</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/bootstrap4-dark-blue.svg" alt="Bootstrap Dark Blue" onClick={(e) => this.onThemeChange(e, 'bootstrap4-dark-blue', true)}/>
                                    </button>
                                    <span>Blue</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/bootstrap4-dark-purple.svg" alt="Bootstrap Dark Blue" onClick={(e) => this.onThemeChange(e, 'bootstrap4-dark-purple', true)}/>
                                    </button>
                                    <span>Purple</span>
                                </div>
                            </div>

                            <h5>Material Design</h5>
                            <div className="p-grid free-themes">
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/md-light-indigo.svg" alt="Material Light Indigo" onClick={(e) => this.onThemeChange(e, 'md-light-indigo')}/>
                                    </button>
                                    <span>Indigo</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/md-light-deeppurple.svg" alt="Material Light Deep Purple" onClick={(e) => this.onThemeChange(e, 'md-light-deeppurple')}/>
                                    </button>
                                    <span>Deep Purple</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/md-dark-indigo.svg" alt="Material Dark Indigo" onClick={(e) => this.onThemeChange(e, 'md-dark-indigo', true)}/>
                                    </button>
                                    <span>Indigo</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/md-dark-deeppurple.svg" alt="Material Dark Deep Purple" onClick={(e) => this.onThemeChange(e, 'md-dark-deeppurple', true)}/>
                                    </button>
                                    <span>Deep Purple</span>
                                </div>
                            </div>

                            <h5>Material Design Compact</h5>
                            <div className="p-grid free-themes">
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/md-light-indigo.svg" alt="Material Compact Light Indigo" onClick={(e) => this.onThemeChange(e, 'mdc-light-indigo')}/>
                                    </button>
                                    <span>Indigo</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/md-light-deeppurple.svg" alt="Material Compact Deep Purple" onClick={(e) => this.onThemeChange(e, 'mdc-light-deeppurple')}/>
                                    </button>
                                    <span>Deep Purple</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/md-dark-indigo.svg" alt="Material Compact Dark Indigo" onClick={(e) => this.onThemeChange(e, 'mdc-dark-indigo', true)}/>
                                    </button>
                                    <span>Indigo</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/md-dark-deeppurple.svg" alt="Material Compact Dark Deep Purple" onClick={(e) => this.onThemeChange(e, 'mdc-dark-deeppurple', true)}/>
                                    </button>
                                    <span>Deep Purple</span>
                                </div>
                            </div>

                            <h5>Fluent UI</h5>
                            <div className="p-grid free-themes">
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/fluent-light.png" alt="Fluent Light" onClick={(e) => this.onThemeChange(e, 'fluent-light')}/>
                                    </button>
                                    <span>Blue</span>
                                </div>
                            </div>

                            <h5>PrimeOne Design</h5>
                            <div className="p-grid free-themes">
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/saga-blue.png" alt="Saga Blue" onClick={(e) => this.onThemeChange(e, 'saga-blue')}/>
                                    </button>
                                    <span>Saga Blue</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/saga-green.png" alt="Saga Green" onClick={(e) => this.onThemeChange(e, 'saga-green')}/>
                                    </button>
                                    <span>Saga Green</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/saga-orange.png" alt="Saga Orange" onClick={(e) => this.onThemeChange(e, 'saga-orange')}/>
                                    </button>
                                    <span>Saga Orange</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/saga-purple.png" alt="Saga Purple" onClick={(e) => this.onThemeChange(e, 'saga-purple')}/>
                                    </button>
                                    <span>Saga Purple</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/vela-blue.png" alt="Vela Blue" onClick={(e) => this.onThemeChange(e, 'vela-blue', true)}/>
                                    </button>
                                    <span>Vela Blue</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/vela-green.png" alt="Vela Green" onClick={(e) => this.onThemeChange(e, 'vela-green', true)}/>
                                    </button>
                                    <span>Vela Green</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/vela-orange.png" alt="Vela Orange" onClick={(e) => this.onThemeChange(e, 'vela-orange', true)}/>
                                    </button>
                                    <span>Vela Orange</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/vela-purple.png" alt="Vela Purple" onClick={(e) => this.onThemeChange(e, 'vela-purple', true)}/>
                                    </button>
                                    <span>Vela Purple</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/arya-blue.png" alt="Arya Blue" onClick={(e) => this.onThemeChange(e, 'arya-blue', true)}/>
                                    </button>
                                    <span>Arya Blue</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/arya-green.png" alt="Arya Green" onClick={(e) => this.onThemeChange(e, 'arya-green', true)}/>
                                    </button>
                                    <span>Arya Green</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/arya-orange.png" alt="Arya Orange" onClick={(e) => this.onThemeChange(e, 'arya-orange', true)}/>
                                    </button>
                                    <span>Arya Orange</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/arya-purple.png" alt="Arya Purple" onClick={(e) => this.onThemeChange(e, 'arya-purple', true)}/>
                                    </button>
                                    <span>Arya Purple</span>
                                </div>
                            </div>

                            <h5>Premium Themes</h5>
                            <p>Premium themes are only available exclusively for <a href="https://www.primefaces.org/designer/primereact">PrimeReact Theme Designer</a> subscribers and therefore not included in PrimeReact core.</p>
                            <div className="p-grid free-themes">
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/soho-light.png" alt="Soho Light" onClick={(e) => this.onThemeChange(e, 'soho-light')}/>
                                    </button>
                                    <span>Soho Light</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/soho-dark.png" alt="Soho Dark" onClick={(e) => this.onThemeChange(e, 'soho-dark', true)}/>
                                    </button>
                                    <span>Soho Dark</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/viva-light.svg" alt="Viva Light" onClick={(e) => this.onThemeChange(e, 'viva-light')}/>
                                    </button>
                                    <span>Viva Light</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/viva-dark.svg" alt="Viva Dark" onClick={(e) => this.onThemeChange(e, 'viva-dark', true)}/>
                                    </button>
                                    <span>Viva Dark</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/mira.jpg" alt="Mira" onClick={(e) => this.onThemeChange(e, 'mira')}/>
                                    </button>
                                    <span>Mira</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/nano.jpg" alt="Nano" onClick={(e) => this.onThemeChange(e, 'nano')}/>
                                    </button>
                                    <span>Nano</span>
                                </div>
                            </div>

                            <h4>Legacy Free Themes</h4>
                            <div className="p-grid free-themes">
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/nova.png" alt="Nova" onClick={(e) => this.onThemeChange(e, 'nova')}/>
                                    </button>
                                    <span>Nova</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/nova-alt.png" alt="Nova Alt" onClick={(e) => this.onThemeChange(e, 'nova-alt')}/>
                                    </button>
                                    <span>Nova Alt</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/nova-accent.png" alt="Nova Accent" onClick={(e) => this.onThemeChange(e, 'nova-accent')}/>
                                    </button>
                                    <span>Nova Accent</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/luna-blue.png" alt="Luna Blue" onClick={(e) => this.onThemeChange(e, 'luna-blue', true)}/>
                                    </button>
                                    <span>Luna Blue</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/luna-green.png" alt="Luna Green" onClick={(e) => this.onThemeChange(e, 'luna-green', true)}/>
                                    </button>
                                    <span>Luna Green</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/luna-amber.png" alt="Luna Amber" onClick={(e) => this.onThemeChange(e, 'luna-amber', true)}/>
                                    </button>
                                    <span>Luna Amber</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/luna-pink.png" alt="Luna Pink" onClick={(e) => this.onThemeChange(e, 'luna-pink', true)}/>
                                    </button>
                                    <span>Luna Pink</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link">
                                        <img src="showcase/images/themes/rhea.png" alt="Rhea" onClick={(e) => this.onThemeChange(e, 'rhea', false)}/>
                                    </button>
                                    <span>Rhea</span>
                                </div>
                            </div>

                            <h4>Premium Create-React-App Templates</h4>
                            <p>Beautifully crafted premium <a href="https://github.com/facebookincubator/create-react-app">create-react-app</a> application templates by the PrimeTek design team.</p>
                            <div className="p-grid premium-themes">
                                <div className="p-col-12 p-md-6">
                                    <a href="https://www.primefaces.org/layouts/diamond-react" rel="noopener noreferrer" target="_blank">
                                        <img alt="Diamond" src="showcase/images/layouts/diamond-react.jpg" />
                                    </a>
                                </div>
                                <div className="p-col-12 p-md-6">
                                    <a href="https://www.primefaces.org/layouts/sapphire-react" rel="noopener noreferrer" target="_blank">
                                        <img alt="Sapphire" src="showcase/images/layouts/sapphire-react.jpg" />
                                    </a>
                                </div>
                                <div className="p-col-12 p-md-6">
                                    <a href="https://www.primefaces.org/layouts/serenity-react" rel="noopener noreferrer" target="_blank">
                                        <img alt="Serenity" src="showcase/images/layouts/serenity-react.jpg" />
                                    </a>
                                </div>
                                <div className="p-col-12 p-md-6">
                                    <a href="https://www.primefaces.org/layouts/ultima-react" rel="noopener noreferrer" target="_blank">
                                        <img alt="Ultima" src="showcase/images/layouts/ultima-react.jpg" />
                                    </a>
                                </div>
                                <div className="p-col-12 p-md-6">
                                    <a href="https://www.primefaces.org/layouts/babylon-react" rel="noopener noreferrer" target="_blank">
                                        <img alt="Babylon" src="showcase/images/layouts/babylon-react.jpg" />
                                    </a>
                                </div>
                                <div className="p-col-12 p-md-6">
                                    <a href="https://www.primefaces.org/layouts/avalon-react" rel="noopener noreferrer" target="_blank">
                                        <img alt="Avalon" src="showcase/images/layouts/avalon-react.jpg" />
                                    </a>
                                </div>
                                <div className="p-col-12 p-md-6">
                                    <a href="https://www.primefaces.org/layouts/apollo-react" rel="noopener noreferrer" target="_blank">
                                        <img alt="Apollo" src="showcase/images/layouts/apollo-react.jpg" />
                                    </a>
                                </div>
                                <div className="p-col-12 p-md-6">
                                    <a href="https://www.primefaces.org/layouts/roma-react" rel="noopener noreferrer" target="_blank">
                                        <img alt="Roma" src="showcase/images/layouts/roma-react.jpg" />
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
