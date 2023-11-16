import { Badge } from '@/components/lib/badge/Badge';
import { Button } from '@/components/lib/button/Button';
import { Calendar } from '@/components/lib/calendar/Calendar';
import { Chart } from '@/components/lib/chart/Chart';
import { Chip } from '@/components/lib/chip/Chip';
import { InputNumber } from '@/components/lib/inputnumber/InputNumber';
import { InputSwitch } from '@/components/lib/inputswitch/InputSwitch';
import { ProgressBar } from '@/components/lib/progressbar/ProgressBar';
import { RadioButton } from '@/components/lib/radiobutton/RadioButton';
import { SelectButton } from '@/components/lib/selectbutton/SelectButton';
import { Slider } from '@/components/lib/slider/Slider';
import { TabMenu } from '@/components/lib/tabmenu/TabMenu';
import { Tree } from '@/components/lib/tree/Tree';
import { NodeService } from '@/service/NodeService';
import { useEffect, useState } from 'react';

let chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Income',
            data: [40, 59, 40, 50, 56, 40, 70],
            fill: true,
            borderColor: '#03C4E8',
            tension: 0.4,
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
    interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
    },
    scales: {
        y: {
            ticks: {
                display: false
            },
            min: 0,
            max: 100
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
    const [rangeValues, setRangeValues] = useState([20, 80]);
    const [dateValue, setDateValue] = useState(null);
    const [selectButtonValue, setSelectButtonValue] = useState(1);
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const items = [
        { label: 'Home', icon: 'pi pi-fw pi-home' },
        { label: 'Calendar', icon: 'pi pi-fw pi-calendar' }
    ];
    const selectButtonOptions = [
        { name: 'Prime', value: 1 },
        { name: 'React', value: 2 },
        { name: 'Themes', value: 3 }
    ];

    useEffect(() => {
        NodeService.getTreeNodes().then((data) => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <section className="landing-components py-8  ">
            <div className="section-header">Components</div>
            <p className="section-detail">
                <span className="font-bold text-900">Over 90</span> React UI Components with top-notch quality to help you implement all your UI requirements in style.
            </p>
            <div className="components-main relative ">
                <div className="components-main-container flex flex-column xl:flex-row mt-7 gap-5 justify-content-center mx-auto w-full xl:w-auto px-5 lg:px-8">
                    <div className="flex flex-column md:flex-row gap-5 w-full xl:w-auto">
                        <div className="flex flex-column w-full gap-5 xl:mt-8 z-1  lg:w-28rem md:w-30rem">
                            <div className="box p-4  ">
                                <span className="text-secondary font-medium block mb-3">Balance</span>
                                <div className="flex flex-wrap lg:flex-nowrap justify-content-start gap-3">
                                    <InputNumber value={240} mode="currency" currency="USD" locale="en-US" className="w-full" inputClassName="lg:w-6" />
                                    <InputNumber value={356} mode="currency" currency="USD" locale="en-US" className="w-full" inputClassName="lg:w-6" />
                                </div>
                                <span className="text-secondary font-medium block mt-5 mb-3">Category</span>
                                <div className="flex justify-content-between flex-wrap gap-3">
                                    <div className="flex  align-items-center">
                                        <RadioButton inputId="category1" value="C" name="radiovalue" onChange={(e) => setCategory(e.value)} checked={category === 'C'} />
                                        <label htmlFor="category1" className="ml-2 font-medium">
                                            Clothing
                                        </label>
                                    </div>
                                    <div className="flex align-items-center">
                                        <RadioButton inputId="category2" value="F" name="radiovalue" onChange={(e) => setCategory(e.value)} checked={category === 'F'} />
                                        <label htmlFor="category2" className="ml-2 font-medium">
                                            Fitness
                                        </label>
                                    </div>
                                    <div className="flex align-items-center">
                                        <RadioButton inputId="category3" value="E" name="radiovalue" onChange={(e) => setCategory(e.value)} checked={category === 'E'} />
                                        <label htmlFor="category3" className="ml-2 font-medium">
                                            Electronics
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="box p-4 ">
                                <Chart type="line" data={chartData} options={chartOptions} />
                            </div>
                            <div className="box p-4 ">
                                <TabMenu model={items} activeIndex={activeTabIndex} onTabChange={(e) => setActiveTabIndex(e.index)} />
                            </div>
                            <div className="box p-4">
                                <ul className="list-none p-0 m-0">
                                    <li className="flex align-items-center mb-3">
                                        <img src="https://primefaces.org/cdn/primereact/images/landing-new/avatar-1.svg" alt="avatar 1" className="w-2rem h-2rem mr-3" />
                                        <span className="font-medium">Darrel Steward</span>
                                        <ProgressBar value={15} showValue={false} className="w-6rem sm:w-10rem ml-auto mr-3" style={{ height: '.5rem' }} />
                                        <span className="text-secondary font-medium">15%</span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <img src="https://primefaces.org/cdn/primereact/images/landing-new/avatar-2.svg" alt="avatar 2" className="w-2rem h-2rem mr-3" />
                                        <span className="font-medium">Albert Flores</span>
                                        <ProgressBar value={85} showValue={false} className="w-6rem sm:w-10rem ml-auto mr-3" style={{ height: '.5rem' }} />
                                        <span className="text-secondary font-medium">85%</span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <img src="https://primefaces.org/cdn/primereact/images/landing-new/avatar-3.svg" alt="avatar 3" className="w-2rem h-2rem mr-3" />
                                        <span className="font-medium">Kathryn Murphy</span>
                                        <ProgressBar value={50} showValue={false} className="w-6rem sm:w-10rem ml-auto mr-3" style={{ height: '.5rem' }} />
                                        <span className="text-secondary font-medium">50%</span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <img src="https://primefaces.org/cdn/primereact/images/landing-new/avatar-4.svg" alt="avatar 4" className="w-2rem h-2rem mr-3" />
                                        <span className="font-medium">Cody Fisher</span>
                                        <ProgressBar value={75} showValue={false} className="w-6rem sm:w-10rem ml-auto mr-3" style={{ height: '.5rem' }} />
                                        <span className="text-secondary font-medium">75%</span>
                                    </li>
                                    <li className="flex align-items-center mb-3">
                                        <img src="https://primefaces.org/cdn/primereact/images/landing-new/avatar-5.svg" alt="avatar 5" className="w-2rem h-2rem mr-3" />
                                        <span className="font-medium">Brandon Atkinson</span>
                                        <ProgressBar value={60} showValue={false} className="w-6rem sm:w-10rem ml-auto mr-3" style={{ height: '.5rem' }} />
                                        <span className="text-secondary font-medium">60%</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-column w-full  gap-5 justify-content-start  xl:w-24rem z-1">
                            <div className="box p-4  ">
                                <div className="surface-card mb-4 w-full text-center p-5" style={{ borderRadius: '10px' }}>
                                    <img src="images/landing-new/brown-watch.png" alt="Watch" className="w-14rem" />
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
                            <div className="box p-4 ">
                                <Tree value={nodes} className="bg-transparent border-none p-0" />
                            </div>
                            <div className="box p-4 ">
                                <div className="flex align-items-center">
                                    <Chip label="React" className="mr-2 font-medium" removable />
                                    <span className="font-medium">Typescript</span>
                                    <InputSwitch className="ml-auto" checked={switchValue} onChange={(e) => setSwitchValue(e.value)}></InputSwitch>
                                </div>
                                <div className="mt-5">
                                    <SelectButton value={selectButtonValue} options={selectButtonOptions} onChange={(e) => setSelectButtonValue(e.value)} optionLabel="name" />
                                </div>
                            </div>
                            <div className="box p-4  block xl:hidden">
                                <div className="flex justify-content-center">
                                    <Slider value={rangeValues} onChange={(e) => setRangeValues(e.value)} range className="w-full" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-column gap-5 flex-column  md:flex-row xl:flex-column justify-content-between xl:justify-content-start z-1 w-full md:w-auto">
                        <div className="flex flex-column gap-5 xl:mt-5 w-full">
                            <div className="box p-4 hidden xl:block">
                                <div className="flex justify-content-center w-full">
                                    <Slider value={rangeValues} onChange={(e) => setRangeValues(e.value)} range className="w-full " />
                                </div>
                            </div>
                            <div className="box p-4  w-full">
                                <ul className="list-none p-0 m-0">
                                    <li className="flex mb-3">
                                        <span className="mr-3">
                                            <img src="https://primefaces.org/cdn/primereact/images/landing-new/avatar.png" alt="Avatar" className="w-3rem h-3rem" />
                                        </span>
                                        <div className="flex flex-column">
                                            <span className="font-bold mb-2">Amanda Williams</span>
                                            <p className="m-0 text-secondary">Webmaster</p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <a className="flex align-items-center p-3 w-full hover:surface-hover transition-colors transition-duration-150 cursor-pointer" style={{ borderRadius: '10px' }}>
                                            <i className="pi pi-home text-xl mr-3"></i>
                                            <span className="flex flex-column">
                                                <span className="font-bold mb-1">Dashboard</span>
                                                <span className="m-0 text-secondary">Control Panel</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="flex">
                                        <a className="flex align-items-center p-3 w-full hover:surface-hover transition-colors transition-duration-150 cursor-pointer" style={{ borderRadius: '10px' }}>
                                            <i className="pi pi-envelope text-xl mr-3"></i>
                                            <span className="flex flex-column">
                                                <span className="font-bold mb-1">Inbox</span>
                                                <span className="m-0 text-secondary">View Messages</span>
                                            </span>
                                            <Badge value="3" className="ml-auto"></Badge>
                                        </a>
                                    </li>
                                    <li className="flex">
                                        <a className="flex align-items-center p-3 w-full hover:surface-hover transition-colors transition-duration-150 cursor-pointer" style={{ borderRadius: '10px' }}>
                                            <i className="pi pi-cog text-xl mr-3"></i>
                                            <span className="flex flex-column">
                                                <span className="font-bold mb-1">Profile</span>
                                                <span className="m-0 text-secondary">Account Settings</span>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="box p-4  md:w-6 xl:w-full">
                            <Calendar value={dateValue} onChange={(e) => setDateValue(e.value)} inline showWeek className="w-full  " />
                        </div>
                    </div>
                </div>

                <div className="components-strip-top absolute w-full md:w-6 h-8rem top-0 left-0"></div>
                <div className="components-strip-bottom absolute w-full md:w-6 h-8rem bottom-0 right-0"></div>
            </div>
        </section>
    );
};

export default ComponentSection;
