import Link from 'next/link';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSubSection id="propertiesfortabpanel" label="Properties For TabPanel / TabView">
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
                                <td>any</td>
                                <td>null</td>
                                <td>Orientation of tab headers.</td>
                            </tr>
                            <tr>
                                <td>headerTemplate</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Header template of the tab to customize more.</td>
                            </tr>
                            <tr>
                                <td>leftIcon</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Icons can be placed at left of a header.</td>
                            </tr>
                            <tr>
                                <td>rightIcon</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Icons can be placed at right of a header.</td>
                            </tr>
                            <tr>
                                <td>disabled</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether the tab is disabled.</td>
                            </tr>
                            <tr>
                                <td>closable</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Defines if tab can be removed.</td>
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
                                <td>id</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Unique identifier of the element.</td>
                            </tr>
                            <tr>
                                <td>activeIndex</td>
                                <td>number</td>
                                <td>0</td>
                                <td>Active index of the TabView.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the tabview.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the tabview.</td>
                            </tr>
                            <tr>
                                <td>renderActiveOnly</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to render the contents of the selected tab or all tabs.</td>
                            </tr>
                            <tr>
                                <td>scrollable</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When enabled displays buttons at each side of the tab headers to scroll the tab list.</td>
                            </tr>
                            <tr>
                                <td>panelContainerStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the panels container of the tabview.</td>
                            </tr>
                            <tr>
                                <td>panelContainerClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the panels container of the tabview.</td>
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
                                <td>onBeforeTabChange</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.index: Index of the selected tab
                                </td>
                                <td>Callback to invoke before an active tab is changed. Return false to prevent tab from changing.</td>
                            </tr>
                            <tr>
                                <td>onBeforeTabClose</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.index: Index of the selected tab
                                </td>
                                <td>Callback to invoke before an active tab is close. Return false to prevent tab from closing.</td>
                            </tr>
                            <tr>
                                <td>onTabChange</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.index: Index of the selected tab
                                </td>
                                <td>Callback to invoke when an active tab is changed.</td>
                            </tr>
                            <tr>
                                <td>onTabClose</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.index: Index of the selected tab
                                </td>
                                <td>Callback to invoke when an active tab is closed.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="methods" label="Methods">
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
                                <td>reset</td>
                                <td>-</td>
                                <td>Resets all states.</td>
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
                                <td>p-tabview</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-tabview-nav</td>
                                <td>Container of headers.</td>
                            </tr>
                            <tr>
                                <td>p-tabview-selected</td>
                                <td>Selected tab header.</td>
                            </tr>
                            <tr>
                                <td>p-tabview-panels</td>
                                <td>Container panels.</td>
                            </tr>
                            <tr>
                                <td>p-tabview-panel</td>
                                <td>Content of a tab.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h4>Screen Reader</h4>
                    <p>
                        TabView container is defined with the <i>tablist</i> role, as any attribute is passed to the container element <i>aria-labelledby</i> can be optionally used to specify an element to describe the TabView. Each tab header has a{' '}
                        <i>tab</i> role along with <i>aria-selected</i> state attribute and <i>aria-controls</i> to refer to the corresponding tab content element. The content element of each tab has <i>tabpanel</i> role, an id to match the
                        <i>aria-controls</i> of the header and <i>aria-labelledby</i> reference to the header as the accessible name.
                    </p>

                    <h4>Tab Header Keyboard Support</h4>
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
                                    <td>Moves focus through the header.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>enter</i>
                                    </td>
                                    <td>Activates the focused tab header.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>space</i>
                                    </td>
                                    <td>Activates the focused tab header.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>right arrow</i>
                                    </td>
                                    <td>Moves focus to the next header.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>left arrow</i>
                                    </td>
                                    <td>Moves focus to the previous header.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>home</i>
                                    </td>
                                    <td>Moves focus to the last header.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>end</i>
                                    </td>
                                    <td>Moves focus to the first header.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
