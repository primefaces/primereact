import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function StyledModeDoc(props) {
    const code2 = {
        basic: `
body {
    font-family: var(--font-family);
}
`
    };

    const code1 = {
        basic: `
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Styled mode is based on pre-skinned components with opinionated themes like Material, Bootstrap or PrimeOne themes. Theme is the required css file to be imported, visit the <Link href="/theming/#themes">Themes</Link> section for
                    the complete list of available themes to choose from.
                </p>
                <DocSectionCode code={code1} hideToggleCode import hideCodeSandbox hideStackBlitz />
                <p>Each PrimeReact theme has its own font family so it is suggested to apply it to your application as well for a unified look.</p>
                <DocSectionCode code={code2} hideToggleCode import hideCodeSandbox hideStackBlitz />
            </DocSectionText>
        </>
    );
}
