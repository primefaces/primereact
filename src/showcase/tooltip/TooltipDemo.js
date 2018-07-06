import React, {Component} from 'react';
import {InputText} from '../../components/inputtext/InputText';
import {Tooltip} from '../../components/tooltip/Tooltip';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class TooltipDemo extends Component {
        
    constructor() {
        super();
        this.state = {title: null, tooltipPosition: 'right'};
        this.onTooltipPosition = this.onTooltipPosition.bind(this);
    }

    onTooltipPosition(e) {
        let element = e.target;

        switch(element.id) {
            case "username":
                this.setState({title: "Enter your username", tooltipPosition: 'right'});
            break;

            case "surname":
                this.setState({title: "Enter your surname", tooltipPosition: 'top'});
            break;

            case "age":
                this.setState({title: "Enter your age", tooltipPosition: 'bottom'});
            break;

            case "email":
                this.setState({title: "Enter your email", tooltipPosition: 'left'});
            break;

            default:
            break;
        }
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Tooltip</h1>
                        <p>Tooltip provides advisory information for a component.</p>
                    </div>
                </div>

                <div className="content-section implementation">                    
                    <h3 className="first">Multiple</h3>
                    <Tooltip for={["#username", "#surname", "#age", "#email"]} title={this.state.title} tooltipPosition={this.state.tooltipPosition} onBeforeShow={this.onTooltipPosition} />

                    <div className="ui-g ui-fluid">
                        <div className="ui-g-12 ui-md-3">
                            <InputText id="username" placeholder="Right" />              
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <InputText id="surname" placeholder="Top" />
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <InputText id="age" placeholder="Bottom" />
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <InputText id="email" placeholder="Left" />
                        </div>
                    </div>
                    
                    <h3>Focus and Blur</h3>
                    <Tooltip for="#input5" title="Enter your username" tooltipEvent="focus"/>
                    <InputText id="input5" placeholder="Right" style={{marginLeft:'.5em'}}/>
                </div>

                <TooltipDoc />
            </div>
        )
    }
}

class TooltipDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {Tooltip} from 'primereact/tooltip';

`}
</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>The <i>for</i> property is required to display Tooltip. It can be a single selector or an array or selectors to attach the tooltip.</p>
                        
<CodeHighlight className="language-jsx">
{`
<Tooltip for="#inputId" title="Enter your username" />
<InputText id="inputId" />

`}
</CodeHighlight>

                        <h3>Position</h3>
                        <p>There are four choices to position the tooltip, default value is "right" and alternatives are "top", "bottom", "left". Position is 
                        specified using <i>tooltipPosition</i> attribute.</p>
<CodeHighlight className="language-jsx">
{`
<Tooltip for="#inputId" title="Enter your username" tooltipPosition="top" />
<InputText id="inputId" />

`}
</CodeHighlight>

                        <h3>Events</h3>
                        <p>Tooltip gets displayed on hover event of its target by default, other option is the focus event to display and blur to hide.</p>
<CodeHighlight className="language-jsx">
{`
<Tooltip for="#inputId" title="Enter your username" tooltipPosition="top" tooltipEvent="focus" />
<InputText id="inputId" />

`}
</CodeHighlight>

                        <h3>Delay</h3>
                        <p>Tooltip is displayed or hidden instantly by default however you may add delays using <i>showDelay</i> and <i>hideDelay</i> properties which accept a number value in terms of milliseconds.</p>
<CodeHighlight className="language-jsx">
{`
<Tooltip for="#inputId" title="Enter your username" tooltipPosition="top" tooltipEvent="focus" showDelay={1000} hideDelay={500} />
<InputText id="inputId" />

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
                                    <td>for</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Id of an element or selector or array containing ids/selectors.</td>
                                </tr>
                                <tr>
                                    <td>title</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Text of the tooltip.</td>
                                </tr>
                                <tr>
                                    <td>tooltipPosition</td>
                                    <td>string</td>
                                    <td>right</td>
                                    <td>Position of the tooltip, valid values are right, left, top and bottom.</td>
                                </tr>
                                <tr>
                                    <td>tooltipEvent</td>
                                    <td>string</td>
                                    <td>hover</td>
                                    <td>Event to show the tooltip, valid values are hover and focus.</td>
                                </tr>
                                <tr>
                                    <td>appendTo</td>
                                    <td>string | DOM element</td>
                                    <td>body</td>
                                    <td>Target element to attach the overlay, valid values are "body", "target" or a DOM Element.</td>
                                </tr>
                                <tr>
                                    <td>positionStyle</td>
                                    <td>string</td>
                                    <td>absolute</td>
                                    <td>Type of CSS position.</td>
                                </tr>
                                <tr>
                                    <td>tooltipClassName</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the tooltip.</td>
                                </tr>
                                <tr>
                                    <td>tooltipDisabled</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When present, it specifies that the component should be disabled.</td>
                                </tr>
                                <tr>
                                    <td>escape</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>By default the tooltip contents are rendered as text. Set to false to support html tags in the content</td>
                                </tr>
                                <tr>
                                    <td>hideDelay</td>
                                    <td>null</td>
                                    <td>number</td>
                                    <td>Delay to hide the tooltip in milliseconds.</td>
                                </tr>
                                <tr>
                                    <td>showDelay</td>
                                    <td>null</td>
                                    <td>number</td>
                                    <td>Delay to show the tooltip in milliseconds.</td>
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
                                    <td>onBeforeShow</td>
                                    <td>event: Browser event</td>
                                    <td>Callback before showing tooltip.</td>
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
                                    <td>ui-tooltip</td>
                                    <td>Container element</td>
                                </tr>
                                <tr>
                                    <td>ui-tooltip-arrow</td>
                                    <td>Arrow of the tooltip</td>
                                </tr>
                                <tr>
                                    <td>ui-tooltip-text</td>
                                    <td>Text of the tooltip</td>
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
import React, {Component} from 'react';
import {InputText} from 'primereact/inputtext';
import {Tooltip} from 'primereact/tooltip';

export class TooltipDemo extends Component {
        
    constructor() {
        super();
        this.state = {title: null, tooltipPosition: 'right'};
        this.onTooltipPosition = this.onTooltipPosition.bind(this);
    }

    onTooltipPosition(e) {
        let element = e.target;

        switch(element.id) {
            case "username":
                this.setState({title: "Enter your username", tooltipPosition: 'right'});
            break;

            case "surname":
                this.setState({title: "Enter your surname", tooltipPosition: 'top'});
            break;

            case "age":
                this.setState({title: "Enter your age", tooltipPosition: 'bottom'});
            break;

            case "email":
                this.setState({title: "Enter your email", tooltipPosition: 'left'});
            break;

            default:
            break;
        }
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Tooltip</h1>
                        <p>Tooltip provides advisory information for a component.</p>
                    </div>
                </div>

                <div className="content-section implementation">                    
                    <h3 className="first">Multiple</h3>
                    <Tooltip for={["#username", "#surname", "#age", "#email"]} title={this.state.title} tooltipPosition={this.state.tooltipPosition} onBeforeShow={this.onTooltipPosition} />

                    <div className="ui-g ui-fluid">
                        <div className="ui-g-12 ui-md-3">
                            <InputText id="username" placeholder="Right" />              
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <InputText id="surname" placeholder="Top" />
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <InputText id="age" placeholder="Bottom" />
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <InputText id="email" placeholder="Left" />
                        </div>
                    </div>
                    
                    <h3>Focus and Blur</h3>
                    <Tooltip for="#input5" title="Enter your username" tooltipEvent="focus"/>
                    <InputText id="input5" placeholder="Right" style={{marginLeft:'.5em'}}/>
                </div>
            </div>
        )
    }
}

`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}
