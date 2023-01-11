import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSubSection } from '../common/docsubsection';

export function StyleDoc() {
    return (
        <>
            <DocSubSection id="styling" label="Styling">
                <p>Following is the list of structural style classes</p>
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
                                <td>p-mention</td>
                                <td>Container element</td>
                            </tr>
                            <tr>
                                <td>p-mention-panel</td>
                                <td>Overlay panel of suggestions.</td>
                            </tr>
                            <tr>
                                <td>p-mention-items</td>
                                <td>List container of suggestions.</td>
                            </tr>
                            <tr>
                                <td>p-mention-item</td>
                                <td>List item of a suggestion.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
