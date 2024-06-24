import { Button } from '@/components/lib/button/Button';
import { classNames } from '@/components/lib/utils/Utils';
import { InputSwitch } from '@/components/lib/inputswitch/InputSwitch';
import { SelectButton } from '@/components/lib/selectbutton/SelectButton';
import { Sidebar } from '@/components/lib/sidebar/Sidebar';
import { useAppConfig } from '@/components/context/AppConfigContext';

export default function Config(props) {
    const {
        // values
        compactMaterialMode,
        darkMode,
        inputStyle,
        options,
        ripple,
        scale,
        // actions
        changeInputStyle,
        changeScale,
        changeTheme,
        changeThemeMode,
        isDarkModeDisabled,
        isThemeActive,
        switchMaterialCompactMode,
        switchRipple,
    } = useAppConfig();
    const { inputStyles, scales } = options;

    const handleMinusScaleClick = () => {
        changeScale(-1);
    };

    const handlePlusScaleClick = () => {
        changeScale(1);
    };

    const handleInputStyleChange = (e) => {
        changeInputStyle(e.value);
    };

    const handleRippleSwitch = (e) => {
        switchRipple(e.value);
    };

    const handleDarkModeSwitch = (e) => {
        changeThemeMode(e.value ? 'dark' : 'light');
    };

    const handleThemeChange = (name, color) => {
        changeTheme(name, color);
    };

    const handleMaterialCompactModeSwitch = (e) => {
        switchMaterialCompactMode(e.value);
    };

    return (
        <Sidebar visible={props.active} onHide={() => props.onHide()} className={classNames('layout-config w-full sm:w-26rem', { 'layout-dark': props.dark }, { 'layout-light': !props.dark })} position="right">
            <div className="p-2">
                <section className="pb-4 flex align-items-center justify-content-between border-bottom-1 surface-border">
                    <h2 className="text-xl font-semibold m-0" id="scale-label">Scale</h2>
                    <div className="flex align-items-center gap-2 border-1 surface-border py-1 px-2" style={{ borderRadius: '30px' }} aria-labelledby="scale-label" role="group">
                        <Button icon="pi pi-minus" onClick={handleMinusScaleClick} text rounded className="w-2rem h-2rem" disabled={scale === scales[0]} aria-label="Decrease scale" />
                        {scales.map((s) => {
                            return (
                                <i
                                    className={classNames('pi pi-circle-fill text-sm text-200', { 'text-lg text-primary': s === scale })}
                                    key={s}
                                    aria-label={`Scale level ${s}px${s === scale ? ', current level' : ''}`}
                                />
                            );
                        })}
                        <Button icon="pi pi-plus" onClick={handlePlusScaleClick} text rounded className="w-2rem h-2rem" disabled={scale === scales[scales.length - 1]} aria-label="Increase scale" />
                    </div>
                </section>

                <section className="py-4 flex align-items-center justify-content-between border-bottom-1 surface-border">
                    <h2 className="text-xl font-semibold m-0" id="input-style-label">Input Style</h2>
                    <div className="flex gap-5">
                        <SelectButton value={inputStyle} onChange={handleInputStyleChange} options={inputStyles} optionLabel="label" optionValue="value" allowEmpty={false} aria-labelledby="input-style-label" />
                    </div>
                </section>

                <section className="py-4 flex align-items-center justify-content-between border-bottom-1 surface-border">
                    <label className="text-xl font-semibold" htmlFor="ripple-effect">Ripple Effect</label>
                    <InputSwitch checked={ripple} onChange={handleRippleSwitch} inputId="ripple-effect" />
                </section>

                <section className="py-4 flex align-items-center justify-content-between border-bottom-1 surface-border">
                    <label className={classNames('text-xl font-semibold', { 'p-disabled': isDarkModeDisabled() })} htmlFor="dark-mode">Dark Mode</label>
                    <InputSwitch checked={darkMode} onChange={handleDarkModeSwitch} disabled={isDarkModeDisabled()} inputId="dark-mode" />
                </section>

                <section className="pt-4">
                    <h2 className="text-xl font-semibold mb-3">Themes</h2>
                    <div className="pb-4 border-bottom-1 surface-border" role="radiogroup" aria-labelledby="lara-theme-label">
                        <div className="flex align-items-center gap-2 mb-3">
                            <img src="https://primefaces.org/cdn/primereact/images/themes/lara-light-teal.png" alt="Lara Light Teal" className="border-circle" style={{ width: '1.5rem' }} />
                            <h3 className="text-base font-medium m-0" id="lara-theme-label">Lara</h3>
                        </div>
                        <div className="flex align-items-center justify-content-between gap-3 mb-3">
                            <button
                                className={classNames('bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200', {
                                    'border-primary': isThemeActive('lara', 'cyan'),
                                    'hover:border-500 surface-border': !isThemeActive('lara', 'cyan')
                                })}
                                style={{ borderRadius: '30px' }}
                                onClick={() => handleThemeChange('lara', 'cyan')}
                                aria-label="Lara Light Cyan"
                                aria-checked={isThemeActive('lara', 'cyan')}
                                role="radio"
                            >
                                <span className="block h-1rem w-full" style={{ borderRadius: '30px', background: 'linear-gradient(180deg, #06b6d4 0%, rgba(6, 182, 212, 0.5) 100%)' }} />
                            </button>
                            <button
                                className={classNames('bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200', {
                                    'border-primary': isThemeActive('lara', 'green'),
                                    'hover:border-500 surface-border': !isThemeActive('lara', 'green')
                                })}
                                style={{ borderRadius: '30px' }}
                                onClick={() => handleThemeChange('lara', 'green')}
                                aria-label="Lara Light Green"
                                aria-checked={isThemeActive('lara', 'green')}
                                role="radio"
                            >
                                <span className="block h-1rem w-full" style={{ borderRadius: '30px', background: 'linear-gradient(180deg, #4dac9c 0%, rgba(77, 172, 156, 0.5) 100%)' }} />
                            </button>
                            <button
                                className={classNames('bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200', {
                                    'border-primary': isThemeActive('lara', 'blue'),
                                    'hover:border-500 surface-border': !isThemeActive('lara', 'blue')
                                })}
                                style={{ borderRadius: '30px' }}
                                onClick={() => handleThemeChange('lara', 'blue')}
                                aria-label="Lara Light Blue"
                                aria-checked={isThemeActive('lara', 'blue')}
                                role="radio"
                            >
                                <span className="block h-1rem w-full" style={{ borderRadius: '30px', background: 'linear-gradient(180deg, #4378e6 0%, rgba(67, 120, 230, 0.5) 100%)' }} />
                            </button>
                            <button
                                className={classNames('bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200', {
                                    'border-primary': isThemeActive('lara', 'indigo'),
                                    'hover:border-500 surface-border': !isThemeActive('lara', 'indigo')
                                })}
                                style={{ borderRadius: '30px' }}
                                onClick={() => handleThemeChange('lara', 'indigo')}
                                aria-label="Lara Light Indigo"
                                aria-checked={isThemeActive('lara', 'indigo')}
                                role="radio"
                            >
                                <span className="block h-1rem w-full" style={{ borderRadius: '30px', background: 'linear-gradient(180deg, #585fe0 0%, rgba(88, 95, 224, 0.5) 100%)' }} />
                            </button>
                        </div>
                        <div className="flex align-items-center justify-content-between gap-3">
                            <button
                                className={classNames('bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200', {
                                    'border-primary': isThemeActive('lara', 'purple'),
                                    'hover:border-500 surface-border': !isThemeActive('lara', 'purple')
                                })}
                                style={{ borderRadius: '30px' }}
                                onClick={() => handleThemeChange('lara', 'purple')}
                                aria-label="Lara Light Purple"
                                aria-checked={isThemeActive('lara', 'purple')}
                                role="radio"
                            >
                                <span className="block h-1rem w-full" style={{ borderRadius: '30px', background: 'linear-gradient(180deg, #7758e4 0%, rgba(119, 88, 228, 0.5) 100%)' }} />
                            </button>
                            <button
                                className={classNames('bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200', {
                                    'border-primary': isThemeActive('lara', 'amber'),
                                    'hover:border-500 surface-border': !isThemeActive('lara', 'amber')
                                })}
                                style={{ borderRadius: '30px' }}
                                onClick={() => handleThemeChange('lara', 'amber')}
                                aria-label="Lara Light Amber"
                                aria-checked={isThemeActive('lara', 'amber')}
                                role="radio"
                            >
                                <span className="block h-1rem w-full" style={{ borderRadius: '30px', background: 'linear-gradient(180deg, #f59e0b 0%, rgba(245, 158, 11, 0.5) 100%)' }} />
                            </button>
                            <button
                                className={classNames('bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200', {
                                    'border-primary': isThemeActive('lara', 'teal'),
                                    'hover:border-500 surface-border': !isThemeActive('lara', 'teal')
                                })}
                                style={{ borderRadius: '30px' }}
                                onClick={() => handleThemeChange('lara', 'teal')}
                                aria-label="Lara Light Teal"
                                aria-checked={isThemeActive('lara', 'teal')}
                                role="radio"
                            >
                                <span className="block h-1rem w-full" style={{ borderRadius: '30px', background: 'linear-gradient(180deg, #14b8a6 0%, rgba(20, 184, 166, 0.5) 100%)' }} />
                            </button>
                            <button
                                className={classNames('bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200', {
                                    'border-primary': isThemeActive('lara', 'pink'),
                                    'hover:border-500 surface-border': !isThemeActive('lara', 'pink')
                                })}
                                style={{ borderRadius: '30px' }}
                                onClick={() => handleThemeChange('lara', 'pink')}
                                aria-label="Lara Light Pink"
                                aria-checked={isThemeActive('lara', 'pink')}
                                role="radio"
                            >
                                <span className="block h-1rem w-full" style={{ borderRadius: '30px', background: 'linear-gradient(180deg, #ec4899 0%, rgba(236, 72, 153, 0.5) 100%)' }} />
                            </button>
                        </div>
                    </div>
                    <div className="py-4 border-bottom-1 surface-border" role="radiogroup" aria-labelledby="material-theme-label">
                        <div className="flex align-items-center gap-2 mb-3">
                            <img src="https://primefaces.org/cdn/primereact/images/themes/md-light-indigo.svg" alt="Material Design" className="border-circle" style={{ width: '1.5rem' }} />
                            <h3 className="text-base font-medium m-0" id="material-theme-label">Material Design</h3>
                            <div className="ml-auto flex align-items-center gap-2">
                                <label htmlFor="material-condensed" className="text-sm">
                                Condensed
                                </label>
                                <InputSwitch inputId="material-condensed" checked={compactMaterialMode} onChange={handleMaterialCompactModeSwitch} className="ml-auto" />
                            </div>
                        </div>
                        <div className="flex align-items-center justify-content-between gap-3">
                            <button
                                className={classNames('bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200', {
                                    'border-primary': isThemeActive('md', 'indigo'),
                                    'hover:border-500 surface-border': !isThemeActive('md', 'indigo')
                                })}
                                style={{ borderRadius: '30px' }}
                                onClick={() => handleThemeChange('md', 'indigo')}
                                aria-label="Material Design Indigo"
                                aria-checked={isThemeActive('md', 'indigo')}
                                role="radio"
                            >
                                <span className="block h-1rem w-full" style={{ borderRadius: '30px', background: 'linear-gradient(180deg, #0565f2 0%, rgba(5, 101, 242, 0.5) 100%)' }} />
                            </button>
                            <button
                                className={classNames('bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200', {
                                    'border-primary': isThemeActive('md', 'deeppurple'),
                                    'hover:border-500 surface-border': !isThemeActive('md', 'deeppurple')
                                })}
                                style={{ borderRadius: '30px' }}
                                onClick={() => handleThemeChange('md', 'deeppurple')}
                                aria-label="Material Design Deep Purple"
                                aria-checked={isThemeActive('md', 'deeppurple')}
                                role="radio"
                            >
                                <span className="block h-1rem w-full" style={{ borderRadius: '30px', background: 'linear-gradient(180deg, #702f92 0%, rgba(112, 47, 146, 0.5) 100%)' }} />
                            </button>
                            <div className="w-3 p-2" />
                            <div className="w-3 p-2" />
                        </div>
                    </div>
                    <div className="py-4 border-bottom-1 surface-border" role="radiogroup" aria-labelledby="bootstrap-theme-label">
                        <div className="flex align-items-center gap-2 mb-3">
                            <img src="https://primefaces.org/cdn/primereact/images/themes/bootstrap4-light-blue.svg" alt="Bootstrap" className="border-circle" style={{ width: '1.5rem' }} />
                            <h3 className="text-base font-medium m-0" id="bootstrap-theme-label">Bootstrap</h3>
                        </div>
                        <div className="flex align-items-center justify-content-between gap-3">
                            <button
                                className={classNames('bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200', {
                                    'border-primary': isThemeActive('bootstrap4', 'blue'),
                                    'hover:border-500 surface-border': !isThemeActive('bootstrap4', 'blue')
                                })}
                                style={{ borderRadius: 30 }}
                                onClick={() => handleThemeChange('bootstrap4', 'blue')}
                                aria-label="Bootstrap Blue"
                                aria-checked={isThemeActive('bootstrap4', 'blue')}
                                role="radio"
                            >
                                <span className="block h-1rem w-full" style={{ borderRadius: 30, background: 'linear-gradient(180deg, #027bff 0%, rgba(2, 123, 255, 0.5) 100%)' }} />
                            </button>
                            <button
                                className={classNames('bg-transparent border-1 cursor-pointer p-2 w-3 flex align-items-center justify-content-center transition-all transition-duration-200', {
                                    'border-primary': isThemeActive('bootstrap4', 'purple'),
                                    'hover:border-500 surface-border': !isThemeActive('bootstrap4', 'purple')
                                })}
                                style={{ borderRadius: 30 }}
                                onClick={() => handleThemeChange('bootstrap4', 'purple')}
                                aria-label="Bootstrap Purple"
                                aria-checked={isThemeActive('bootstrap4', 'purple')}
                                role="radio"
                            >
                                <span className="block h-1rem w-full" style={{ borderRadius: 30, background: 'linear-gradient(180deg, #893cae 0%, rgba(137, 60, 174, 0.5) 100%)' }} />
                            </button>
                            <div className="w-3 p-2" />
                            <div className="w-3 p-2" />
                        </div>
                    </div>
                    <div className="flex align-items-center justify-content-between gap-3 py-4 border-bottom-1 surface-border">
                        <div className="w-3" role="radiogroup" aria-labelledby="soho-theme-label">
                            <div className="flex align-items-center gap-2 mb-3" >
                                <img src="https://primefaces.org/cdn/primereact/images/themes/soho-light.png" alt="Soho" className="border-circle" style={{ width: '1.5rem' }} />
                                <h3 className="text-base font-medium m-0" id="soho-theme-label">Soho</h3>
                            </div>
                            <button
                                className={classNames('bg-transparent border-1 cursor-pointer p-2 w-full flex align-items-center justify-content-center transition-all transition-duration-200', {
                                    'border-primary': isThemeActive('soho'),
                                    'hover:border-500 surface-border': !isThemeActive('soho')
                                })}
                                style={{ borderRadius: 30 }}
                                onClick={() => handleThemeChange('soho')}
                                aria-label="Soho Light"
                                aria-checked={isThemeActive('soho')}
                                role="radio"
                            >
                                <span className="block h-1rem w-full" style={{ borderRadius: 30, background: 'linear-gradient(180deg, #664beb 0%, rgba(102, 75, 235, 0.5) 100%)' }} />
                            </button>
                        </div>
                        <div className="w-3" role="radiogroup" aria-labelledby="viva-theme-label">
                            <div className="flex align-items-center gap-2 mb-3">
                                <img src="https://primefaces.org/cdn/primereact/images/themes/viva-light.svg" alt="Viva" className="border-circle" style={{ width: '1.5rem' }} />
                                <h3 className="text-base font-medium m-0" id="viva-theme-label">Viva</h3>
                            </div>
                            <button
                                className={classNames('bg-transparent border-1 cursor-pointer p-2 w-full flex align-items-center justify-content-center transition-all transition-duration-200', {
                                    'border-primary': isThemeActive('viva'),
                                    'hover:border-500 surface-border': !isThemeActive('viva')
                                })}
                                style={{ borderRadius: 30 }}
                                onClick={() => handleThemeChange('viva')}
                                aria-label="Viva Light"
                                aria-checked={isThemeActive('viva')}
                                role="radio"
                            >
                                <span className="block h-1rem w-full" style={{ borderRadius: 30, background: 'linear-gradient(180deg, #4a67c9 0%, rgba(74, 103, 201, 0.5) 100%)' }} />
                            </button>
                        </div>
                        <div className="w-3" />
                        <div className="w-3" />
                    </div>
                    <div className="flex align-items-center justify-content-between gap-3 py-4 border-bottom-1 surface-border">
                        <div className="w-3" role="radiogroup" aria-labelledby="fluent-theme-label">
                            <div className="flex align-items-center gap-2 mb-3">
                                <img src="https://primefaces.org/cdn/primereact/images/themes/fluent-light.png" alt="Fluent" className="border-circle" style={{ width: '1.5rem' }} />
                                <h3 className="text-base font-medium m-0" id="fluent-theme-label">Fluent</h3>
                            </div>
                            <button
                                className={classNames('bg-transparent border-1 cursor-pointer p-2 w-full flex align-items-center justify-content-center transition-all transition-duration-200', {
                                    'border-primary': isThemeActive('fluent', 'light'),
                                    'hover:border-500 surface-border': !isThemeActive('fluent', 'light')
                                })}
                                style={{ borderRadius: 30 }}
                                onClick={() => handleThemeChange('fluent', 'light')}
                                aria-label="Fluent Light"
                                aria-checked={isThemeActive('fluent', 'light')}
                                role="radio"
                            >
                                <span className="block h-1rem w-full" style={{ borderRadius: 30, background: 'linear-gradient(180deg, #0078d4 0%, rgba(0, 120, 212, 0.5) 100%)' }} />
                            </button>
                        </div>
                        <div className="w-3" role="radiogroup" aria-labelledby="mira-theme-label">
                            <div className="flex align-items-center gap-2 mb-3">
                                <img src="https://primefaces.org/cdn/primereact/images/themes/mira.jpg" alt="Mira" className="border-circle" style={{ width: '1.5rem' }} />
                                <h3 className="text-base font-medium m-0" id="mira-theme-label">Mira</h3>
                            </div>
                            <button
                                className={classNames('bg-transparent border-1 cursor-pointer p-2 w-full flex align-items-center justify-content-center transition-all transition-duration-200', {
                                    'border-primary': isThemeActive('nano'),
                                    'hover:border-500 surface-border': !isThemeActive('nano')
                                })}
                                style={{ borderRadius: 30 }}
                                onClick={() => handleThemeChange('nano')}
                                aria-label="Mira Theme"
                                aria-checked={isThemeActive('nano')}
                                role="radio"
                            >
                                <span className="block h-1rem w-full" style={{ borderRadius: 30, background: 'linear-gradient(180deg, #1469b4 0%, rgba(20, 105, 180, 0.5) 100%)' }} />
                            </button>
                        </div>
                        <div className="w-3" />
                        <div className="w-3" />
                    </div>
                </section>
            </div>
        </Sidebar>
    );
}
