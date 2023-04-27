import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function AccessibilityDoc() {
    const code = {
        basic: `
<Chart type="line" data={data} canvasProps={{'role': 'img', 'aria-label': 'Data'}} />

<Chart type="line" data={data}>
    <DataTable />
</Chart>
        `
    };

    return (
        <DevelopmentSection>
            <DocSectionText id="accessibility" label="Accessibility">
                <h3>Screen Reader</h3>
                <p>
                    Chart components internally use <i>canvas</i> element, refer to the{' '}
                    <a className="text-primary hover:underline font-semibold" href="https://www.chartjs.org/docs/latest/general/accessibility.html">
                        Chart.js accessibility
                    </a>{' '}
                    guide for more information. The canvas element can be customized with <i>canvasProps</i> property to define aria roles and properties, in addition any content inside the component is directly passed as a child of the canvas to be
                    able to provide fallback content like a table.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </DevelopmentSection>
    );
}
