import { Splitter, SplitterPanel } from '../../lib/splitter/Splitter';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function VerticalDoc(props) {
    const code = {
        basic: `
<Splitter style={{ height: '300px' }} layout="vertical">
    <SplitterPanel className="flex align-items-center justify-content-center">Panel 1</SplitterPanel>
    <SplitterPanel className="flex align-items-center justify-content-center">Panel 2</SplitterPanel>
</Splitter>
        `,
        javascript: `
import { Splitter, SplitterPanel } from 'primereact/splitter';

export default function VerticalDoc() {

    return (
        <Splitter style={{ height: '300px' }} layout="vertical">
            <SplitterPanel className="flex align-items-center justify-content-center">Panel 1</SplitterPanel>
            <SplitterPanel className="flex align-items-center justify-content-center">Panel 2</SplitterPanel>
        </Splitter>
    )
}
        `,
        typescript: `
import { Splitter, SplitterPanel } from 'primereact/splitter';

export default function VerticalDoc() {

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
                    Default orientation is configured with the <i>layout</i> property and default is the "horizontal" whereas other alternative is the "vertical".
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
