import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSubSection } from '../common/docsubsection';

export function AccessibilityDoc() {
    return (
        <>
            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <p>
                        Chart components internally use <i>canvas</i> element, refer to the <a>Chart.js accessibility</a> guide for more information. The canvas element can be customized with <i>canvasProps</i> property to define aria roles and
                        properties, in addition any content inside the component is directly passed as a child of the canvas to be able to provide fallback content like a table.
                    </p>
                    <CodeHighlight>
                        {`
<Chart type="line" data={data} canvasProps={{'role': 'img', 'aria-label': 'Data'}} />

<Chart type="line" data={data}>
    <DataTable />
</Chart>
`}
                    </CodeHighlight>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
