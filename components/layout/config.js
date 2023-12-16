import AppContentContext from '@/components/layout/appcontentcontext';
import { PrimeReactContext } from '@/components/lib/api/PrimeReactContext';
import { Button } from '@/components/lib/button/Button';
import { InputSwitch } from '@/components/lib/inputswitch/InputSwitch';
import { SelectButton } from '@/components/lib/selectbutton/SelectButton';
import { Sidebar } from '@/components/lib/sidebar/Sidebar';
import { classNames } from '@/components/lib/utils/Utils';
import { useContext, useEffect, useState } from 'react';

export default function Config(props) {
    const [scale, setScale] = useState(14);
    const [scales, setScales] = useState([12, 13, 14, 15, 16]);
    const [compactMaterial, setCompactMaterial] = useState(false);
    const { theme, darkMode, changeTheme } = useContext(AppContentContext);
    const { ripple, inputStyle, setRipple, setInputStyle } = useContext(PrimeReactContext);
    const lightOnlyThemes = ['fluent-light', 'mira', 'nano'];

    const decrementScale = () => {
        setScale((prevScale) => --prevScale);
    };

    const incrementScale = () => {
        setScale((prevScale) => ++prevScale);
    };

    const inputStyles = [
        { label: 'Outlined', value: 'outlined' },
        { label: 'Filled', value: 'filled' }
    ];

    const darkToggleDisabled = () => {
        return lightOnlyThemes.includes(theme);
    };

    const switchTheme = (themeName, color) => {
        if (lightOnlyThemes.includes(themeName)) {
            changeTheme(themeName, false);
        } else {
            let newTheme = themeName + '-' + (darkMode ? 'dark' : 'light');

            if (color) {
                newTheme += '-' + color;
            }

            if (newTheme.startsWith('md-') && compactMaterial) {
                newTheme = newTheme.replace('md-', 'mdc-');
            }

            changeTheme(newTheme, darkMode);
        }
    };

    const isThemeActive = (themeFamily, color) => {
        let themeName;
        let themePrefix = themeFamily === 'md' && compactMaterial ? 'mdc' : themeFamily;

        if (lightOnlyThemes.includes(themePrefix)) {
            themeName = themePrefix;
        } else {
            themeName = themePrefix + (darkMode ? '-dark' : '-light');
        }

        if (color) {
            themeName += '-' + color;
        }

        return theme === themeName;
    };

    useEffect(() => {
        document.documentElement.style.fontSize = scale + 'px';
    }, [scale]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (theme.startsWith('md')) {
            let tokens = theme.split('-');

            switchTheme(tokens[0].substring(0, 2), tokens[2]);
        }
    }, [compactMaterial]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Sidebar visible={props.active} onHide={() => props.onHide()} className={classNames('layout-config w-full sm:w-26rem', { 'layout-dark': props.dark }, { 'layout-light': !props.dark })} position="right">
            <div className="p-2">
                <section className="pb-4 flex align-items-center justify-content-between border-bottom-1 surface-border">
                    <span className="text-xl font-semibold">Scale</span>
                    <div className="flex align-items-center gap-2 border-1 surface-border py-1 px-2" style={{ borderRadius: '30px' }}>
                        <Button icon="pi pi-minus" onClick={decrementScale} text rounded className=" w-2rem h-2rem" disabled={scale === scales[0]} />
                        {scales.map((s) => {
                            return <i className={classNames('pi pi-circle-fill text-sm text-200', { 'text-lg text-primary': s === scale })} key={s} />;
                        })}
                        <Button icon="pi pi-plus" onClick={incrementScale} text rounded className="w-2rem h-2rem" disabled={scale === scales[scales.length - 1]} />
                    </div>
                </section>

                <section className="py-4 flex align-items-center justify-content-between border-bottom-1 surface-border">
                    <span className="text-xl font-semibold">Input Style</span>
                    <div className="flex gap-5">
                        <SelectButton value={inputStyle} onChange={(e) => setInputStyle(e.value)} options={inputStyles} optionLabel="label" optionValue="value" allowEmpty={false} />
                    </div>
                </section>

                <section className="py-4 flex align-items-center justify-content-between border-bottom-1 surface-border">
                    <span className="text-xl font-semibold">Ripple Effect</span>
                    <InputSwitch checked={ripple} onChange={(e) => setRipple(e.value)} />
                </section>

                <section className="py-4 flex align-items-center justify-content-between border-bottom-1 surface-border">
                    <span className={classNames('text-xl font-semibold', { 'p-disabled': darkToggleDisabled() })}>Dark Mode</span>
                    <InputSwitch checked={darkMode} onChange={() => props.onDarkSwitchClick()} disabled={darkToggleDisabled()} />
                </section>

                <section className="py-4 border-bottom-1 surface-border">
                    <div className="text-xl font-semibold mb-3">Themes</div>
                    <div className="flex align-items-center gap-2 mb-3">
                        <img src="https://primefaces.org/cdn/primereact/images/themes/lara-light-teal.png" alt="Lara Light Teal" className="border-circle" style={{ width: '1.5rem' }} />
                        <span className="font-medium">Lara</span>
                    </div>
                    <div className="flex align-items-center justify-content-between gap-3 mb-3">
                        <button
                            className={classNames('bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200', {
                                'border-primary': isThemeActive('lara', 'cyan'),
                                'hover:border-500 surface-border': !isThemeActive('lara', 'cyan')
                            })}
                            style={{ borderRadius: '30px' }}
                            onClick={() => switchTheme('lara', 'cyan')}
                        >
                            <span className="block h-1rem w-full" style={{ borderRadius: ' 30px', background: 'linear-gradient(180deg, #06b6d4 0%, rgba(6, 182, 212, 0.5) 100%)' }}></span>
                        </button>
                        <button
                            className={classNames('bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200', {
                                'border-primary': isThemeActive('lara', 'green'),
                                'hover:border-500 surface-border': !isThemeActive('lara', 'green')
                            })}
                            style={{ borderRadius: '30px' }}
                            onClick={() => switchTheme('lara', 'green')}
                        >
                            <span className="block h-1rem w-full" style={{ borderRadius: ' 30px', background: 'linear-gradient(180deg, #4dac9c 0%, rgba(77, 172, 156, 0.5) 100%)' }}></span>
                        </button>
                        <button
                            className={classNames('bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200', {
                                'border-primary': isThemeActive('lara', 'blue'),
                                'hover:border-500 surface-border': !isThemeActive('lara', 'blue')
                            })}
                            style={{ borderRadius: '30px' }}
                            onClick={() => switchTheme('lara', 'blue')}
                        >
                            <span className="block h-1rem w-full" style={{ borderRadius: ' 30px', background: 'linear-gradient(180deg, #4378e6 0%, rgba(67, 120, 230, 0.5) 100%)' }}></span>
                        </button>
                        <button
                            className={classNames('bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200', {
                                'border-primary': isThemeActive('lara', 'indigo'),
                                'hover:border-500 surface-border': !isThemeActive('lara', 'indigo')
                            })}
                            style={{ borderRadius: '30px' }}
                            onClick={() => switchTheme('lara', 'indigo')}
                        >
                            <span className="block h-1rem w-full" style={{ borderRadius: ' 30px', background: 'linear-gradient(180deg, #585fe0 0%, rgba(88, 95, 224, 0.5) 100%)' }}></span>
                        </button>
                    </div>
                    <div className="flex align-items-center justify-content-between gap-3">
                        <button
                            className={classNames('bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200', {
                                'border-primary': isThemeActive('lara', 'purple'),
                                'hover:border-500 surface-border': !isThemeActive('lara', 'purple')
                            })}
                            style={{ borderRadius: '30px' }}
                            onClick={() => switchTheme('lara', 'purple')}
                        >
                            <span className="block h-1rem w-full" style={{ borderRadius: ' 30px', background: 'linear-gradient(180deg, #7758e4 0%, rgba(119, 88, 228, 0.5) 100%)' }}></span>
                        </button>
                        <button
                            className={classNames('bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200', {
                                'border-primary': isThemeActive('lara', 'amber'),
                                'hover:border-500 surface-border': !isThemeActive('lara', 'amber')
                            })}
                            style={{ borderRadius: '30px' }}
                            onClick={() => switchTheme('lara', 'amber')}
                        >
                            <span className="block h-1rem w-full" style={{ borderRadius: ' 30px', background: 'linear-gradient(180deg, #f59e0b 0%, rgba(245, 158, 11, 0.5) 100%)' }}></span>
                        </button>
                        <button
                            className={classNames('bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200', {
                                'border-primary': isThemeActive('lara', 'teal'),
                                'hover:border-500 surface-border': !isThemeActive('lara', 'teal')
                            })}
                            style={{ borderRadius: '30px' }}
                            onClick={() => switchTheme('lara', 'teal')}
                        >
                            <span className="block h-1rem w-full" style={{ borderRadius: ' 30px', background: 'linear-gradient(180deg, #14b8a6 0%, rgba(20, 184, 166, 0.5) 100%)' }}></span>
                        </button>
                        <button
                            className={classNames('bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200', {
                                'border-primary': isThemeActive('lara', 'pink'),
                                'hover:border-500 surface-border': !isThemeActive('lara', 'pink')
                            })}
                            style={{ borderRadius: '30px' }}
                            onClick={() => switchTheme('lara', 'pink')}
                        >
                            <span className="block h-1rem w-full" style={{ borderRadius: ' 30px', background: 'linear-gradient(180deg, #ec4899 0%, rgba(236, 72, 153, 0.5) 100%)' }}></span>
                        </button>
                    </div>
                </section>

                <section className="py-4 border-bottom-1 surface-border">
                    <div className="flex align-items-center gap-2 mb-3">
                        <img src="https://primefaces.org/cdn/primereact/images/themes/md-light-indigo.svg" alt="Material Design" className="border-circle" style={{ width: '1.5rem' }} />
                        <span className="font-medium">Material Design</span>
                        <div className="ml-auto flex align-items-center gap-2">
                            <label htmlFor="material-condensed" className="text-sm">
                                Condensed
                            </label>
                            <InputSwitch inputId="material-condensed" checked={compactMaterial} onChange={(e) => setCompactMaterial(e.value)} className="ml-auto" />
                        </div>
                    </div>
                    <div className="flex align-items-center justify-content-between gap-3">
                        <button
                            className={classNames('bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200', {
                                'border-primary': isThemeActive('md', 'indigo'),
                                'hover:border-500 surface-border': !isThemeActive('md', 'indigo')
                            })}
                            style={{ borderRadius: '30px' }}
                            onClick={() => switchTheme('md', 'indigo')}
                        >
                            <span className="block h-1rem w-full" style={{ borderRadius: '30px', background: 'linear-gradient(180deg, #0565f2 0%, rgba(5, 101, 242, 0.5) 100%)' }}></span>
                        </button>
                        <button
                            className={classNames('bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200', {
                                'border-primary': isThemeActive('md', 'deeppurple'),
                                'hover:border-500 surface-border': !isThemeActive('md', 'deeppurple')
                            })}
                            style={{ borderRadius: '30px' }}
                            onClick={() => switchTheme('md', 'deeppurple')}
                        >
                            <span className="block h-1rem w-full" style={{ borderRadius: '30px', background: 'linear-gradient(180deg, #702f92 0%, rgba(112, 47, 146, 0.5) 100%)' }}></span>
                        </button>
                        <div className="w-3"></div>
                        <div className="w-3"></div>
                    </div>
                </section>

                <section className="py-4 border-bottom-1 surface-border">
                    <div className="flex align-items-center gap-2 mb-3">
                        <img src="https://primefaces.org/cdn/primereact/images/themes/bootstrap4-light-blue.svg" alt="Bootstrap" className="border-circle" style={{ width: '1.5rem' }} />
                        <span className="font-medium">Bootstrap</span>
                    </div>
                    <div className="flex align-items-center justify-content-between gap-3">
                        <button
                            className={classNames('bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200', {
                                'border-primary': isThemeActive('bootstrap4', 'blue'),
                                'hover:border-500 surface-border': !isThemeActive('bootstrap4', 'blue')
                            })}
                            style={{ borderRadius: 30 }}
                            onClick={() => switchTheme('bootstrap4', 'blue')}
                        >
                            <span className="block h-1rem w-full" style={{ borderRadius: 30, background: 'linear-gradient(180deg, #027bff 0%, rgba(2, 123, 255, 0.5) 100%)' }}></span>
                        </button>
                        <button
                            className={classNames('bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200', {
                                'border-primary': isThemeActive('bootstrap4', 'purple'),
                                'hover:border-500 surface-border': !isThemeActive('bootstrap4', 'purple')
                            })}
                            style={{ borderRadius: 30 }}
                            onClick={() => switchTheme('bootstrap4', 'purple')}
                        >
                            <span className="block h-1rem w-full" style={{ borderRadius: 30, background: 'linear-gradient(180deg, #893cae 0%, rgba(137, 60, 174, 0.5) 100%)' }}></span>
                        </button>
                        <div className="w-3"></div>
                        <div className="w-3"></div>
                    </div>
                </section>

                <section className="py-4 border-bottom-1 surface-border">
                    <div className="flex gap-3">
                        <div className="w-3">
                            <div className="flex align-items-center gap-2 mb-3">
                                <img src="https://primefaces.org/cdn/primereact/images/themes/soho-light.png" alt="Soho" className="border-circle" style={{ width: '1.5rem' }} />
                                <span className="font-medium">Soho</span>
                            </div>
                            <button
                                className={classNames('bg-transparent border-1 cursor-pointer p-2 w-full flex align-items-center justify-content-center transition-all transition-duration-200', {
                                    'border-primary': isThemeActive('soho'),
                                    'hover:border-500 surface-border': !isThemeActive('soho')
                                })}
                                style={{ borderRadius: 30 }}
                                onClick={() => switchTheme('soho')}
                            >
                                <span className="block h-1rem w-full" style={{ borderRadius: 30, background: 'linear-gradient(180deg, #664beb 0%, rgba(102, 75, 235, 0.5) 100%)' }}></span>
                            </button>
                        </div>
                        <div className="w-3">
                            <div className="flex align-items-center gap-2 mb-3">
                                <img src="https://primefaces.org/cdn/primereact/images/themes/viva-light.svg" alt="Viva" className="border-circle" style={{ width: '1.5rem' }} />
                                <span className="font-medium">Viva</span>
                            </div>
                            <button
                                className={classNames('bg-transparent border-1 cursor-pointer p-2 w-full flex align-items-center justify-content-center transition-all transition-duration-200', {
                                    'border-primary': isThemeActive('viva'),
                                    'hover:border-500 surface-border': !isThemeActive('viva')
                                })}
                                style={{ borderRadius: 30 }}
                                onClick={() => switchTheme('viva')}
                            >
                                <span className="block h-1rem w-full" style={{ borderRadius: 30, background: 'linear-gradient(180deg, #4a67c9 0%, rgba(74, 103, 201, 0.5) 100%)' }}></span>
                            </button>
                        </div>
                        <div className="w-3"></div>
                        <div className="w-3"></div>
                    </div>
                </section>

                <section className="py-4">
                    <div className="flex gap-3">
                        <div className="w-3">
                            <div className="flex align-items-center gap-2 mb-3">
                                <img src="https://primefaces.org/cdn/primereact/images/themes/fluent-light.png" alt="Fluent" className="border-circle" style={{ width: '1.5rem' }} />
                                <span className="font-medium">Fluent</span>
                            </div>
                            <button
                                className={classNames('bg-transparent border-1 cursor-pointer p-2 w-full flex align-items-center justify-content-center transition-all transition-duration-200', {
                                    'border-primary': isThemeActive('fluent-light'),
                                    'hover:border-500 surface-border': !isThemeActive('fluent-light')
                                })}
                                style={{ borderRadius: 30 }}
                                onClick={() => switchTheme('fluent-light')}
                            >
                                <span className="block h-1rem w-full" style={{ borderRadius: 30, background: 'linear-gradient(180deg, #0078d4 0%, rgba(0, 120, 212, 0.5) 100%)' }}></span>
                            </button>
                        </div>
                        <div className="w-3">
                            <div className="flex align-items-center gap-2 mb-3">
                                <img src="https://primefaces.org/cdn/primereact/images/themes/mira.jpg" alt="Mira" className="border-circle" style={{ width: '1.5rem' }} />
                                <span className="font-medium">Mira</span>
                            </div>
                            <button
                                className={classNames('bg-transparent border-1 cursor-pointer p-2 w-full flex align-items-center justify-content-center transition-all transition-duration-200', {
                                    'border-primary': isThemeActive('mira'),
                                    'hover:border-500 surface-border': !isThemeActive('mira')
                                })}
                                style={{ borderRadius: 30 }}
                                onClick={() => switchTheme('mira')}
                            >
                                <span className="block h-1rem w-full" style={{ borderRadius: 30, background: 'linear-gradient(180deg, #81a1c1 0%, rgba(129, 161, 193, 0.5) 100%)' }}></span>
                            </button>
                        </div>
                        <div className="w-3">
                            <div className="flex align-items-center gap-2 mb-3">
                                <img src="https://primefaces.org/cdn/primereact/images/themes/nano.jpg" alt="Nano" className="border-circle" style={{ width: '1.5rem' }} />
                                <span className="font-medium">Nano</span>
                            </div>
                            <button
                                className={classNames('bg-transparent border-1 cursor-pointer p-2 w-full flex align-items-center justify-content-center transition-all transition-duration-200', {
                                    'border-primary': isThemeActive('nano'),
                                    'hover:border-500 surface-border': !isThemeActive('nano')
                                })}
                                style={{ borderRadius: 30 }}
                                onClick={() => switchTheme('nano')}
                            >
                                <span className="block h-1rem w-full" style={{ borderRadius: 30, background: 'linear-gradient(180deg, #1469b4 0%, rgba(20, 105, 180, 0.5) 100%)' }}></span>
                            </button>
                        </div>
                        <div className="w-3"></div>
                    </div>
                </section>
            </div>
        </Sidebar>
    );
}
