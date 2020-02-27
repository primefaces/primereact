import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Growl} from '../../components/growl/Growl';
import {Button} from '../../components/button/Button';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class GrowlDemo extends Component {

    constructor() {
        super();
        this.showSuccess = this.showSuccess.bind(this);
        this.showInfo = this.showInfo.bind(this);
        this.showWarn = this.showWarn.bind(this);
        this.showError = this.showError.bind(this);
        this.showMultiple = this.showMultiple.bind(this);
        this.showSticky = this.showSticky.bind(this);
        this.showCustom = this.showCustom.bind(this);
        this.clear = this.clear.bind(this);
    }

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

    showSticky() {
        this.growl.show({severity: 'info', summary: 'Sticky Message', detail: 'You need to close Me', sticky: true});
    }

    showCustom() {
        const summary = <span><i className="pi pi-check" /> <strong>PrimeReact</strong></span>;
        const detail = <img alt="PrimeReact" src="showcase/resources/images/logo.png" width="80px" style={{backgroundColor: '#212121', marginLeft: '22px'}} />

        this.growl.show({severity: 'info', summary: summary, detail: detail, sticky: true });
    }

    showMultiple() {
        this.growl.show([
            {severity:'info', summary:'Message 1', detail:'PrimeReact rocks'},
            {severity:'info', summary:'Message 2', detail:'PrimeReact rocks'},
            {severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'}
        ]);
    }

    clear() {
        this.growl.clear();
    }

    render() {
        return (
            <div>
                <div className="content-section introduction growl-demo">
                    <div className="feature-intro">
                        <h1>Growl</h1>
                        <p>Growl is used to display messages in an overlay.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("growl")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation p-fluid">
                    <Growl ref={(el) => this.growl = el} />

                    <h3 style={{marginTop: 0}}>Severities</h3>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-3">
                            <Button onClick={this.showSuccess} label="Success" className="p-button-success" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <Button onClick={this.showInfo} label="Info" className="p-button-info" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <Button onClick={this.showWarn} label="Warn" className="p-button-warning" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <Button onClick={this.showError} label="Error" className="p-button-danger" />
                        </div>
                    </div>

                    <h3>Options</h3>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-4">
                            <Button onClick={this.showMultiple} label="Multiple" className="p-button-warning" />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <Button onClick={this.showSticky} label="Sticky" />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <Button onClick={this.showCustom} label="Custom" className="p-button-success" />
                        </div>
                    </div>

                    <h3>Remove All</h3>
                    <Button onClick={this.clear} label="Clear" style={{width: 'auto', marginLeft: '.5em'}}/>
                </div>

                <GrowlDoc></GrowlDoc>
            </div>
        )
    }
}

export class GrowlDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {Growl} from 'primereact/growl';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>A single message is represented by the Message interface in PrimeReact that defines various properties such as severity,
               summary and detail. Messages are displayed by using the <i>show</i> method on the ref of the Growl instance.</p>

            <p>Note that for animations, growl requires react-transition-group package.</p>

<CodeHighlight className="language-jsx">
{`
<Growl ref={(el) => this.growl = el} />

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
{`
this.growl.show({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});

`}
</CodeHighlight>

            <h3>Message API</h3>
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

            <h3>Severities</h3>
            <p>There are four possible values for the severity of a message.</p>

            <ul>
                <li>success</li>
                <li>info</li>
                <li>warn</li>
                <li>error</li>
            </ul>

            <h3>Showing Messages</h3>
            <p>Show method accepts either a single message or an array of messages.</p>

<CodeHighlight className="language-jsx">
{`
<Growl ref={(el) => this.growl = el}></Growl>

<Button onClick={this.showSuccess} label="Success" className="p-button-success" />
<Button onClick={this.showInfo} label="Info" className="p-button-info" />
<Button onClick={this.showWarn} label="Warn" className="p-button-warning" />
<Button onClick={this.showError} label="Error" className="p-button-danger" />
<Button onClick={this.showMultiple} label="Multiple" />

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
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

            <h3>Closable</h3>
            <p>Growls are closable by default resulting in a close icon being displayed on top right corner. In order to disable closable messages, set closable to false.</p>

<CodeHighlight className="language-javascript">
{`
this.growl.show({closable: false, severity: 'error', summary: 'Error Message', detail: 'Validation failed'});

`}
</CodeHighlight>

            <h3>Sticky</h3>
            <p>Messages are cleared automatically after the timeout defined by <i>life</i> property which is 3 seconds by default. Use <i>sticky</i> mode to make them stay until
            they are manually removed.</p>

<CodeHighlight className="language-javascript">
{`
//sticky
this.growl.show({sticky: true, severity: 'error', summary: 'Error Message', detail: 'Validation failed'});

//automatically removed after 5 seconds
this.growl.show({life: 5000, severity: 'error', summary: 'Error Message', detail: 'Validation failed'});

`}
</CodeHighlight>

            <h3>Position</h3>
            <p>There are four positions available for the growl container defined by the <i>position</i> property that defaults to "topright". Other
                valid values are "topleft", "bottomleft" and "bottomright"
            </p>

<CodeHighlight className="language-jsx">
            {`
<Growl ref={(el) => this.growl = el} position="topleft"></Growl>

`}
            </CodeHighlight>

            <h3>Clearing Messages</h3>
            <p><i>clear()</i> method removes all messages from Growl.</p>

            <CodeHighlight className="language-jsx">
                {`
this.growl.clear();

`}
            </CodeHighlight>

            <h3>Properties</h3>
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
                            <td>Position of the growl in viewport, valid values are "topright", "topleft", "bottomleft" and "bottomright".</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Events</h3>
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

            <h3>Styling</h3>
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

                <h3>Dependencies</h3>
                <ul>
                    <li>react-transition-group</li>
                </ul>
            </div>

            </TabPanel>

            <TabPanel header="Source">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/growl" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {Growl} from 'primereact/growl';
import {Button} from 'primereact/button';

export class GrowlDemo extends Component {

    constructor() {
        super();
        this.showSuccess = this.showSuccess.bind(this);
        this.showInfo = this.showInfo.bind(this);
        this.showWarn = this.showWarn.bind(this);
        this.showError = this.showError.bind(this);
        this.showMultiple = this.showMultiple.bind(this);
        this.showSticky = this.showSticky.bind(this);
        this.showCustom = this.showCustom.bind(this);
        this.clear = this.clear.bind(this);
    }

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

    showSticky() {
        this.growl.show({severity: 'info', summary: 'Sticky Message', detail: 'You need to close Me', sticky: true});
    }

    showCustom() {
        const summary = <span><i className="pi pi-check" /> <strong>PrimeReact</strong></span>;
        const detail = <img alt="PrimeReact" src="showcase/resources/images/logo.png" width="80px" style={{backgroundColor: '#212121', marginLeft: '22px'}} />

        this.growl.show({severity: 'info', summary: summary, detail: detail, sticky: true });
    }

    showMultiple() {
        this.growl.show([
            {severity:'info', summary:'Message 1', detail:'PrimeReact rocks'},
            {severity:'info', summary:'Message 2', detail:'PrimeReact rocks'},
            {severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'}
        ]);
    }

    clear() {
        this.growl.clear();
    }

    render() {
        return (
            <div>
                <div className="content-section introduction growl-demo">
                    <div className="feature-intro">
                        <h1>Growl</h1>
                        <p>Growl is used to display messages in an overlay.</p>
                    </div>
                </div>

                <div className="content-section implementation p-fluid">
                    <Growl ref={(el) => this.growl = el} />

                    <h3>Severities</h3>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-3">
                            <Button onClick={this.showSuccess} label="Success" className="p-button-success" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <Button onClick={this.showInfo} label="Info" className="p-button-info" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <Button onClick={this.showWarn} label="Warn" className="p-button-warning" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <Button onClick={this.showError} label="Error" className="p-button-danger" />
                        </div>
                    </div>

                    <h3>Options</h3>
                    <div className="p-grid">
                        <div className="p-col-12 p-md-4">
                            <Button onClick={this.showMultiple} label="Multiple" className="p-button-warning" />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <Button onClick={this.showSticky} label="Sticky" />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <Button onClick={this.showCustom} label="Custom" className="p-button-success" />
                        </div>
                    </div>

                    <h3>Remove All</h3>
                    <Button onClick={this.clear} label="Clear" style={{width: 'auto', marginLeft: '.5em'}}/>
                </div>
            </div>
        )
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
