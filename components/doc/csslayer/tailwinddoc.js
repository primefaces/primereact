import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function TailwindDoc(props) {
    const code = {
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
        <DocSectionText {...props}>
            <p>
                Tailwind CSS includes a reset utility in base called&nbsp;
                <a href="https://tailwindcss.com/docs/preflight" target="_blank" rel="noopener noreferrer">
                    preflight
                </a>
                . If you are using this feature, wrap the base and utilities in separate layers and make sure primereact layer comes after the base.{' '}
            </p>
            <DocSectionCode code={code} hideToggleCode importCode hideStackBlitz />
        </DocSectionText>
    );
}
