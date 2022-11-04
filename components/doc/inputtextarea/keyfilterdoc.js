import Link from 'next/link';
import { InputTextarea } from '../../lib/inputtextarea/InputTextarea';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function KeyFilterDoc(props) {
    const code = {
        basic: `
<InputTextarea keyfilter="int" placeholder="Integers" />
        `,
        javascript: `
import { InputTextarea } from "primereact/inputtextarea";

export default function KeyFilterDemo() {
    return (
        <InputTextarea keyfilter="int" placeholder="Integers" rows={2} cols={30}/>
    )
}
        `,
        typescript: `
import { InputTextarea } from "primereact/inputtextarea";

export default function KeyFilterDemo() {
    return (
        <InputTextarea keyfilter="int" placeholder="Integers" rows={2} cols={30}/>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                InputTextarea has built-in key filtering support to block certain keys, refer to <Link href="/keyfilter">keyfilter</Link> page for more information.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputTextarea keyfilter="int" placeholder="Integers" rows={2} cols={30} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
