import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Splitter, SplitterPanel } from '@/components/lib/splitter/Splitter';

export function HorizontalDoc(props) {
    const code = {
        basic: `
<Splitter style={{ height: '300px' }}>
    <SplitterPanel className="flex align-items-center justify-content-center">Panel 1</SplitterPanel>
    <SplitterPanel className="flex align-items-center justify-content-center">Panel 2</SplitterPanel>
</Splitter>
        `,
        javascript: `
import React from 'react'; 
import { Splitter, SplitterPanel } from 'primereact/splitter';

export default function HorizontalDemo() {
    return (
        <Splitter style={{ height: '300px' }}>
            <SplitterPanel className="flex align-items-center justify-content-center">Panel 1</SplitterPanel>
            <SplitterPanel className="flex align-items-center justify-content-center">Panel 2</SplitterPanel>
        </Splitter>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Splitter, SplitterPanel } from 'primereact/splitter';

export default function HorizontalDemo() {
    return (
        <Splitter style={{ height: '300px' }}>
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
                <p>Splitter requires two SplitterPanel components as children which are displayed horizontally by default.</p>
            </DocSectionText>
            <div className="card">
                <Splitter style={{ height: '300px' }}>
                    <SplitterPanel className="flex align-items-center justify-content-center">Panel 1</SplitterPanel>
                    <SplitterPanel className="flex align-items-center justify-content-center">Panel 2</SplitterPanel>
                </Splitter>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
