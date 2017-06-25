import React, { Component } from 'react';
import { Rating } from '../../components/rating/Rating'
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../../components/codehighlight/CodeHighlight';

export class RatingDemo extends Component {

    constructor() {
        super();
        this.state = { val1: null, val2: undefined, val3: null, val4: 8 };
    }

    onBasicChange(event) {
        this.setState({val1: event.value});
    }

    onMessageChange(event) {
        this.setState({val2: event.value});
    }

    onNoCancelChange(event) {
        this.setState({val3: event.value});
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Rating</h1>
                        <p>Rating components is a star based selection input.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic {this.state.val1}</h3>
                    <Rating value={this.state.val1} onChange={this.onBasicChange.bind(this)}/>
                    <br />

                    <h3>Message {this.state.val2}</h3>
                    <Rating value={this.state.val2} onChange={this.onMessageChange.bind(this)} /> {this.state.val2 !== undefined && <span style={{'marginLeft': '10px'}}>{this.state.val2===null?"Rating Cancelled":"You have rated " + this.state.val2}</span>}
                    <br />

                    <h3>No Cancel {this.state.val3}</h3> 
                    <Rating value={this.state.val3} cancel={false} onChange={this.onNoCancelChange.bind(this)} />
                    <br />

                    <h3>ReadOnly</h3> 
                    <Rating value={5} readonly={true} stars={10} cancel={false} />
                    <br />

                    <h3>Disabled</h3> 
                    <Rating value={this.state.val4} disabled={true} stars={10} />
                    <br />
                </div>

                <RatingDoc />
            </div>
        )
    }
}

class RatingDoc extends Component {

    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight className="language-javascript">
                            {`
import {Rating} from 'primereact/components/rating/Rating';

`}
                        </CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Rating requires onChange method.</p>
                        <CodeHighlight className="language-markup">
                            {`
<Rating value={this.state.val1} onChange={this.onBasicChange.bind(this)}/>

`}
                        </CodeHighlight>

                        <CodeHighlight className="language-javascript">
                            {`
constructor() {
    super();
    this.state = { val1: null };
}

onBasicChange(event) {
    this.setState({val1: event.value});
}

render() {
    return (
        <Rating value={this.state.val1} onChange={this.onBasicChange.bind(this)}/>
    );
}

`}
                        </CodeHighlight>
                            <h3>Attributes</h3>
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
                                        <td>event.originalEvent: browser event <br />
                                            event.value: selected value
                                        </td>
                                        <td>Callback to invoke on rate change.</td>
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
                                        <td>ui-rating</td>
                                        <td>Container element</td>
                                    </tr>
                                    <tr>
                                        <td>ui-rating-star</td>
                                        <td>Star element</td>
                                    </tr>
                                    <tr>
                                        <td>ui-rating-star-on</td>
                                        <td>Selected star element.</td>
                                    </tr>
                                    <tr>
                                        <td>ui-rating-cancel</td>
                                        <td>Cancel icon.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>

                    <TabPanel header="Source">
                        <CodeHighlight className="language-javascript">
                            {`
export class RatingDemo extends Component {

    constructor() {
        super();
        this.state = { val1: null, val2: undefined, val3: null, val4: 8 };
    }

    onBasicChange(event) {
        this.setState({val1: event.value});
    }

    onMessageChange(event) {
        this.setState({val2: event.value});
    }

    onNoCancelChange(event) {
        this.setState({val3: event.value});
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Rating</h1>
                        <p>Rating components is a star based selection input.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic {this.state.val1}</h3>
                    <Rating value={this.state.val1} onChange={this.onBasicChange.bind(this)}/>
                    <br />

                    <h3>Message {this.state.val2}</h3>
                    <Rating value={this.state.val2} onChange={this.onMessageChange.bind(this)} /> {this.state.val2 !== undefined && <span style={{'marginLeft': '10px'}}>{this.state.val2===null?"Rating Cancelled":"You have rated " + this.state.val2}</span>}
                    <br />

                    <h3>No Cancel {this.state.val3}</h3> 
                    <Rating value={this.state.val3} cancel={false} onChange={this.onNoCancelChange.bind(this)} />
                    <br />

                    <h3>ReadOnly</h3> 
                    <Rating value={5} readonly={true} stars={10} cancel={false} />
                    <br />

                    <h3>Disabled</h3> 
                    <Rating value={this.state.val4} disabled={true} stars={10} />
                    <br />
                </div>
            </div>
        )
    }
}
`}
                        </CodeHighlight>
                    </TabPanel>
                </TabView >
            </div>
        )
    }
}