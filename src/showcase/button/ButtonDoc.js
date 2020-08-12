import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class ButtonDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Button } from 'primereact/button';

export class ButtonDemo extends Component {

    render() {
        return (
            <div className="button-demo">
                <h3 className="first">Basic</h3>
                <Button label="Click" />
                <Button label="Click" icon="pi pi-check" />
                <Button label="Click" icon="pi pi-check" iconPos="right" />
                <Button icon="pi pi-check" />
                <Button label="Click" disabled="disabled" />

                <h3>Severities</h3>
                <Button label="Primary" />
                <Button label="Secondary" className="p-button-secondary" />
                <Button label="Success" className="p-button-success" />
                <Button label="Info" className="p-button-info" />
                <Button label="Warning" className="p-button-warning" />
                <Button label="Danger" className="p-button-danger" />

                <h3>Raised Buttons</h3>
                <Button label="Primary" className="p-button-raised" />
                <Button label="Secondary" className="p-button-raised p-button-secondary" />
                <Button label="Success" className="p-button-raised p-button-success" />
                <Button label="Info" className="p-button-raised p-button-info" />
                <Button label="Warning" className="p-button-raised p-button-warning" />
                <Button label="Danger" className="p-button-raised p-button-danger" />

                <h3>Rounded Buttons</h3>
                <Button label="Primary" className="p-button-rounded" />
                <Button label="Secondary" className="p-button-rounded p-button-secondary" />
                <Button label="Success" className="p-button-rounded p-button-success" />
                <Button label="Info" className="p-button-rounded p-button-info" />
                <Button label="Warning" className="p-button-rounded p-button-warning" />
                <Button label="Danger" className="p-button-rounded p-button-danger" />
            </div>
        )
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React from 'react';
import { Button } from 'primereact/button';

const ButtonDemo = () => {
    return (
        <div className="button-demo">
            <h3 className="first">Basic</h3>
            <Button label="Click" />
            <Button label="Click" icon="pi pi-check" />
            <Button label="Click" icon="pi pi-check" iconPos="right" />
            <Button icon="pi pi-check" />
            <Button label="Click" disabled="disabled" />

            <h3>Severities</h3>
            <Button label="Primary" />
            <Button label="Secondary" className="p-button-secondary" />
            <Button label="Success" className="p-button-success" />
            <Button label="Info" className="p-button-info" />
            <Button label="Warning" className="p-button-warning" />
            <Button label="Danger" className="p-button-danger" />

            <h3>Raised Buttons</h3>
            <Button label="Primary" className="p-button-raised" />
            <Button label="Secondary" className="p-button-raised p-button-secondary" />
            <Button label="Success" className="p-button-raised p-button-success" />
            <Button label="Info" className="p-button-raised p-button-info" />
            <Button label="Warning" className="p-button-raised p-button-warning" />
            <Button label="Danger" className="p-button-raised p-button-danger" />

            <h3>Rounded Buttons</h3>
            <Button label="Primary" className="p-button-rounded" />
            <Button label="Secondary" className="p-button-rounded p-button-secondary" />
            <Button label="Success" className="p-button-rounded p-button-success" />
            <Button label="Info" className="p-button-rounded p-button-info" />
            <Button label="Warning" className="p-button-rounded p-button-warning" />
            <Button label="Danger" className="p-button-rounded p-button-danger" />
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import { Button } from 'primereact/button';

const ButtonDemo = () => {
    return (
        <div className="button-demo">
            <h3 className="first">Basic</h3>
            <Button label="Click" />
            <Button label="Click" icon="pi pi-check" />
            <Button label="Click" icon="pi pi-check" iconPos="right" />
            <Button icon="pi pi-check" />
            <Button label="Click" disabled="disabled" />

            <h3>Severities</h3>
            <Button label="Primary" />
            <Button label="Secondary" className="p-button-secondary" />
            <Button label="Success" className="p-button-success" />
            <Button label="Info" className="p-button-info" />
            <Button label="Warning" className="p-button-warning" />
            <Button label="Danger" className="p-button-danger" />

            <h3>Raised Buttons</h3>
            <Button label="Primary" className="p-button-raised" />
            <Button label="Secondary" className="p-button-raised p-button-secondary" />
            <Button label="Success" className="p-button-raised p-button-success" />
            <Button label="Info" className="p-button-raised p-button-info" />
            <Button label="Warning" className="p-button-raised p-button-warning" />
            <Button label="Danger" className="p-button-raised p-button-danger" />

            <h3>Rounded Buttons</h3>
            <Button label="Primary" className="p-button-rounded" />
            <Button label="Secondary" className="p-button-rounded p-button-secondary" />
            <Button label="Success" className="p-button-rounded p-button-success" />
            <Button label="Info" className="p-button-rounded p-button-info" />
            <Button label="Warning" className="p-button-rounded p-button-warning" />
            <Button label="Danger" className="p-button-rounded p-button-danger" />
        </div>
    )
}
                `
            }
        }

        this.extFiles = {
            'index.css': `
.button-demo button {
    margin-right: .5em;
}
            `
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
                        <h3>Import</h3>
                        <CodeHighlight lang="javascript">
                            {`
import { Button } from 'primereact/button';

`}
                        </CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Button is created using the Button element.</p>
                        <CodeHighlight>
                            {`
<Button />

`}
                        </CodeHighlight>

                        <h3>Label</h3>
                        <p>Text of the button is defined using the <i>label</i> property.</p>
                        <CodeHighlight>
                            {`
<Button label="Save" />

`}
                        </CodeHighlight>

                        <h3>Icons</h3>
                        <p>Icon on a button is specified with <i>icon</i> property and position is configured using <i>iconPos</i> attribute. Default
                        icon position is "left" and alternative is "right". To display only an icon, leave label as undefined.</p>

                        <CodeHighlight>
                            {`
<Button label="Click" icon="pi pi-check" />
<Button label="Click" icon="pi pi-check" iconPos="right" />
<Button icon="pi pi-check" iconPos="right" />

`}
                        </CodeHighlight>

                        <h3>Events</h3>
                        <p>Events are defined with the standard notation.</p>
                        <CodeHighlight>
                            {`
<Button label="Click" onClick={this.handleClick} />

`}
                        </CodeHighlight>



                        <h3>Severity</h3>
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
<Button label="Primary" />
<Button label="Secondary" className="p-button-secondary" />
<Button label="Success" className="p-button-success" />
<Button label="Info" className="p-button-info" />
<Button label="Warning" className="p-button-warning" />
<Button label="Danger" className="p-button-danger" />

`}
                        </CodeHighlight>

                        <h3>Raised and Rounded Buttons</h3>
                        <p>A button can be raised by having "p-button-raised" style class and similarly borders can be made rounded using "p-button-rounded" class.</p>
                        <CodeHighlight>
                            {`
<Button label="Proceed" className="p-button-raised p-button-rounded" />

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
                                        <td>iconPos</td>
                                        <td>string</td>
                                        <td>left</td>
                                        <td>Position of the icon, valid values are "left" and "right".</td>
                                    </tr>
                                    <tr>
                                        <td>badge</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Value of the badge.</td>
                                    </tr>
                                    <tr>
                                        <td>badgeClassName</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Style class of the badge.</td>
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
                                        <td>p-button</td>
                                        <td>Button element</td>
                                    </tr>
                                    <tr>
                                        <td>p-button-icon</td>
                                        <td>Icon element</td>
                                    </tr>
                                    <tr>
                                        <td>p-button-text</td>
                                        <td>Label element of the button</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            return (
                                <TabPanel key={`source_${index}`} header={value.tabName} contentClassName="source-content">
                                    <LiveEditor name="ButtonDemo" sources={[key, value]} extFiles={this.extFiles} />
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
