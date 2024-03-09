import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function ScaleDoc(props) {
    const code = {
        basic: `
html {
    font-size: 14px;
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    PrimeReact utilizes <i>rem</i> units to make sure the components blend in with the rest of your UI perfectly. This also enables scaling, for example changing the size of the components is easy as configuring the font size of your
                    document. Code below sets the scale of the components based on <i>16px</i>. If you reqire bigger or smaller components, just change this variable and components will scale accordingly.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideStackBlitz />
        </>
    );
}
