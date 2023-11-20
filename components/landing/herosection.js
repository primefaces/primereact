import AppContentContext from '@/components/layout/appcontentcontext';
import { Badge } from '@/components/lib/badge/Badge';
import { Button } from '@/components/lib/button/Button';
import { Calendar } from '@/components/lib/calendar/Calendar';
import { Chart } from '@/components/lib/chart/Chart';
import { Chip } from '@/components/lib/chip/Chip';
import { Dropdown } from '@/components/lib/dropdown/Dropdown';
import { InputNumber } from '@/components/lib/inputnumber/InputNumber';
import { InputSwitch } from '@/components/lib/inputswitch/InputSwitch';
import { RadioButton } from '@/components/lib/radiobutton/RadioButton';
import { SelectButton } from '@/components/lib/selectbutton/SelectButton';
import { Slider } from '@/components/lib/slider/Slider';
import { TabMenu } from '@/components/lib/tabmenu/TabMenu';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';

const HeroSection = () => {
    const { darkMode } = useContext(AppContentContext);
    const selectButtonOptions = [
        { name: 'Styled', value: 1 },
        { name: 'Unstyled', value: 2 }
    ];

    const items = [
        { label: 'Home', icon: 'pi pi-fw pi-home' },
        { label: 'Calendar', icon: 'pi pi-fw pi-calendar' }
    ];

    const [value1, setValue1] = useState(24);
    const [category, setCategory] = useState('S');
    const [dateValue, setDateValue] = useState(null);
    const [chartOptions, setChartOptions] = useState({});
    const [chartData, setChartData] = useState({});
    const [checked, setChecked] = useState(true);
    const [selectButtonValue, setSelectButtonValue] = useState(1);
    const [activeIndex, setActiveIndex] = useState(0);
    const [rangeValues, setRangeValues] = useState([20, 80]);
    const [user, setUser] = useState(null);
    const [users] = useState([
        { name: 'Amy Elsner', image: 'amyelsner.png' },
        { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
        { name: 'Onyama Limba', image: 'onyamalimba.png' }
    ]);

    const userTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img alt={rowData.name} src={`https://primefaces.org/cdn/primereact/images/avatar/${rowData.image}`} width="32" />
                <span>{rowData.name}</span>
            </div>
        );
    };

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        const data = {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
                {
                    label: 'Annual Income',
                    data: [40, 59, 40, 50, 56],
                    fill: true,
                    borderColor: '#03C4E8',
                    tension: 0.4,
                    backgroundColor: 'rgba(151, 210, 222, .2)'
                }
            ]
        };

        const options = {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    min: 0,
                    max: 100,
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, [darkMode]);

    return (
        <section className="landing-hero py-8 px-5 lg:px-8">
            <div className="flex flex-wrap">
                <div className="w-full xl:w-6 flex flex-column justify-content-center lg:pr-8 align-items-center xl:align-items-stretch">
                    <h1 className="text-6xl font-bold text-center xl:text-left">
                        The Most Complete UI Suite for <span className="font-bold text-primary">React.js</span>
                    </h1>
                    <p className="section-detail xl:text-left text-center px-0 mt-0 mb-5">
                        Elevate your web applications with PrimeReact's comprehensive suite of customizable, feature-rich UI components. With PrimeReact, turning your development vision into reality has never been easier.
                    </p>
                    <div className="flex align-items-center gap-3">
                        <Link href="/installation">
                            <a className="linkbox active font-semibold py-3 px-4">
                                <span>Get Started</span>
                                <i className="pi pi-arrow-right ml-3"></i>
                            </a>
                        </Link>
                        <a href="https://github.com/primefaces/primereact" target="_blank" rel="noopener noreferrer" className="linkbox font-semibold py-3 px-4">
                            <span>Give a Star</span>
                            <i className="pi pi-star-fill ml-3 text-yellow-500"></i>
                        </a>
                    </div>
                </div>
                <div className="w-full xl:w-6 pt-7 xl:pt-0 hidden md:block">
                    <div className="flex">
                        <div className="flex flex-column w-6 gap-5 pt-8 pr-3">
                            <div className="box p-4 fadein animation-duration-500">
                                <div className="flex gap-2">
                                    <div className="w-6rem">
                                        <span className="text-secondary font-semibold block mb-3">Amount</span>
                                        <InputNumber value={value1} mode="currency" currency="USD" locale="en-US" className="w-full" inputClassName="w-full" onValueChange={(e) => setValue1(e.value)} />
                                    </div>
                                    <div className="flex-auto" style={{ width: '1%' }}>
                                        <span className="text-secondary font-semibold block mb-3">Beneficiary</span>
                                        <Dropdown value={user} onChange={(e) => setUser(e.value)} options={users} optionLabel="name" placeholder="Select a User" className="w-full" itemTemplate={userTemplate} />
                                    </div>
                                </div>
                                <span className="text-secondary font-semibold block mt-5 mb-3">Account</span>
                                <div className="flex flex-wrap gap-3">
                                    <div className="flex align-items-center">
                                        <RadioButton inputId="category1" name="radiovalue" value="S" checked={category === 'S'} onChange={(e) => setCategory('S')} />
                                        <label htmlFor="category1" className="ml-2 font-medium">
                                            Savings
                                        </label>
                                    </div>
                                    <div className="flex align-items-center">
                                        <RadioButton inputId="category2" name="radiovalue" value="C" checked={category === 'C'} onChange={(e) => setCategory('C')} />
                                        <label htmlFor="category2" className="ml-2 font-medium">
                                            Checking
                                        </label>
                                    </div>
                                </div>
                                <span className="text-secondary font-semibold block mt-5 mb-3">Date</span>
                                <Calendar value={dateValue} showWeek className="w-full" />
                            </div>
                            <div className="box p-4 fadein animation-duration-500">
                                <Chart type="line" data={chartData} options={chartOptions} />
                            </div>
                            <div className="box p-4 fadein animation-duration-500">
                                <div className="flex align-items-center">
                                    <Chip label="React" className="mr-2 font-medium" />
                                    <Chip label="Typescript" className="mr-2 font-medium" />
                                    <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} className="ml-auto" />
                                </div>
                                <div className="mt-5 flex justify-content-center">
                                    <SelectButton value={selectButtonValue} onChange={(e) => setSelectButtonValue(e.value)} options={selectButtonOptions} optionLabel="name" />
                                </div>
                                <div className="mt-5">
                                    <Slider value={rangeValues} onChange={(e) => setRangeValues(e.value)} range className="w-full" />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-column w-6 gap-5 pl-3">
                            <div className="box p-4 fadein animation-duration-500">
                                <div className="surface-card mb-4 w-full text-center p-5" style={{ borderRadius: '10px' }}>
                                    <img src="https://primefaces.org/cdn/primereact/images/landing/air-jordan.png" alt="Watch" className="w-14rem" />
                                </div>
                                <div className="flex align-items-center mb-4">
                                    <div className="flex flex-column">
                                        <span className="block font-semibold mb-1">Sneaker</span>
                                        <span className="text-secondary text-sm">Premium Quality</span>
                                    </div>
                                    <span className="font-medium text-xl ml-auto">$990</span>
                                </div>
                                <Button label="Add to Cart" icon="pi pi-shopping-cart" outlined className="w-full"></Button>
                            </div>
                            <div className="box p-4 fadein animation-duration-500">
                                <ul className="list-none p-0 m-0">
                                    <li className="flex align-items-center mb-3">
                                        <span className="mr-3">
                                            <img src="https://primefaces.org/cdn/primereact/images/landing/avatar.png" alt="Avatar" className="w-3rem h-3rem" />
                                        </span>
                                        <div className="flex flex-column">
                                            <span className="font-bold mb-1">Amanda Williams</span>
                                            <span className="text-secondary">Administrator</span>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <a className="flex align-items-center p-3 border-round w-full hover:surface-hover transition-colors transition-duration-150 cursor-pointer" style={{ borderRadius: '10px' }}>
                                            <i className="pi pi-home text-xl mr-3"></i>
                                            <span className="flex flex-column">
                                                <span className="font-bold mb-1">Dashboard</span>
                                                <span className="m-0 text-secondary">Control Panel</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="flex">
                                        <a className="flex align-items-center p-3 border-round w-full hover:surface-hover transition-colors transition-duration-150 cursor-pointer" style={{ borderRadius: '10px' }}>
                                            <i className="pi pi-envelope text-xl mr-3"></i>
                                            <span className="flex flex-column">
                                                <span className="font-bold mb-1">Inbox</span>
                                                <span className="m-0 text-secondary">View Messages</span>
                                            </span>
                                            <Badge value="3" className="ml-auto"></Badge>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="box p-4 fadein animation-duration-500">
                                <TabMenu model={items} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
