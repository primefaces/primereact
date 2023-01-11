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
                                <td>align</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Alignment of the content, options are "left", "center", "right" for horizontal layout and "top", "center", "bottom" for vertical.</td>
                            </tr>
                            <tr>
                                <td>layout</td>
                                <td>string</td>
                                <td>horizontal</td>
                                <td>Specifies the orientation, valid values are "horizontal" and "vertical".</td>
                            </tr>
                            <tr>
                                <td>type</td>
                                <td>String</td>
                                <td>solid</td>
                                <td>Border style type, default is "solid" and other options are "dashed" and "dotted".</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
