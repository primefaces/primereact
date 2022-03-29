import { useEffect, useState } from 'react';
import { InputNumber } from '../../components/lib/inputnumber/InputNumber';
import { RadioButton } from '../../components/lib/radiobutton/RadioButton';
import { ProgressBar } from '../../components/lib/progressbar/ProgressBar';
import { Button } from '../../components/lib/button/Button';
import { Tree } from '../../components/lib/tree/Tree';
import { Chip } from '../../components/lib/chip/Chip';
import { Slider } from '../../components/lib/slider/Slider';
import { Calendar } from '../../components/lib/calendar/Calendar';
import { InputSwitch } from '../../components/lib/inputswitch/InputSwitch';
import { NodeService } from '../../service/NodeService';
import { Badge } from '../../components/lib/badge/Badge';
import { SelectButton } from '../../components/lib/selectbutton/SelectButton';
import { TabMenu } from '../../components/lib/tabmenu/TabMenu';
import { Chart } from '../../components/lib/chart/Chart';
import getConfig from 'next/config';

let chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Income',
            data: [40, 59, 40, 50, 56, 40, 70],
            fill: true,
            borderColor: '#03C4E8',
            tension: .4,
            backgroundColor: 'rgba(3, 196, 232, .2)'
        }
    ]
};

let chartOptions = {
    plugins: {
        legend: {
            display: false
        }
    },
    scales: {
        y: {
            ticks: {
                display: false
            },
            min: 0,
            max: 100,
        },
        x: {
            ticks: {
                display: false
            }
        }
    }
};

const ComponentSection = () => {
    const [category, setCategory] = useState('C');
    const [nodes, setNodes] = useState(null);
    const [switchValue, setSwitchValue] = useState(true);
    const [rangeValues, setRangeValues] = useState([20,80]);
    const [dateValue, setDateValue] = useState(null);
    const [selectButtonValue, setSelectButtonValue] = useState(1);
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const nodeService = new NodeService();
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const items = [
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
        {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];
    const selectButtonOptions = [
        {name: 'Prime', value: 1},
        {name: 'React', value: 2},
        {name: 'Themes', value: 3}
    ];

    useEffect(() => {
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <section className="landing-components py-8">
            <div className="section-header">Components</div>
            <p className="section-detail"><span className="font-bold text-900">Over 80</span> React UI Components with top-notch quality to help you implement all your UI requirements in style.</p>
            <div className="flex justify-content-center mt-4">
                <a href="https://www.primefaces.org/primeblocks-react" className="font-semibold p-3 border-round flex align-items-center linkbox active">
                    <span>Get Started</span>
                    <i className="pi pi-arrow-right ml-2"></i>
                </a>
            </div>
            <div className="components-main flex mt-7 relative md:justify-content-center overflow-auto">
                <div className="flex flex-column px-3 py-8 z-1">
                    <div className="box p-4 mb-5">
                        <span className="text-secondary font-medium block mb-3">Balance</span>
                        <div className="flex">
                            <InputNumber value={240} mode="currency" currency="USD" locale="en-US" className="mr-2" />
                            <InputNumber value={356} mode="currency" currency="USD" locale="en-US" />
                        </div>
                        <span className="text-secondary font-medium block mt-5 mb-3">Category</span>
                        <div className="flex justify-content-between">
                            <div className="flex align-items-center">
                                <RadioButton inputId="category1" value="C" name="radiovalue" onChange={(e) => setCategory(e.value)} checked={category === 'C'} />
                                <label htmlFor="category1" className="ml-2 font-medium">Clothing</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="category2" value="F" name="radiovalue" onChange={(e) => setCategory(e.value)} checked={category === 'F'} />
                                <label htmlFor="category2" className="ml-2 font-medium">Fitness</label>
                            </div>
                            <div className="flex align-items-center">
                                <RadioButton inputId="category3" value="E" name="radiovalue" onChange={(e) => setCategory(e.value)} checked={category === 'E'} />
                                <label htmlFor="category3" className="ml-2 font-medium">Electronics</label>
                            </div>
                        </div>
                    </div>
                    <div className="box p-4 mb-5">
                        <Chart type="line" data={chartData} options={chartOptions} />
                    </div>
                    <div className="box p-4 mb-5">
                        <TabMenu model={items} activeIndex={activeTabIndex} onTabChange={(e) => setActiveTabIndex(e.index)}/>
                    </div>
                    <div className="box p-4">
                        <ul className="list-none p-0 m-0">
                            <li className="flex align-items-center mb-3">
                                <img src={`${contextPath}/images/landing-new/avatar-1.svg`} alt="avatar 1" className="w-2rem h-2rem mr-3" />
                                <span className="font-medium">Darrel Steward</span>
                                <ProgressBar value={15} showValue={false} className="w-10rem ml-auto mr-3" style={{height:'.5rem'}} />
                                <span className="text-secondary font-medium">15%</span>
                            </li>
                            <li className="flex align-items-center mb-3">
                                <img src={`${contextPath}/images/landing-new/avatar-2.svg`} alt="avatar 2" className="w-2rem h-2rem mr-3" />
                                <span className="font-medium">Albert Flores</span>
                                <ProgressBar value={85} showValue={false} className="w-10rem ml-auto mr-3" style={{height:'.5rem'}} />
                                <span className="text-secondary font-medium">85%</span>
                            </li>
                            <li className="flex align-items-center mb-3">
                                <img src={`${contextPath}/images/landing-new/avatar-3.svg`} alt="avatar 3" className="w-2rem h-2rem mr-3" />
                                <span className="font-medium">Kathryn Murphy</span>
                                <ProgressBar value={50} showValue={false} className="w-10rem ml-auto mr-3" style={{height:'.5rem'}} />
                                <span className="text-secondary font-medium">50%</span>
                            </li>
                            <li className="flex align-items-center mb-3">
                                <img src={`${contextPath}/images/landing-new/avatar-4.svg`} alt="avatar 4" className="w-2rem h-2rem mr-3" />
                                <span className="font-medium">Cody Fisher</span>
                                <ProgressBar value={75} showValue={false} className="w-10rem ml-auto mr-3" style={{height:'.5rem'}} />
                                <span className="text-secondary font-medium">75%</span>
                            </li>
                            <li className="flex align-items-center mb-3">
                                <img src={`${contextPath}/images/landing-new/avatar-5.svg`} alt="avatar 5" className="w-2rem h-2rem mr-3" />
                                <span className="font-medium">Brandon Atkinson</span>
                                <ProgressBar value={60} showValue={false} className="w-10rem ml-auto mr-3" style={{height:'.5rem'}} />
                                <span className="text-secondary font-medium">60%</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-column justify-content-start px-3 z-1">
                    <div className="box p-4 mb-5">
                        <div className="surface-card mb-4 w-20rem text-center p-5" style={{borderRadius:'10px'}}>
                            <img src={`${contextPath}/images/landing-new/watch.png`} alt="Watch"/>
                        </div>
                        <div className="flex align-items-center mb-4">
                            <div className="flex flex-column">
                                <span className="block font-semibold mb-1">Brown Watch</span>
                                <span className="text-secondary text-sm">Premium Quality</span>
                            </div>
                            <span className="font-medium text-xl ml-auto">$12.45</span>
                        </div>
                        <Button label="Add to Cart" icon="pi pi-shopping-cart" className="w-full p-button-outlined"></Button>
                    </div>
                    <div className="box p-4 mb-5">
                        <Tree value={nodes} className="bg-transparent border-none p-0" />
                    </div>
                    <div className="box p-4 mb-5">
                        <div className="flex align-items-center">
                            <Chip label="React" className="mr-2 font-medium" removable />
                            <span className="font-medium">Typescript</span>
                            <InputSwitch className="ml-auto" checked={switchValue} onChange={(e) => setSwitchValue(e.value)}></InputSwitch>
                        </div>
                        <div className="mt-5">
                            <SelectButton value={selectButtonValue} options={selectButtonOptions} onChange={(e) => setSelectButtonValue(e.value)} optionLabel="name" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-column px-3 py-5 z-1">
                    <div className="box p-4 mb-5">
                        <div className="flex justify-content-center">
                            <Slider value={rangeValues} onChange={(e) => setRangeValues(e.value)} range className="w-20rem"/>
                        </div>
                    </div>
                    <div className="box p-4 mb-5">
                        <ul className="list-none p-0 m-0">
                            <li className="flex mb-3">
                                <span className="mr-3">
                                    <img src={`${contextPath}/images/landing-new/avatar.png`} alt="Avatar" className="w-3rem h-3rem" />
                                </span>
                                <div className="flex flex-column">
                                    <span className="font-bold mb-2">Amanda Williams</span>
                                    <p className="m-0 text-secondary">Webmaster</p>
                                </div>
                            </li>
                            <li className="flex">
                                <a className="flex align-items-center p-3 w-full hover:surface-hover transition-colors transition-duration-150 cursor-pointer" style={{borderRadius:'10px'}}>
                                    <i className="pi pi-home text-xl mr-3"></i>
                                    <span className="flex flex-column">
                                        <span className="font-bold mb-1">Dashboard</span>
                                        <span className="m-0 text-secondary">Control Panel</span>
                                    </span>
                                </a>
                            </li>
                            <li className="flex">
                                <a className="flex align-items-center p-3 w-full hover:surface-hover transition-colors transition-duration-150 cursor-pointer" style={{borderRadius:'10px'}}>
                                    <i className="pi pi-envelope text-xl mr-3"></i>
                                    <span className="flex flex-column">
                                        <span className="font-bold mb-1">Inbox</span>
                                        <span className="m-0 text-secondary">View Messages</span>
                                    </span>
                                    <Badge value="3" className="ml-auto"></Badge>
                                </a>
                            </li>
                            <li className="flex">
                                <a className="flex align-items-center p-3 w-full hover:surface-hover transition-colors transition-duration-150 cursor-pointer" style={{borderRadius:'10px'}}>
                                    <i className="pi pi-cog text-xl mr-3"></i>
                                    <span className="flex flex-column">
                                        <span className="font-bold mb-1">Profile</span>
                                        <span className="m-0 text-secondary">Account Settings</span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="box p-4 mb-5">
                        <Calendar value={dateValue} onChange={(e) => setDateValue(e.value)} inline showWeek />
                    </div>
                </div>
                <div className="components-strip-top absolute w-full md:w-6 h-8rem top-0 left-0"></div>
                <div className="components-strip-bottom absolute w-full md:w-6 h-8rem bottom-0 right-0"></div>
            </div>
        </section>
    );
}

export default ComponentSection;
