import React, { Component } from 'react';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class RatingDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Rating } from 'primereact/rating';

export class RatingDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            val1: null,
            val2: null
        };
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Basic {this.state.val1}</h5>
                    <Rating value={this.state.val1} onChange={(e) => this.setState({val1: e.value})} />

                    <h5>Without Cancel</h5>
                    <Rating value={this.state.val2} cancel={false} onChange={(e) => this.setState({val2: e.value})} />

                    <h5>ReadOnly</h5>
                    <Rating value={5} readOnly stars={10} cancel={false} />

                    <h5>Disabled</h5>
                    <Rating value={8} disabled stars={10} />
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
import React, { useState } from 'react';
import { Rating } from 'primereact/rating';

const RatingDemo = () => {
    const [val1, setVal1] = useState(null);
    const [val2, setVal2] = useState(null);

    return (
        <div>
            <div className="card">
                <h5>Basic {val1}</h5>
                <Rating value={val1} onChange={(e) => setVal1(e.value)} />

                <h5>Without Cancel</h5>
                <Rating value={val2} cancel={false} onChange={(e) => setVal2(e.value)} />

                <h5>ReadOnly</h5>
                <Rating value={5} readOnly stars={10} cancel={false} />

                <h5>Disabled</h5>
                <Rating value={8} disabled stars={10} />
            </div>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useState } from 'react';
import { Rating } from 'primereact/rating';

const RatingDemo = () => {
    const [val1, setVal1] = useState(null);
    const [val2, setVal2] = useState(null);

    return (
        <div>
            <div className="card">
                <h5>Basic {val1}</h5>
                <Rating value={val1} onChange={(e) => setVal1(e.value)} />

                <h5>Without Cancel</h5>
                <Rating value={val2} cancel={false} onChange={(e) => setVal2(e.value)} />

                <h5>ReadOnly</h5>
                <Rating value={5} readOnly stars={10} cancel={false} />

                <h5>Disabled</h5>
                <Rating value={8} disabled stars={10} />
            </div>
        </div>
    )
}
                `
            },
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
import { Rating } from 'primereact/rating';
`}
</CodeHighlight>

                        <h5>Getting Started</h5>
                        <p>Rating is used a controlled input component with <i>value</i> and <i>onChange</i> properties.</p>

<CodeHighlight>
{`
<Rating value={value} onChange={(e) => setValue(e.value)} />
`}
</CodeHighlight>

                        <h5>Number of Stars</h5>
                        <p>Number of stars to display is defined with <i>stars</i> property, default is 5.</p>

<CodeHighlight>
{`
<Rating value={value} onChange={(e) => setValue(e.value)} stars={5} />
`}
</CodeHighlight>

                        <h5>Cancel</h5>
                        <p>A cancel icon is displayed to reset the value by default, set <i>cancel</i> as false to remove this option.</p>

<CodeHighlight>
{`
<Rating value={value} onChange={(e) => setValue(e.value)} cancel={5} />
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
                                        <td>readOnly</td>
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
                                        <td>event.originalEvent: Browser event <br />
                                            event.value: selected value
                                        </td>
                                        <td>Callback to invoke on value change.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5>Styling</h5>
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

                        <h5>Dependencies</h5>
                        <p>None.</p>
                    </TabPanel>

                    {
                        useLiveEditorTabs({ name: 'RatingDemo', sources: this.sources })
                    }
                </TabView>
            </div>
        )
    }
}
