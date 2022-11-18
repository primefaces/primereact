import { Splitter, SplitterPanel } from '../../lib/splitter/Splitter';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function HorizontalDoc(props) {
    const code = {
        basic: `
<Splitter style={{ height: '300px' }} className="mb-5">
    <SplitterPanel className="flex align-items-center justify-content-center">Panel 1</SplitterPanel>
    <SplitterPanel className="flex align-items-center justify-content-center">Panel 2</SplitterPanel>
</Splitter>
        `,
        javascript: `
import { Splitter, SplitterPanel } from 'primereact/splitter';

export default function HorizontalDoc() {

    return (
        <Splitter style={{ height: '300px' }} className="mb-5">
            <SplitterPanel className="flex align-items-center justify-content-center">Panel 1</SplitterPanel>
            <SplitterPanel className="flex align-items-center justify-content-center">Panel 2</SplitterPanel>
        </Splitter>
    )
}
        `,
        typescript: `
import { Splitter, SplitterPanel } from 'primereact/splitter';

export default function HorizontalDoc() {

    return (
        <Splitter style={{ height: '300px' }} className="mb-5">
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
                <p>Splitter requires two SplitterPanel components to wrap.</p>
            </DocSectionText>
            <div className="card">
                <Splitter style={{ height: '300px' }} className="mb-5">
                    <SplitterPanel className="flex align-items-center justify-content-center">Panel 1</SplitterPanel>
                    <SplitterPanel className="flex align-items-center justify-content-center">Panel 2</SplitterPanel>
                </Splitter>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
