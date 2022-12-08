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
                                <td>shape</td>
                                <td>string</td>
                                <td>rectangle</td>
                                <td>Shape of the element, options are "rectangle" and "circle".</td>
                            </tr>
                            <tr>
                                <td>size</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Size of the Circle or Square.</td>
                            </tr>
                            <tr>
                                <td>width</td>
                                <td>string</td>
                                <td>100%</td>
                                <td>Width of the element.</td>
                            </tr>
                            <tr>
                                <td>height</td>
                                <td>string</td>
                                <td>1rem</td>
                                <td>Height of the element.</td>
                            </tr>
                            <tr>
                                <td>borderRadius</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Border radius of the element, defaults to value from theme.</td>
                            </tr>
                            <tr>
                                <td>animation</td>
                                <td>string</td>
                                <td>wave</td>
                                <td>Type of the animation, valid options are "wave" and "none".</td>
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
                                <td>p-skeleton</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-skeleton-circle</td>
                                <td>Container element of a determinate progressbar.</td>
                            </tr>
                            <tr>
                                <td>p-skeleton-none</td>
                                <td>Container element of an indeterminate progressbar.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h4>Screen Reader</h4>
                    <p>
                        Skeleton uses <i>aria-hidden</i> as "true" so that it gets ignored by screen readers, any valid attribute is passed to the root element so you may customize it further if required. If multiple skeletons are grouped inside a
                        container, you may use <i>aria-busy</i> on the container element as well to indicate the loading process.
                    </p>

                    <h5>Keyboard Support</h5>
                    <p>Component does not include any interactive elements.</p>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
