import { DocSectionText } from '../common/docsectiontext';
import Link from 'next/link';

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
                            <td>p-calendar</td>
                            <td>Main container element</td>
                        </tr>
                        <tr>
                            <td>p-calendar-w-btn</td>
                            <td>Main container element when button is enabled.</td>
                        </tr>
                        <tr>
                            <td>p-calendar-timeonly</td>
                            <td>Main container element in time picker only mode.</td>
                        </tr>
                        <tr>
                            <td>p-inputtext</td>
                            <td>Input element</td>
                        </tr>
                        <tr>
                            <td>p-datepicker</td>
                            <td>Datepicker element</td>
                        </tr>
                        <tr>
                            <td>p-datepicker-inline</td>
                            <td>Datepicker element in inline mode</td>
                        </tr>
                        <tr>
                            <td>p-monthpicker</td>
                            <td>Datepicker element in month view.</td>
                        </tr>
                        <tr>
                            <td>p-monthpicker-month</td>
                            <td>Month cell in month view mode.</td>
                        </tr>
                        <tr>
                            <td>p-datepicker-touch-ui</td>
                            <td>Datepicker element in touch ui mode.</td>
                        </tr>
                        <tr>
                            <td>p-datepicker-calendar</td>
                            <td>Table containing dates of a month.</td>
                        </tr>
                        <tr>
                            <td>p-datepicker-current-day</td>
                            <td>Cell of selected date.</td>
                        </tr>
                        <tr>
                            <td>p-datepicker-today</td>
                            <td>Cell of today's date.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
