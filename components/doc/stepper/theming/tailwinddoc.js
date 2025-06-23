import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function TailwindDoc() {
    return (
        <DocSectionText id="style" label="Style">
            Visit{' '}
            <a href="https://github.com/primefaces/primereact-tailwind" target="_blank" rel="noopener noreferrer">
                Tailwind Presets
            </a>{' '}
            project for detailed documentation, examples and ready-to-use presets about how to style PrimeReact components with Tailwind CSS.
        </DocSectionText>
    );
}
