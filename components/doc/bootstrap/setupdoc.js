import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function SetupDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>
                    This section assumes that Boostrap is already available in your application, if not visit the Bootstrap <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/">documentation</a> for the installation.
                </p>
                <p>
                    Bootstrap integration with PrimeReact components is achieved with unstyled mode either using global setting or for a particular component only. Visit the <Link href="/unstyled">unstyled</Link> mode documentation for getting
                    started.
                </p>
            </DocSectionText>
        </>
    );
}
