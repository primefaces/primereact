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
                                <td>style</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the element.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the element.</td>
                            </tr>
                            <tr>
                                <td>active</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether the content is displayed or not.</td>
                            </tr>
                            <tr>
                                <td>closable</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Displays a button to switch back to display mode.</td>
                            </tr>
                            <tr>
                                <td>disabled</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that the element should be disabled.</td>
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
                                <td>onOpen</td>
                                <td>event: browser event </td>
                                <td>Callback to invoke when inplace is opened.</td>
                            </tr>
                            <tr>
                                <td>onClose</td>
                                <td>event: browser event </td>
                                <td>Callback to invoke when inplace is closed.</td>
                            </tr>
                            <tr>
                                <td>onToggle</td>
                                <td>
                                    event.originalEvent: browser event <br />
                                    event.value: active state as a boolean
                                </td>
                                <td>Callback to invoke when inplace is opened or closed.</td>
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
                                <td>p-inplace</td>
                                <td>Container element</td>
                            </tr>
                            <tr>
                                <td>p-inplace-display</td>
                                <td>Display container</td>
                            </tr>
                            <tr>
                                <td>p-inplace-content</td>
                                <td>Content container</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h4>Screen Reader</h4>
                    <p>
                        Inplace component defines <i>aria-live</i> as "polite" by default, since any valid attribute is passed to the main container aria roles and attributes of the root element can be customized easily.
                    </p>
                    <p>
                        Display element uses <i>button</i> role in view mode by default, <i>displayProps</i> can be used for customizations like adding <i>aria-label</i> or <i>aria-labelledby</i> attributes to describe the content of the view mode or
                        even overriding the default role.
                    </p>
                    <p>
                        Closable inplace components displays a button with an <i>aria-label</i> that refers to the <i>aria.close</i> property of the <Link href="/locale">locale</Link> API by default, you may use
                        <i>closeButtonProps</i> to customize the element and override the default <i>aria-label</i>.
                    </p>

                    <h4>View Mode Keyboard Support</h4>
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
                                        <i>enter</i>
                                    </td>
                                    <td>Switches to content.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h4>Close Button Keyboard Support</h4>
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
                                        <i>enter</i>
                                    </td>
                                    <td>Switches to display.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>space</i>
                                    </td>
                                    <td>Switches to display.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
