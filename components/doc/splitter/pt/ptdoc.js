import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Splitter, SplitterPanel } from '@/components/lib/splitter/Splitter';

export function PTDoc(props) {
    const code = {
        basic: `
<Splitter pt={{ root: { style: { height: '300px' } }, gutterHandler: { className: 'bg-primary' } }}>
    <SplitterPanel pt={{ root: { className: 'flex align-items-center justify-content-center' } }}> Panel 1 </SplitterPanel>
    <SplitterPanel pt={{ root: { className: 'flex align-items-center justify-content-center' } }}> Panel 2 </SplitterPanel>
</Splitter>
        `,
        javascript: `
import React from 'react'; 
import { Splitter, SplitterPanel } from 'primereact/tabview';

export default function PTDemo() {

    return (
        <div className="card">
            <Splitter pt={{ root: { style: { height: '300px' } }, gutterHandler: { className: 'bg-primary' } }}>
                <SplitterPanel pt={{ root: { className: 'flex align-items-center justify-content-center' } }}> Panel 1 </SplitterPanel>
                <SplitterPanel pt={{ root: { className: 'flex align-items-center justify-content-center' } }}> Panel 2 </SplitterPanel>
            </Splitter>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Splitter, SplitterPanel } from 'primereact/tabview';

export default function PTDemo() {

    return (
        <div className="card">
            <Splitter pt={{ root: { style: { height: '300px' } }, gutterHandler: { className: 'bg-primary' } }}>
                <SplitterPanel pt={{ root: { className: 'flex align-items-center justify-content-center' } }}> Panel 1 </SplitterPanel>
                <SplitterPanel pt={{ root: { className: 'flex align-items-center justify-content-center' } }}> Panel 2 </SplitterPanel>
            </Splitter>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <Splitter pt={{ root: { style: { height: '300px' } }, gutterHandler: { className: 'bg-primary' } }}>
                    <SplitterPanel pt={{ root: { className: 'flex align-items-center justify-content-center' } }}> Panel 1 </SplitterPanel>
                    <SplitterPanel pt={{ root: { className: 'flex align-items-center justify-content-center' } }}> Panel 2 </SplitterPanel>
                </Splitter>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
