import React from 'react';
import {DisabledRoDemo, SimpleDemo} from "./MultiCheckboxDemo";
import {TabPanel, TabView} from "../../components/tabview/TabView";
import {CodeHighlight} from "../codehighlight/CodeHighlight";
import {Link} from "react-router-dom";
import {useLiveEditorTabs} from "../liveeditor/LiveEditor";

export default function MultiCheckboxDoc() {
    const importsSource = `
import React from 'react';
import { MultiCheckbox } from 'primereact/multicheckbox';
`

    const hooksSource = `
${importsSource}
export function SimpleDemo() {
    const [value, setValue] = React.useState("public")

    return (
        <>
            <h3>Simple</h3>
            <div className="p-field-checkbox p-m-0">
                <MultiCheckbox value={value} onChange={e => setValue(e.value)}>
                    <MultiCheckbox.Option value="public" icon="pi pi-globe"/>
                    <MultiCheckbox.Option value="protected" icon="pi pi-lock-open"/>
                    <MultiCheckbox.Option value="private" icon="pi pi-lock"/>
                </MultiCheckbox>
                <label>{value}</label>
            </div>
        </>
    )
}

export function DisabledRoDemo() {
    const [value, setValue] = React.useState("public")

    return (
        <>
            <h3>Disabled and Readonly</h3>
            <div className="p-field-checkbox p-m-0 p-pb-2">
                <MultiCheckbox value={value} onChange={e => setValue(e.value)} disabled>
                    <MultiCheckbox.Option value="public" icon="pi pi-globe"/>
                    <MultiCheckbox.Option value="protected" icon="pi pi-lock-open"/>
                    <MultiCheckbox.Option value="private" icon="pi pi-lock"/>
                </MultiCheckbox>

                <label>Disabled</label>
            </div>
            <div className="p-field-checkbox p-m-0">
                <MultiCheckbox value={value} onChange={e => setValue(e.value)} readOnly>
                    <MultiCheckbox.Option value="public" icon="pi pi-globe"/>
                    <MultiCheckbox.Option value="protected" icon="pi pi-lock-open"/>
                    <MultiCheckbox.Option value="private" icon="pi pi-lock"/>
                </MultiCheckbox>

                <label>Read Only</label>
            </div>
        </>
    )
}

export function MultiCheckboxDemo() {
    return (
        <>
            <div>
                <SimpleDemo/>
            </div>
            <div>
                <DisabledRoDemo/>
            </div>
        </>
    )
}
`

    const classSource = `
${importsSource}
export class SimpleDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: "public" }
    }

    return (
        <React.Fragment>
            <h3>Simple</h3>
            <div className="p-field-checkbox p-m-0">
                <MultiCheckbox value={value} onChange={e => setState({ value: e.value })}>
                    <MultiCheckbox.Option value="public" icon="pi pi-globe"/>
                    <MultiCheckbox.Option value="protected" icon="pi pi-lock-open"/>
                    <MultiCheckbox.Option value="private" icon="pi pi-lock"/>
                </MultiCheckbox>
                <label>{value}</label>
            </div>
        <React.Fragment/>
    )
}

export class DisabledRoDemo extends React.Component {
    constructor() {
        this.state = { value: "public" }
    }

    return (
        <React.Fragment>
            <h3>Disabled and Readonly</h3>
            <div className="p-field-checkbox p-m-0 p-pb-2">
                <MultiCheckbox value={value} onChange={e => setValue({ value: e.value} )} disabled>
                    <MultiCheckbox.Option value="public" icon="pi pi-globe"/>
                    <MultiCheckbox.Option value="protected" icon="pi pi-lock-open"/>
                    <MultiCheckbox.Option value="private" icon="pi pi-lock"/>
                </MultiCheckbox>

                <label>Disabled</label>
            </div>
            <div className="p-field-checkbox p-m-0">
                <MultiCheckbox value={value} onChange={e => setValue({ value: e.value })} readOnly>
                    <MultiCheckbox.Option value="public" icon="pi pi-globe"/>
                    <MultiCheckbox.Option value="protected" icon="pi pi-lock-open"/>
                    <MultiCheckbox.Option value="private" icon="pi pi-lock"/>
                </MultiCheckbox>

                <label>Read Only</label>
            </div>
        <React.Fragment/>
    )
}

export class MultiCheckboxDemo extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <SimpleDemo/>
                </div>
                <div>
                    <DisabledRoDemo/>
                </div>
            </React.Fragment>
        )
    }
}`

    const tsSource = `
${importsSource}
export const SimpleDemo = () => {
    const [value, setValue] = React.useState<string>("public")

    return (
        <>
            <h3>Simple</h3>
            <div className="p-field-checkbox p-m-0">
                <MultiCheckbox value={value} onChange={e => setValue(e.value)}>
                    <MultiCheckbox.Option value="public" icon="pi pi-globe"/>
                    <MultiCheckbox.Option value="protected" icon="pi pi-lock-open"/>
                    <MultiCheckbox.Option value="private" icon="pi pi-lock"/>
                </MultiCheckbox>
                <label>{value}</label>
            </div>
        </>
    )
}

export const DisabledRoDemo = () => {
    const [value, setValue] = React.useState<string>("public")

    return (
        <>
            <h3>Disabled and Readonly</h3>
            <div className="p-field-checkbox p-m-0 p-pb-2">
                <MultiCheckbox value={value} onChange={e => setValue(e.value)} disabled>
                    <MultiCheckbox.Option value="public" icon="pi pi-globe"/>
                    <MultiCheckbox.Option value="protected" icon="pi pi-lock-open"/>
                    <MultiCheckbox.Option value="private" icon="pi pi-lock"/>
                </MultiCheckbox>

                <label>Disabled</label>
            </div>
            <div className="p-field-checkbox p-m-0">
                <MultiCheckbox value={value} onChange={e => setValue(e.value)} readOnly>
                    <MultiCheckbox.Option value="public" icon="pi pi-globe"/>
                    <MultiCheckbox.Option value="protected" icon="pi pi-lock-open"/>
                    <MultiCheckbox.Option value="private" icon="pi pi-lock"/>
                </MultiCheckbox>

                <label>Read Only</label>
            </div>
        </>
    )
}

export const MultiCheckboxDemo = () => {
    return (
        <>
            <div>
                <SimpleDemo/>
            </div>
            <div>
                <DisabledRoDemo/>
            </div>
        </>
    )
}
`

    const sources = {
        class: {
            tabName: "Class Source",
            content: classSource
        },
        hooks: {
            tabName: "Hooks Source",
            content: hooksSource
        },
        ts: {
            tabName: "TS Source",
            content: tsSource
        }
    }

    return (
        <div className="content-section documentation">
            <TabView>
                <TabPanel header="Documentation">
                    <h5>Import</h5>
                    <CodeHighlight lang="js">
{`import {MultiCheckbox} from 'primereact/multicheckbox';`}
                    </CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>MultiCheckbox is used as a controlled input with <i>value</i> and <i>onChange</i> properties.</p>
                    <CodeHighlight>
{`
<MultiCheckbox value={value} onChange={(e) => setValue(e.value)}>
    <MultiCheckbox.Option value="public" icon="pi pi-globe"/>
    <MultiCheckbox.Option value="protected" icon="pi pi-lock-open"/>
    <MultiCheckbox.Option value="private" icon="pi pi-lock"/>
</MultiCheckbox>
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
                                <td>inputId</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Unique identifier of the native checkbox element.</td>
                            </tr>
                            <tr>
                                <td>value</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Value of the MultiCheckbox.</td>
                            </tr>
                            <tr>
                                <td>name</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Name of the checkbox element .</td>
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
                                <td>disabled</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that the input element is disabled.</td>
                            </tr>
                            <tr>
                                <td>readOnly</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that the element value cannot be altered.</td>
                            </tr>
                            <tr>
                                <td>ariaLabelledBy</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>
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
                                <td>onChange</td>
                                <td>
                                    event.originalEvent: Browser event <br/>
                                    event.target: id, name of the input element, value of the component<br/>
                                    event.value: Current Value
                                </td>
                                <td>Callback to invoke on value change</td>
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
                                <td>p-chkbox</td>
                                <td>Container element</td>
                            </tr>
                            <tr>
                                <td>p-multicheckbox</td>
                                <td>Container element</td>
                            </tr>
                            <tr>
                                <td>p-chkbox-box</td>
                                <td>Container of icon.</td>
                            </tr>
                            <tr>
                                <td>p-chkbox-icon</td>
                                <td>Icon element.</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Dependencies</h5>
                    <p>None.</p>
                </TabPanel>

                { useLiveEditorTabs({ name: 'MultiCheckboxDemo', sources }) }
            </TabView>
        </div>
    )
}
