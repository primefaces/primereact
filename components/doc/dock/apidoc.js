import Link from 'next/link';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSubSection id="menumodelapi" label="MenuModel API">
                <p>
                    Dock uses the common MenuModel API to define the items, visit <Link href="/menumodel">MenuModel API</Link> for details.
                </p>
            </DocSubSection>

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
                                <td>model</td>
                                <td>object</td>
                                <td>null</td>
                                <td>MenuModel instance to define the action items.</td>
                            </tr>
                            <tr>
                                <td>position</td>
                                <td>string</td>
                                <td>bottom</td>
                                <td>Position of element. Valid values are 'bottom', 'top', 'left' and 'right'.</td>
                            </tr>
                            <tr>
                                <td>header</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template of header element.</td>
                            </tr>
                            <tr>
                                <td>footer</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template of footer element.</td>
                            </tr>
                            <tr>
                                <td>magnification</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Whether to allow scale animation.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
