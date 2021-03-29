import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class ConfirmPopupDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export class ConfirmPopupDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

        this.accept = this.accept.bind(this);
        this.reject = this.reject.bind(this);
        this.confirm1 = this.confirm1.bind(this);
        this.confirm2 = this.confirm2.bind(this);
    }

    accept() {
        this.toast.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    reject() {
        this.toast.show({ severity: 'info', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    confirm1(event) {
        confirmPopup({
            target: event.currentTarget,
            message: 'Are you sure you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            accept: this.accept,
            reject: this.reject
        });
    }

    confirm2(event) {
        confirmPopup({
            target: event.currentTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept: this.accept,
            reject: this.reject
        });
    }

    render() {
        return (
            <div>
                <Toast ref={(el) => this.toast = el} />

                <div className="card">
                    <h5>Basic</h5>
                    <Button onClick={this.confirm1} icon="pi pi-check" label="Confirm" className="p-mr-2"></Button>
                    <Button onClick={this.confirm2} icon="pi pi-times" label="Delete" className="p-button-danger p-button-outlined"></Button>

                    <h5>Using ConfirmPopup tag</h5>
                    <ConfirmPopup target={document.getElementById('button')} visible={this.state.visible} onHide={() => this.setState({ visible: false })} message="Are you sure you want to proceed?"
                        icon="pi pi-exclamation-triangle" accept={this.accept} reject={this.reject} />
                    <Button id="button" onClick={() => this.setState({ visible: true })} icon="pi pi-check" label="Confirm" />
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
import React, { useState, useRef } from 'react';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

const ConfirmPopupDemo = () => {
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'info', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const confirm1 = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Are you sure you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            accept,
            reject
        });
    };

    const confirm2 = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    };

    return (
        <div>
            <Toast ref={toast} />

            <div className="card">
                <h5>Basic</h5>
                <Button onClick={confirm1} icon="pi pi-check" label="Confirm" className="p-mr-2"></Button>
                <Button onClick={confirm2} icon="pi pi-times" label="Delete" className="p-button-danger p-button-outlined"></Button>

                <h5>Using ConfirmPopup tag</h5>
                <ConfirmPopup target={document.getElementById('button')} visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?"
                    icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
                <Button id="button" onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
            </div>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState, useRef } from 'react';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

const ConfirmPopupDemo = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'info', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const confirm1 = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Are you sure you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            accept,
            reject
        });
    };

    const confirm2 = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    };

    return (
        <div>
            <Toast ref={toast} />

            <div className="card">
                <h5>Basic</h5>
                <Button onClick={confirm1} icon="pi pi-check" label="Confirm" className="p-mr-2"></Button>
                <Button onClick={confirm2} icon="pi pi-times" label="Delete" className="p-button-danger p-button-outlined"></Button>

                <h5>Using ConfirmPopup tag</h5>
                <ConfirmPopup target={document.getElementById('button')} visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?"
                    icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
                <Button id="button" onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
            </div>
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
import { ConfirmPopup } from 'primereact/confirmpopup'; // To use <ConfirmPopup> tag
import { confirmPopup } from 'primereact/confirmpopup'; // To use confirmPopup method
`}
</CodeHighlight>

<h5>Getting Started</h5>
                        <p>There are two ways to display confirm popup. One of them is to use the <i>confirmPopup</i> method and the other is to use the <i>&lt;ConfirmPopup&gt;</i> tag.
                            These independently create popup element. It supports the same properties in both. <i>target</i> property is mandatory to align the popup to its caller.</p>

                        <h6>1. confirmPopup method</h6>
<CodeHighlight lang="js">
{`
const confirm = (event) => {
    confirmPopup({
        target: event.currentTarget,
        message: 'Are you sure you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => acceptFunc(),
        reject: () => rejectFunc()
    });
}

<Button onClick={confirm} icon="pi pi-check" label="Confirm"></Button>
`}
</CodeHighlight>

                        <h6>2. &lt;ConfirmPopup&gt; tag</h6>
                        <p>ConfirmPopup is used as a container and visibility is managed with <i>visible</i> property where <i>onHide</i> event is required to update the visibility state.</p>

<CodeHighlight>
{`
<ConfirmPopup target={document.getElementById('button')} visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?"
    icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />

<Button id="button onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
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
                                        <td>target</td>
                                        <td>DomElement</td>
                                        <td>null</td>
                                        <td>Element to align the overlay. (Required)</td>
                                    </tr>
                                    <tr>
                                        <td>visible</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>Specifies the visibility of the confirm popup.</td>
                                    </tr>
                                    <tr>
                                        <td>message</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Message of the confirmation.</td>
                                    </tr>
                                    <tr>
                                        <td>icon</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Icon to display next to the message.</td>
                                    </tr>
                                    <tr>
                                        <td>acceptLabel</td>
                                        <td>string</td>
                                        <td>Yes</td>
                                        <td>Label of the accept button.</td>
                                    </tr>
                                    <tr>
                                        <td>rejectLabel</td>
                                        <td>string</td>
                                        <td>No</td>
                                        <td>Label of the reject button.</td>
                                    </tr>
                                    <tr>
                                        <td>acceptIcon</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Icon of the accept button.</td>
                                    </tr>
                                    <tr>
                                        <td>rejectIcon</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Icon of the reject button.</td>
                                    </tr>
                                    <tr>
                                        <td>acceptClassName</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the accept button.</td>
                                    </tr>
                                    <tr>
                                        <td>rejectClassName</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the reject button.</td>
                                    </tr>
                                    <tr>
                                        <td>dismissable</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>Enables to hide the popup when outside is clicked.</td>
                                    </tr>
                                    <tr>
                                        <td>footer</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Footer content of the confirm popup.</td>
                                    </tr>
                                    <tr>
                                        <td>appendTo</td>
                                        <td>DOM element</td>
                                        <td>document.body</td>
                                        <td>DOM element instance where the popup should be mounted.</td>
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
                                        <td>accept</td>
                                        <td>null</td>
                                        <td>Callback to execute when action is confirmed.</td>
                                    </tr>
                                    <tr>
                                        <td>reject</td>
                                        <td>null</td>
                                        <td>Callback to execute when action is rejected.</td>
                                    </tr>

                                    <tr>
                                        <td>onHide</td>
                                        <td>result: Indicates with which selection the popup was closed. <br />
                                            Valid values are 'accept', 'reject' and undefined (outside click).</td>
                                        <td>Callback to invoke when confirm popup is hidden.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Styling</h5>
                        <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming">theming</Link> page.</p>
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
                                        <td>p-confirm-popup</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-confirm-content</td>
                                        <td>Content element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-confirm-popup-icon</td>
                                        <td>Message icon.</td>
                                    </tr>
                                    <tr>
                                        <td>p-confirm-popup-message</td>
                                        <td>Message text.</td>
                                    </tr>
                                    <tr>
                                        <td>p-confirm-popup-footer</td>
                                        <td>Footer element for buttons.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Dependencies</h5>
                        <p>None.</p>
                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'ConfirmPopupDemo', sources: this.sources })
                    }
                </TabView>
            </div>
        )
    }
}
