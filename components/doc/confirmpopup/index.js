import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const ConfirmPopupDoc = memo(() => {

    const sources = {
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
        this.toast.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
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
                    <ConfirmPopup />

                    <h5>Basic</h5>
                    <Button onClick={this.confirm1} icon="pi pi-check" label="Confirm" className="mr-2"></Button>
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
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
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
                <ConfirmPopup />

                <h5>Basic</h5>
                <Button onClick={confirm1} icon="pi pi-check" label="Confirm" className="mr-2"></Button>
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
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
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
                <ConfirmPopup />

                <h5>Basic</h5>
                <Button onClick={confirm1} icon="pi pi-check" label="Confirm" className="mr-2"></Button>
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
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/confirmpopup/confirmpopup.min.js"></script>
        <script src="https://unpkg.com/primereact/toast/toast.min.js"></script>`,
            content: `
const { useState, useRef } = React;
const { ConfirmPopup, confirmPopup } = primereact.confirmpopup;
const { Button } = primereact.button;
const { Toast } = primereact.toast;

const ConfirmPopupDemo = () => {
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
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
                <ConfirmPopup />

                <h5>Basic</h5>
                <Button onClick={confirm1} icon="pi pi-check" label="Confirm" className="mr-2"></Button>
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

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                <TabPanel header="Documentation">
                    <h5>Import via Module</h5>
<CodeHighlight lang="js">
{`
import { ConfirmPopup } from 'primereact/confirmpopup'; // To use <ConfirmPopup> tag
import { confirmPopup } from 'primereact/confirmpopup'; // To use confirmPopup method
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/confirmpopup/confirmpopup.min.js"></script>
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
                    <p>The confirmPopup method returns an object incudes <i>hide</i> and <i>show</i> methods. The component can be shown or hidden by using this object at any time.</p>

 <CodeHighlight lang="js">
{`
const confirm = (event) => {
    const myConfirm = confirmPopup({
        target: event.currentTarget,
        message: 'Are you sure you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => acceptFunc(),
        reject: () => rejectFunc()
    });

    setTimeout(() => {
        myConfirm.hide();

        setTimeout(() => {
            myConfirm.show();
        }, 1000);
    }, 500);
}

<Button onClick={confirm} icon="pi pi-check" label="Confirm"></Button>
<ConfirmPopup /> <!--required empty popup tag -->
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
                                    <td>DOM element | string</td>
                                    <td>document.body</td>
                                    <td>DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located.</td>
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
                                    <td>transitionOptions</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.</td>
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
                                <tr>
                                    <td>onShow</td>
                                    <td>-</td>
                                    <td>Callback to invoke when overlay panel becomes visible.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Styling</h5>
                    <p>Following is the list of structural style classes, for theming classes visit <Link href="/theming">theming</Link> page.</p>
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

                    <h5>Accessibility</h5>
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>ConfirmPopup component uses <i>alertdialog</i> role and since any attribute is passed to the root element you may define attributes like <i>aria-label</i> or <i>aria-labelledby</i> to describe the popup contents. In addition <i>aria-modal</i> is added since focus is kept within the popup.</p>
                    <p>It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding <i>tabIndex</i> would be necessary. ConfirmPopup
                    adds <i>aria-expanded</i> state attribute and <i>aria-controls</i> to the trigger so that the relation between the trigger and the popup is defined.</p>

                    <h6>Overlay Keyboard Support</h6>
                    <p>When the popup gets opened, the first focusable element receives the focus and this can be customized by adding <i>autofocus</i> to an element within the popup.</p>

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
                                    <td><i>tab</i></td>
                                    <td>Moves focus to the next the focusable element within the popup.</td>
                                </tr>
                                <tr>
                                    <td><i>shift</i> + <i>tab</i></td>
                                    <td>Moves focus to the previous the focusable element within the popup.</td>
                                </tr>
                                <tr>
                                    <td><i>escape</i></td>
                                    <td>Closes the popup and moves focus to the trigger.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h6>Buttons Keyboard Support</h6>
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
                                    <td><i>enter</i></td>
                                    <td>Triggers the action, closes the popup and moves focus to the trigger.</td>
                                </tr>
                                <tr>
                                    <td><i>space</i></td>
                                    <td>Triggers the action, closes the popup and moves focus to the trigger.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'ConfirmPopupDemo', sources: sources })
                }
            </TabView>
        </div>
    )
})

export default ConfirmPopupDoc;
