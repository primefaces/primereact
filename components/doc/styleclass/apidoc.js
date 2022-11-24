import Link from 'next/link';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>

            <DocSubSection id="targetelement" label="Target Element">
                <p>
                    Target element is defined with the <i>selector</i> prop that can either be a valid css query or one of the keywords below.
                </p>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>@next</td>
                                <td>Next element.</td>
                            </tr>
                            <tr>
                                <td>@prev</td>
                                <td>Previous element.</td>
                            </tr>
                            <tr>
                                <td>@parent</td>
                                <td>Parent element.</td>
                            </tr>
                            <tr>
                                <td>@grandparent</td>
                                <td>Parent element of the parent.</td>
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
                                <td>selector</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Selector to define the target element.</td>
                            </tr>
                            <tr>
                                <td>nodeRef</td>
                                <td>any</td>
                                <td>null</td>
                                <td>A React reference to DOM element that need to specify. Required</td>
                            </tr>
                            <tr>
                                <td>enterClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class to add when item begins to get displayed.</td>
                            </tr>
                            <tr>
                                <td>enterActiveClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class to add during enter animation.</td>
                            </tr>
                            <tr>
                                <td>enterToClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class to add when enter animation is completed.</td>
                            </tr>
                            <tr>
                                <td>leaveClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class to add when item begins to get hidden.</td>
                            </tr>
                            <tr>
                                <td>leaveActiveClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class to add during leave animation</td>
                            </tr>
                            <tr>
                                <td>leaveToClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class to add when leave animation is completed.</td>
                            </tr>
                            <tr>
                                <td>hideOnOutsideClick</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether to trigger leave animation when outside of the element is clicked.</td>
                            </tr>
                            <tr>
                                <td>toggleClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Adds or removes a class when no enter-leave animation is required.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
            <DocSubSection id="events" label="Events">
                <p>Component has no events.</p>
            </DocSubSection>
        </>
    );
}
