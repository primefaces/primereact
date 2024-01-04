import Link from 'next/link';

import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function StyleDoc() {
    return (
        <>
            <DocSectionText id="style" label="Style">
                <p>
                    Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.
                </p>
            </DocSectionText>
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
        </>
    );
}
