import { useRef, useState } from 'react';
import { Button } from '../../components/lib/button/Button';
import { Checkbox } from '../../components/lib/checkbox/Checkbox';
import { Dropdown } from '../../components/lib/dropdown/Dropdown';
import { InputMask } from '../../components/lib/inputmask/InputMask';
import { InputNumber } from '../../components/lib/inputnumber/InputNumber';
import { InputText } from '../../components/lib/inputtext/InputText';
import { ListBox } from '../../components/lib/listbox/ListBox';
import { RadioButton } from '../../components/lib/radiobutton/RadioButton';
import { Slider } from '../../components/lib/slider/Slider';
import { classNames } from '../../components/lib/utils/ClassNames';

const DesignerSection = (props) => {
    const [font, setFont] = useState('-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol');
    const fonts = [
        { label: 'Arial', value: 'Arial,Helvetica Neue,Helvetica,sans-serif' },
        { label: 'System', value: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol' },
        { label: 'Trebuches MS', value: 'Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif' },
        { label: 'Verdana', value: 'Verdana,Geneva,sans-serif' }
    ];
    const [size, setSize] = useState('normal');
    const [inputStyle, setInputStyle] = useState('outlined');
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Paris', code: 'PRS' }
    ];
    const [range, setRange] = useState([20, 80]);
    const [checkboxValue, setCheckboxValue] = useState([1]);
    const editor = useRef(null);

    const changeTheme = (color, darker) => {
        editor.current.style.setProperty('--dd-primary', color);
        editor.current.style.setProperty('--dd-primary-darker', darker);
    };

    const changeFont = (value) => {
        editor.current.style.setProperty('--dd-font', value);
        setFont(value);
    };

    const editorClassName = classNames('designer-demo', {
        'p-input-filled': inputStyle === 'filled',
        'demo-size-small': size === 'small',
        'demo-size-large': size === 'large'
    });

    const onCheckboxChange = (e) => {
        let _checkboxValue = [...checkboxValue];

        if (e.checked) _checkboxValue.push(e.value);
        else _checkboxValue.splice(_checkboxValue.indexOf(e.value), 1);

        setCheckboxValue(_checkboxValue);
    };

    const designerLogo = props.dark ? 'designer-light.svg' : 'designer-dark.svg';

    return (
        <section className="landing-designer py-8">
            <div className="section-header">Theme Designer</div>
            <p className="section-detail">Designer is the ultimate tool to create your own PrimeReact experience powered by a SASS based theme engine with 500+ variables and a Visual Designer.</p>
            <div className="designer-main mt-7 px-5 lg:px-8 justify-content-center" style={{ backgroundImage: `url(/images/landing-new/wave-${props.dark ? 'dark' : 'light'}.svg)`, backgroundSize: 'cover' }}>
                <div className="box p-4 flex flex-column md:flex-row z-1 designer-editor">
                    <div className="mr-0 md:mr-4 p-4 designer-controls box border-bottom-1 border-left-none border-right-none border-top-none md:border-bottom-none md:border-right-1" style={{ borderRadius: '10px' }}>
                        <div className="text-center mb-4">
                            <img src={`https://primefaces.org/cdn/primereact/images/landing-new/${designerLogo}`} alt={designerLogo} />
                        </div>
                        <div className="p-fluid">
                            <span className="font-semibold block mb-3">Primary</span>
                            <div>
                                <button type="button" className="border-circle w-2rem h-2rem p-link mr-3" style={{ backgroundColor: '#03C4E8' }} onClick={() => changeTheme('#03C4E8', '#029dba')}></button>
                                <button type="button" className="border-circle w-2rem h-2rem p-link mr-3" style={{ backgroundColor: '#03E8BF' }} onClick={() => changeTheme('#03E8BF', '#02ba99')}></button>
                                <button type="button" className="border-circle w-2rem h-2rem p-link mr-3" style={{ backgroundColor: '#916AFF' }} onClick={() => changeTheme('#916AFF', '#7455cc')}></button>
                                <button type="button" className="border-circle w-2rem h-2rem p-link" style={{ backgroundColor: '#FFBD80' }} onClick={() => changeTheme('#FFBD80', '#cc9766')}></button>
                            </div>

                            <span className="font-semibold block mt-4 mb-3">Font</span>
                            <Dropdown options={fonts} value={font} onChange={(e) => changeFont(e.value)}></Dropdown>

                            <span className="font-semibold block mt-4 mb-3">Size</span>
                            <div className="flex flex-wrap gap-4 align-items-center">
                                <div className="flex align-items-center">
                                    <RadioButton inputId="size-small" value="small" name="sizevalue" onChange={(e) => setSize('small')} checked={size === 'small'} />
                                    <label htmlFor="size-small" className="ml-2 font-medium">
                                        Small
                                    </label>
                                </div>
                                <div className="flex align-items-center ">
                                    <RadioButton inputId="size-normal" value="normal" name="sizevalue" onChange={(e) => setSize('normal')} checked={size === 'normal'} />
                                    <label htmlFor="size-normal" className="ml-2 font-medium">
                                        Normal
                                    </label>
                                </div>
                                <div className="flex align-items-center ">
                                    <RadioButton inputId="size-large" value="small" name="sizevalue" onChange={(e) => setSize('large')} checked={size === 'large'} />
                                    <label htmlFor="size-large" className="ml-2 font-medium">
                                        Large
                                    </label>
                                </div>
                            </div>

                            <span className="font-semibold block mt-4 mb-3">Input Style</span>
                            <div className="flex align-items-center mb-6 flex-wrap gap-4">
                                <div className="flex align-items-center">
                                    <RadioButton inputId="inputStyle1" value="outlined" name="inputstylevalue" onChange={(e) => setInputStyle(e.value)} checked={inputStyle === 'outlined'} />
                                    <label htmlFor="inputStyle1" className="ml-2 font-medium">
                                        Outlined
                                    </label>
                                </div>
                                <div className="flex align-items-center ">
                                    <RadioButton inputId="inputStyle2" value="filled" name="inputstylevalue" onChange={(e) => setInputStyle(e.value)} checked={inputStyle === 'filled'} />
                                    <label htmlFor="inputStyle2" className="ml-2 font-medium">
                                        Filled
                                    </label>
                                </div>
                            </div>

                            <a href="https://designer.primereact.org" className="font-semibold p-3 border-round flex align-items-center linkbox active">
                                <span>View Full Version</span>
                                <i className="pi pi-arrow-right ml-auto"></i>
                            </a>
                        </div>
                    </div>
                    <div className={editorClassName} style={{ borderRadius: '10px' }} ref={editor}>
                        <div className="p-fluid formgrid grid pt-3">
                            <div className="field col-12 xl:col-6">
                                <label htmlFor="username" className="font-semibold mb-3 p-component">
                                    Username
                                </label>
                                <InputText id="username" type="text" />
                            </div>
                            <div className="field col-12 xl:col-6">
                                <label htmlFor="email" className="font-semibold mb-3 p-component">
                                    Email
                                </label>
                                <InputText id="email" type="text" />
                            </div>
                            <div className="field col-12 xl:col-6">
                                <label htmlFor="price" className="font-semibold mb-3 p-component">
                                    Price
                                </label>
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">$</span>
                                    <InputNumber inputId="price" placeholder="Price" />
                                    <span className="p-inputgroup-addon">.00</span>
                                </div>
                            </div>
                            <div className="field col-12 xl:col-6">
                                <label htmlFor="date" className="font-semibold mb-3 p-component">
                                    Date
                                </label>
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-calendar"></i>
                                    </span>
                                    <InputMask id="date" placeholder="mm/dd/yyyy" mask="99/99/9999" slotChar="mm/dd/yyyy" />
                                </div>
                            </div>
                            <div className="field col-12 xl:col-6">
                                <span className="font-semibold mb-2 block mb-3 mt-3 p-component">City</span>
                                <ListBox value={selectedCity} options={cities} onChange={(e) => setSelectedCity(e.value)} optionLabel="name" />
                            </div>
                            <div className="field col-12 xl:col-6">
                                <label htmlFor="email" className="font-semibold mb-3 mt-3 p-component">
                                    Range
                                </label>
                                <Slider value={range} onChange={(e) => setRange(e.value)} range />

                                <span className="font-semibold mb-2 block mb-3 mt-5  p-component">Checkboxes</span>
                                <div className="flex flex-column xl:flex-row xl:align-items-center">
                                    <div className="flex align-items-center">
                                        <Checkbox inputId="cb1" value={1} name="cbvalue" onChange={onCheckboxChange} checked={checkboxValue.includes(1)} />
                                        <label htmlFor="cb1" className="ml-2 font-medium p-component white-space-nowrap">
                                            Option 1
                                        </label>
                                    </div>
                                    <div className="flex align-items-center mt-3 xl:mt-0 xl:ml-4">
                                        <Checkbox inputId="cb2" value={2} name="cbvalue" onChange={onCheckboxChange} checked={checkboxValue.includes(2)} />
                                        <label htmlFor="cb2" className="ml-2 font-medium p-component white-space-nowrap">
                                            Option 2
                                        </label>
                                    </div>
                                </div>

                                <span className="font-semibold mb-2 block mb-3 mt-5 p-component">Buttons</span>
                                <div className="flex align-items-center">
                                    <Button type="button" label="Save" icon="pi pi-check" className="mr-1"></Button>
                                    <Button type="button" label="Clear" icon="pi pi-times" className="p-button-outlined ml-1"></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignerSection;
