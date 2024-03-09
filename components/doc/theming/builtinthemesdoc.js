import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function BuiltInThemesDoc(props) {
    const code = {
        basic: `
primereact/resources/themes/bootstrap4-light-blue/theme.css
primereact/resources/themes/bootstrap4-light-purple/theme.css
primereact/resources/themes/bootstrap4-dark-blue/theme.css
primereact/resources/themes/bootstrap4-dark-purple/theme.css
primereact/resources/themes/md-light-indigo/theme.css
primereact/resources/themes/md-light-deeppurple/theme.css
primereact/resources/themes/md-dark-indigo/theme.css
primereact/resources/themes/md-dark-deeppurple/theme.css
primereact/resources/themes/mdc-light-indigo/theme.css
primereact/resources/themes/mdc-light-deeppurple/theme.css
primereact/resources/themes/mdc-dark-indigo/theme.css
primereact/resources/themes/mdc-dark-deeppurple/theme.css
primereact/resources/themes/tailwind-light/theme.css
primereact/resources/themes/fluent-light/theme.css
primereact/resources/themes/lara-light-blue/theme.css
primereact/resources/themes/lara-light-indigo/theme.css
primereact/resources/themes/lara-light-purple/theme.css
primereact/resources/themes/lara-light-teal/theme.css
primereact/resources/themes/lara-dark-blue/theme.css
primereact/resources/themes/lara-dark-indigo/theme.css
primereact/resources/themes/lara-dark-purple/theme.css
primereact/resources/themes/lara-dark-teal/theme.css
primereact/resources/themes/soho-light/theme.css
primereact/resources/themes/soho-dark/theme.css
primereact/resources/themes/viva-light/theme.css
primereact/resources/themes/viva-dark/theme.css
primereact/resources/themes/mira/theme.css
primereact/resources/themes/nano/theme.css
primereact/resources/themes/saga-blue/theme.css
primereact/resources/themes/saga-green/theme.css
primereact/resources/themes/saga-orange/theme.css
primereact/resources/themes/saga-purple/theme.css
primereact/resources/themes/vela-blue/theme.css
primereact/resources/themes/vela-green/theme.css
primereact/resources/themes/vela-orange/theme.css
primereact/resources/themes/vela-purple/theme.css
primereact/resources/themes/arya-blue/theme.css
primereact/resources/themes/arya-green/theme.css
primereact/resources/themes/arya-orange/theme.css
primereact/resources/themes/arya-purple/theme.css
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    PrimeReact ships with various free themes to choose from. The list below states all the available themes in the npm distribution with import paths. For a live preview, use the configurator{' '}
                    <span className="border-round inline-flex border-1 w-2rem h-2rem p-0 align-items-center justify-content-center bg-primary">
                        <span className="pi pi-cog"></span>
                    </span>{' '}
                    at the topbar to switch themes.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideStackBlitz codeClassName="h-20rem overflow-auto" />
        </>
    );
}
