import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function CSSLayerDoc(props) {
    const code1 = {
        basic: `
@layer tailwind-base, primereact, tailwind-utilities;

@layer tailwind-base {
  @tailwind base;
}

@layer tailwind-utilities {
  @tailwind components;
  @tailwind utilities;
}
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Tailwind CSS can be used with styled or unstyled modes of PrimeReact. In both cases, <a href="https://tailwindcss.com/docs/preflight">preflight</a> mode may break styling of the core functionality so <i>@layer</i> configuration in
                    your style file that includes tailwind styles is necessary for compatibility.
                </p>
                <DocSectionCode code={code1} hideToggleCode import hideStackBlitz />
            </DocSectionText>
        </>
    );
}
