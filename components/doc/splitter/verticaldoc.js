import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Splitter, SplitterPanel } from '@/components/lib/splitter/Splitter';

export function VerticalDoc(props) {
    const code = {
        basic: `
<Splitter style={{ height: '300px' }} layout="vertical">
    <SplitterPanel className="flex align-items-center justify-content-center">Panel 1</SplitterPanel>
    <SplitterPanel className="flex align-items-center justify-content-center">Panel 2</SplitterPanel>
</Splitter>
        `,
        javascript: `
import React from 'react'; 
import { Splitter, SplitterPanel } from 'primereact/splitter';

export default function VerticalDemo() {
    return (
        <Splitter style={{ height: '300px' }} layout="vertical">
            <SplitterPanel className="flex align-items-center justify-content-center">Panel 1</SplitterPanel>
            <SplitterPanel className="flex align-items-center justify-content-center">Panel 2</SplitterPanel>
        </Splitter>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Splitter, SplitterPanel } from 'primereact/splitter';

export default function VerticalDemo() {
    return (
        <Splitter style={{ height: '300px' }} layout="vertical">
            <SplitterPanel className="flex align-items-center justify-content-center">Panel 1</SplitterPanel>
            <SplitterPanel className="flex align-items-center justify-content-center">Panel 2</SplitterPanel>
        </Splitter>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Panels are displayed as stacked by setting the <i>layout</i> to <i>vertical</i>.
                </p>
            </DocSectionText>
            <div className="card">
                <Splitter style={{ height: '300px' }} layout="vertical">
                    <SplitterPanel className="flex align-items-center justify-content-center">Panel 1</SplitterPanel>
                    <SplitterPanel className="flex align-items-center justify-content-center">Panel 2</SplitterPanel>
                </Splitter>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
