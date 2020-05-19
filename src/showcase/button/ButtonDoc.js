import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class ButtonDoc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };

        this.sources = {
            'app': {
                tabName: 'Source',
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

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.activeIndex !== nextState.activeIndex) {
            return true;
        }

        return false;
    }

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/button" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="ButtonDemo" sources={this.sources} extFiles={this.extFiles} activeButtonIndex={this.state.activeIndex - 1} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({ activeIndex: e.index })}>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight className="language-javascript">
                            {`
import { Button } from 'primereact/button';

`}
                        </CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Button is created using the Button element.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<Button />

`}
                        </CodeHighlight>

                        <h3>Label</h3>
                        <p>Text of the button is defined using the <i>label</i> property.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<Button label="Save" />

`}
                        </CodeHighlight>

                        <h3>Icons</h3>
                        <p>Icon on a button is specified with <i>icon</i> property and position is configured using <i>iconPos</i> attribute. Default
                        icon position is "left" and alternative is "right". To display only an icon, leave label as undefined.</p>

                        <CodeHighlight className="language-jsx">
                            {`
<Button label="Click" icon="pi pi-check" />
<Button label="Click" icon="pi pi-check" iconPos="right" />
<Button icon="pi pi-check" iconPos="right" />

`}
                        </CodeHighlight>

                        <h3>Events</h3>
                        <p>Events are defined with the standard notation.</p>
                        <CodeHighlight className="language-jsx">
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

                        <CodeHighlight className="language-jsx">
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
                        <CodeHighlight className="language-jsx">
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
                                <TabPanel key={`source_${index}`} header={value.tabName}>
                                    {sourceButtons}

                                    <CodeHighlight className="language-javascript">
                                        {value.content}
                                    </CodeHighlight>
                                </TabPanel>
                            );
                        })
                    }
                </TabView >
            </div>
        )
    }
}
