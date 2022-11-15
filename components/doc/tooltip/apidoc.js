import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
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
                            <td>id</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Unique identifier of the element.</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that the tooltip should be hidden.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the tooltip.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style of the tooltip.</td>
                        </tr>
                        <tr>
                            <td>appendTo</td>
                            <td>DOM element | string</td>
                            <td>document.body</td>
                            <td>
                                DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located.
                            </td>
                        </tr>
                        <tr>
                            <td>position</td>
                            <td>string</td>
                            <td>right</td>
                            <td>Position of the tooltip, valid values are mouse, right, left, top and bottom.</td>
                        </tr>
                        <tr>
                            <td>my</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Defines which position on the tooltip being positioned to align with the target element.</td>
                        </tr>
                        <tr>
                            <td>at</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Defines which position on the target element to align the positioned tooltip.</td>
                        </tr>
                        <tr>
                            <td>event</td>
                            <td>string</td>
                            <td>hover</td>
                            <td>Event to show the tooltip, valid values are hover, focus, and both.</td>
                        </tr>
                        <tr>
                            <td>showEvent</td>
                            <td>string</td>
                            <td>mouseenter</td>
                            <td>
                                Event to show the tooltip if the <i>event</i> property is empty.
                            </td>
                        </tr>
                        <tr>
                            <td>hideEvent</td>
                            <td>string</td>
                            <td>mouseleave</td>
                            <td>
                                Event to hide the tooltip if the <i>event</i> property is empty.
                            </td>
                        </tr>
                        <tr>
                            <td>autoZIndex</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Whether to automatically manage layering.</td>
                        </tr>
                        <tr>
                            <td>baseZIndex</td>
                            <td>number</td>
                            <td>0</td>
                            <td>Base zIndex value to use in layering.</td>
                        </tr>
                        <tr>
                            <td>mouseTrack</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether the tooltip will follow the mouse.</td>
                        </tr>
                        <tr>
                            <td>mouseTrackTop</td>
                            <td>number</td>
                            <td>5</td>
                            <td>
                                Defines top position of the tooltip in relation to the mouse when the <i>mouseTrack</i> is enabled.
                            </td>
                        </tr>
                        <tr>
                            <td>mouseTrackLeft</td>
                            <td>number</td>
                            <td>5</td>
                            <td>
                                Defines top position of the tooltip in relation to the mouse when the <i>mouseTrack</i> is enabled.
                            </td>
                        </tr>
                        <tr>
                            <td>showDelay</td>
                            <td>number</td>
                            <td>0</td>
                            <td>Delay to show the tooltip in milliseconds.</td>
                        </tr>
                        <tr>
                            <td>updateDelay</td>
                            <td>number</td>
                            <td>0</td>
                            <td>Delay to update the tooltip in milliseconds.</td>
                        </tr>
                        <tr>
                            <td>hideDelay</td>
                            <td>number</td>
                            <td>0</td>
                            <td>Delay to hide the tooltip in milliseconds.</td>
                        </tr>
                        <tr>
                            <td>autoHide</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Whether to hide tooltip when hovering over tooltip content.</td>
                        </tr>
                        <tr>
                            <td>showOnDisabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether to show tooltip for disabled elements.</td>
                        </tr>
                        <tr>
                            <td>onBeforeShow</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Callback to invoke before the tooltip is shown.</td>
                        </tr>
                        <tr>
                            <td>onBeforeHide</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Callback to invoke before the tooltip is hidden.</td>
                        </tr>
                        <tr>
                            <td>onShow</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Callback to invoke when the tooltip is shown.</td>
                        </tr>
                        <tr>
                            <td>onHide</td>
                            <td>function</td>
                            <td>null</td>
                            <td>Callback to invoke when the tooltip is hidden.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Global Tooltip</h3>
            <p>
                It is used to bind the same properties to more than one element. Each element can have its own <i>{`data-pr-{options}`}</i> properties. In this way, options can be customized among themselves. Using the <i>data-pr-tooltip</i> property
                on any element, the text to be displayed in the tooltip is determined. The target property is required for the global tooltip. It can be a selector, DOM element or selector array.
            </p>
            <CodeHighlight>
                {`
<Tooltip target=".customClassName" mouseTrack mouseTrackLeft={10} />

<img className="customClassName" data-pr-tooltip="PrimeReact-Logo" data-pr-position="left" alt="logo" src="showcase/images/logo.png" height="80px"/>
<div className="customClassName" data-pr-tooltip="This is a div element" data-pr-position="right" style={{ width: '50px', height: '50px', border: '1px solid black' }} />
`}
            </CodeHighlight>

            <h3>Custom Content</h3>
            <p>The tooltip can display custom content by using JSX elements in its children.</p>
            <CodeHighlight>
                {`
<Tooltip target=".customClassName">
    // Content
</Tooltip>
`}
            </CodeHighlight>

            <h3>Target Element Options</h3>
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
                            <td>data-pr-tooltip</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Content of the tooltip.</td>
                        </tr>
                        <tr>
                            <td>data-pr-disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that the tooltip should be hidden.</td>
                        </tr>
                        <tr>
                            <td>data-pr-classname</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the tooltip.</td>
                        </tr>
                        <tr>
                            <td>data-pr-position</td>
                            <td>string</td>
                            <td>right</td>
                            <td>Position of the tooltip, valid values are right, left, top and bottom.</td>
                        </tr>
                        <tr>
                            <td>data-pr-my</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Defines which position on the tooltip being positioned to align with the target element.</td>
                        </tr>
                        <tr>
                            <td>data-pr-at</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Defines which position on the target element to align the positioned tooltip.</td>
                        </tr>
                        <tr>
                            <td>data-pr-event</td>
                            <td>string</td>
                            <td>hover</td>
                            <td>Event to show the tooltip, valid values are hover and focus.</td>
                        </tr>
                        <tr>
                            <td>data-pr-showevent</td>
                            <td>string</td>
                            <td>mouseenter</td>
                            <td>
                                Event to show the tooltip if the <i>event</i> property is empty.
                            </td>
                        </tr>
                        <tr>
                            <td>data-pr-hideevent</td>
                            <td>string</td>
                            <td>mouseleave</td>
                            <td>
                                Event to hide the tooltip if the <i>event</i> property is empty.
                            </td>
                        </tr>
                        <tr>
                            <td>data-pr-mousetrack</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether the tooltip will follow the mouse.</td>
                        </tr>
                        <tr>
                            <td>data-pr-mousetracktop</td>
                            <td>number</td>
                            <td>5</td>
                            <td>
                                Defines top position of the tooltip in relation to the mouse when the <i>mouseTrack</i> is enabled.
                            </td>
                        </tr>
                        <tr>
                            <td>data-pr-mousetrackleft</td>
                            <td>number</td>
                            <td>5</td>
                            <td>
                                Defines top position of the tooltip in relation to the mouse when the <i>mouseTrack</i> is enabled.
                            </td>
                        </tr>
                        <tr>
                            <td>data-pr-showdelay</td>
                            <td>number</td>
                            <td>0</td>
                            <td>Delay to show the tooltip in milliseconds.</td>
                        </tr>
                        <tr>
                            <td>data-pr-updatedelay</td>
                            <td>number</td>
                            <td>0</td>
                            <td>Delay to update the tooltip in milliseconds.</td>
                        </tr>
                        <tr>
                            <td>data-pr-hidedelay</td>
                            <td>number</td>
                            <td>0</td>
                            <td>Delay to hide the tooltip in milliseconds.</td>
                        </tr>
                        <tr>
                            <td>data-pr-autohide</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Whether to hide tooltip when hovering over tooltip content.</td>
                        </tr>
                        <tr>
                            <td>data-pr-showondisabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether to show tooltip for disabled elements.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Tooltip Component Properties</h3>
            <p>
                All options in <i>Tooltip Options</i> section can be used as a property. In addition;
            </p>
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
                            <td>target</td>
                            <td>selector or DOM element</td>
                            <td>null</td>
                            <td>Target element on global tooltip option.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <CodeHighlight>
                {`
<Tooltip target=".customClassName" mouseTrack mouseTrackLeft={10} showDelay={100}/>
`}
            </CodeHighlight>

            <h3>Methods</h3>
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
                            <td>updateTargetEvents</td>
                            <td>target: target element. (Default: current target)</td>
                            <td>
                                Used to reload target events. In some cases, the target element can be hidden initially. <br />
                                Later, when this element becomes visible, it will be necessary to bind tooltip events to this element.
                            </td>
                        </tr>
                        <tr>
                            <td>loadTargetEvents</td>
                            <td>target: target element. (Default: current target)</td>
                            <td>Used to load target events.</td>
                        </tr>
                        <tr>
                            <td>unloadTargetEvents</td>
                            <td>target: target element. (Default: current target)</td>
                            <td>Used to unload target events.</td>
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

            <h3>Accessibility</h3>
            <DevelopmentSection>
                <h4>Screen Reader</h4>
                <p>
                    Tooltip component uses <i>tooltip</i> role and when it becomes visible the generated id of the tooltip is defined as the <i>aria-describedby</i> of the target.
                </p>

                <h4>Keyboard Support</h4>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Key</th>
                                <th>Function</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <i>escape</i>
                                </td>
                                <td>Closes the tooltip when focus is on the target.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DevelopmentSection>

            <h3>Dependencies</h3>
            <p>None.</p>
        </>
    );
}
