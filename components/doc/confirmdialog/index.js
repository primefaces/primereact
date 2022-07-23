import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const ConfirmDialogDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export class ConfirmDialogDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

        this.accept = this.accept.bind(this);
        this.reject = this.reject.bind(this);
        this.confirm1 = this.confirm1.bind(this);
        this.confirm2 = this.confirm2.bind(this);
        this.confirmPosition = this.confirmPosition.bind(this);
    }

    accept() {
        this.toast.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    reject() {
        this.toast.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    confirm1() {
        confirmDialog({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: this.accept,
            reject: this.reject
        });
    }

    confirm2() {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept: this.accept,
            reject: this.reject
        });
    }

    confirmPosition(position) {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            position,
            accept: this.accept,
            reject: this.reject
        });
    }

    render() {
        return (
            <div>
                <Toast ref={(el) => this.toast = el} />

                <div className="card">
                    <ConfirmDialog />

                    <h5>Basic</h5>
                    <Button onClick={this.confirm1} icon="pi pi-check" label="Confirm" className="mr-2"></Button>
                    <Button onClick={this.confirm2} icon="pi pi-times" label="Delete"></Button>

                    <h5>Position</h5>
                    <div className="grid">
                        <div className="col-12">
                            <Button onClick={() => this.confirmPosition('left')} icon="pi pi-arrow-right" label="Left" className="p-button-help mr-2"></Button>
                            <Button onClick={() => this.confirmPosition('right')} icon="pi pi-arrow-left" label="Right" className="p-button-help"></Button>
                        </div>
                        <div className="col-12">
                            <Button onClick={() => this.confirmPosition('top-left')} icon="pi pi-arrow-down-right" label="TopLeft" className="p-button-warning mr-2"></Button>
                            <Button onClick={() => this.confirmPosition('top')} icon="pi pi-arrow-down" label="Top" className="p-button-warning mr-2"></Button>
                            <Button onClick={() => this.confirmPosition('top-right')} icon="pi pi-arrow-down-left" label="TopRight" className="p-button-warning"></Button>
                        </div>
                        <div className="col-12">
                            <Button onClick={() => this.confirmPosition('bottom-left')} icon="pi pi-arrow-up-right" label="BottomLeft" className="p-button-success mr-2"></Button>
                            <Button onClick={() => this.confirmPosition('bottom')} icon="pi pi-arrow-up" label="Bottom" className="p-button-success mr-2"></Button>
                            <Button onClick={() => this.confirmPosition('bottom-right')} icon="pi pi-arrow-up-left" label="BottomRight" className="p-button-success"></Button>
                        </div>
                    </div>

                    <h5>Using ConfirmDialog tag</h5>
                    <ConfirmDialog visible={this.state.visible} onHide={() => this.setState({ visible: false })} message="Are you sure you want to proceed?"
                        header="Confirmation" icon="pi pi-exclamation-triangle" accept={this.accept} reject={this.reject}/>
                    <Button onClick={() => this.setState({ visible: true })} icon="pi pi-check" label="Confirm" />
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
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

const ConfirmDialogDemo = () => {
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    const confirm1 = () => {
        confirmDialog({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept,
            reject
        });
    };

    const confirm2 = () => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    };

    const confirmPosition = (position) => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            position,
            accept,
            reject
        });
    };

    return (
        <div>
            <Toast ref={toast} />

            <div className="card">
                <ConfirmDialog />

                <h5>Basic</h5>
                <Button onClick={confirm1} icon="pi pi-check" label="Confirm" className="mr-2"></Button>
                <Button onClick={confirm2} icon="pi pi-times" label="Delete"></Button>

                <h5>Position</h5>
                <div className="grid">
                    <div className="col-12">
                        <Button onClick={() => confirmPosition('left')} icon="pi pi-arrow-right" label="Left" className="p-button-help mr-2"></Button>
                        <Button onClick={() => confirmPosition('right')} icon="pi pi-arrow-left" label="Right" className="p-button-help"></Button>
                    </div>
                    <div className="col-12">
                        <Button onClick={() => confirmPosition('top-left')} icon="pi pi-arrow-down-right" label="TopLeft" className="p-button-warning mr-2"></Button>
                        <Button onClick={() => confirmPosition('top')} icon="pi pi-arrow-down" label="Top" className="p-button-warning mr-2"></Button>
                        <Button onClick={() => confirmPosition('top-right')} icon="pi pi-arrow-down-left" label="TopRight" className="p-button-warning"></Button>
                    </div>
                    <div className="col-12">
                        <Button onClick={() => confirmPosition('bottom-left')} icon="pi pi-arrow-up-right" label="BottomLeft" className="p-button-success mr-2"></Button>
                        <Button onClick={() => confirmPosition('bottom')} icon="pi pi-arrow-up" label="Bottom" className="p-button-success mr-2"></Button>
                        <Button onClick={() => confirmPosition('bottom-right')} icon="pi pi-arrow-up-left" label="BottomRight" className="p-button-success"></Button>
                    </div>
                </div>

                <h5>Using ConfirmDialog tag</h5>
                <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?"
                    header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
                <Button onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
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
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

const ConfirmDialogDemo = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    const confirm1 = () => {
        confirmDialog({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept,
            reject
        });
    };

    const confirm2 = () => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    };

    const confirmPosition = (position: string) => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            position,
            accept,
            reject
        });
    };

    return (
        <div>
            <Toast ref={toast} />

            <div className="card">
                <ConfirmDialog />

                <h5>Basic</h5>
                <Button onClick={confirm1} icon="pi pi-check" label="Confirm" className="mr-2"></Button>
                <Button onClick={confirm2} icon="pi pi-times" label="Delete"></Button>

                <h5>Position</h5>
                <div className="grid">
                    <div className="col-12">
                        <Button onClick={() => confirmPosition('left')} icon="pi pi-arrow-right" label="Left" className="p-button-help mr-2"></Button>
                        <Button onClick={() => confirmPosition('right')} icon="pi pi-arrow-left" label="Right" className="p-button-help"></Button>
                    </div>
                    <div className="col-12">
                        <Button onClick={() => confirmPosition('top-left')} icon="pi pi-arrow-down-right" label="TopLeft" className="p-button-warning mr-2"></Button>
                        <Button onClick={() => confirmPosition('top')} icon="pi pi-arrow-down" label="Top" className="p-button-warning mr-2"></Button>
                        <Button onClick={() => confirmPosition('top-right')} icon="pi pi-arrow-down-left" label="TopRight" className="p-button-warning"></Button>
                    </div>
                    <div className="col-12">
                        <Button onClick={() => confirmPosition('bottom-left')} icon="pi pi-arrow-up-right" label="BottomLeft" className="p-button-success mr-2"></Button>
                        <Button onClick={() => confirmPosition('bottom')} icon="pi pi-arrow-up" label="Bottom" className="p-button-success mr-2"></Button>
                        <Button onClick={() => confirmPosition('bottom-right')} icon="pi pi-arrow-up-left" label="BottomRight" className="p-button-success"></Button>
                    </div>
                </div>

                <h5>Using ConfirmDialog tag</h5>
                <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?"
                    header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
                <Button onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
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
        <script src="https://unpkg.com/primereact/confirmdialog/confirmdialog.min.js"></script>
        <script src="https://unpkg.com/primereact/toast/toast.min.js"></script>`,
            content: `
const { useState, useRef } = React;
const { ConfirmDialog, confirmDialog } = primereact.confirmdialog;
const { Button } = primereact.button;
const { Toast } = primereact.toast;

const ConfirmDialogDemo = () => {
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    const confirm1 = () => {
        confirmDialog({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept,
            reject
        });
    };

    const confirm2 = () => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    };

    const confirmPosition = (position) => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            position,
            accept,
            reject
        });
    };

    return (
        <div>
            <Toast ref={toast} />

            <div className="card">
                <ConfirmDialog />

                <h5>Basic</h5>
                <Button onClick={confirm1} icon="pi pi-check" label="Confirm" className="mr-2"></Button>
                <Button onClick={confirm2} icon="pi pi-times" label="Delete"></Button>

                <h5>Position</h5>
                <div className="grid">
                    <div className="col-12">
                        <Button onClick={() => confirmPosition('left')} icon="pi pi-arrow-right" label="Left" className="p-button-help mr-2"></Button>
                        <Button onClick={() => confirmPosition('right')} icon="pi pi-arrow-left" label="Right" className="p-button-help"></Button>
                    </div>
                    <div className="col-12">
                        <Button onClick={() => confirmPosition('top-left')} icon="pi pi-arrow-down-right" label="TopLeft" className="p-button-warning mr-2"></Button>
                        <Button onClick={() => confirmPosition('top')} icon="pi pi-arrow-down" label="Top" className="p-button-warning mr-2"></Button>
                        <Button onClick={() => confirmPosition('top-right')} icon="pi pi-arrow-down-left" label="TopRight" className="p-button-warning"></Button>
                    </div>
                    <div className="col-12">
                        <Button onClick={() => confirmPosition('bottom-left')} icon="pi pi-arrow-up-right" label="BottomLeft" className="p-button-success mr-2"></Button>
                        <Button onClick={() => confirmPosition('bottom')} icon="pi pi-arrow-up" label="Bottom" className="p-button-success mr-2"></Button>
                        <Button onClick={() => confirmPosition('bottom-right')} icon="pi pi-arrow-up-left" label="BottomRight" className="p-button-success"></Button>
                    </div>
                </div>

                <h5>Using ConfirmDialog tag</h5>
                <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?"
                    header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
                <Button onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
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
import { ConfirmDialog } from 'primereact/confirmdialog'; // To use <ConfirmDialog> tag
import { confirmDialog } from 'primereact/confirmdialog'; // To use confirmDialog method
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/confirmdialog/confirmdialog.min.js"></script>
`}
</CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>There are two ways to display confirm dialog. One of them is to use the <i>confirmDialog</i> method and the other is to use the <i>&lt;ConfirmDialog&gt;</i> tag.
                        These independently create dialog element. It supports the same properties in both.</p>

                    <h6>1. confirmDialog method</h6>
<CodeHighlight lang="js">
{`
const confirm = () => {
    confirmDialog({
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => acceptFunc(),
        reject: () => rejectFunc()
    });
}

<Button onClick={confirm} icon="pi pi-check" label="Confirm"></Button>
<ConfirmDialog /> <!--required empty dialog tag -->
`}
</CodeHighlight>

                    <h6>2. &lt;ConfirmDialog&gt; tag</h6>
                    <p>ConfirmDialog is used as a container and visibility is managed with <i>visible</i> property where <i>onHide</i> event is required to update the visibility state.</p>

<CodeHighlight>
{`
<ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?"
    header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />

<Button onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
`}
</CodeHighlight>

                    <h5>Responsive</h5>
                    <p>ConfirmDialog width can be adjusted per screen size with the <i>breakpoints</i> option. In example below, default width is set to 50vw and below 961px, width would be 75vw and finally below 641px width becomes
                    100%. The value of <i>breakpoints</i> should be an object literal whose keys are the maximum screen sizes and values are the widths per screen.</p>
<CodeHighlight>
{`
<ConfirmDialog breakpoints={{'960px': '75vw', '640px': '100vw'}} style={{width: '50vw'}} ... />
`}
</CodeHighlight>

                    <h5>Properties</h5>
                    <p>These properties are extended from Dialog properties.</p>
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
                                    <td>visible</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Specifies the visibility of the confirm dialog.</td>
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
                                    <td>footer</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Footer content of the confirm dialog.</td>
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
                                    <td>result: Indicates with which selection the dialog was closed. <br />
                                        Valid values are 'accept', 'reject' and undefined (using close icon).</td>
                                    <td>Callback to invoke when confirm dialog is hidden.</td>
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
                                    <td>p-confirm-dialog</td>
                                    <td>Container element.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Accessibility</h5>
                    <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>ConfirmDialog component uses <i>alertdialog</i> role along with <i>aria-labelledby</i> referring to the header element however any attribute is passed to the root element so you may use <i>aria-labelledby</i> to override this default behavior. 
                    In addition <i>aria-modal</i> is added since focus is kept within the popup.</p>
                    <p>It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding <i>tabIndex</i> would be necessary.</p>

                    <p>When <i>confirm</i> function is used and a trigger is passed as a parameter, 
                    ConfirmDialog adds <i>aria-expanded</i> state attribute and <i>aria-controls</i> to the trigger so that the relation between the trigger and the popup is defined.</p>

<CodeHighlight lang="js">
{`
const confirm = (event) => {
    confirmDialog({
        trigger: event.currentTarget,
        message: 'Are you sure you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => acceptFunc(),
        reject: () => rejectFunc()
    });
}

<Button onClick={confirm} icon="pi pi-check" label="Confirm"></Button>

<ConfirmDialog />
`}
</CodeHighlight>

                    <p>If the dialog is controlled with the <i>visible</i> property <i>aria-expanded</i> and <i>aria-controls</i> need to be handled explicitly.</p>

<CodeHighlight>
{`
<ConfirmDialog id="dlg_confirmation" visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?"
    header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />

<Button onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" aria-controls={visible ? 'dlg_confirmation' : null} aria-expanded={visible ? true : false} />
`}
</CodeHighlight>

                    <h6>Overlay Keyboard Support</h6>
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
                    useLiveEditorTabs({ name: 'ConfirmDialogDemo', sources: sources })
                }
            </TabView>
        </div>
    )
})

export default ConfirmDialogDoc;
