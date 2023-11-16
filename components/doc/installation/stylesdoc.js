import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function StylesDoc(props) {
    const code1 = {
        basic: `
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
        `
    };

    const code2 = {
        basic: `
body {
    font-family: var(--font-family);
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Theme and Core styles are the necessary css files of the components, visit the <Link href="/theming#themes">Themes</Link> section for the complete list of available themes to choose from. In upcoming version 10, a css-in-js
                    approach will be implemented along with migration to SVG icons to remove the requirement to install css files.
                </p>
                <DocSectionCode code={code1} hideToggleCode import hideCodeSandbox hideStackBlitz />
                <p>Each PrimeReact theme has its own font family so it is suggested to apply it to your application for a unified look.</p>
                <DocSectionCode code={code2} hideToggleCode import hideCodeSandbox hideStackBlitz />
            </DocSectionText>
        </>
    );
}
