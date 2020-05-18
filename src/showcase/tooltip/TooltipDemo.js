import React, {Component} from 'react';
import {InputText} from '../../components/inputtext/InputText';
import {Button} from '../../components/button/Button';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class TooltipDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Tooltip</h1>
                        <p>Tooltip functionality is integrated within various PrimeReact components.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("tooltip")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Positions</h3>
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-3">
                            <InputText type="text" placeholder="Right" tooltip="Enter your username" />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <InputText type="text" placeholder="Top" tooltip="Enter your username" tooltipOptions={{position: 'top'}} />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <InputText type="text" placeholder="Bottom" tooltip="Enter your username" tooltipOptions={{position: 'bottom'}} />
                        </div>
                        <div className="p-col-12 p-md-3">
                            <InputText type="text" placeholder="Left" tooltip="Enter your username" tooltipOptions={{position: 'left'}} />
                        </div>
                    </div>

                    <h3>Focus and Blur</h3>
                    <InputText type="text" placeholder="Focus" tooltip="Enter your username" tooltipOptions={{event: 'focus'}} />

                    <h3>Button</h3>
                    <Button type="button" label="Save" icon="pi pi-check" tooltip="Click to proceed" />
                </div>

                <TooltipDoc />
            </div>
        )
    }
}

class TooltipDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'app': {
                content: `
import React, { Component } from 'react';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';

export class TooltipDemo extends Component {

    render() {
        return (
            <div>
                <h3>Positions</h3>
                <div className="p-grid p-fluid">
                    <div className="p-col-12 p-md-3">
                        <InputText type="text" placeholder="Right" tooltip="Enter your username" />
                    </div>
                    <div className="p-col-12 p-md-3">
                        <InputText type="text" placeholder="Top" tooltip="Enter your username" tooltipOptions={{position: 'top'}} />
                    </div>
                    <div className="p-col-12 p-md-3">
                        <InputText type="text" placeholder="Bottom" tooltip="Enter your username" tooltipOptions={{position: 'bottom'}} />
                    </div>
                    <div className="p-col-12 p-md-3">
                        <InputText type="text" placeholder="Left" tooltip="Enter your username" tooltipOptions={{position: 'left'}} />
                    </div>
                </div>

                <h3>Focus and Blur</h3>
                <InputText type="text" placeholder="Focus" tooltip="Enter your username" tooltipOptions={{event: 'focus'}} />

                <h3>Button</h3>
                <Button type="button" label="Save" icon="pi pi-check" tooltip="Click to proceed" />
            </div>
        )
    }
}
                `
            },
            'hooks': {
                content: `
import React from 'react';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';

const TooltipDemo = () => {

    return (
        <div>
            <h3>Positions</h3>
            <div className="p-grid p-fluid">
                <div className="p-col-12 p-md-3">
                    <InputText type="text" placeholder="Right" tooltip="Enter your username" />
                </div>
                <div className="p-col-12 p-md-3">
                    <InputText type="text" placeholder="Top" tooltip="Enter your username" tooltipOptions={{position: 'top'}} />
                </div>
                <div className="p-col-12 p-md-3">
                    <InputText type="text" placeholder="Bottom" tooltip="Enter your username" tooltipOptions={{position: 'bottom'}} />
                </div>
                <div className="p-col-12 p-md-3">
                    <InputText type="text" placeholder="Left" tooltip="Enter your username" tooltipOptions={{position: 'left'}} />
                </div>
            </div>

            <h3>Focus and Blur</h3>
            <InputText type="text" placeholder="Focus" tooltip="Enter your username" tooltipOptions={{event: 'focus'}} />

            <h3>Button</h3>
            <Button type="button" label="Save" icon="pi pi-check" tooltip="Click to proceed" />
        </div>
    )
}
                `
            },
            'ts': {
                content: `
import React from 'react';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';

const TooltipDemo = () => {

    return (
        <div>
            <h3>Positions</h3>
            <div className="p-grid p-fluid">
                <div className="p-col-12 p-md-3">
                    <InputText type="text" placeholder="Right" tooltip="Enter your username" />
                </div>
                <div className="p-col-12 p-md-3">
                    <InputText type="text" placeholder="Top" tooltip="Enter your username" tooltipOptions={{position: 'top'}} />
                </div>
                <div className="p-col-12 p-md-3">
                    <InputText type="text" placeholder="Bottom" tooltip="Enter your username" tooltipOptions={{position: 'bottom'}} />
                </div>
                <div className="p-col-12 p-md-3">
                    <InputText type="text" placeholder="Left" tooltip="Enter your username" tooltipOptions={{position: 'left'}} />
                </div>
            </div>

            <h3>Focus and Blur</h3>
            <InputText type="text" placeholder="Focus" tooltip="Enter your username" tooltipOptions={{event: 'focus'}} />

            <h3>Button</h3>
            <Button type="button" label="Save" icon="pi pi-check" tooltip="Click to proceed" />
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

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/tooltip" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="TooltipDemo" sources={this.sources} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Getting Started</h3>
                        <p>Tooltip functionality is integrated within the the components that have support such as inputtext or buttons. Content is defined with the <i>tooltip</i> property.</p>

<CodeHighlight className="language-jsx">
{`
<InputText type="text" placeholder="Right" tooltip="Enter your username" />
<Button type="button" label="Save" icon="pi pi-check" tooltip="Click to proceed" />

`}
</CodeHighlight>

                        <h3>Position</h3>
                        <p>There are four choices to position the tooltip, default value is "right" and alternatives are "top", "bottom", "left". Position is
                        specified using <i>tooltipOptions</i> property.</p>
<CodeHighlight className="language-jsx">
{`
<InputText type="text" placeholder="Right" tooltip="Enter your username" tooltipOptions={{position: 'right'}}/>

`}
</CodeHighlight>

                        <h3>Events</h3>
                        <p>Tooltip gets displayed on hover event of its target by default, other option is the focus event to display and blur to hide.</p>
<CodeHighlight className="language-jsx">
{`
<InputText type="text" placeholder="Right" tooltip="Enter your username" tooltipOptions={{event: 'right'}}/>

`}
</CodeHighlight>

                        <h3>Delay</h3>
                        <p>Tooltip is displayed or hidden instantly by default however you may add delays using <i>showDelay</i> and <i>hideDelay</i> properties which accept a number value in terms of milliseconds.</p>
<CodeHighlight className="language-jsx">
{`
<InputText type="text" placeholder="Right" tooltip="Enter your username" tooltipOptions={{showDelay: 1000, hideDelay: 300}}/>

`}
</CodeHighlight>

                    <h3>Tooltip Options</h3>
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
                                    <td>position</td>
                                    <td>string</td>
                                    <td>right</td>
                                    <td>Position of the tooltip, valid values are right, left, top and bottom.</td>
                                </tr>
                                <tr>
                                    <td>event</td>
                                    <td>string</td>
                                    <td>hover</td>
                                    <td>Event to show the tooltip, valid values are hover and focus.</td>
                                </tr>
                                <tr>
                                    <td>hideDelay</td>
                                    <td>null</td>
                                    <td>number</td>
                                    <td>Delay to hide the tooltip in milliseconds.</td>
                                </tr>
                                <tr>
                                    <td>showDelay</td>
                                    <td>number</td>
                                    <td>null</td>
                                    <td>Delay to show the tooltip in milliseconds.</td>
                                </tr>
                                <tr>
                                    <td>className</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the tooltip.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3>Styling</h3>
                    <p>Following is the list of structural style classes</p>
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
                                    <td>p-tooltip</td>
                                    <td>Container element</td>
                                </tr>
                                <tr>
                                    <td>p-tooltip-arrow</td>
                                    <td>Arrow of the tooltip</td>
                                </tr>
                                <tr>
                                    <td>p-tooltip-text</td>
                                    <td>Text of the tooltip</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3>Dependencies</h3>
                    <p>None.</p>
                    </TabPanel>

                    {
                        this.sources && Object.entries(this.sources).map(([key, value], index) => {
                            const header = key === 'app' ? 'Source' : `${key} Source`;
                            return (
                                <TabPanel key={`source_${index}`} header={header}>
                                    {sourceButtons}

                                    <CodeHighlight className="language-javascript">
                                        {value.content}
                                    </CodeHighlight>
                                </TabPanel>
                            );
                        })
                    }
                </TabView>
            </div>
        )
    }
}
