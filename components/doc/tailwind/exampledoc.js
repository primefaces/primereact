import { DocSectionText } from '../common/docsectiontext';
import Link from 'next/link';

export function ExampleDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>
                    The built-in theme is optional as Tailwind can easily be integrated with PrimeReact components in unstyled mode either using global setting or for a particular component only. Visit the <Link href="/unstyled">unstyled</Link> mode
                    documentation for getting started. As an example, Tailwind is used to style the <i>Button</i> and <i>Dialog</i> components of PrimeReact without the default theme.
                </p>
            </DocSectionText>
            <div className="flex justify-content-center">{/* @todo Add embedded sandbox example */}</div>
        </>
    );
}
