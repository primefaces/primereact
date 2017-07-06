import React, {Component} from 'react';
import {Link} from 'react-router';
import {Tooltip} from '../../components/tooltip/Tooltip';
import {InputText} from '../../components/inputtext/InputText';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../../components/codehighlight/CodeHighlight';

export class TooltipDemo extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Tooltip</h1>
                        <p>Tooltip provides advisory information for a component.</p>
                    </div>
                </div>
                <div className="content-section implementation">
                    <h3 className="first">Positions</h3>
                    <div className="ui-g ui-fluid">
                        <div className="ui-g-12 ui-md-3">
                            <Tooltip tooltipEvent="hover" title='Enter your username' tooltipPosition='right' >
                                <InputText type="text" placeholder="Right"/>
                            </Tooltip>
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <Tooltip tooltipEvent="hover" title='Enter your username' tooltipPosition='top' >
                                <InputText type="text" placeholder="Top"/>
                            </Tooltip>
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <Tooltip tooltipEvent="hover" title='Enter your username' tooltipPosition='bottom' >
                                <InputText type="text" placeholder="Bottom"/>
                            </Tooltip>
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <Tooltip tooltipEvent="hover" title='Enter your username' tooltipPosition='left' >
                                <InputText type="text" placeholder="Left"/>
                            </Tooltip>
                        </div>
                    </div>
                    <h3 className="first">Focus and Blur</h3>
                    <div className="ui-g ui-fluid">
                        <div className="ui-g-12 ui-md-3">
                            <Tooltip tooltipEvent="focus" tooltipPosition='right' title='Enter your username'>
                                <InputText type="text" placeholder="Right"/>
                            </Tooltip>
                        </div>
                    </div>
                </div>

                <TooltipDoc/>

            </div>
        );
    }
}

class TooltipDoc extends Component {
    render() {
        return (
            <div className="content-section source">
                <TabView effect="fade">
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight className="language-javascript">
                            {`
import {Tooltip} from 'primereact/components/tooltip/Tooltip';

`}</CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Tooltip is defined using Tooltip element.</p>
                        <CodeHighlight className="language-markup">
                            {`
<Tooltip tooltipEvent="hover" title='Enter your username' >
    <InputText type="text" placeholder="Right"/>
</Tooltip>

`}
                        </CodeHighlight>

                        <h3>Position</h3>
                        <p>There are four choices to position the tooltip, default value is "right" and alternatives are "top", "bottom", "left". Position is specified using tooltipPosition attribute.</p>
                        <CodeHighlight className="language-markup">
                            {`
<Tooltip tooltipEvent="hover" title='Enter your username' tooltipPosition='top' >
    <InputText type="text" placeholder="Top"/>
</Tooltip>

`}
                        </CodeHighlight>

                        <h3>Events</h3>
                        <p>Tooltip gets displayed on hover event of its target by default, other option is the focus event to display and blur to hide.</p>
                        <CodeHighlight className="language-markup">
                            {`
<Tooltip tooltipEvent="hover" title='Enter your username' tooltipPosition='right' tooltipEvent='focus'>
    <InputText type="text" placeholder="Right"/>
</Tooltip>

`}
                        </CodeHighlight>

                        <h3>Delay</h3>
                        <p>Tooltip is displayed or hidden instantly by default however you may add delays using showDelay and hideDelay properties which accept a number value in terms of milliseconds.</p>
                        <CodeHighlight className="language-markup">
                            {`
<Tooltip tooltipEvent="hover" title='Enter your username' tooltipPosition='right' tooltipEvent='focus' showDelay={1000} hideDelay={500}>
    <InputText type="text" placeholder="Right"/>
</Tooltip>

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
                                    <td>positionStyle</td>
                                    <td>string</td>
                                    <td>absolute</td>
                                    <td>Type of CSS position.</td>
                                </tr>
                                <tr>
                                    <td>tooltipDisabled</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When present, it specifies that the component should be disabled.</td>
                                </tr>
                                <tr>
                                    <td>hideDelay</td>
                                    <td>number</td>
                                    <td>null</td>
                                    <td>Delay to hide the tooltip in milliseconds.</td>
                                </tr>
                                <tr>
                                    <td>showDelay</td>
                                    <td>number</td>
                                    <td>null</td>
                                    <td>Delay to show the tooltip in milliseconds.</td>
                                </tr>
                                <tr>
                                    <td>tooltipStyleClass</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the tooltip.</td>
                                </tr>
                                <tr>
                                    <td>escape</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>By default the tooltip contents are rendered as text. Set to false to support html tags in the content</td>
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
export class TooltipDemo extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Tooltip</h1>
                        <p>Tooltip provides advisory information for a component.</p>
                    </div>
                </div>
                <div className="content-section implementation">
                    <h3 className="first">Positions</h3>
                    <div className="ui-g ui-fluid">
                        <div className="ui-g-12 ui-md-3">
                            <Tooltip tooltipEvent="hover" title='Enter your username' tooltipPosition='right' >
                                <InputText type="text" placeholder="Right"/>
                            </Tooltip>
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <Tooltip tooltipEvent="hover" title='Enter your username' tooltipPosition='top' >
                                <InputText type="text" placeholder="Top"/>
                            </Tooltip>
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <Tooltip tooltipEvent="hover" title='Enter your username' tooltipPosition='bottom' >
                                <InputText type="text" placeholder="Bottom"/>
                            </Tooltip>
                        </div>
                        <div className="ui-g-12 ui-md-3">
                            <Tooltip tooltipEvent="hover" title='Enter your username' tooltipPosition='left' >
                                <InputText type="text" placeholder="Left"/>
                            </Tooltip>
                        </div>
                    </div>
                    <h3 className="first">Focus and Blur</h3>
                    <div className="ui-g ui-fluid">
                        <div className="ui-g-12 ui-md-3">
                            <Tooltip tooltipEvent="focus" tooltipPosition='right' title='Enter your username'>
                                <InputText type="text" placeholder="Right"/>
                            </Tooltip>
                        </div>
                    </div>
                </div>

                <TooltipDoc/>

            </div>
        );
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