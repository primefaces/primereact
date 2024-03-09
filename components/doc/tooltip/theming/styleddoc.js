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
                            <td>p-tooltip</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-tooltip-arrow</td>
                            <td>Arrow of the tooltip</td>
                        </tr>
                        <tr>
                            <td>p-tooltip-text</td>
                            <td>Text of the tooltip</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
