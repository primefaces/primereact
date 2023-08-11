import { DocSectionText } from '../common/docsectiontext';

export function ExampleDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>
                    As an example, <a href="https://getbootstrap.com/docs/4.0/components/modal/">Modal</a> and <a href="https://getbootstrap.com/docs/4.0/components/buttons/">Button</a> styles of Bootstrap are used to style PrimeReact Button and
                    Dialog.
                </p>
            </DocSectionText>
            <div className="flex justify-content-center">{/* @todo Add embedded sandbox example */}</div>
        </>
    );
}
