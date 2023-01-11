import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
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
                                <td>label</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Text of the button.</td>
                            </tr>
                            <tr>
                                <td>icon</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Name of the icon or JSX.Element for icon.</td>
                            </tr>
                            <tr>
                                <td>iconPos</td>
                                <td>string</td>
                                <td>left</td>
                                <td>Position of the icon, valid values are "left", "right", "top" and "bottom".</td>
                            </tr>
                            <tr>
                                <td>badge</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Value of the badge.</td>
                            </tr>
                            <tr>
                                <td>badgeClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the badge.</td>
                            </tr>
                            <tr>
                                <td>tooltip</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Content of the tooltip.</td>
                            </tr>
                            <tr>
                                <td>tooltipOptions</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Configuration of the tooltip, refer to the tooltip documentation for more information.</td>
                            </tr>
                            <tr>
                                <td>disabled</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that the element should be disabled.</td>
                            </tr>
                            <tr>
                                <td>visible</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>When present, it specifies that the element should be visible.</td>
                            </tr>
                            <tr>
                                <td>loading</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Display loading icon of the button</td>
                            </tr>
                            <tr>
                                <td>loadingIcon</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Name of the loading icon or JSX.Element for loading icon.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
