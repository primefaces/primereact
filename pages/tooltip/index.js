import React, { useState } from 'react';
import { InputText } from '../../components/lib/inputtext/InputText';
import { Button } from '../../components/lib/button/Button';
import { Tooltip } from '../../components/lib/tooltip/Tooltip';
import { Knob } from '../../components/lib/knob/Knob';
import { Slider } from '../../components/lib/slider/Slider';
import { Badge } from '../../components/lib/badge/Badge';
import TooltipDoc from '../../components/doc/tooltip';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

const TooltipDemo = () => {

    const [saveBtnTooltipText, setSaveBtnTooltipText] = useState('Click to proceed');
    const [knobValue, setKnobValue] = useState(60);
    const [sliderValue, setSliderValue] = useState(20);
    const [count, setCount] = useState(0);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    return (
        <div>
            <Head>
                <title>React Tooltip Component</title>
                <meta name="description" content="Tooltip functionality is integrated within various PrimeReact components." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Tooltip</h1>
                    <p>Tooltip functionality is integrated within various PrimeReact components.</p>
                </div>

                <DocActions github="tooltip/index.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <h5>Positions</h5>
                    <div className="grid p-fluid">
                        <div className="col-12 md:col-3">
                            <InputText type="text" placeholder="Right" tooltip="Enter your username" />
                        </div>
                        <div className="col-12 md:col-3">
                            <InputText type="text" placeholder="Top" tooltip="Enter your username" tooltipOptions={{ position: 'top' }} />
                        </div>
                        <div className="col-12 md:col-3">
                            <InputText type="text" placeholder="Bottom" tooltip="Enter your username" tooltipOptions={{ position: 'bottom' }} />
                        </div>
                        <div className="col-12 md:col-3">
                            <InputText type="text" placeholder="Left" tooltip="Enter your username" tooltipOptions={{ position: 'left' }} />
                        </div>
                    </div>

                    <h5>Focus and Blur</h5>
                    <InputText type="text" placeholder="Focus" tooltip="Enter your username" tooltipOptions={{ event: 'focus' }} />

                    <h5>Dynamic Tooltip</h5>
                    <div className="flex align-items-center">
                        <Button type="button" label="Save" icon="pi pi-check" tooltip={saveBtnTooltipText} onClick={() => setSaveBtnTooltipText('Completed')} />

                        <Tooltip target=".knob" content={`${knobValue}%`} />
                        <Knob className="knob ml-3" value={knobValue} onChange={(e) => setKnobValue(e.value)} showValue={false} />

                        <Tooltip target=".slider>.p-slider-handle" content={`${sliderValue}%`} position="top" event="focus" />
                        <Slider className="slider ml-3" value={sliderValue} onChange={(e) => setSliderValue(e.value)} style={{ width: '14rem' }} />
                    </div>

                    <h5>MouseTrack</h5>
                    <div className="flex align-items-center">
                        <Button type="button" label="Save" icon="pi pi-check" tooltip="Save" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }} />

                        <Tooltip target=".logo" mouseTrack mouseTrackLeft={10} />
                        <img className="logo ml-2" alt="logo" src={`${contextPath}/images/logo.png`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} data-pr-tooltip="PrimeReact-Logo" height="80px" />
                    </div>

                    <h5>AutoHide</h5>
                    <div className="flex align-items-center">
                        <Button type="button" label="Save" icon="pi pi-check" tooltip="Save (autoHide: true)" />

                        <Tooltip target=".tooltip-button" autoHide={false}>
                            <div className="flex align-items-center">
                                <span style={{ minWidth: '5rem' }}>Count: {count}</span>
                                <Button type="button" icon="pi pi-plus" onClick={() => setCount(count + 1)} className="p-button-rounded p-button-success ml-2"></Button>
                                <Button type="button" icon="pi pi-minus" onClick={() => setCount(count - 1)} className="p-button-rounded p-button-danger ml-2"></Button>
                            </div>
                        </Tooltip>
                        <Button className="tooltip-button ml-2" type="button" label="Save" icon="pi pi-check" />
                    </div>

                    <h5>Template</h5>
                    <div className="flex align-items-center">
                        <Tooltip target=".custom-tooltip-btn">
                            <img alt="logo" src={`${contextPath}/images/logo.png`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} data-pr-tooltip="PrimeReact-Logo" height="80px" />
                        </Tooltip>

                        <Button className="custom-tooltip-btn" type="button" label="Save" icon="pi pi-check" />
                    </div>

                    <h5>Disabled Elements</h5>
                    <div className="flex align-items-center">
                        <Tooltip target=".disabled-button" />
                        <span className="disabled-button mr-2" data-pr-tooltip="A Disabled Button">
                            <Button type="button" label="Save" icon="pi pi-check" disabled />
                        </span>

                        <Button type="button" label="Save" icon="pi pi-check" disabled tooltip="A Disabled Button" tooltipOptions={{ showOnDisabled: true }} />
                    </div>

                    <h5>Target</h5>
                    <div className="flex align-items-center">
                        <Tooltip target=".custom-target-icon" />

                        <i className="custom-target-icon pi pi-envelope p-text-secondary p-overlay-badge" data-pr-tooltip="No notifications" data-pr-position="right" data-pr-at="right+5 top" data-pr-my="left center-2" style={{ fontSize: '2rem', cursor: 'pointer' }}>
                            <Badge severity="danger"></Badge>
                        </i>
                    </div>

                    <h5>Color</h5>
                    <div className="flex align-items-center flex-wrap">
                        <Button label="Blue" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Blue" tooltipOptions={{ className: 'blue-tooltip', position: 'top' }} />
                        <Button label="Green" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Green" tooltipOptions={{ className: 'green-tooltip', position: 'top' }} />
                        <Button label="Yellow" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Yellow" tooltipOptions={{ className: 'yellow-tooltip', position: 'top' }} />
                        <Button label="Cyan" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Cyan" tooltipOptions={{ className: 'cyan-tooltip', position: 'top' }} />
                        <Button label="Pink" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Pink" tooltipOptions={{ className: 'pink-tooltip', position: 'top' }} />
                        <Button label="Indigo" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Indigo" tooltipOptions={{ className: 'indigo-tooltip', position: 'top' }} />
                        <Button label="Teal" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Teal" tooltipOptions={{ className: 'teal-tooltip', position: 'top' }} />
                        <Button label="Blue Gray" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Blue Gray" tooltipOptions={{ className: 'bluegray-tooltip', position: 'top' }} />
                        <Button label="Purple" className="p-button-secondary p-button-outlined mr-3 mb-2" tooltip="Purple" tooltipOptions={{ className: 'purple-tooltip', position: 'top' }} />
                    </div>
                </div>
            </div>

            <TooltipDoc />
        </div>
    )
}

export default TooltipDemo;
