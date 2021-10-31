import React, { Component } from 'react';
import './AccessibilityDemo.scss';

export class AccessibilityDemo extends Component {
    render() {
        return (
            <div>
                <div className="content-section documentation accessibility-demo">
                    <h1>Accessibility</h1>
                    <p>UI Components for everyone with full support for Web Content Accessibility Guidelines (WCAG).</p>

                    <h5>WCAG</h5>
                    <p>The Web Content Accessibility Guidelines (WCAG) are part of a series of web accessibility guidelines published by the Web Accessibility Initiative (WAI)
                of the World Wide Web Consortium (W3C), the main international standards organization for the Internet.</p>

                    <h5>Accessible Components</h5>
                    <p>PrimeReact components are implemented based on the WCAG guidelines and follow the best practices outlined here.</p>
                    <ul>
                        <li>Utilize semantic HTML where suitable.</li>
                        <li>Use ARIA roles and attributes to describe an element.</li>
                        <li>Prefer elements that are keyboard accessible by default such as a button instead of a clickable div.</li>
                        <li>Implement keyboard navigation for list elements.</li>
                        <li>Use colors to support the suggested contrast ratios e.g. WCAG Level AAA requires a contrast ratio of at least 7:1 for normal text and 4.5:1 for large text.</li>
                        <li>Avoid colors that produce optical vibrations against a dark background, which can induce eye strain.</li>
                    </ul>

                    <h5>Utility CSS Classes</h5>
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
                                    <td>p-sr-only</td>
                                    <td>Element becomes visually hidden however accessibility is still available.</td>
                                </tr>
                                <tr>
                                    <td>p-link</td>
                                    <td>Renders a button as a link.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
