import React, { memo } from 'react';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const TooltipDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Knob } from 'primereact/knob';
import { Badge } from 'primereact/badge';
import { Slider } from 'primereact/slider';
import { Tooltip } from 'primereact/tooltip';
import './TooltipDemo.css';

export class TooltipDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            saveBtnTooltipText: 'Click to proceed',
            knobValue: 60,
            sliderValue: 20,
            count: 0
        }
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Positions</h5>
                    <div className="grid p-fluid">
                        <div className="col-12 md:col-3">
                            <InputText type="text" placeholder="Right" tooltip="Enter your username" />
                        </div>
                        <div className="col-12 md:col-3">
                            <InputText type="text" placeholder="Top" tooltip="Enter your username" tooltipOptions={{position: 'top'}} />
                        </div>
                        <div className="col-12 md:col-3">
                            <InputText type="text" placeholder="Bottom" tooltip="Enter your username" tooltipOptions={{position: 'bottom'}} />
                        </div>
                        <div className="col-12 md:col-3">
                            <InputText type="text" placeholder="Left" tooltip="Enter your username" tooltipOptions={{position: 'left'}} />
                        </div>
                    </div>

                    <h5>Focus and Blur</h5>
                    <InputText type="text" placeholder="Focus" tooltip="Enter your username" tooltipOptions={{event: 'focus'}} />

                    <h5>Dynamic Tooltip</h5>
                    <div className="flex align-items-center">
                        <Button type="button" label="Save" icon="pi pi-check" tooltip={this.state.saveBtnTooltipText} onClick={() => this.setState({saveBtnTooltipText: 'Completed'})} />

                        <Tooltip target=".knob" content={\`\${this.state.knobValue}%\`} />
                        <Knob className="knob ml-3" value={this.state.knobValue} onChange={(e) => this.setState({ knobValue: e.value})} showValue={false} />

                        <Tooltip target=".slider>.p-slider-handle" content={\`\${this.state.sliderValue}%\`} position="top" event="focus" />
                        <Slider className="slider ml-3" value={this.state.sliderValue} onChange={(e) => this.setState({ sliderValue: e.value })} style={{ width: '14rem' }} />
                    </div>

                    <h5>MouseTrack</h5>
                    <div className="flex align-items-center">
                        <Button type="button" label="Save" icon="pi pi-check" tooltip="Save" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }} />

                        <Tooltip target=".logo" mouseTrack mouseTrackLeft={10}/>
                        <img className="logo ml-2" alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} data-pr-tooltip="PrimeReact-Logo" height="80px"/>
                    </div>

                    <div className="flex align-items-center">
                        <Button type="button" label="Save" icon="pi pi-check" tooltip="Save (autoHide: true)" />

                        <Tooltip target=".tooltip-button" autoHide={false}>
                            <div className="flex align-items-center">
                                <span style={{minWidth: '5rem'}}>Count: {this.state.count}</span>
                                <Button type="button" icon="pi pi-plus" onClick={() => this.setState((prevState) => ({ count: prevState.count + 1 }))} className="p-button-rounded p-button-success ml-2"></Button>
                                <Button type="button" icon="pi pi-minus" onClick={() => this.setState((prevState) => ({ count: prevState.count - 1 }))} className="p-button-rounded p-button-danger ml-2"></Button>
                            </div>
                        </Tooltip>
                        <Button className="tooltip-button ml-2" type="button" label="Save" icon="pi pi-check" />
                    </div>

                    <h5>Template</h5>
                    <div className="flex align-items-center">
                        <Tooltip target=".custom-tooltip-btn">
                            <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} data-pr-tooltip="PrimeReact-Logo" height="80px"/>
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
        )
    }
}
                `
        },
        'hooks': {
            tabName: 'Hooks Source',
            content: `
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Knob } from 'primereact/knob';
import { Badge } from 'primereact/badge';
import { Slider } from 'primereact/slider';
import { Tooltip } from 'primereact/tooltip';
import './TooltipDemo.css';

const TooltipDemo = () => {
    const [saveBtnTooltipText, setSaveBtnTooltipText] = useState('Click to proceed');
    const [knobValue, setKnobValue] = useState(60);
    const [sliderValue, setSliderValue] = useState(20);
    const [count, setCount] = useState(0);

    return (
        <div>
            <div className="card">
                <h5>Positions</h5>
                <div className="grid p-fluid">
                    <div className="col-12 md:col-3">
                        <InputText type="text" placeholder="Right" tooltip="Enter your username" />
                    </div>
                    <div className="col-12 md:col-3">
                        <InputText type="text" placeholder="Top" tooltip="Enter your username" tooltipOptions={{position: 'top'}} />
                    </div>
                    <div className="col-12 md:col-3">
                        <InputText type="text" placeholder="Bottom" tooltip="Enter your username" tooltipOptions={{position: 'bottom'}} />
                    </div>
                    <div className="col-12 md:col-3">
                        <InputText type="text" placeholder="Left" tooltip="Enter your username" tooltipOptions={{position: 'left'}} />
                    </div>
                </div>

                <h5>Focus and Blur</h5>
                <InputText type="text" placeholder="Focus" tooltip="Enter your username" tooltipOptions={{event: 'focus'}} />

                <h5>Dynamic Tooltip</h5>
                <div className="flex align-items-center">
                    <Button type="button" label="Save" icon="pi pi-check" tooltip={saveBtnTooltipText} onClick={() => setSaveBtnTooltipText('Completed')} />

                    <Tooltip target=".knob" content={\`\${knobValue}%\`} />
                    <Knob className="knob ml-3" value={knobValue} onChange={(e) => setKnobValue(e.value)} showValue={false} />

                    <Tooltip target=".slider>.p-slider-handle" content={\`\${sliderValue}%\`} position="top" event="focus" />
                    <Slider className="slider ml-3" value={sliderValue} onChange={(e) => setSliderValue(e.value)} style={{ width: '14rem' }} />
                </div>

                <h5>MouseTrack</h5>
                <div className="flex align-items-center">
                    <Button type="button" label="Save" icon="pi pi-check" tooltip="Save" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }} />

                    <Tooltip target=".logo" mouseTrack mouseTrackLeft={10}/>
                    <img className="logo ml-2" alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} data-pr-tooltip="PrimeReact-Logo" height="80px"/>
                </div>

                <div className="flex align-items-center">
                    <Button type="button" label="Save" icon="pi pi-check" tooltip="Save (autoHide: true)" />

                    <Tooltip target=".tooltip-button" autoHide={false}>
                        <div className="flex align-items-center">
                            <span style={{minWidth: '5rem'}}>Count: {count}</span>
                            <Button type="button" icon="pi pi-plus" onClick={() => setCount(count + 1)} className="p-button-rounded p-button-success ml-2"></Button>
                            <Button type="button" icon="pi pi-minus" onClick={() => setCount(count - 1)} className="p-button-rounded p-button-danger ml-2"></Button>
                        </div>
                    </Tooltip>
                    <Button className="tooltip-button ml-2" type="button" label="Save" icon="pi pi-check" />
                </div>

                <h5>Template</h5>
                <div className="flex align-items-center">
                    <Tooltip target=".custom-tooltip-btn">
                        <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} data-pr-tooltip="PrimeReact-Logo" height="80px"/>
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
    )
}
                `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Knob } from 'primereact/knob';
import { Badge } from 'primereact/badge';
import { Slider } from 'primereact/slider';
import { Tooltip } from 'primereact/tooltip';
import './TooltipDemo.css';

const TooltipDemo = () => {
    const [saveBtnTooltipText, setSaveBtnTooltipText] = useState('Click to proceed');
    const [knobValue, setKnobValue] = useState(60);
    const [sliderValue, setSliderValue] = useState(20);
    const [count, setCount] = useState(0);

    return (
        <div>
            <div className="card">
                <h5>Positions</h5>
                <div className="grid p-fluid">
                    <div className="col-12 md:col-3">
                        <InputText type="text" placeholder="Right" tooltip="Enter your username" />
                    </div>
                    <div className="col-12 md:col-3">
                        <InputText type="text" placeholder="Top" tooltip="Enter your username" tooltipOptions={{position: 'top'}} />
                    </div>
                    <div className="col-12 md:col-3">
                        <InputText type="text" placeholder="Bottom" tooltip="Enter your username" tooltipOptions={{position: 'bottom'}} />
                    </div>
                    <div className="col-12 md:col-3">
                        <InputText type="text" placeholder="Left" tooltip="Enter your username" tooltipOptions={{position: 'left'}} />
                    </div>
                </div>

                <h5>Focus and Blur</h5>
                <InputText type="text" placeholder="Focus" tooltip="Enter your username" tooltipOptions={{event: 'focus'}} />

                <h5>Dynamic Tooltip</h5>
                <div className="flex align-items-center">
                    <Button type="button" label="Save" icon="pi pi-check" tooltip={saveBtnTooltipText} onClick={() => setSaveBtnTooltipText('Completed')} />

                    <Tooltip target=".knob" content={\`\${knobValue}%\`} />
                    <Knob className="knob ml-3" value={knobValue} onChange={(e) => setKnobValue(e.value)} showValue={false} />

                    <Tooltip target=".slider>.p-slider-handle" content={\`\${sliderValue}%\`} position="top" event="focus" />
                    <Slider className="slider ml-3" value={sliderValue} onChange={(e) => setSliderValue(e.value)} style={{ width: '14rem' }} />
                </div>

                <h5>MouseTrack</h5>
                <div className="flex align-items-center">
                    <Button type="button" label="Save" icon="pi pi-check" tooltip="Save" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }} />

                    <Tooltip target=".logo" mouseTrack mouseTrackLeft={10}/>
                    <img className="logo ml-2" alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} data-pr-tooltip="PrimeReact-Logo" height="80px"/>
                </div>

                <div className="flex align-items-center">
                    <Button type="button" label="Save" icon="pi pi-check" tooltip="Save (autoHide: true)" />

                    <Tooltip target=".tooltip-button" autoHide={false}>
                        <div className="flex align-items-center">
                            <span style={{minWidth: '5rem'}}>Count: {count}</span>
                            <Button type="button" icon="pi pi-plus" onClick={() => setCount(count + 1)} className="p-button-rounded p-button-success ml-2"></Button>
                            <Button type="button" icon="pi pi-minus" onClick={() => setCount(count - 1)} className="p-button-rounded p-button-danger ml-2"></Button>
                        </div>
                    </Tooltip>
                    <Button className="tooltip-button ml-2" type="button" label="Save" icon="pi pi-check" />
                </div>

                <h5>Template</h5>
                <div className="flex align-items-center">
                    <Tooltip target=".custom-tooltip-btn">
                        <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} data-pr-tooltip="PrimeReact-Logo" height="80px"/>
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
    )
}
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <link rel="stylesheet" href="./TooltipDemo.css" />

        <script src="https://unpkg.com/primereact/api/api.min.js"></script>
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/inputtext/inputtext.min.js"></script>
        <script src="https://unpkg.com/primereact/button/button.min.js"></script>
        <script src="https://unpkg.com/primereact/knob/knob.min.js"></script>
        <script src="https://unpkg.com/primereact/badge/badge.min.js"></script>
        <script src="https://unpkg.com/primereact/slider/slider.min.js"></script>
        <script src="https://unpkg.com/primereact/tooltip/tooltip.min.js"></script>`,
            content: `
const { useState } = React;
const { InputText } = primereact.inputtext;
const { Button } = primereact.button;
const { Knob } = primereact.knob;
const { Badge } = primereact.badge;
const { Slider } = primereact.slider;
const { Tooltip } = primereact.tooltip;

const TooltipDemo = () => {
    const [saveBtnTooltipText, setSaveBtnTooltipText] = useState('Click to proceed');
    const [knobValue, setKnobValue] = useState(60);
    const [sliderValue, setSliderValue] = useState(20);
    const [count, setCount] = useState(0);

    return (
        <div>
            <div className="card">
                <h5>Positions</h5>
                <div className="grid p-fluid">
                    <div className="col-12 md:col-3">
                        <InputText type="text" placeholder="Right" tooltip="Enter your username" />
                    </div>
                    <div className="col-12 md:col-3">
                        <InputText type="text" placeholder="Top" tooltip="Enter your username" tooltipOptions={{position: 'top'}} />
                    </div>
                    <div className="col-12 md:col-3">
                        <InputText type="text" placeholder="Bottom" tooltip="Enter your username" tooltipOptions={{position: 'bottom'}} />
                    </div>
                    <div className="col-12 md:col-3">
                        <InputText type="text" placeholder="Left" tooltip="Enter your username" tooltipOptions={{position: 'left'}} />
                    </div>
                </div>

                <h5>Focus and Blur</h5>
                <InputText type="text" placeholder="Focus" tooltip="Enter your username" tooltipOptions={{event: 'focus'}} />

                <h5>Dynamic Tooltip</h5>
                <div className="flex align-items-center">
                    <Button type="button" label="Save" icon="pi pi-check" tooltip={saveBtnTooltipText} onClick={() => setSaveBtnTooltipText('Completed')} />

                    <Tooltip target=".knob" content={\`\${knobValue}%\`} />
                    <Knob className="knob ml-3" value={knobValue} onChange={(e) => setKnobValue(e.value)} showValue={false} />

                    <Tooltip target=".slider>.p-slider-handle" content={\`\${sliderValue}%\`} position="top" event="focus" />
                    <Slider className="slider ml-3" value={sliderValue} onChange={(e) => setSliderValue(e.value)} style={{ width: '14rem' }} />
                </div>

                <h5>MouseTrack</h5>
                <div className="flex align-items-center">
                    <Button type="button" label="Save" icon="pi pi-check" tooltip="Save" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }} />

                    <Tooltip target=".logo" mouseTrack mouseTrackLeft={10}/>
                    <img className="logo ml-2" alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} data-pr-tooltip="PrimeReact-Logo" height="80px"/>
                </div>

                <div className="flex align-items-center">
                    <Button type="button" label="Save" icon="pi pi-check" tooltip="Save (autoHide: true)" />

                    <Tooltip target=".tooltip-button" autoHide={false}>
                        <div className="flex align-items-center">
                            <span style={{minWidth: '5rem'}}>Count: {count}</span>
                            <Button type="button" icon="pi pi-plus" onClick={() => setCount(count + 1)} className="p-button-rounded p-button-success ml-2"></Button>
                            <Button type="button" icon="pi pi-minus" onClick={() => setCount(count - 1)} className="p-button-rounded p-button-danger ml-2"></Button>
                        </div>
                    </Tooltip>
                    <Button className="tooltip-button ml-2" type="button" label="Save" icon="pi pi-check" />
                </div>

                <h5>Template</h5>
                <div className="flex align-items-center">
                    <Tooltip target=".custom-tooltip-btn">
                        <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} data-pr-tooltip="PrimeReact-Logo" height="80px"/>
                    </Tooltip>

                    <Button className="custom-tooltip-btn" type="button" label="Save" icon="pi pi-check" />
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
    )
}
                `
        }
    };

    const extFiles = {
        'demo/TooltipDemo.css': {
            content: `
.blue-tooltip.p-tooltip .p-tooltip-arrow {
    border-top-color: var(--blue-500);
}
.blue-tooltip.p-tooltip .p-tooltip-text {
    background-color: var(--blue-500);
}
.green-tooltip.p-tooltip .p-tooltip-arrow {
    border-top-color: var(--green-500);
}
.green-tooltip.p-tooltip .p-tooltip-text {
    background-color: var(--green-500);
}
.yellow-tooltip.p-tooltip .p-tooltip-arrow {
    border-top-color: var(--yellow-500);
}
.yellow-tooltip.p-tooltip .p-tooltip-text {
    background-color: var(--yellow-500);
}
.cyan-tooltip.p-tooltip .p-tooltip-arrow {
    border-top-color: var(--cyan-500);
}
.cyan-tooltip.p-tooltip .p-tooltip-text {
    background-color: var(--cyan-500);
}
.pink-tooltip.p-tooltip .p-tooltip-arrow {
    border-top-color: var(--pink-500);
}
.pink-tooltip.p-tooltip .p-tooltip-text {
    background-color: var(--pink-500);
}
.indigo-tooltip.p-tooltip .p-tooltip-arrow {
    border-top-color: var(--indigo-500);
}
.indigo-tooltip.p-tooltip .p-tooltip-text {
    background-color: var(--indigo-500);
}
.teal-tooltip.p-tooltip .p-tooltip-arrow {
    border-top-color: var(--teal-500);
}
.teal-tooltip.p-tooltip .p-tooltip-text {
    background-color: var(--teal-500);
}
.bluegray-tooltip.p-tooltip .p-tooltip-arrow {
    border-top-color: var(--bluegray-500);
}
.bluegray-tooltip.p-tooltip .p-tooltip-text {
    background-color: var(--bluegray-500);
}
.purple-tooltip.p-tooltip .p-tooltip-arrow {
    border-top-color: var(--purple-500);
}
.purple-tooltip.p-tooltip .p-tooltip-text {
    background-color: var(--purple-500);
}
                `
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                <TabPanel header="Documentation">
                    <h5>Import to use it as a component</h5>
<CodeHighlight lang="js">
{`
import { Tooltip } from 'primereact/tooltip';
`}
</CodeHighlight>
                    <h5>Getting Started</h5>
                    <p>Tooltip functionality is integrated within the the components that have support such as inputtext or buttons. Content is defined with the <i>tooltip</i> property.</p>
<CodeHighlight>
{`
<InputText type="text" placeholder="Right" tooltip="Enter your username" />
<Button type="button" label="Save" icon="pi pi-check" tooltip="Click to proceed" />
`}
</CodeHighlight>

                    <h5>Position</h5>
                    <p>There are four choices to position the tooltip, default value is "right" and alternatives are "top", "bottom", "left". Position is
                    specified using <i>tooltipOptions</i> property.</p>
<CodeHighlight>
{`
<InputText type="text" placeholder="Right" tooltip="Enter your username" tooltipOptions={{position: 'right'}}/>
`}
</CodeHighlight>

                    <h5>Events</h5>
                    <p>Tooltip gets displayed on hover event of its target by default, other option is the focus event to display and blur to hide.</p>
<CodeHighlight>
{`
<InputText type="text" placeholder="Right" tooltip="Enter your username" tooltipOptions={{event: 'focus'}}/>
`}
</CodeHighlight>

                    <h5>Delay</h5>
                    <p>Tooltip is displayed or hidden instantly by default however you may add delays using <i>showDelay</i> and <i>hideDelay</i> properties which accept a number value in terms of milliseconds.</p>
<CodeHighlight>
{`
<InputText type="text" placeholder="Right" tooltip="Enter your username" tooltipOptions={{showDelay: 1000, hideDelay: 300}}/>
`}
</CodeHighlight>

                    <h5>Disabled Elements</h5>
                    <p>By default disabled elements like <i>button</i> do not trigger user interactions. So for such issues, a disabled element is usually wrapped with an html element like span and the Tooltip wrapper is set to the element.
                    If this operation is requested by the Tooltip component, the <i>showOnDisabled</i> property can be used. This is an optional use.</p>
<CodeHighlight>
{`
<Tooltip target=".disabled-button" />
<span className="disabled-button" data-pr-tooltip="A Disabled Button">
    <Button type="button" label="Save" icon="pi pi-check" disabled />
</span>

<Button type="button" label="Save" icon="pi pi-check" disabled tooltip="A Disabled Button" tooltipOptions={{ showOnDisabled: true }} />
`}
</CodeHighlight>
                    <h5>Tooltip Options</h5>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Default</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>id</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Unique identifier of the element.</td>
                                </tr>
                                <tr>
                                    <td>disabled</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When present, it specifies that the tooltip should be hidden.</td>
                                </tr>
                                <tr>
                                    <td>className</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the tooltip.</td>
                                </tr>
                                <tr>
                                    <td>style</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style of the tooltip.</td>
                                </tr>
                                <tr>
                                    <td>appendTo</td>
                                    <td>DOM element | string</td>
                                    <td>document.body</td>
                                    <td>DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located.</td>
                                </tr>
                                <tr>
                                    <td>position</td>
                                    <td>string</td>
                                    <td>right</td>
                                    <td>Position of the tooltip, valid values are right, left, top and bottom.</td>
                                </tr>
                                <tr>
                                    <td>my</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Defines which position on the tooltip being positioned to align with the target element.</td>
                                </tr>
                                <tr>
                                    <td>at</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Defines which position on the target element to align the positioned tooltip.</td>
                                </tr>
                                <tr>
                                    <td>event</td>
                                    <td>string</td>
                                    <td>hover</td>
                                    <td>Event to show the tooltip, valid values are hover and focus.</td>
                                </tr>
                                <tr>
                                    <td>showEvent</td>
                                    <td>string</td>
                                    <td>mouseenter</td>
                                    <td>Event to show the tooltip if the <i>event</i> property is empty.</td>
                                </tr>
                                <tr>
                                    <td>hideEvent</td>
                                    <td>string</td>
                                    <td>mouseleave</td>
                                    <td>Event to hide the tooltip if the <i>event</i> property is empty.</td>
                                </tr>
                                <tr>
                                    <td>autoZIndex</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>Whether to automatically manage layering.</td>
                                </tr>
                                <tr>
                                    <td>baseZIndex</td>
                                    <td>number</td>
                                    <td>0</td>
                                    <td>Base zIndex value to use in layering.</td>
                                </tr>
                                <tr>
                                    <td>mouseTrack</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Whether the tooltip will follow the mouse.</td>
                                </tr>
                                <tr>
                                    <td>mouseTrackTop</td>
                                    <td>number</td>
                                    <td>5</td>
                                    <td>Defines top position of the tooltip in relation to the mouse when the <i>mouseTrack</i> is enabled.</td>
                                </tr>
                                <tr>
                                    <td>mouseTrackLeft</td>
                                    <td>number</td>
                                    <td>5</td>
                                    <td>Defines top position of the tooltip in relation to the mouse when the <i>mouseTrack</i> is enabled.</td>
                                </tr>
                                <tr>
                                    <td>showDelay</td>
                                    <td>number</td>
                                    <td>0</td>
                                    <td>Delay to show the tooltip in milliseconds.</td>
                                </tr>
                                <tr>
                                    <td>updateDelay</td>
                                    <td>number</td>
                                    <td>0</td>
                                    <td>Delay to update the tooltip in milliseconds.</td>
                                </tr>
                                <tr>
                                    <td>hideDelay</td>
                                    <td>number</td>
                                    <td>0</td>
                                    <td>Delay to hide the tooltip in milliseconds.</td>
                                </tr>
                                <tr>
                                    <td>autoHide</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>Whether to hide tooltip when hovering over tooltip content.</td>
                                </tr>
                                <tr>
                                    <td>showOnDisabled</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Whether to show tooltip for disabled elements.</td>
                                </tr>
                                <tr>
                                    <td>onBeforeShow</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Callback to invoke before the tooltip is shown.</td>
                                </tr>
                                <tr>
                                    <td>onBeforeHide</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Callback to invoke before the tooltip is hidden.</td>
                                </tr>
                                <tr>
                                    <td>onShow</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Callback to invoke when the tooltip is shown.</td>
                                </tr>
                                <tr>
                                    <td>onHide</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Callback to invoke when the tooltip is hidden.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Global Tooltip</h5>
                    <p>It is used to bind the same properties to more than one element. Each element can have its own <i>{`data-pr-{options}`}</i> properties. In this way, options can be customized among themselves. Using the <i>data-pr-tooltip</i> property on any element, the text to be displayed in the tooltip is determined.
                        The target property is required for the global tooltip. It can be a selector, DOM element or selector array.</p>
<CodeHighlight>
{`
<Tooltip target=".customClassName" mouseTrack mouseTrackLeft={10} />

<img className="customClassName" data-pr-tooltip="PrimeReact-Logo" data-pr-position="left" alt="logo" src="showcase/images/logo.png" height="80px"/>
<div className="customClassName" data-pr-tooltip="This is a div element" data-pr-position="right" style={{ width: '50px', height: '50px', border: '1px solid black' }} />
`}
</CodeHighlight>

                    <h5>Custom Content</h5>
                    <p>The tooltip can display custom content by using JSX elements in its children.</p>
<CodeHighlight>
{`
<Tooltip target=".customClassName">
    // Content
</Tooltip>
`}
</CodeHighlight>

                    <h5>Target Element Options</h5>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Default</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>data-pr-tooltip</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Content of the tooltip.</td>
                                </tr>
                                <tr>
                                    <td>data-pr-disabled</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When present, it specifies that the tooltip should be hidden.</td>
                                </tr>
                                <tr>
                                    <td>data-pr-classname</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the tooltip.</td>
                                </tr>
                                <tr>
                                    <td>data-pr-position</td>
                                    <td>string</td>
                                    <td>right</td>
                                    <td>Position of the tooltip, valid values are right, left, top and bottom.</td>
                                </tr>
                                <tr>
                                    <td>data-pr-my</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Defines which position on the tooltip being positioned to align with the target element.</td>
                                </tr>
                                <tr>
                                    <td>data-pr-at</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Defines which position on the target element to align the positioned tooltip.</td>
                                </tr>
                                <tr>
                                    <td>data-pr-event</td>
                                    <td>string</td>
                                    <td>hover</td>
                                    <td>Event to show the tooltip, valid values are hover and focus.</td>
                                </tr>
                                <tr>
                                    <td>data-pr-showevent</td>
                                    <td>string</td>
                                    <td>mouseenter</td>
                                    <td>Event to show the tooltip if the <i>event</i> property is empty.</td>
                                </tr>
                                <tr>
                                    <td>data-pr-hideevent</td>
                                    <td>string</td>
                                    <td>mouseleave</td>
                                    <td>Event to hide the tooltip if the <i>event</i> property is empty.</td>
                                </tr>
                                <tr>
                                    <td>data-pr-mousetrack</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Whether the tooltip will follow the mouse.</td>
                                </tr>
                                <tr>
                                    <td>data-pr-mousetracktop</td>
                                    <td>number</td>
                                    <td>5</td>
                                    <td>Defines top position of the tooltip in relation to the mouse when the <i>mouseTrack</i> is enabled.</td>
                                </tr>
                                <tr>
                                    <td>data-pr-mousetrackleft</td>
                                    <td>number</td>
                                    <td>5</td>
                                    <td>Defines top position of the tooltip in relation to the mouse when the <i>mouseTrack</i> is enabled.</td>
                                </tr>
                                <tr>
                                    <td>data-pr-showdelay</td>
                                    <td>number</td>
                                    <td>0</td>
                                    <td>Delay to show the tooltip in milliseconds.</td>
                                </tr>
                                <tr>
                                    <td>data-pr-updatedelay</td>
                                    <td>number</td>
                                    <td>0</td>
                                    <td>Delay to update the tooltip in milliseconds.</td>
                                </tr>
                                <tr>
                                    <td>data-pr-hidedelay</td>
                                    <td>number</td>
                                    <td>0</td>
                                    <td>Delay to hide the tooltip in milliseconds.</td>
                                </tr>
                                <tr>
                                    <td>data-pr-autohide</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>Whether to hide tooltip when hovering over tooltip content.</td>
                                </tr>
                                <tr>
                                    <td>data-pr-showondisabled</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Whether to show tooltip for disabled elements.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Tooltip Component Properties</h5>
                    <p>All options in <i>Tooltip Options</i> section can be used as a property. In addition;</p>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Default</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>target</td>
                                    <td>selector or DOM element</td>
                                    <td>null</td>
                                    <td>Target element on global tooltip option.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
<CodeHighlight>
{`
<Tooltip target=".customClassName" mouseTrack mouseTrackLeft={10} showDelay={100}/>
`}
</CodeHighlight>

                    <h5>Methods</h5>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Parameters</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>updateTargetEvents</td>
                                    <td>target: target element. (Default: current target)</td>
                                    <td>Used to reload target events. In some cases, the target element can be hidden initially. <br />
                                    Later, when this element becomes visible, it will be necessary to bind tooltip events to this element.</td>
                                </tr>
                                <tr>
                                    <td>loadTargetEvents</td>
                                    <td>target: target element. (Default: current target)</td>
                                    <td>Used to load target events.</td>
                                </tr>
                                <tr>
                                    <td>unloadTargetEvents</td>
                                    <td>target: target element. (Default: current target)</td>
                                    <td>Used to unload target events.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Styling</h5>
                    <p>Following is the list of structural style classes</p>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Element</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>p-tooltip</td>
                                    <td>Container element</td>
                                </tr>
                                <tr>
                                    <td>p-tooltip-arrow</td>
                                    <td>Arrow of the tooltip</td>
                                </tr>
                                <tr>
                                    <td>p-tooltip-text</td>
                                    <td>Text of the tooltip</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Accessibility</h5>
                    <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>Tooltip component uses <i>tooltip</i> role and when it becomes visible the generated id of the tooltip is defined as the <i>aria-describedby</i> of the target.</p> 

                    <h6>Keyboard Support</h6>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Key</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i>escape</i></td>
                                    <td>Closes the tooltip when focus is on the target.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>

                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'TooltipDemo', sources: sources, extFiles: extFiles })
                }
            </TabView>
        </div>
    )
})

export default TooltipDoc;
