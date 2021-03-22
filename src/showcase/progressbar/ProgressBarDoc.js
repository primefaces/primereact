import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class ProgressBarDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { ProgressBar } from 'primereact/progressbar';
import { Toast } from 'primereact/toast';

export class ProgressBarDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value1: 0
        };

        this.displayValueTemplate = this.displayValueTemplate.bind(this);
    }

    displayValueTemplate(value) {
        return (
            <React.Fragment>
                {value}/<b>100</b>
            </React.Fragment>
        );
    }

    componentDidMount() {
        let val = this.state.value1;
        this.interval = setInterval(() => {
            val += Math.floor(Math.random() * 10) + 1;

            if (val >= 100) {
                val = 100;
                this.toast.show({ severity: 'info', summary: 'Success', detail: 'Process Completed' });
                clearInterval(this.interval);
            }

            this.setState({
                value1: val
            });
        }, 2000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    render() {
        return (
            <div>
                <Toast ref={(el) => this.toast = el}></Toast>

                <div className="card">
                    <h5>Dynamic</h5>
                    <ProgressBar value={this.state.value1}></ProgressBar>

                    <h5>Static</h5>
                    <ProgressBar value={50}></ProgressBar>

                    <h5>Custom display value</h5>
                    <ProgressBar value={40} displayValueTemplate={this.displayValueTemplate}></ProgressBar>

                    <h5>Indeterminate</h5>
                    <ProgressBar mode="indeterminate" style={{ height: '6px' }}></ProgressBar>
                </div>
            </div>
        );
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useState, useEffect, useRef } from 'react';
import { ProgressBar } from 'primereact/progressbar';
import { Toast } from 'primereact/toast';

const ProgressBarDemo = () => {
    const [value1, setValue1] = useState(0);
    const toast = useRef(null);
    const interval = useRef(null);

    const displayValueTemplate = (value) => {
        return (
            <React.Fragment>
                {value}/<b>100</b>
            </React.Fragment>
        );
    }

    useEffect(() => {
        let val = value1;
        interval.current = setInterval(() => {
            val += Math.floor(Math.random() * 10) + 1;

            if (val >= 100) {
                val = 100;
                toast.current.show({ severity: 'info', summary: 'Success', detail: 'Process Completed' });
                clearInterval(interval.current);
            }

            setValue1(val);
        }, 2000);

        return () => {
            if (interval.current) {
                clearInterval(interval.current);
                interval.current = null;
            }
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Toast ref={toast}></Toast>

            <div className="card">
                <h5>Dynamic</h5>
                <ProgressBar value={value1}></ProgressBar>

                <h5>Static</h5>
                <ProgressBar value={50}></ProgressBar>

                <h5>Custom display value</h5>
                <ProgressBar value={40} displayValueTemplate={displayValueTemplate}></ProgressBar>

                <h5>Indeterminate</h5>
                <ProgressBar mode="indeterminate" style={{ height: '6px' }}></ProgressBar>
            </div>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useEffect, useRef } from 'react';
import { ProgressBar } from 'primereact/progressbar';
import { Toast } from 'primereact/toast';

const ProgressBarDemo = () => {
    const [value1, setValue1] = useState(0);
    const toast = useRef(null);
    const interval = useRef(null);

    const displayValueTemplate = (value) => {
        return (
            <React.Fragment>
                {value}/<b>100</b>
            </React.Fragment>
        );
    }

    useEffect(() => {
        let val = value1;
        interval.current = setInterval(() => {
            val += Math.floor(Math.random() * 10) + 1;

            if (val >= 100) {
                val = 100;
                toast.current.show({ severity: 'info', summary: 'Success', detail: 'Process Completed' });
                clearInterval(interval.current);
            }

            setValue1(val);
        }, 2000);

        return () => {
            if (interval.current) {
                clearInterval(interval.current);
                interval.current = null;
            }
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Toast ref={toast}></Toast>

            <div className="card">
                <h5>Dynamic</h5>
                <ProgressBar value={value1}></ProgressBar>

                <h5>Static</h5>
                <ProgressBar value={50}></ProgressBar>

                <h5>Custom display value</h5>
                <ProgressBar value={40} displayValueTemplate={displayValueTemplate}></ProgressBar>

                <h5>Indeterminate</h5>
                <ProgressBar mode="indeterminate" style={{ height: '6px' }}></ProgressBar>
            </div>
        </div>
    );
}
                `
            }
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h5>Import</h5>
<CodeHighlight lang="js">
{`
import { ProgressBar } from 'primereact/progressbar';
`}
</CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>ProgressBar has two modes; "determinate" (default) and "indeterminate". In determinate mode, a value between 0 and 100 is required to display the progress.</p>
<CodeHighlight>
{`
<ProgressBar value={value} />
`}
</CodeHighlight>
                        <p>Indeterminate is simplly enabled using <i>mode</i> property.</p>
<CodeHighlight>
{`
<ProgressBar mode="indeterminate" />
`}
</CodeHighlight>

                        <h5>Properties</h5>
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
                                        <td>value</td>
                                        <td>number</td>
                                        <td>null</td>
                                        <td>Current value of the progress.</td>
                                    </tr>
                                    <tr>
                                        <td>showValue</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Show or hide progress bar value.</td>
                                    </tr>
                                    <tr>
                                        <td>unit</td>
                                        <td>string</td>
                                        <td>%</td>
                                        <td>Unit sign appended to the value.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Inline style of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>className</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>mode</td>
                                        <td>string</td>
                                        <td>determinate</td>
                                        <td>Defines the mode of the progress, valid values are "determinate" and "indeterminate".</td>
                                    </tr>
                                    <tr>
                                        <td>color</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Color for the background of the progress.</td>
                                    </tr>
                                    <tr>
                                        <td>displayValueTemplate</td>
                                        <td>Element</td>
                                        <td>null</td>
                                        <td>Custom display value template</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Styling</h5>
                        <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
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
                                        <td>p-progressbar</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-progressbar-determinate</td>
                                        <td>Container element of a determinate progressbar.</td>
                                    </tr>
                                    <tr>
                                        <td>p-progressbar-indeterminate</td>
                                        <td>Container element of an indeterminate progressbar.</td>
                                    </tr>
                                    <tr>
                                        <td>p-progressbar-value</td>
                                        <td>Element whose width changes according to value.</td>
                                    </tr>
                                    <tr>
                                        <td>p-progressbar-label</td>
                                        <td>Label element that displays the current value.</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h5>Dependencies</h5>
                            <p>None.</p>
                        </div>
                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'ProgressBarDemo', sources: this.sources })
                    }
                </TabView>
            </div>
        );
    }
}
