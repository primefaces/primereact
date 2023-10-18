import React, { useEffect, useState } from 'react';
import { Button } from '../lib/button/Button';
import { InputSwitch } from '../lib/inputswitch/InputSwitch';
import { RadioButton } from '../lib/radiobutton/RadioButton';
import { Sidebar } from '../lib/sidebar/Sidebar';
import { classNames } from '../lib/utils/ClassNames';

export default function Config(props) {
    const [scale, setScale] = useState(14);
    const [scales, setScales] = useState([12, 13, 14, 15, 16]);

    const onThemeChange = (theme, dark) => {
        props.onThemeChange({ theme, dark });
    };

    const decrementScale = () => {
        setScale((prevScale) => --prevScale);
    };

    const incrementScale = () => {
        setScale((prevScale) => ++prevScale);
    };

    useEffect(() => {
        document.documentElement.style.fontSize = scale + 'px';
    }, [scale]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Sidebar visible={props.active} onHide={() => props.onHide()} className="layout-config w-full sm:w-30rem" position="right">
            <div className="p-2">
                <section className="mb-5">
                    <h3>Component Scale</h3>
                    <div className="flex align-items-center gap-2">
                        <Button icon="pi pi-minus" onClick={decrementScale} className="p-button-text p-button-rounded w-2rem h-2rem" disabled={scale === scales[0]} />
                        {scales.map((s) => {
                            return <i className={classNames('pi pi-circle-fill text-sm text-600', { 'text-lg text-primary': s === scale })} key={s} />;
                        })}
                        <Button icon="pi pi-plus" onClick={incrementScale} className="p-button-text p-button-rounded w-2rem h-2rem" disabled={scale === scales[scales.length - 1]} />
                    </div>
                </section>

                <section className="mb-5">
                    <h3>Input Style</h3>
                    <div className="flex gap-5">
                        <div className="flex align-items-center gap-2">
                            <RadioButton inputId="inputstyle_outlined" name="inputstyle" value="outlined" onChange={() => props.onInputStyleChange('outlined')} checked={props.inputStyle === 'outlined'} />
                            <label htmlFor="inputstyle_outlined">Outlined</label>
                        </div>
                        <div className="flex align-items-center gap-2">
                            <RadioButton inputId="inputstyle_filled" name="inputstyle" value="filled" onChange={() => props.onInputStyleChange('filled')} checked={props.inputStyle === 'filled'} />
                            <label htmlFor="inputstyle_filled">Filled</label>
                        </div>
                    </div>
                </section>

                <section className="mb-5">
                    <h3>Ripple Effect</h3>
                    <InputSwitch checked={props.ripple} disabled={props.disabled} onChange={(e) => props.onRippleChange(e.value)} />
                </section>

                <section>
                    <h3>Themes</h3>
                    <h4>Bootstrap</h4>
                    <div className="grid free-themes">
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('bootstrap4-light-blue')}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/bootstrap4-light-blue.svg" alt="Bootstrap Light Blue" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Blue</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('bootstrap4-light-purple')}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/bootstrap4-light-purple.svg" alt="Bootstrap Light Blue" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Purple</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('bootstrap4-dark-blue', true)}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/bootstrap4-dark-blue.svg" alt="Bootstrap Dark Blue" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Blue</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('bootstrap4-dark-purple', true)}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/bootstrap4-dark-purple.svg" alt="Bootstrap Dark Blue" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Purple</span>
                        </div>
                    </div>

                    <h4>Material Design</h4>
                    <div className="grid free-themes">
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('md-light-indigo')}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/md-light-indigo.svg" alt="Material Light Indigo" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Indigo</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('md-light-deeppurple')}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/md-light-deeppurple.svg" alt="Material Light Deep Purple" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Deep Purple</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('md-dark-indigo', true)}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/md-dark-indigo.svg" alt="Material Dark Indigo" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Indigo</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('md-dark-deeppurple', true)}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/md-dark-deeppurple.svg" alt="Material Dark Deep Purple" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Deep Purple</span>
                        </div>
                    </div>

                    <h4>Material Design Compact</h4>
                    <div className="grid free-themes">
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('mdc-light-indigo')}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/md-light-indigo.svg" alt="Material Compact Light Indigo" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Indigo</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('mdc-light-deeppurple')}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/md-light-deeppurple.svg" alt="Material Compact Deep Purple" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Deep Purple</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('mdc-dark-indigo', true)}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/md-dark-indigo.svg" alt="Material Compact Dark Indigo" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Indigo</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('mdc-dark-deeppurple', true)}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/md-dark-deeppurple.svg" alt="Material Compact Dark Deep Purple" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Deep Purple</span>
                        </div>
                    </div>

                    <h4>Tailwind</h4>
                    <div className="grid free-themes">
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('tailwind-light')}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/tailwind-light.png" alt="Tailwind Light" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Tailwind Light</span>
                        </div>
                    </div>

                    <h4>Fluent UI</h4>
                    <div className="grid free-themes">
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('fluent-light')}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/fluent-light.png" alt="Fluent Light" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Blue</span>
                        </div>
                    </div>

                    <h4>PrimeOne Design</h4>
                    <div className="grid free-themes">
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('lara-light-indigo')}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/lara-light-indigo.png" alt="Lara Light Indigo" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Lara Indigo</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('lara-light-blue')}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/lara-light-blue.png" alt="Lara Light Blue" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Lara Blue</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('lara-light-purple')}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/lara-light-purple.png" alt="Lara Light Purple" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Lara Purple</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('lara-light-teal')}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/lara-light-teal.png" alt="Lara Light Teal" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Lara Teal</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('lara-dark-indigo', true)}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/lara-dark-indigo.png" alt="Lara Dark Indigo" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Lara Indigo</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('lara-dark-blue', true)}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/lara-dark-blue.png" alt="Lara Dark Blue" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Lara Blue</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('lara-dark-purple', true)}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/lara-dark-purple.png" alt="Lara Dark Purple" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Lara Purple</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('lara-dark-teal', true)}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/lara-dark-teal.png" alt="Lara Dark Teal" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Lara Teal</span>
                        </div>
                    </div>

                    <h4>Misc</h4>
                    <div className="grid free-themes">
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('soho-light')}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/soho-light.png" alt="Soho Light" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Soho Light</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('soho-dark', true)}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/soho-dark.png" alt="Soho Dark" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Soho Dark</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('viva-light')}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/viva-light.svg" alt="Viva Light" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Viva Light</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('viva-dark', true)}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/viva-dark.svg" alt="Viva Dark" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Viva Dark</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('mira')}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/mira.jpg" alt="Mira" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Mira</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('nano')}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/nano.jpg" alt="Nano" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Nano</span>
                        </div>
                    </div>

                    <h4>PrimeOne Design - Legacy</h4>
                    <div className="grid free-themes">
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('saga-blue')}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/saga-blue.png" alt="Saga Blue" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Saga Blue</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('saga-green')}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/saga-green.png" alt="Saga Green" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Saga Green</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('saga-orange')}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/saga-orange.png" alt="Saga Orange" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className=" white-space-nowrap">Saga Orange</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('saga-purple')}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/saga-purple.png" alt="Saga Purple" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Saga Purple</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('vela-blue', true)}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/vela-blue.png" alt="Vela Blue" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Vela Blue</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('vela-green', true)}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/vela-green.png" alt="Vela Green" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Vela Green</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('vela-orange', true)}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/vela-orange.png" alt="Vela Orange" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Vela Orange</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('vela-purple', true)}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/vela-purple.png" alt="Vela Purple" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Vela Purple</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('arya-blue', true)}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/arya-blue.png" alt="Arya Blue" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Arya Blue</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('arya-green', true)}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/arya-green.png" alt="Arya Green" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Arya Green</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('arya-orange', true)}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/arya-orange.png" alt="Arya Orange" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Arya Orange</span>
                        </div>
                        <div className="col-3 flex flex-column align-items-center gap-2">
                            <button className="p-link h-3rem" onClick={() => onThemeChange('arya-purple', true)}>
                                <img src="https://primefaces.org/cdn/primereact/images/themes/arya-purple.png" alt="Arya Purple" className="w-3rem h-3rem border-round" />
                            </button>
                            <span className="white-space-nowrap">Arya Purple</span>
                        </div>
                    </div>
                </section>
            </div>
        </Sidebar>
    );
}
