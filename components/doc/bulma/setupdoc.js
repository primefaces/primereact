import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function SetupDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Bulma can either be used with a CDN or via NPM. Visit the official documentation for installation steps. PrimeReact does require an extra configuration other than using components as <i>unstyled</i>.
                </p>
            </DocSectionText>
        </>
    );
}
