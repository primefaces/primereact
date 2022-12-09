import { Timeline } from '../../lib/timeline/Timeline';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function HorizontalDoc(props) {
    const events = ['2020', '2021', '2022', '2023'];

    const code = {
        basic: `
<h6>Top Align</h6>
<Timeline value={events} layout="horizontal" align="top" content={(item) => item} />
<h6>Bottom Align</h6>
<Timeline value={events} layout="horizontal" align="bottom" content={(item) => item} />
<h6>Alternate Align</h6>
<Timeline value={events} layout="horizontal" align="alternate" content={(item) => item} opposite={<span>&nbsp;</span>} />
        `,
        javascript: `
import { Timeline } from 'primereact/timeline';

export default function HorizontalDoc() {
    const events = ['2020', '2021', '2022', '2023'];
        
    return (
        <div className="card">
            <h6>Top Align</h6>
            <Timeline value={events} layout="horizontal" align="top" content={(item) => item} />
        
            <h6>Bottom Align</h6>
            <Timeline value={events} layout="horizontal" align="bottom" content={(item) => item} />
        
            <h6>Alternate Align</h6>
            <Timeline value={events} layout="horizontal" align="alternate" content={(item) => item} opposite={<span>&nbsp;</span>} />
    </div>
    )
}
        `,
        typescript: `
import { Timeline } from 'primereact/timeline';

export default function HorizontalDoc() {
    const events = ['2020', '2021', '2022', '2023'];

    return (
        <div className="card">
            <h6>Top Align</h6>
            <Timeline value={events} layout="horizontal" align="top" content={(item) => item} />

            <h6>Bottom Align</h6>
            <Timeline value={events} layout="horizontal" align="bottom" content={(item) => item} />

            <h6>Alternate Align</h6>
            <Timeline value={events} layout="horizontal" align="alternate" content={(item) => item} opposite={<span>&nbsp;</span>} />
    </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Horizontal Connect content.</p>
            </DocSectionText>
            <div className="card">
                <h6>Top Align</h6>
                <Timeline value={events} layout="horizontal" align="top" content={(item) => item} />

                <h6>Bottom Align</h6>
                <Timeline value={events} layout="horizontal" align="bottom" content={(item) => item} />

                <h6>Alternate Align</h6>
                <Timeline value={events} layout="horizontal" align="alternate" content={(item) => item} opposite={<span>&nbsp;</span>} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
