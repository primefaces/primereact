import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {ProgressSpinner} from '../../components/progressspinner/ProgressSpinner';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class ProgressSpinnerDemo extends Component {

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>ProgressSpinner</h1>
                        <p>ProgressSpinner is a process status indicator.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("progressSpinner")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <ProgressSpinner/>

                    <h3>Custom</h3>
                    <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="#EEEEEE" animationDuration=".5s"/>
                </div>

                <ProgressSpinnerDoc/>
            </div>
        );
    }
}

class ProgressSpinnerDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'app': {
                content: `
import React, { Component } from 'react';
import {ProgressSpinner} from 'primereact/progressspinner';

export class ProgressSpinnerDemo extends Component {

    render() {
        return (
            <div>
                <h3>Basic</h3>
                <ProgressSpinner/>

                <h3>Custom</h3>
                <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="#EEEEEE" animationDuration=".5s"/>
            </div>
        );
    }
}
                `
            },
            'hooks': {
                content: `
import React from 'react';
import {ProgressSpinner} from 'primereact/progressspinner';

const ProgressSpinnerDemo = () => {

    return (
        <div>
            <h3>Basic</h3>
            <ProgressSpinner/>

            <h3>Custom</h3>
            <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="#EEEEEE" animationDuration=".5s"/>
        </div>
    );
}
                `
            },
            'ts': {
                content: `
import React from 'react';
import {ProgressSpinner} from 'primereact/progressspinner';

const ProgressSpinnerDemo = () => {

    return (
        <div>
            <h3>Basic</h3>
            <ProgressSpinner/>

            <h3>Custom</h3>
            <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="#EEEEEE" animationDuration=".5s"/>
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

    renderSourceButtons() {
        return (
            <div className="source-button-group">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/progressspinner" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="ProgressSpinnerDemo" sources={this.sources} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView effect="fade">
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight className="language-javascript">
                            {`
import {ProgressSpinner} from 'primereact/progressspinner';

`}</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>ProgressSpinner is defined using ProgressSpinner element.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<ProgressSpinner/>

`}
                        </CodeHighlight>

                        <h3>Colors</h3>
                        <p>Colors of the spinner can be changed by overriding the keyframes animation</p>
                        <CodeHighlight className="language-markup">
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
