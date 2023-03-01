import { DocSectionText } from '../common/docsectiontext';

export function DesignerDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>
                    CSS of the themes share the same license as PrimeReact which is MIT, this means the generated CSS can be customized per your needs however this should be avoided if your customizations are not simple. For instance even to change a
                    primary color, since there is no variable a find and replace should be performed various times. On the other hand, this can be achieved by changing a single variable e.g. <i>$primaryColor</i>. Visit the{' '}
                    <a href="https://www.primefaces.org/designer/api/primereact/9.0.0">SASS API</a> for the documentation of available customization options.
                </p>

                <p>
                    <a href="https://www.primefaces.org/designer/primereact">Designer</a> is the ultimate tool to create your own PrimeReact experience powered by a SASS based theme engine with 500+ variables and a Visual Designer. PrimeReact only
                    ships the generated CSS of the themes whereas Designer provides full access to the whole SASS structure and the variables of these pre-built themes for easier customization.
                </p>

                <p>Whether you have your own style guide or just need a custom theme, Designer is the right tool to design and bring them to existence.</p>

                <p>
                    Visit <a href="https://www.primefaces.org/designer/primereact">Designer Website</a> for more information and live demos.
                </p>
                <a href="http://www.primefaces.org/designer/primereact">
                    <img alt="PrimeReact Designer" src="https://primefaces.org/cdn/primereact/images/primereact-designer.jpg" className="w-full" />
                </a>
            </DocSectionText>
        </>
    );
}
