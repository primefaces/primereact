import React from 'react';
import {DisabledRoDemo, SimpleDemo} from "./MultiStateCheckboxDemo";
import {TabPanel, TabView} from "../../components/tabview/TabView";
import {CodeHighlight} from "../codehighlight/CodeHighlight";
import {Link} from "react-router-dom";
import {useLiveEditorTabs} from "../liveeditor/LiveEditor";

export default function MultiStateCheckboxDoc() {
    const importsSource = `
import React from 'react';
import { MultiStateCheckbox } from 'primereact/multistatecheckbox';
`

    const hooksSource = `
${importsSource}
export function SimpleDemo() {
    const [value, setValue] = React.useState("public")

    return (
        <>
            <h3>Simple</h3>
            <div className="p-field-checkbox p-m-0">
                <MultiStateCheckbox value={value} onChange={e => setValue(e.value)}>
                    <MultiStateCheckbox.Option value="public" icon="pi pi-globe"/>
                    <MultiStateCheckbox.Option value="protected" icon="pi pi-lock-open"/>
                    <MultiStateCheckbox.Option value="private" icon="pi pi-lock"/>
                </MultiStateCheckbox>
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
                <MultiStateCheckbox value={value} onChange={e => setValue(e.value)} disabled>
                    <MultiStateCheckbox.Option value="public" icon="pi pi-globe"/>
                    <MultiStateCheckbox.Option value="protected" icon="pi pi-lock-open"/>
                    <MultiStateCheckbox.Option value="private" icon="pi pi-lock"/>
                </MultiStateCheckbox>

                <label>Disabled</label>
            </div>
            <div className="p-field-checkbox p-m-0">
                <MultiStateCheckbox value={value} onChange={e => setValue(e.value)} readOnly>
                    <MultiStateCheckbox.Option value="public" icon="pi pi-globe"/>
                    <MultiStateCheckbox.Option value="protected" icon="pi pi-lock-open"/>
                    <MultiStateCheckbox.Option value="private" icon="pi pi-lock"/>
                </MultiStateCheckbox>

                <label>Read Only</label>
            </div>
        </>
    )
}

export function MultiStateCheckboxDemo() {
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
                <MultiStateCheckbox value={value} onChange={e => setState({ value: e.value })}>
                    <MultiStateCheckbox.Option value="public" icon="pi pi-globe"/>
                    <MultiStateCheckbox.Option value="protected" icon="pi pi-lock-open"/>
                    <MultiStateCheckbox.Option value="private" icon="pi pi-lock"/>
                </MultiStateCheckbox>
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
                <MultiStateCheckbox value={value} onChange={e => setValue({ value: e.value} )} disabled>
                    <MultiStateCheckbox.Option value="public" icon="pi pi-globe"/>
                    <MultiStateCheckbox.Option value="protected" icon="pi pi-lock-open"/>
                    <MultiStateCheckbox.Option value="private" icon="pi pi-lock"/>
                </MultiStateCheckbox>

                <label>Disabled</label>
            </div>
            <div className="p-field-checkbox p-m-0">
                <MultiStateCheckbox value={value} onChange={e => setValue({ value: e.value })} readOnly>
                    <MultiStateCheckbox.Option value="public" icon="pi pi-globe"/>
                    <MultiStateCheckbox.Option value="protected" icon="pi pi-lock-open"/>
                    <MultiStateCheckbox.Option value="private" icon="pi pi-lock"/>
                </MultiStateCheckbox>

                <label>Read Only</label>
            </div>
        <React.Fragment/>
    )
}

export class MultiStateCheckboxDemo extends React.Component {
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
                <MultiStateCheckbox value={value} onChange={e => setValue(e.value)}>
                    <MultiStateCheckbox.Option value="public" icon="pi pi-globe"/>
                    <MultiStateCheckbox.Option value="protected" icon="pi pi-lock-open"/>
                    <MultiStateCheckbox.Option value="private" icon="pi pi-lock"/>
                </MultiStateCheckbox>
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
                <MultiStateCheckbox value={value} onChange={e => setValue(e.value)} disabled>
                    <MultiStateCheckbox.Option value="public" icon="pi pi-globe"/>
                    <MultiStateCheckbox.Option value="protected" icon="pi pi-lock-open"/>
                    <MultiStateCheckbox.Option value="private" icon="pi pi-lock"/>
                </MultiStateCheckbox>

                <label>Disabled</label>
            </div>
            <div className="p-field-checkbox p-m-0">
                <MultiStateCheckbox value={value} onChange={e => setValue(e.value)} readOnly>
                    <MultiStateCheckbox.Option value="public" icon="pi pi-globe"/>
                    <MultiStateCheckbox.Option value="protected" icon="pi pi-lock-open"/>
                    <MultiStateCheckbox.Option value="private" icon="pi pi-lock"/>
                </MultiStateCheckbox>

                <label>Read Only</label>
            </div>
        </>
    )
}

export const MultiStateCheckboxDemo = () => {
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
{`import {MultiStateCheckbox} from 'primereact/multistatecheckbox';`}
                    </CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>MultiStateCheckbox is used as a controlled input with <i>value</i> and <i>onChange</i> properties.</p>
                    <CodeHighlight>
{`
<MultiStateCheckbox value={value} onChange={(e) => setValue(e.value)}>
    <MultiStateCheckbox.Option value="public" icon="pi pi-globe"/>
    <MultiStateCheckbox.Option value="protected" icon="pi pi-lock-open"/>
    <MultiStateCheckbox.Option value="private" icon="pi pi-lock"/>
</MultiStateCheckbox>
`}
                    </CodeHighlight>

                    <h5>Styling</h5>
                    <p>The <i>MultiStateCheckbox</i> component exposes the properties <i>style</i> and <i>className</i>, which applies the styles to the component's root element.</p>

                    <p>The <i>MultiStateCheckbox.Option</i> component exposes the properties <i>style</i> and <i>className</i>, which applies the styles to the option's icon.</p>
                    <p>Also, the <i>MultiStateCheckbox.Option</i> component exposes the properties <i>boxStyle</i> and <i>boxClassName</i>, which applies the styles to the checkbox inner component.</p>

                    <h5>Non-Eligible Options</h5>
                    <p>A <i>MultiStateCheckbox.Option</i> component with a falsy value different of <i>undefined</i> in the <i>eligible</i> property will prevent it from being selected by the <i>MultiStateCheckbox</i></p>

                    <CodeHighlight>
{`
<MultiStateCheckbox value={privacy} onChange={(e) => setPrivacy(e.value)}>
    <MultiStateCheckbox.Option value="everyone" icon="pi pi-globe"/>
    <MultiStateCheckbox.Option value="friends_only" icon="pi pi-users" eligible={user.hasFriends}/>
    <MultiStateCheckbox.Option value="just_me" icon="pi pi-lock"/>
</MultiStateCheckbox>
`}
                    </CodeHighlight>

                    <h5>Properties</h5>
                    <h6>MultiStateCheckbox</h6>
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
                                <td>Value of the MultiStateCheckbox.</td>
                            </tr>
                            <tr>
                                <td>name</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Name of the checkbox element .</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>object</td>
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

                    <h6>MultiStateCheckbox.Option</h6>
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
                                <td>value</td>
                                <td>any</td>
                                <td>null</td>
                                <td>The value to be attached with the option.</td>
                            </tr>
                            <tr>
                                <td>icon</td>
                                <td>string</td>
                                <td>null</td>
                                <td>The icon of the option.</td>
                            </tr>
                            <tr>
                                <td>eligible</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Determines if an option can be selected.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>object</td>
                                <td>undefined</td>
                                <td>Inline style of the element.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string</td>
                                <td>undefined</td>
                                <td>Style class of the element.</td>
                            </tr>
                            <tr>
                                <td>boxStyle</td>
                                <td>object</td>
                                <td>undefined</td>
                                <td>Inline style of the checkbox element when the current option is selected.</td>
                            </tr>
                            <tr>
                                <td>boxClassName</td>
                                <td>string</td>
                                <td>undefined</td>
                                <td>Style class of the checkbox element when the current option is selected.</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>

                    <h5>Events</h5>
                    <h6>MultiStateCheckbox</h6>
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
                                <td>p-multistatecheckbox</td>
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

                { useLiveEditorTabs({ name: 'MultiStateCheckboxDemo', sources }) }
            </TabView>
        </div>
    )
}
