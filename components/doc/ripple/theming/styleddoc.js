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
                            <td>p-ripple</td>
                            <td>Host element.</td>
                        </tr>
                        <tr>
                            <td>p-ink</td>
                            <td>Ripple element.</td>
                        </tr>
                        <tr>
                            <td>p-ink-active</td>
                            <td>Ripple element during animating.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
