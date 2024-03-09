import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Splitter, SplitterPanel } from '@/components/lib/splitter/Splitter';

export function SizeDoc(props) {
    const code = {
        basic: `
<Splitter style={{ height: '300px' }}>
    <SplitterPanel className="flex align-items-center justify-content-center" size={25} minSize={10}>Panel 1</SplitterPanel>
    <SplitterPanel className="flex align-items-center justify-content-center" size={75}>Panel 2</SplitterPanel>
</Splitter>
        `,
        javascript: `
import React from 'react'; 
import { Splitter, SplitterPanel } from 'primereact/splitter';

export default function SizeDemo() {
    return (
        <Splitter style={{ height: '300px' }}>
            <SplitterPanel className="flex align-items-center justify-content-center" size={25} minSize={10}>Panel 1</SplitterPanel>
            <SplitterPanel className="flex align-items-center justify-content-center" size={75}>Panel 2</SplitterPanel>
        </Splitter>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Splitter, SplitterPanel } from 'primereact/splitter';

export default function SizeDemo() {
    return (
        <Splitter style={{ height: '300px' }}>
            <SplitterPanel className="flex align-items-center justify-content-center" size={25} minSize={10}>Panel 1</SplitterPanel>
            <SplitterPanel className="flex align-items-center justify-content-center" size={75}>Panel 2</SplitterPanel>
        </Splitter>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Initial dimension of a panel is percentage based and defined using the <i>size</i> property. In addition,
                    <i>minSize</i> is provided to set a minimum value during a resize.
                </p>
            </DocSectionText>
            <div className="card">
                <Splitter style={{ height: '300px' }}>
                    <SplitterPanel className="flex align-items-center justify-content-center" size={25} minSize={10}>
                        Panel 1
                    </SplitterPanel>
                    <SplitterPanel className="flex align-items-center justify-content-center" size={75}>
                        Panel 2
                    </SplitterPanel>
                </Splitter>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
