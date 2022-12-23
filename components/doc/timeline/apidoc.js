import Link from 'next/link';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>

            <DocSubSection id="properties" label="Properties">
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
                                <td>array</td>
                                <td>null</td>
                                <td>An array of events to display.</td>
                            </tr>
                            <tr>
                                <td>align</td>
                                <td>string</td>
                                <td>left</td>
                                <td>Position of the timeline bar relative to the content. Valid values are "left", "right for vertical layout and "top", "bottom" for horizontal layout.</td>
                            </tr>
                            <tr>
                                <td>layout</td>
                                <td>string</td>
                                <td>vertical</td>
                                <td>Orientation of the timeline, valid values are "vertical" and "horizontal".</td>
                            </tr>
                            <tr>
                                <td>content</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template of the content.</td>
                            </tr>
                            <tr>
                                <td>marker</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template content allows placing a custom event marker instead of the default one.</td>
                            </tr>
                            <tr>
                                <td>opposite</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template content to be placed at the other side of the bar.</td>
                            </tr>
                            <tr>
                                <td>dataKey</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Name of the field that uniquely identifies a record in the data. Should be a unique business key to prevent re-rendering.</td>
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
                                <td>Style class of the component.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
            <DocSubSection id="styling" label="Styling">
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
                                <td>p-timeline</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-timeline-left</td>
                                <td>Container element when alignment is left.</td>
                            </tr>
                            <tr>
                                <td>p-timeline-right</td>
                                <td>Container element when alignment is right.</td>
                            </tr>
                            <tr>
                                <td>p-timeline-top</td>
                                <td>Container element when alignment is top.</td>
                            </tr>
                            <tr>
                                <td>p-timeline-bottom</td>
                                <td>Container element when alignment is bottom.</td>
                            </tr>
                            <tr>
                                <td>p-timeline-alternate</td>
                                <td>Container element when alignment is alternating.</td>
                            </tr>
                            <tr>
                                <td>p-timeline-vertical</td>
                                <td>Container element of a vertical timeline.</td>
                            </tr>
                            <tr>
                                <td>p-timeline-horizontal</td>
                                <td>Container element of a horizontal timeline.</td>
                            </tr>
                            <tr>
                                <td>p-timeline-event</td>
                                <td>Event element.</td>
                            </tr>
                            <tr>
                                <td>p-timeline-event-opposite</td>
                                <td>Opposite of an event content.</td>
                            </tr>
                            <tr>
                                <td>p-timeline-event-content</td>
                                <td>Event content.</td>
                            </tr>
                            <tr>
                                <td>p-timeline-event-separator</td>
                                <td>Separator element of an event.</td>
                            </tr>
                            <tr>
                                <td>p-timeline-event-marker</td>
                                <td>Marker element of an event.</td>
                            </tr>
                            <tr>
                                <td>p-timeline-event-connector</td>
                                <td>Connector element of an event.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>Timeline uses a semantic ordered list element to list the events. No specific role is enforced, still you may use any aria role and attributes as any valid attribute is passed to the list element.</p>

                    <h5>Keyboard Support</h5>
                    <p>Component does not include any interactive elements.</p>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
