import Link from 'next/link';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function ImportDoc(props) {
    const code = {
        basic: `
import { locale, addLocale, updateLocaleOption, updateLocaleOptions, localeOption, localeOptions } from 'primereact/api';
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Configuration is managed by the <Link href="/configuration/#api.API.LocaleOptions">Locale API</Link> imported from <i>primereact/api</i>.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
