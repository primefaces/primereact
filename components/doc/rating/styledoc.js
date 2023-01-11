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
                                <td>p-rating</td>
                                <td>Container element</td>
                            </tr>
                            <tr>
                                <td>p-rating-item</td>
                                <td>Each item element</td>
                            </tr>
                            <tr>
                                <td>p-rating-item-active</td>
                                <td>Selected item elements.</td>
                            </tr>
                            <tr>
                                <td>p-rating-cancel-item</td>
                                <td>Cancel item element.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
