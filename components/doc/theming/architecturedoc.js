import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function ArchitectureDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p className="line-height-3 bg-indigo-600 text-white p-3 text-lg" style={{ borderRadius: '10px' }}>
                    <strong>Note</strong>: In upcoming versions, theming architecture will be redesigned to utilize CSS variables instead of SCSS variables in a backward compatible way for a dynamic approach. In addition, a new{' '}
                    <strong>Unstyled</strong> mode will be provided as an alternative to the default styling so that CSS libraries like Tailwind or Bootstrap can be used to style the components. This work is planned to be completed by the end of Q2
                    2023.
                </p>
                <p>
                    PrimeReact is a design agnostic library so unlike other UI libraries it does not enforce a certain styling such as material or bootstrap. In order to achieve this, styling has been separated into two parts, core and theme. The
                    core resides inside PrimeReact to implement the structure of the components such as positioning whereas theme brings the colors and spacing.
                </p>
                <img alt="Architecture" src="https://primefaces.org/cdn/primereact/images/architecture.jpg" className="w-full" />
            </DocSectionText>
        </>
    );
}
