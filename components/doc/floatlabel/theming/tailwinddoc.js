import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc() {
    return (
        <DocSectionText id="tailwind" label="Tailwind">
            <p>
                Visit{' '}
                <Link href="https://github.com/primefaces/primereact-tailwind" target="_blank" rel="noopener noreferrer">
                    Tailwind Presets
                </Link>{' '}
                project for detailed documentation, examples and ready-to-use presets about how to style PrimeReact components with Tailwind CSS.
            </p>
        </DocSectionText>
    );
}
