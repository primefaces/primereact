import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function NormalizeDoc(props) {
    const code = {
        basic: `
@layer normalize, primereact;

@import "normalize.css" layer(normalize-reset);
`
    };

    return (
        <DocSectionText {...props}>
            <p>Normalize is another utility to reset CSS of the standard elements. While importing the CSS file, assign it to a layer and define the layer order with primereact coming after the normalized layer.</p>
            <DocSectionCode code={code} hideToggleCode importCode hideStackBlitz />
        </DocSectionText>
    );
}
