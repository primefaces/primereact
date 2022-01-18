import React, { Component } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';

export class SplitButtonDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

export class SplitButtonDemo extends Component {

    constructor(props) {
        super(props);

        this.items = [
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.toast.show({severity:'success', summary:'Updated', detail:'Data Updated'});
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-times',
                command: () => {
                    this.toast.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
                }
            },
            {
                label: 'React Website',
                icon: 'pi pi-external-link',
                command: () => {
                    window.location.href = 'https://facebook.github.io/react/'
                }
            },
            {   label: 'Upload',
                icon: 'pi pi-upload',
                command: () => {
                    window.location.hash = "/fileupload"
                }
            }
        ];

        this.save = this.save.bind(this);
    }

    save() {
        this.toast.show({severity: 'success', summary: 'Success', detail: 'Data Saved'});
    }

    render() {
        return (
            <div>
                <Toast ref={(el) => this.toast = el}></Toast>

                <div className="card">
                    <h5>Basic</h5>
                    <SplitButton label="Save" icon="pi pi-plus" onClick={this.save} model={this.items}></SplitButton>

                    <h5>Severities</h5>
                    <SplitButton label="Save" icon="pi pi-plus" model={this.items} className="mr-2"></SplitButton>
                    <SplitButton label="Save" icon="pi pi-plus" model={this.items} className="p-button-secondary mr-2"></SplitButton>
                    <SplitButton label="Save" icon="pi pi-plus" model={this.items} className="p-button-success mr-2"></SplitButton>
                    <SplitButton label="Save" icon="pi pi-plus" model={this.items} className="p-button-info mr-2"></SplitButton>
                    <SplitButton label="Save" icon="pi pi-plus" model={this.items} className="p-button-warning mr-2"></SplitButton>
                    <SplitButton label="Save" icon="pi pi-plus" model={this.items} className="p-button-help mr-2"></SplitButton>
                    <SplitButton label="Save" icon="pi pi-plus" model={this.items} className="p-button-danger mr-2"></SplitButton>
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
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

const SplitButtonDemo = () => {
    const toast = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({severity:'success', summary:'Updated', detail:'Data Updated'});
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        },
        {   label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                window.location.hash = "/fileupload"
            }
        }
    ];

    const save = () => {
        toast.current.show({severity: 'success', summary: 'Success', detail: 'Data Saved'});
    }

    return (
        <div>
            <Toast ref={toast}></Toast>

            <div className="card">
                <h5>Basic</h5>
                <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items}></SplitButton>

                <h5>Severities</h5>
                <SplitButton label="Save" icon="pi pi-plus" model={items} className="mr-2"></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" model={items} className="p-button-secondary mr-2"></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" model={items} className="p-button-success mr-2"></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" model={items} className="p-button-info mr-2"></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" model={items} className="p-button-warning mr-2"></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" model={items} className="p-button-help mr-2"></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" model={items} className="p-button-danger mr-2"></SplitButton>
            </div>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useRef } from 'react';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

const SplitButtonDemo = () => {
    const toast = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({severity:'success', summary:'Updated', detail:'Data Updated'});
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        },
        {   label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                window.location.hash = "/fileupload"
            }
        }
    ];

    const save = () => {
        toast.current.show({severity: 'success', summary: 'Success', detail: 'Data Saved'});
    }

    return (
        <div>
            <Toast ref={toast}></Toast>

            <div className="card">
                <h5>Basic</h5>
                <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items}></SplitButton>

                <h5>Severities</h5>
                <SplitButton label="Save" icon="pi pi-plus" model={items} className="mr-2"></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" model={items} className="p-button-secondary mr-2"></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" model={items} className="p-button-success mr-2"></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" model={items} className="p-button-info mr-2"></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" model={items} className="p-button-warning mr-2"></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" model={items} className="p-button-help mr-2"></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" model={items} className="p-button-danger mr-2"></SplitButton>
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
        <script src="https://unpkg.com/primereact/splitbutton/splitbutton.min.js"></script>
        <script src="https://unpkg.com/primereact/toast/toast.min.js"></script>`,
                content: `
const { useEffect, useState, useRef } = React;
const { SplitButton } = primereact.splitbutton;
const { Toast } = primereact.toast;

const SplitButtonDemo = () => {
    const toast = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({severity:'success', summary:'Updated', detail:'Data Updated'});
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        },
        {   label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                window.location.hash = "/fileupload"
            }
        }
    ];

    const save = () => {
        toast.current.show({severity: 'success', summary: 'Success', detail: 'Data Saved'});
    }

    return (
        <div>
            <Toast ref={toast}></Toast>

            <div className="card">
                <h5>Basic</h5>
                <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items}></SplitButton>

                <h5>Severities</h5>
                <SplitButton label="Save" icon="pi pi-plus" model={items} className="mr-2"></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" model={items} className="p-button-secondary mr-2"></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" model={items} className="p-button-success mr-2"></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" model={items} className="p-button-info mr-2"></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" model={items} className="p-button-warning mr-2"></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" model={items} className="p-button-help mr-2"></SplitButton>
                <SplitButton label="Save" icon="pi pi-plus" model={items} className="p-button-danger mr-2"></SplitButton>
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
            <div className="content-section documentation" id="app-doc">
                <TabView>
                    <TabPanel header="Documentation">
                        <h5>Import via Module</h5>
<CodeHighlight lang="js">
{`
import { SplitButton } from 'primereact/splitbutton';
`}
</CodeHighlight>

                        <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/splitbutton/splitbutton.min.js"></script>
`}
</CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>SplitButton has a default command button and a collection of additional options defined by the <i>model</i> property.</p>
                        <CodeHighlight lang="js">
{`
export const SplitButtonDemo = () => {

    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: (e) => {
                toast.current.show({severity:'success', summary:'Updated', detail:'Data Updated'});
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: (e) => {
                toast.current.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command:(e) => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        },
        {   label: 'Upload',
            icon: 'pi pi-upload',
            command:(e) => {
                window.location.hash = "/fileupload"
            }
        }
    ]

    const save = () => {
        toast.current.show({severity: 'success', summary: 'Success', detail: 'Data Saved'});
    }

        return (
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items}></SplitButton>
        )
    }
}

`}
</CodeHighlight>

                        <h5>MenuModel API</h5>
                        <p>SplitButton uses the common MenuModel API to define the items, visit <Link href="/menumodel">MenuModel API</Link> for details.</p>

                        <h5>Severity</h5>
                        <p>Different color options are available as severity levels.</p>

                        <ul>
                            <li>.p-button-secondary</li>
                            <li>.p-button-success</li>
                            <li>.p-button-info</li>
                            <li>.p-button-warning</li>
                            <li>.p-button-danger</li>
                        </ul>

<CodeHighlight>
{`
<SplitButton label="Primary" />
<SplitButton label="Secondary" className="p-button-secondary" model={items} />
<SplitButton label="Success" className="p-button-success" model={items} />
<SplitButton label="Info" className="p-button-info" model={items} />
<SplitButton label="Warning" className="p-button-warning" model={items} />
<SplitButton label="Danger" className="p-button-danger" model={items} />

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
                                        <td>Identifier of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>label</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Text of the button.</td>
                                    </tr>
                                    <tr>
                                        <td>icon</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Name of the icon.</td>
                                    </tr>
                                    <tr>
                                        <td>model</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>MenuModel instance to define the overlay items.</td>
                                    </tr>
                                    <tr>
                                        <td>disabled</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When present, it specifies that the component should be disabled.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Inline style of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>className</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>ClassName of the component.</td>
                                    </tr>
                                    <tr>
                                        <td>menuStyle</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Inline style of the overlay menu.</td>
                                    </tr>
                                    <tr>
                                        <td>menuClassName</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>ClassName class of the overlay menu.</td>
                                    </tr>
                                    <tr>
                                        <td>tabIndex</td>
                                        <td>number</td>
                                        <td>null</td>
                                        <td>Index of the element in tabbing order.</td>
                                    </tr>
                                    <tr>
                                        <td>appendTo</td>
                                        <td>DOM element | string</td>
                                        <td>document.body</td>
                                        <td>DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located.</td>
                                    </tr>
                                    <tr>
                                        <td>tooltip</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Content of the tooltip.</td>
                                    </tr>
                                    <tr>
                                        <td>tooltipOptions</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>Configuration of the tooltip, refer to the tooltip documentation for more information.</td>
                                    </tr>
                                    <tr>
                                        <td>buttonTemplate</td>
                                        <td>any</td>
                                        <td>null</td>
                                        <td>Template of the default button.</td>
                                    </tr>
                                    <tr>
                                        <td>transitionOptions</td>
                                        <td>object</td>
                                        <td>null</td>
                                        <td>The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.</td>
                                    </tr>
                                    <tr>
                                        <td>dropdownIcon</td>
                                        <td>string</td>
                                        <td>pi pi-chevron-down</td>
                                        <td>Icon class of the dropdown icon.</td>
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
                                        <td>onClick</td>
                                        <td>event: Browser event</td>
                                        <td>Callback to invoke when main button is clicked.</td>
                                    </tr>
                                    <tr>
                                        <td>onShow</td>
                                        <td>-</td>
                                        <td>Callback to invoke when overlay panel becomes visible.</td>
                                    </tr>
                                    <tr>
                                        <td>onHide</td>
                                        <td>-</td>
                                        <td>Callback to invoke when overlay panel becomes hidden.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Styling</h5>
                        <p>Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.</p>
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
                                        <td>p-splitbutton</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-splitbutton-button</td>
                                        <td>Dropdown button.</td>
                                    </tr>
                                    <tr>
                                        <td>p-menu</td>
                                        <td>Overlay menu.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Dependencies</h5>
                        <p>None.</p>
                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'SplitButtonDemo', sources: this.sources })
                    }
                </TabView >
            </div>
        )
    }
}
