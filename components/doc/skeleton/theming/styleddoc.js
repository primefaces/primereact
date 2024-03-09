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
        </>
    );
}
