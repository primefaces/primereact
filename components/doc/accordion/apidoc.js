import Link from 'next/link';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSubSection id="propertiesforaccordiontab" label="Properties For AccordionTab">
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
                                <td>header</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Orientation of tab headers.</td>
                            </tr>
                            <tr>
                                <td>disabled</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether the tab is disabled.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the tab header and content.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the tab header and content.</td>
                            </tr>
                            <tr>
                                <td>headerStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the tab header.</td>
                            </tr>
                            <tr>
                                <td>headerClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the tab header.</td>
                            </tr>
                            <tr>
                                <td>headerTemplate</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template of the tab header.</td>
                            </tr>
                            <tr>
                                <td>contentStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the tab content.</td>
                            </tr>
                            <tr>
                                <td>contentClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the tab content.</td>
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
            </DocSubSection>

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
                                <td>activeIndex</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Active index or indexes of the element. Use an array of numbers for multiple indexes. the "multiple" prop must be set to true in order to specify multiple indexes.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the element.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the element.</td>
                            </tr>
                            <tr>
                                <td>multiple</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When enabled, multiple tabs can be activated at the same time.</td>
                            </tr>
                            <tr>
                                <td>expandIcon</td>
                                <td>string</td>
                                <td>pi pi-chevron-right</td>
                                <td>Icon of a collapsed tab.</td>
                            </tr>
                            <tr>
                                <td>collapseIcon</td>
                                <td>string</td>
                                <td>pi pi-chevron-down</td>
                                <td>Icon of an expanded tab.</td>
                            </tr>
                            <tr>
                                <td>transitionOptions</td>
                                <td>object</td>
                                <td>null</td>
                                <td>
                                    The properties of{' '}
                                    <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">
                                        CSSTransition
                                    </a>{' '}
                                    can be customized, except for "nodeRef" and "in" properties.
                                </td>
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
                                <td>onTabOpen</td>
                                <td>
                                    event.originalEvent: browser event <br />
                                    event.index: Index or indexes of the tab (number or array of numbers).
                                </td>
                                <td>Callback to invoke when a tab gets expanded.</td>
                            </tr>
                            <tr>
                                <td>onTabClose</td>
                                <td>
                                    event.originalEvent: browser event <br />
                                    event.index: Index of the tab
                                </td>
                                <td>Callback to invoke when an active tab is collapsed by clicking on the header.</td>
                            </tr>
                            <tr>
                                <td>onTabChange</td>
                                <td>
                                    event.originalEvent: browser event <br />
                                    event.index: Index of the tab
                                </td>
                                <td>Callback to invoke when state of the accordion changes.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
