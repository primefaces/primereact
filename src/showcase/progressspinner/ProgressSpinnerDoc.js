import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class ProgressSpinnerDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

export class ProgressSpinnerDemo extends Component {

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Basic</h5>
                    <ProgressSpinner />

                    <h5>Custom</h5>
                    <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="#EEEEEE" animationDuration=".5s"/>
                </div>
            </div>
        );
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

const ProgressSpinnerDemo = () => {
    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <ProgressSpinner />

                <h5>Custom</h5>
                <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="#EEEEEE" animationDuration=".5s"/>
            </div>
        </div>
    );
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

const ProgressSpinnerDemo = () => {
    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <ProgressSpinner />

                <h5>Custom</h5>
                <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="#EEEEEE" animationDuration=".5s"/>
            </div>
        </div>
    );
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
import { ProgressSpinner } from 'primereact/progressspinner';
`}
</CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>ProgressSpinner is defined using ProgressSpinner element.</p>
<CodeHighlight>
{`
<ProgressSpinner/>
`}
</CodeHighlight>

                        <h5>Colors</h5>
                        <p>Colors of the spinner can be changed by overriding the keyframes animation</p>
<CodeHighlight lang="js">
{`
@keyframes ui-progress-spinner-color {
    100%,
    0% {
        stroke: #d62d20;
    }
    40% {
        stroke: #0057e7;
    }
    66% {
        stroke: #008744;
    }
    80%,
    90% {
        stroke: #ffa700;
    }
}
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
                                        <td>strokeWidth</td>
                                        <td>string</td>
                                        <td>2</td>
                                        <td>Width of the circle stroke.</td>
                                    </tr>
                                    <tr>
                                        <td>fill</td>
                                        <td>string</td>
                                        <td>null</td>
                                        <td>Color for the background of the circle.</td>
                                    </tr>
                                    <tr>
                                        <td>animationDuration</td>
                                        <td>string</td>
                                        <td>2s</td>
                                        <td>Duration of the rotate animation.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h5>Styling</h5>
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
                                        <td>p-progress-spinner</td>
                                        <td>Container element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-progress-circle</td>
                                        <td>SVG element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-progress-path</td>
                                        <td>Circle element.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Dependencies</h5>
                        <p>None.</p>
                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'ProgressSpinnerDemo', sources: this.sources })
                    }
                </TabView>
            </div>
        )
    }

}
