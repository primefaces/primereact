import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Splitter, SplitterPanel } from '@/components/lib/splitter/Splitter';

export function NestedDoc(props) {
    const code = {
        basic: `
<Splitter style={{ height: '300px' }}>
    <SplitterPanel className="flex align-items-center justify-content-center" size={20} minSize={10}>
        Panel 1
    </SplitterPanel>
    <SplitterPanel size={80}>
        <Splitter layout="vertical">
            <SplitterPanel className="flex align-items-center justify-content-center" size={15}>
                Panel 2
            </SplitterPanel>
            <SplitterPanel size={85}>
                <Splitter>
                    <SplitterPanel className="flex align-items-center justify-content-center" size={20}>
                        Panel 3
                    </SplitterPanel>
                    <SplitterPanel className="flex align-items-center justify-content-center" size={80}>
                        Panel 4
                     </SplitterPanel>
                </Splitter>
             </SplitterPanel>
        </Splitter>
    </SplitterPanel>
</Splitter>
        `,
        javascript: `
import React from 'react'; 
import { Splitter, SplitterPanel } from 'primereact/splitter';

export default function NestedDemo() {
    return (
        <Splitter style={{ height: '300px' }}>
            <SplitterPanel className="flex align-items-center justify-content-center" size={20} minSize={10}>
                Panel 1
            </SplitterPanel>
            <SplitterPanel size={80}>
                <Splitter layout="vertical">
                    <SplitterPanel className="flex align-items-center justify-content-center" size={15}>
                        Panel 2
                    </SplitterPanel>
                    <SplitterPanel size={85}>
                        <Splitter>
                            <SplitterPanel className="flex align-items-center justify-content-center" size={20}>
                                Panel 3
                            </SplitterPanel>
                            <SplitterPanel className="flex align-items-center justify-content-center" size={80}>
                                Panel 4
                            </SplitterPanel>
                        </Splitter>
                    </SplitterPanel>
                </Splitter>
            </SplitterPanel>
        </Splitter>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Splitter, SplitterPanel } from 'primereact/splitter';

export default function NestedDemo() {
    return (
        <Splitter style={{ height: '300px' }}>
            <SplitterPanel className="flex align-items-center justify-content-center" size={20} minSize={10}>
                Panel 1
            </SplitterPanel>
            <SplitterPanel size={80}>
                <Splitter layout="vertical">
                    <SplitterPanel className="flex align-items-center justify-content-center" size={15}>
                        Panel 2
                    </SplitterPanel>
                    <SplitterPanel size={85}>
                        <Splitter>
                            <SplitterPanel className="flex align-items-center justify-content-center" size={20}>
                                Panel 3
                            </SplitterPanel>
                            <SplitterPanel className="flex align-items-center justify-content-center" size={80}>
                                Panel 4
                            </SplitterPanel>
                        </Splitter>
                    </SplitterPanel>
                </Splitter>
            </SplitterPanel>
        </Splitter>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Splitters can be combined to create advanced layouts.</p>
            </DocSectionText>
            <div className="card">
                <Splitter style={{ height: '300px' }}>
                    <SplitterPanel className="flex align-items-center justify-content-center" size={20} minSize={10}>
                        Panel 1
                    </SplitterPanel>
                    <SplitterPanel size={80}>
                        <Splitter layout="vertical">
                            <SplitterPanel className="flex align-items-center justify-content-center" size={15}>
                                Panel 2
                            </SplitterPanel>
                            <SplitterPanel size={85}>
                                <Splitter>
                                    <SplitterPanel className="flex align-items-center justify-content-center" size={20}>
                                        Panel 3
                                    </SplitterPanel>
                                    <SplitterPanel className="flex align-items-center justify-content-center" size={80}>
                                        Panel 4
                                    </SplitterPanel>
                                </Splitter>
                            </SplitterPanel>
                        </Splitter>
                    </SplitterPanel>
                </Splitter>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
