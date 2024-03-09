import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function ChartJSDoc(props) {
    const code = {
        basic: `
npm install chart.js
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Chart component uses <a href="https://chartjs.org/">Chart.JS</a> underneath so it needs to be installed as a dependency.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideStackBlitz />
        </>
    );
}
