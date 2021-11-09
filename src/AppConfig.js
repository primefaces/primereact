import React, { Component } from 'react';
import { Button } from '../src/components/button/Button';
import { InputSwitch } from '../src/components/inputswitch/InputSwitch';
import { classNames } from './components/utils/ClassNames';
import { AppInputStyleSwitch } from './AppInputStyleSwitch';
import AppContentContext from './AppContentContext';
import { Badge } from './components/badge/Badge';

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
                                        return <i className={classNames('pi pi-circle-fill', {'scale-active': scale === this.state.scale})} key={scale}/>
                                    })
                                }
                                <Button icon="pi pi-plus" onClick={this.incrementScale} className="p-button-text" disabled={this.state.scale === this.state.scales[this.state.scales.length - 1]} />
                            </div>

                            <AppContentContext.Consumer>
                                { context => <AppInputStyleSwitch id="config" value={context.inputStyle} onChange={({value}) => context.onInputStyleChange(value)} /> }
                            </AppContentContext.Consumer>


                            <h4>Ripple Effect</h4>
                            <InputSwitch checked={this.props.ripple} onChange={(e) => this.props.onRippleChange(e.value)} disabled={this.props.isRippleConfigDisabled}/>

                            <h4>Free Themes</h4>
                            <p>Built-in component themes created by the <a href="https://www.primefaces.org/designer/primereact">PrimeReact Theme Designer</a>.</p>

                            <h5>Bootstrap</h5>
                            <div className="p-grid free-themes">
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'bootstrap4-light-blue')}>
                                        <img src="showcase/images/themes/bootstrap4-light-blue.svg" alt="Bootstrap Light Blue"/>
                                    </button>
                                    <span>Blue</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'bootstrap4-light-purple')}>
                                        <img src="showcase/images/themes/bootstrap4-light-purple.svg" alt="Bootstrap Light Blue"/>
                                    </button>
                                    <span>Purple</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'bootstrap4-dark-blue', true)}>
                                        <img src="showcase/images/themes/bootstrap4-dark-blue.svg" alt="Bootstrap Dark Blue"/>
                                    </button>
                                    <span>Blue</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'bootstrap4-dark-purple', true)}>
                                        <img src="showcase/images/themes/bootstrap4-dark-purple.svg" alt="Bootstrap Dark Blue"/>
                                    </button>
                                    <span>Purple</span>
                                </div>
                            </div>

                            <h5>Material Design</h5>
                            <div className="p-grid free-themes">
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'md-light-indigo')}>
                                        <img src="showcase/images/themes/md-light-indigo.svg" alt="Material Light Indigo"/>
                                    </button>
                                    <span>Indigo</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'md-light-deeppurple')}>
                                        <img src="showcase/images/themes/md-light-deeppurple.svg" alt="Material Light Deep Purple"/>
                                    </button>
                                    <span>Deep Purple</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'md-dark-indigo', true)}>
                                        <img src="showcase/images/themes/md-dark-indigo.svg" alt="Material Dark Indigo"/>
                                    </button>
                                    <span>Indigo</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link"  onClick={(e) => this.onThemeChange(e, 'md-dark-deeppurple', true)}>
                                        <img src="showcase/images/themes/md-dark-deeppurple.svg" alt="Material Dark Deep Purple"/>
                                    </button>
                                    <span>Deep Purple</span>
                                </div>
                            </div>

                            <h5>Material Design Compact</h5>
                            <div className="p-grid free-themes">
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'mdc-light-indigo')}>
                                        <img src="showcase/images/themes/md-light-indigo.svg" alt="Material Compact Light Indigo"/>
                                    </button>
                                    <span>Indigo</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'mdc-light-deeppurple')}>
                                        <img src="showcase/images/themes/md-light-deeppurple.svg" alt="Material Compact Deep Purple"/>
                                    </button>
                                    <span>Deep Purple</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'mdc-dark-indigo', true)}>
                                        <img src="showcase/images/themes/md-dark-indigo.svg" alt="Material Compact Dark Indigo"/>
                                    </button>
                                    <span>Indigo</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'mdc-dark-deeppurple', true)}>
                                        <img src="showcase/images/themes/md-dark-deeppurple.svg" alt="Material Compact Dark Deep Purple"/>
                                    </button>
                                    <span>Deep Purple</span>
                                </div>
                            </div>

                            <h5>Tailwind</h5>
                            <div className="p-grid free-themes">
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'tailwind-light')}>
                                        <img src="showcase/images/themes/tailwind-light.png" alt="Tailwind Light"/>
                                    </button>
                                    <span>Tailwind Light</span>
                                </div>
                            </div>

                            <h5>Fluent UI</h5>
                            <div className="p-grid free-themes">
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'fluent-light')}>
                                        <img src="showcase/images/themes/fluent-light.png" alt="Fluent Light"/>
                                    </button>
                                    <span>Blue</span>
                                </div>
                            </div>

                            <h5>PrimeOne Design</h5>
                            <div className="p-grid free-themes">
                                <div className="p-col-3">
                                    <button className="p-link p-overlay-badge" onClick={(e) => this.onThemeChange(e, 'lara-light-indigo')}>
                                        <img src="showcase/images/themes/lara-light-indigo.svg" alt="Lara Light Indigo"/>
                                        <Badge value="New" severity="success"></Badge>
                                    </button>
                                    <span>Lara Indigo</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link p-overlay-badge" onClick={(e) => this.onThemeChange(e, 'lara-light-purple')}>
                                        <img src="showcase/images/themes/lara-light-purple.svg" alt="Lara Light Purple"/>
                                        <Badge value="New" severity="success"></Badge>
                                    </button>
                                    <span>Lara Purple</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link p-overlay-badge" onClick={(e) => this.onThemeChange(e, 'lara-dark-indigo', true)}>
                                        <img src="showcase/images/themes/lara-dark-indigo.svg" alt="Lara Dark Indigo"/>
                                        <Badge value="New" severity="success"></Badge>
                                    </button>
                                    <span>Lara Indigo</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link p-overlay-badge" onClick={(e) => this.onThemeChange(e, 'lara-dark-purple', true)}>
                                        <img src="showcase/images/themes/lara-dark-purple.svg" alt="Lara Dark Purple"/>
                                        <Badge value="New" severity="success"></Badge>
                                    </button>
                                    <span>Lara Purple</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'saga-blue')}>
                                        <img src="showcase/images/themes/saga-blue.png" alt="Saga Blue"/>
                                    </button>
                                    <span>Saga Blue</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'saga-green')}>
                                        <img src="showcase/images/themes/saga-green.png" alt="Saga Green"/>
                                    </button>
                                    <span>Saga Green</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'saga-orange')}>
                                        <img src="showcase/images/themes/saga-orange.png" alt="Saga Orange"/>
                                    </button>
                                    <span>Saga Orange</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'saga-purple')}>
                                        <img src="showcase/images/themes/saga-purple.png" alt="Saga Purple"/>
                                    </button>
                                    <span>Saga Purple</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'vela-blue', true)}>
                                        <img src="showcase/images/themes/vela-blue.png" alt="Vela Blue"/>
                                    </button>
                                    <span>Vela Blue</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'vela-green', true)}>
                                        <img src="showcase/images/themes/vela-green.png" alt="Vela Green"/>
                                    </button>
                                    <span>Vela Green</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'vela-orange', true)}>
                                        <img src="showcase/images/themes/vela-orange.png" alt="Vela Orange"/>
                                    </button>
                                    <span>Vela Orange</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'vela-purple', true)}>
                                        <img src="showcase/images/themes/vela-purple.png" alt="Vela Purple"/>
                                    </button>
                                    <span>Vela Purple</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'arya-blue', true)}>
                                        <img src="showcase/images/themes/arya-blue.png" alt="Arya Blue"/>
                                    </button>
                                    <span>Arya Blue</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'arya-green', true)}>
                                        <img src="showcase/images/themes/arya-green.png" alt="Arya Green"/>
                                    </button>
                                    <span>Arya Green</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'arya-orange', true)}>
                                        <img src="showcase/images/themes/arya-orange.png" alt="Arya Orange"/>
                                    </button>
                                    <span>Arya Orange</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'arya-purple', true)}>
                                        <img src="showcase/images/themes/arya-purple.png" alt="Arya Purple"/>
                                    </button>
                                    <span>Arya Purple</span>
                                </div>
                            </div>

                            <h5>Premium Themes</h5>
                            <p>Premium themes are only available exclusively for <a href="https://www.primefaces.org/designer/primereact">PrimeReact Theme Designer</a> subscribers and therefore not included in PrimeReact core.</p>
                            <div className="p-grid free-themes">
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'soho-light')}>
                                        <img src="showcase/images/themes/soho-light.png" alt="Soho Light"/>
                                    </button>
                                    <span>Soho Light</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'soho-dark', true)}>
                                        <img src="showcase/images/themes/soho-dark.png" alt="Soho Dark"/>
                                    </button>
                                    <span>Soho Dark</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'viva-light')}>
                                        <img src="showcase/images/themes/viva-light.svg" alt="Viva Light"/>
                                    </button>
                                    <span>Viva Light</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'viva-dark', true)}>
                                        <img src="showcase/images/themes/viva-dark.svg" alt="Viva Dark"/>
                                    </button>
                                    <span>Viva Dark</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'mira')}>
                                        <img src="showcase/images/themes/mira.jpg" alt="Mira"/>
                                    </button>
                                    <span>Mira</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'nano')}>
                                        <img src="showcase/images/themes/nano.jpg" alt="Nano"/>
                                    </button>
                                    <span>Nano</span>
                                </div>
                            </div>

                            <h4>Legacy Free Themes</h4>
                            <div className="p-grid free-themes">
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'nova')}>
                                        <img src="showcase/images/themes/nova.png" alt="Nova"/>
                                    </button>
                                    <span>Nova</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'nova-alt')}>
                                        <img src="showcase/images/themes/nova-alt.png" alt="Nova Alt"/>
                                    </button>
                                    <span>Nova Alt</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'nova-accent')}>
                                        <img src="showcase/images/themes/nova-accent.png" alt="Nova Accent"/>
                                    </button>
                                    <span>Nova Accent</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'luna-blue', true)}>
                                        <img src="showcase/images/themes/luna-blue.png" alt="Luna Blue"/>
                                    </button>
                                    <span>Luna Blue</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'luna-green', true)}>
                                        <img src="showcase/images/themes/luna-green.png" alt="Luna Green"/>
                                    </button>
                                    <span>Luna Green</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'luna-amber', true)}>
                                        <img src="showcase/images/themes/luna-amber.png" alt="Luna Amber"/>
                                    </button>
                                    <span>Luna Amber</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'luna-pink', true)}>
                                        <img src="showcase/images/themes/luna-pink.png" alt="Luna Pink"/>
                                    </button>
                                    <span>Luna Pink</span>
                                </div>
                                <div className="p-col-3">
                                    <button className="p-link" onClick={(e) => this.onThemeChange(e, 'rhea', false)}>
                                        <img src="showcase/images/themes/rhea.png" alt="Rhea"/>
                                    </button>
                                    <span>Rhea</span>
                                </div>
                            </div>

                            <h4>Premium Create-React-App Templates</h4>
                            <p>Beautifully crafted premium <a href="https://github.com/facebookincubator/create-react-app">create-react-app</a> application templates by the PrimeTek design team.</p>
                            <div className="p-grid premium-themes">
                                <div className="p-col-12 p-md-6">
                                    <a href="https://www.primefaces.org/sakai-react" rel="noopener noreferrer" target="_blank">
                                        <img alt="Sakai" src="showcase/images/layouts/sakai-react.jpg" />
                                    </a>
                                </div>
                                <div className="p-col-12 p-md-6">
                                    <a href="https://www.primefaces.org/layouts/atlantis-react" rel="noopener noreferrer" target="_blank">
                                        <img alt="Atlantis" src="showcase/images/layouts/atlantis-react.jpg" />
                                    </a>
                                </div>
                                <div className="p-col-12 p-md-6">
                                    <a href="https://www.primefaces.org/layouts/freya-react" rel="noopener noreferrer" target="_blank">
                                        <img alt="Freya" src="showcase/images/layouts/freya-react.jpg" />
                                    </a>
                                </div>
                                <div className="p-col-12 p-md-6">
                                    <a href="https://www.primefaces.org/layouts/ultima-react" rel="noopener noreferrer" target="_blank">
                                        <img alt="Ultima" src="showcase/images/layouts/ultima-react.jpg" />
                                    </a>
                                </div>
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
