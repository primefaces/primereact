import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function StyledModeDoc(props) {
    const code = {
        basic: `
import "primereact/resources/themes/lara-light-cyan/theme.css";
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Styled mode is based on pre-skinned components with opinionated themes like Material, Bootstrap or PrimeOne themes. Theme is the required css file to be imported, visit the <Link href="/theming/#themes">Themes</Link> section for
                    the complete list of available themes to choose from.
                </p>
                <DocSectionCode code={code} hideToggleCode import hideStackBlitz />
            </DocSectionText>
        </>
    );
}
