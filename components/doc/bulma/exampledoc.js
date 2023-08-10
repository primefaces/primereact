import { DocSectionText } from '../common/docsectiontext';

export function ExampleDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>Demonstration of various PrimeReact components like input field, button, table and panel styled with Bulma utilities.</p>
            </DocSectionText>
            <div className="flex justify-content-center">{/* @todo Add embedded sandbox example */}</div>
        </>
    );
}
