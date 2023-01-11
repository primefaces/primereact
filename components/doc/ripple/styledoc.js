import { DocSubSection } from '../common/docsubsection';

export function StyleDoc() {
    return (
        <>
            <DocSubSection id="style" label="Style">
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
            </DocSubSection>
        </>
    );
}
