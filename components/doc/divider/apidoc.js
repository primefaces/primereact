import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <h3>Properties</h3>
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

            <h3>Styling</h3>
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
                            <td>p-divider</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-divider-horizontal</td>
                            <td>Container element in horizontal layout.</td>
                        </tr>
                        <tr>
                            <td>p-divider-vertical</td>
                            <td>Container element in vertical layout.</td>
                        </tr>
                        <tr>
                            <td>p-divider-solid</td>
                            <td>Container element with solid border.</td>
                        </tr>
                        <tr>
                            <td>p-divider-dashed</td>
                            <td>Container element with dashed border.</td>
                        </tr>
                        <tr>
                            <td>p-divider-dotted</td>
                            <td>Container element with dotted border.</td>
                        </tr>
                        <tr>
                            <td>p-divider-left</td>
                            <td>Container element with content aligned to left.</td>
                        </tr>
                        <tr>
                            <td>p-divider-right</td>
                            <td>Container element with content aligned to right.</td>
                        </tr>
                        <tr>
                            <td>p-divider-center</td>
                            <td>Container element with content aligned to center.</td>
                        </tr>
                        <tr>
                            <td>p-divider-bottom</td>
                            <td>Container element with content aligned to bottom.</td>
                        </tr>
                        <tr>
                            <td>p-divider-top</td>
                            <td>Container element with content aligned to top.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Accessibility</h3>
            <DevelopmentSection>
                <h4>Screen Reader</h4>
                <p>
                    Divider uses a <i>separator</i> role with <i>aria-orientation</i> set to either "horizontal" or "vertical".
                </p>

                <h3>Keyboard Support</h3>
                <p>Component does not include any interactive elements.</p>
            </DevelopmentSection>
            <h3>Dependencies</h3>
            <p>None.</p>
        </>
    );
}
