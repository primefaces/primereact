import Link from "next/link";
import { CodeHighlight } from "../common/codehighlight";
import { DevelopmentSection } from "../common/developmentsection";
import { DocSectionText } from "../common/docsectiontext";

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <h3>Properties</h3>
            <p>Any valid attribute is passed to the root element implicitly, extended properties are as follows;</p>
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
                            <td>0</td>
                            <td>Value of the component.</td>
                        </tr>
                        <tr>
                            <td>animate</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When enabled, displays an animation on click of the slider bar.</td>
                        </tr>
                        <tr>
                            <td>min</td>
                            <td>number</td>
                            <td>0</td>
                            <td>Mininum boundary value.</td>
                        </tr>
                        <tr>
                            <td>max</td>
                            <td>number</td>
                            <td>100</td>
                            <td>Maximum boundary value.</td>
                        </tr>
                        <tr>
                            <td>orientation</td>
                            <td>string</td>
                            <td>horizontal</td>
                            <td>Orientation of the slider, valid values are horizontal and vertical.</td>
                        </tr>
                        <tr>
                            <td>step</td>
                            <td>number</td>
                            <td>1</td>
                            <td>Step factor to increment/decrement the value.</td>
                        </tr>
                        <tr>
                            <td>range</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When speficed, allows two boundary values to be picked.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the component.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the element.</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that the component should be disabled.</td>
                        </tr>
                        <tr>
                            <td>tabIndex</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Index of the element in tabbing order.</td>
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
                            <td>
                                event.originalEvent: Slide event <br />
                                event.value: New value.
                            </td>
                            <td>Callback to invoke on value change via slide.</td>
                        </tr>
                        <tr>
                            <td>onSlideEnd</td>
                            <td>
                                event.originalEvent: Slide event <br />
                                event.value: New value.
                            </td>
                            <td>Callback to invoke when slide ends.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Styling</h3>
            <p>
                Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.
            </p>
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
                            <td>p-slider</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-slider-handle</td>
                            <td>Handle element.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Accessibility</h3>
            <DevelopmentSection>
                <h4>Screen Reader</h4>
                <p>
                    Slider element component uses <i>slider</i> role on the handle in addition to the <i>aria-orientation</i>, <i>aria-valuemin</i>, <i>aria-valuemax</i> and <i>aria-valuenow</i> attributes. Value to describe the component can
                    be defined using
                    <i>aria-labelledby</i> and <i>aria-label</i> props.
                </p>
                <CodeHighlight>
                    {`
<span id="label_number">Number</span>
<Slider aria-labelledby="label_number" />

<Slider aria-label="Number" />
`}
                </CodeHighlight>
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
                                    <i>tab</i>
                                </td>
                                <td>Moves focus to the slider.</td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="inline-flex flex-column">
                                        <i className="mb-1">left arrow</i>
                                        <i>up arrow</i>
                                    </span>
                                </td>
                                <td>Decrements the value.</td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="inline-flex flex-column">
                                        <i className="mb-1">right arrow</i>
                                        <i>down arrow</i>
                                    </span>
                                </td>
                                <td>Increments the value.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>home</i>
                                </td>
                                <td>Set the minimum value.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>end</i>
                                </td>
                                <td>Set the maximum value.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>page up</i>
                                </td>
                                <td>Increments the value by 10 steps.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>page down</i>
                                </td>
                                <td>Decrements the value by 10 steps.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DevelopmentSection>
            
            <h4>Dependencies</h4>
            <p>None.</p>
        </>
    )
}