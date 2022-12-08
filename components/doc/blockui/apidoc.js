import Link from 'next/link';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>

            <DocSubSection id="properties" label="Properties">
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
                                <td>blocked</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Controls the blocked state.</td>
                            </tr>
                            <tr>
                                <td>fullScreen</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When enabled, the whole document gets blocked.</td>
                            </tr>
                            <tr>
                                <td>baseZIndex</td>
                                <td>number</td>
                                <td>0</td>
                                <td>Base zIndex value to use in layering.</td>
                            </tr>
                            <tr>
                                <td>autoZIndex</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to automatically manage layering.</td>
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
                                <td>containerClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the container element.</td>
                            </tr>
                            <tr>
                                <td>containerStyle</td>
                                <td>React.CSSProperties</td>
                                <td>null</td>
                                <td>Inline style of the container element.</td>
                            </tr>
                            <tr>
                                <td>template</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template of mask.</td>
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
                                <td>onBlocked</td>
                                <td>-</td>
                                <td>Fired when the element gets blocked.</td>
                            </tr>
                            <tr>
                                <td>onUnblocked</td>
                                <td>-</td>
                                <td>Fired when the element gets unblocked.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
            <DocSubSection id="styling" label="Styling">
                <p>
                    Following is the list of structural style classes, for theming classes visit <Link href="/theming">theming</Link> page.
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
                                <td>p-blockui</td>
                                <td>Mask element.</td>
                            </tr>
                            <tr>
                                <td>p-blockui-document</td>
                                <td>Mask element in full screen mode.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h4>Screen Reader</h4>
                    <p>
                        BlockUI manages <i>aria-busy</i> state attribute when the UI gets blocked and unblocked. Any valid attribute is passed to the root element so additional attributes like <i>role</i> and <i>aria-live</i> can be used to define
                        live regions.
                    </p>

                    <h5>Keyboard Support</h5>
                    <p>Component does not include any interactive elements.</p>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
