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
                                <td>An array of objects to display.</td>
                            </tr>
                            <tr>
                                <td>page</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Index of the first item.</td>
                            </tr>
                            <tr>
                                <td>header</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Label of header.</td>
                            </tr>
                            <tr>
                                <td>footer</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Label of footer.</td>
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
                            <tr>
                                <td>itemTemplate</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Function that gets an item in the value and returns the content for it.</td>
                            </tr>
                            <tr>
                                <td>circular</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Defines if scrolling would be infinite.</td>
                            </tr>
                            <tr>
                                <td>showIndicators</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to display indicator container.</td>
                            </tr>
                            <tr>
                                <td>showNavigators</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to display navigation buttons in container.</td>
                            </tr>
                            <tr>
                                <td>circular</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Defines if scrolling would be infinite.</td>
                            </tr>
                            <tr>
                                <td>autoplayInterval</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Time in milliseconds to scroll items automatically.</td>
                            </tr>
                            <tr>
                                <td>numVisible</td>
                                <td>number</td>
                                <td>1</td>
                                <td>Number of items per page.</td>
                            </tr>
                            <tr>
                                <td>numScroll</td>
                                <td>number</td>
                                <td>1</td>
                                <td>Number of items to scroll.</td>
                            </tr>
                            <tr>
                                <td>responsiveOptions</td>
                                <td>any</td>
                                <td>null</td>
                                <td>An array of options for responsive design.</td>
                            </tr>
                            <tr>
                                <td>orientation</td>
                                <td>string</td>
                                <td>horizontal</td>
                                <td>Specifies the layout of the component, valid values are "horizontal" and "vertical".</td>
                            </tr>
                            <tr>
                                <td>verticalViewPortHeight</td>
                                <td>string</td>
                                <td>300px</td>
                                <td>Height of the viewport in vertical layout.</td>
                            </tr>
                            <tr>
                                <td>contentClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of main content.</td>
                            </tr>
                            <tr>
                                <td>containerClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the viewport container.</td>
                            </tr>
                            <tr>
                                <td>indicatorsContentClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the paginator items.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="events" label="Events">
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
                                <td>onPageChange</td>
                                <td>event.page = Value of the new page.</td>
                                <td>Callback to invoke after scroll.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
