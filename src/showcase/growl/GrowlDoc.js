import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class GrowlDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Growl } from 'primereact/growl';
import { Button } from 'primereact/button';
import './GrowlDemo.scss';

export class GrowlDemo extends Component {

    constructor(props) {
        super(props);
        this.showSuccess = this.showSuccess.bind(this);
        this.showInfo = this.showInfo.bind(this);
        this.showWarn = this.showWarn.bind(this);
        this.showError = this.showError.bind(this);
        this.showTopLeft = this.showTopLeft.bind(this);
        this.showBottomLeft = this.showBottomLeft.bind(this);
        this.showBottomRight = this.showBottomRight.bind(this);
        this.showMultiple = this.showMultiple.bind(this);
        this.showSticky = this.showSticky.bind(this);
        this.showConfirm = this.showConfirm.bind(this);
        this.clear = this.clear.bind(this);
    }

    showSuccess() {
        this.growl.show({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});
    }

    showInfo() {
        this.growl.show({severity:'info', summary: 'Info Message', detail:'Message Content', life: 3000});
    }

    showWarn() {
        this.growl.show({severity:'warn', summary: 'Warn Message', detail:'Message Content', life: 3000});
    }

    showError() {
        this.growl.show({severity:'error', summary: 'Error Message', detail:'Message Content', life: 3000});
    }

    showTopLeft() {
        this.growlTL.show({severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000});
    }

    showBottomLeft() {
        this.growlBL.show({severity:'warn', summary: 'Warn Message', detail:'Message Content', life: 3000});
    }

    showBottomRight() {
        this.growlBR.show({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});
    }

    showSticky() {
        this.growl.show({severity: 'info', summary: 'Sticky Message', detail: 'Message Content', sticky: true});
    }

    showConfirm() {
        this.growlBC.show({ severity: 'warn', sticky: true, content: (
            <div className="p-flex p-flex-column" style={{flex: '1'}}>
                <div className="p-text-center">
                    <i className="pi pi-exclamation-triangle" style={{fontSize: '3rem'}}></i>
                    <h4>Are you sure?</h4>
                    <p>Confirm to proceed</p>
                </div>
                <div className="p-grid p-fluid">
                    <div className="p-col-6">
                        <Button type="button" label="Yes" className="p-button-success" />
                    </div>
                    <div className="p-col-6">
                        <Button type="button" label="No" className="p-button-secondary" />
                    </div>
                </div>
            </div>
        ) });
    }

    showMultiple() {
        this.growl.show([
            {severity:'info', summary:'Message 1', detail:'Message 1 Content', life: 3000},
            {severity:'info', summary:'Message 2', detail:'Message 2 Content', life: 3000},
            {severity:'info', summary:'Message 3', detail:'Message 3 Content', life: 3000}
        ]);
    }

    clear() {
        this.growl.clear();
    }

    render() {
        return (
            <div>
                <Growl ref={(el) => this.growl = el} />
                <Growl ref={(el) => this.growlTL = el} position="top-left" />
                <Growl ref={(el) => this.growlBL = el} position="bottom-left" />
                <Growl ref={(el) => this.growlBR = el} position="bottom-right" />
                <Growl ref={(el) => this.growlBC = el} position="bottom-center" />

                <div className="card growl-demo">
                    <h5>Severities</h5>
                    <Button label="Success" className="p-button-success" onClick={this.showSuccess} />
                    <Button label="Info" className="p-button-info" onClick={this.showInfo} />
                    <Button label="Warn" className="p-button-warning" onClick={this.showWarn} />
                    <Button label="Error" className="p-button-danger" onClick={this.showError} />

                    <h5>Positions</h5>
                    <Button label="Top Left" className="p-mr-2" onClick={this.showTopLeft} />
                    <Button label="Bottom Left" className="p-button-warning" onClick={this.showBottomLeft} />
                    <Button label="Bottom Right" className="p-button-success" onClick={this.showBottomRight} />

                    <h5>Options</h5>
                    <Button onClick={this.showMultiple} label="Multiple" className="p-button-warning" />
                    <Button onClick={this.showSticky} label="Sticky" />

                    <h5>Clear</h5>
                    <Button onClick={this.clear} label="Clear" />

                    <h5>Custom</h5>
                    <Button type="button" onClick={this.showConfirm} label="Confirm" className="ui-button-warning" />
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
import React, { useRef } from 'react';
import {Growl} from 'primereact/growl';
import {Button} from 'primereact/button';

const GrowlDemo = () => {
    let growl = useRef(null);

    const showSuccess = () => {
        growl.current.show({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});
    }

    const showInfo = () => {
        growl.current.show({severity: 'info', summary: 'Info Message', detail: 'PrimeReact rocks'});
    }

    const showWarn = () => {
        growl.current.show({severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes'});
    }

    const showError = () => {
        growl.current.show({severity: 'error', summary: 'Error Message', detail: 'Validation failed'});
    }

    const showSticky = () => {
        growl.current.show({severity: 'info', summary: 'Sticky Message', detail: 'You need to close Me', sticky: true});
    }

    const showCustom = () => {
        const summary = <span><i className="pi pi-check" /> <strong>PrimeReact</strong></span>;
        const detail = <img alt="PrimeReact" src="showcase/images/logo.png" srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="80px" style={{backgroundColor: '#212121', marginLeft: '22px'}} />

        growl.current.show({severity: 'info', summary: summary, detail: detail, sticky: true });
    }

    const showMultiple = () => {
        growl.current.show([
            {severity:'info', summary:'Message 1', detail:'PrimeReact rocks'},
            {severity:'info', summary:'Message 2', detail:'PrimeReact rocks'},
            {severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'}
        ]);
    }

    const clear = () => {
        growl.current.clear();
    }

    return (
        <div className="p-fluid">
            <Growl ref={growl} />

            <h3 style={{marginTop: 0}}>Severities</h5>
            <div className="p-grid">
                <div className="p-col-12 p-md-3">
                    <Button onClick={showSuccess} label="Success" className="p-button-success" />
                </div>
                <div className="p-col-12 p-md-3">
                    <Button onClick={showInfo} label="Info" className="p-button-info" />
                </div>
                <div className="p-col-12 p-md-3">
                    <Button onClick={showWarn} label="Warn" className="p-button-warning" />
                </div>
                <div className="p-col-12 p-md-3">
                    <Button onClick={showError} label="Error" className="p-button-danger" />
                </div>
            </div>

            <h5>Options</h5>
            <div className="p-grid">
                <div className="p-col-12 p-md-4">
                    <Button onClick={showMultiple} label="Multiple" className="p-button-warning" />
                </div>
                <div className="p-col-12 p-md-4">
                    <Button onClick={showSticky} label="Sticky" />
                </div>
                <div className="p-col-12 p-md-4">
                    <Button onClick={showCustom} label="Custom" className="p-button-success" />
                </div>
            </div>

            <h5>Remove All</h5>
            <Button onClick={clear} label="Clear" style={{width: 'auto', marginLeft: '.5em'}}/>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useRef } from 'react';
import {Growl} from 'primereact/growl';
import {Button} from 'primereact/button';

const GrowlDemo = () => {
    let growl = useRef<any>(null);

    const showSuccess = () => {
        growl.current.show({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});
    }

    const showInfo = () => {
        growl.current.show({severity: 'info', summary: 'Info Message', detail: 'PrimeReact rocks'});
    }

    const showWarn = () => {
        growl.current.show({severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes'});
    }

    const showError = () => {
        growl.current.show({severity: 'error', summary: 'Error Message', detail: 'Validation failed'});
    }

    const showSticky = () => {
        growl.current.show({severity: 'info', summary: 'Sticky Message', detail: 'You need to close Me', sticky: true});
    }

    const showCustom = () => {
        const summary = <span><i className="pi pi-check" /> <strong>PrimeReact</strong></span>;
        const detail = <img alt="PrimeReact" src="showcase/images/logo.png" srcSet="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="80px" style={{backgroundColor: '#212121', marginLeft: '22px'}} />

        growl.current.show({severity: 'info', summary: summary, detail: detail, sticky: true });
    }

    const showMultiple = () => {
        growl.current.show([
            {severity:'info', summary:'Message 1', detail:'PrimeReact rocks'},
            {severity:'info', summary:'Message 2', detail:'PrimeReact rocks'},
            {severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'}
        ]);
    }

    const clear = () => {
        growl.current.clear();
    }

    return (
        <div className="p-fluid">
            <Growl ref={growl} />

            <h3 style={{marginTop: 0}}>Severities</h5>
            <div className="p-grid">
                <div className="p-col-12 p-md-3">
                    <Button onClick={showSuccess} label="Success" className="p-button-success" />
                </div>
                <div className="p-col-12 p-md-3">
                    <Button onClick={showInfo} label="Info" className="p-button-info" />
                </div>
                <div className="p-col-12 p-md-3">
                    <Button onClick={showWarn} label="Warn" className="p-button-warning" />
                </div>
                <div className="p-col-12 p-md-3">
                    <Button onClick={showError} label="Error" className="p-button-danger" />
                </div>
            </div>

            <h5>Options</h5>
            <div className="p-grid">
                <div className="p-col-12 p-md-4">
                    <Button onClick={showMultiple} label="Multiple" className="p-button-warning" />
                </div>
                <div className="p-col-12 p-md-4">
                    <Button onClick={showSticky} label="Sticky" />
                </div>
                <div className="p-col-12 p-md-4">
                    <Button onClick={showCustom} label="Custom" className="p-button-success" />
                </div>
            </div>

            <h5>Remove All</h5>
            <Button onClick={clear} label="Clear" style={{width: 'auto', marginLeft: '.5em'}}/>
        </div>
    )
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
import { Growl } from 'primereact/growl';
`}
</CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>A single message is represented by the Message interface in PrimeReact that defines various properties such as severity,
               summary and detail. Messages are displayed by using the <i>show</i> method on the ref of the Growl instance.</p>

                        <p>Note that for animations, growl requires react-transition-group package.</p>

<CodeHighlight>
{`
<Growl ref={(el) => this.growl = el} />
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`
this.growl.show({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});
`}
</CodeHighlight>

                        <h5>Message API</h5>
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
                                        <td>severity</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Severity of the message.</td>
                                    </tr>
                                    <tr>
                                        <td>summary</td>
                                        <td>element</td>
                                        <td>null</td>
                                        <td>Summary content of the message.</td>
                                    </tr>
                                    <tr>
                                        <td>detail</td>
                                        <td>element</td>
                                        <td>null</td>
                                        <td>Detail content of the message.</td>
                                    </tr>
                                    <tr>
                                        <td>closable</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Whether the message can be closed manually using the close icon.</td>
                                    </tr>
                                    <tr>
                                        <td>sticky</td>
                                        <td>element</td>
                                        <td>null</td>
                                        <td>When enabled, message is not removed automatically.</td>
                                    </tr>
                                    <tr>
                                        <td>life</td>
                                        <td>number</td>
                                        <td>3000</td>
                                        <td>Delay in milliseconds to close the message automatically.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Severities</h5>
                        <p>There are four possible values for the severity of a message.</p>

                        <ul>
                            <li>success</li>
                            <li>info</li>
                            <li>warn</li>
                            <li>error</li>
                        </ul>

                        <h5>Showing Messages</h5>
                        <p>Show method accepts either a single message or an array of messages.</p>

<CodeHighlight>
{`
<Growl ref={(el) => this.growl = el}></Growl>

<Button onClick={this.showSuccess} label="Success" className="p-button-success" />
<Button onClick={this.showInfo} label="Info" className="p-button-info" />
<Button onClick={this.showWarn} label="Warn" className="p-button-warning" />
<Button onClick={this.showError} label="Error" className="p-button-danger" />
<Button onClick={this.showMultiple} label="Multiple" />
`}
</CodeHighlight>

<CodeHighlight lang="js">
{`
showSuccess() {
    this.growl.show({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});
}

showInfo() {
    this.growl.show({severity: 'info', summary: 'Info Message', detail: 'PrimeReact rocks'});
}

showWarn() {
    this.growl.show({severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes'});
}

showError() {
    this.growl.show({severity: 'error', summary: 'Error Message', detail: 'Validation failed'});
}

showMultiple() {
    this.growl.show([
        {severity:'info', summary:'Message 1', detail:'PrimeReact rocks'},
        {severity:'info', summary:'Message 2', detail:'PrimeReact rocks'},
        {severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'}
    ]);
}
`}
</CodeHighlight>

                        <h5>Closable</h5>
                        <p>Growls are closable by default resulting in a close icon being displayed on top right corner. In order to disable closable messages, set closable to false.</p>

<CodeHighlight lang="js">
{`
this.growl.show({closable: false, severity: 'error', summary: 'Error Message', detail: 'Validation failed'});
`}
</CodeHighlight>

                        <h5>Sticky</h5>
                        <p>Messages are cleared automatically after the timeout defined by <i>life</i> property which is 3 seconds by default. Use <i>sticky</i> mode to make them stay until
            they are manually removed.</p>

<CodeHighlight lang="js">
{`
//sticky
this.growl.show({sticky: true, severity: 'error', summary: 'Error Message', detail: 'Validation failed'});

//automatically removed after 5 seconds
this.growl.show({life: 5000, severity: 'error', summary: 'Error Message', detail: 'Validation failed'});
`}
</CodeHighlight>

                        <h5>Position</h5>
                        <p>There are four positions available for the growl container defined by the <i>position</i> property that defaults to "top-right". Other
                valid values are "top-left", "bottom-left" and "bottom-right"
            </p>

<CodeHighlight>
{`
<Growl ref={(el) => this.growl = el} position="top-left"></Growl>
`}
</CodeHighlight>

                        <h5>Clearing Messages</h5>
                        <p><i>clear()</i> method removes all messages from Growl.</p>

<CodeHighlight>
{`
this.growl.clear();
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
                                        <td>className</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Inline style of the element.</td>
                                    </tr>
                                    <tr>
                                        <td>baseZIndex</td>
                                        <td>number</td>
                                        <td>0</td>
                                        <td>Base zIndex value to add to initial layering of PrimeReact components which start from 1000.</td>
                                    </tr>
                                    <tr>
                                        <td>position</td>
                                        <td>string</td>
                                        <td>topright</td>
                                        <td>Position of the growl in viewport, valid values are "top-right", "top-left", "bottom-left" and "bottom-right".</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Events</h5>
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
                                        <td>onRemove</td>
                                        <td>message: Removed message </td>
                                        <td>Callback to invoke when a message is removed.</td>
                                    </tr>
                                    <tr>
                                        <td>onClick</td>
                                        <td>message: Clicked message </td>
                                        <td>Callback to invoke when a message gets clicked.</td>
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
                                        <td>p-growl</td>
                                        <td>Main container element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-growl-container</td>
                                        <td>Container of a message item.</td>
                                    </tr>
                                    <tr>
                                        <td>p-growl-item</td>
                                        <td>Message element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-growl-icon-close</td>
                                        <td>Close icon of a message.</td>
                                    </tr>
                                    <tr>
                                        <td>p-growl-image</td>
                                        <td>Severity icon.</td>
                                    </tr>
                                    <tr>
                                        <td>p-growl-message</td>
                                        <td>Container of message texts.</td>
                                    </tr>
                                    <tr>
                                        <td>p-growl-title</td>
                                        <td>Summary of the message.</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h5>Dependencies</h5>
                            <ul>
                                <li>react-transition-group</li>
                            </ul>
                        </div>

                    </TabPanel>

                    <TabPanel header="Source">
                        <LiveEditor name="GrowlDemo" sources={this.sources} />
<CodeHighlight lang="scss">
{`
.growl-demo {
    button {
        min-width: 10rem;
        margin-right: .5rem;
    }

    @media screen and (max-width: 960px) {
        button {
            width: 100%;
            margin-bottom: .5rem;
        }
    }
}
`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}
