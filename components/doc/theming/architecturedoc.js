import { DocSectionText } from '../common/docsectiontext';

export function ArchitectureDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>
                    PrimeReact is a design agnostic library so unlike other UI libraries it does not enforce a certain styling such as material or bootstrap. In order to achieve this, styling has been separated into two parts, core and theme. Core
                    resides inside PrimeReact to implement the structure of the components such as positioning whereas theme brings the colors, paddings and margins. vVarious free themes and premium themes are available along with premium templates
                    that provide an application layout as well. All the free themes are built with the <a href="https://www.primefaces.org/designer/primereact">Theme Designer</a> and the npm package brings the compiled CSS output of the theme whereas
                    SCSS is kept as a premium feature in the designer.
                </p>
                <img alt="Architecture" src="https://primefaces.org/cdn/primereact/images/architecture.jpg" className="w-full" />
            </DocSectionText>
        </>
    );
}
