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
                                <td>value</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Value of the rating.</td>
                            </tr>
                            <tr>
                                <td>disabled</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that the element should be disabled.</td>
                            </tr>
                            <tr>
                                <td>readOnly</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, changing the value is not possible.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the component.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>ClassName of the component.</td>
                            </tr>
                            <tr>
                                <td>stars</td>
                                <td>number</td>
                                <td>5</td>
                                <td>Number of stars.</td>
                            </tr>
                            <tr>
                                <td>cancel</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>When specified a cancel icon is displayed to allow removing the value.</td>
                            </tr>
                            <tr>
                                <td>cancelIcon</td>
                                <td>string</td>
                                <td>pi pi-ban</td>
                                <td>ClassName of the cancel icon component.</td>
                            </tr>
                            <tr>
                                <td>cancelIconProps</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Properties of the cancel icon.</td>
                            </tr>
                            <tr>
                                <td>onIcon</td>
                                <td>string</td>
                                <td>pi pi-star-fill</td>
                                <td>ClassName of the on icon component.</td>
                            </tr>
                            <tr>
                                <td>offIcon</td>
                                <td>string</td>
                                <td>pi pi-star</td>
                                <td>ClassName of the off icon component.</td>
                            </tr>
                            <tr>
                                <td>onIconProps</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Properties of the on icon.</td>
                            </tr>
                            <tr>
                                <td>offIconProps</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Properties of the off icon.</td>
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
                                <td>onChange</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.value: selected value
                                </td>
                                <td>Callback to invoke on value change.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
