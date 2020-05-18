import React, { Component } from 'react';
import { Rating } from '../../components/rating/Rating'
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';
import { LiveEditor } from '../liveeditor/LiveEditor';

export class RatingDemo extends Component {

    constructor() {
        super();
        this.state = {
            val1: null,
            val2: null
        };
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Rating</h1>
                        <p>Rating componentsis a star based selection input.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("rating")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3 className="first">Basic {this.state.val1}</h3>
                    <Rating value={this.state.val1} onChange={(e) => this.setState({val1: e.value})} />

                    <h3>No Cancel {this.state.val2}</h3>
                    <Rating value={this.state.val2} cancel={false} onChange={(e) => this.setState({val2: e.value})} />

                    <h3>ReadOnly</h3>
                    <Rating value={5} readonly={true} stars={10} cancel={false} />

                    <h3>Disabled</h3>
                    <Rating value={8} disabled={true} stars={10} />
                </div>

                <RatingDoc />
            </div>
        )
    }
}

class RatingDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'app': {
                content: `
import React, { Component } from 'react';
import { Rating } from 'primereact/rating'

export class RatingDemo extends Component {

    constructor() {
        super();
        this.state = {
            val1: null,
            val2: null
        };
    }

    render() {
        return (
            <div>
                <h3 className="first">Basic {this.state.val1}</h3>
                <Rating value={this.state.val1} onChange={(e) => this.setState({val1: e.value})} />

                <h3>No Cancel {this.state.val2}</h3>
                <Rating value={this.state.val2} cancel={false} onChange={(e) => this.setState({val2: e.value})} />

                <h3>ReadOnly</h3>
                <Rating value={5} readonly={true} stars={10} cancel={false} />

                <h3>Disabled</h3>
                <Rating value={8} disabled={true} stars={10} />
            </div>
        )
    }
}
                `
            },
            'hooks': {
                content: `
import React, { useState } from 'react';
import { Rating } from 'primereact/rating';

const RatingDemo = () => {
    const [val1, setVal1] = useState(null);
    const [val2, setVal2] = useState(null);

    return (
        <div>
            <h3 className="first">Basic {val1}</h3>
            <Rating value={val1} onChange={(e) => setVal1(e.value)} />

            <h3>No Cancel {val2}</h3>
            <Rating value={val2} cancel={false} onChange={(e) => setVal2(e.value)} />

            <h3>ReadOnly</h3>
            <Rating value={5} readonly={true} stars={10} cancel={false} />

            <h3>Disabled</h3>
            <Rating value={8} disabled={true} stars={10} />
        </div>
    )
}
                `
            },
            'ts': {
                content: `
import React, { useState } from 'react';
import { Rating } from 'primereact/rating';

const RatingDemo = () => {
    const [val1, setVal1] = useState<number|undefined>(undefined);
    const [val2, setVal2] = useState<number|undefined>(undefined);

    return (
        <div>
            <h3 className="first">Basic {val1}</h3>
            <Rating value={val1} onChange={(e) => setVal1(e.value)} />

            <h3>No Cancel {val2}</h3>
            <Rating value={val2} cancel={false} onChange={(e) => setVal2(e.value)} />

            <h3>ReadOnly</h3>
            <Rating value={5} readonly={true} stars={10} cancel={false} />

            <h3>Disabled</h3>
            <Rating value={8} disabled={true} stars={10} />
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
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/rating" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span>View on GitHub</span>
                </a>
                <LiveEditor name="RatingDemo" sources={this.sources} />
            </div>
        )
    }

    render() {
        const sourceButtons = this.renderSourceButtons();

        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight className="language-javascript">
                            {`
import {Rating} from 'primereact/rating';

`}
                        </CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Rating is used a controlled input component with <i>value</i> and <i>onChange</i> properties.</p>

                        <CodeHighlight className="language-jsx">
{`
<Rating value={this.state.value} onChange={(e) => this.setState({value: e.value})} />

`}
                        </CodeHighlight>

                        <h3>Number of Stars</h3>
                        <p>Number of stars to display is defined with <i>stars</i> property, default is 5.</p>

                        <CodeHighlight className="language-jsx">
{`
<Rating value={this.state.value} onChange={(e) => this.setState({value: e.value})} stars={5} />

`}
                        </CodeHighlight>

                        <h3>Cancel</h3>
                        <p>A cancel icon is displayed to reset the value by default, set <i>cancel</i> as false to remove this option.</p>

                        <CodeHighlight className="language-jsx">
{`
<Rating value={this.state.value} onChange={(e) => this.setState({value: e.value})} cancel={5} />

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
                                        <td>value</td>
                                        <td>number</td>
                                        <td>null</td>
                                        <td>Value of the rating.</td>
                                    </tr>
                                    <tr>
                                        <td>disabled</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When present, it specifies that the element should be disabled.</td>
                                    </tr>
                                    <tr>
                                        <td>readonly</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>When present, changing the value is not possible.</td>
                                    </tr>
                                    <tr>
                                        <td>stars</td>
                                        <td>number</td>
                                        <td>5</td>
                                        <td>Number of stars.</td>
                                    </tr>
                                    <tr>
                                        <td>cancel</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>When specified a cancel icon is displayed to allow removing the value.</td>
                                    </tr>
                                    <tr>
                                        <td>style</td>
                                        <td>object</td>
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

                        <h3>Events</h3>
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
                                        <td>event.originalEvent: Browser event <br />
                                            event.value: selected value
                                        </td>
                                        <td>Callback to invoke on value change.</td>
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
                                        <td>p-rating</td>
                                        <td>Container element</td>
                                    </tr>
                                    <tr>
                                        <td>p-rating-star</td>
                                        <td>Star element</td>
                                    </tr>
                                    <tr>
                                        <td>p-rating-star-on</td>
                                        <td>Selected star element.</td>
                                    </tr>
                                    <tr>
                                        <td>p-rating-cancel</td>
                                        <td>Cancel icon.</td>
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
                </TabView >
            </div>
        )
    }
}
