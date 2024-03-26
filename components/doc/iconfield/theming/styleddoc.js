import React from 'react';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function StyledDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>List of class names used in the styled mode.</p>
            </DocSectionText>
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
                            <td>p-icon-field</td>
                            <td>Container of element.</td>
                        </tr>
                        <tr>
                            <td>p-icon-field-right</td>
                            <td>Right input icon element.</td>
                        </tr>
                        <tr>
                            <td>p-icon-field-left</td>
                            <td>Left input icon element.</td>
                        </tr>
                        <tr>
                            <td>p-input-icon</td>
                            <td>Container of input icon.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
