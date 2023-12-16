import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function ArchitectureDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p className="notification">
                    <strong>Note</strong>: In near future, theming architecture of the styled mode will be redesigned to utilize CSS variables instead of SCSS variables in a backward compatible way for a dynamic approach.
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
