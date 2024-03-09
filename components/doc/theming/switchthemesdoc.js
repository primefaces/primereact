import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function SwitchThemesDoc(props) {
    const code1 = {
        basic: `
import { PrimeReactContext } from 'primereact/api';

//Use in a component
const { changeTheme } = useContext(PrimeReactContext);

changeTheme(currentTheme: string, newTheme: string, linkElementId: string, callback: Function)
        `
    };

    const code2 = {
        basic: `
<link id="theme-link" rel="stylesheet" href="/themes/lara-light-blue/theme.css">
        `
    };

    const code3 = {
        basic: `
<Head>
    <link id="theme-link" rel="stylesheet" href="/themes/lara-light-blue/theme.css">
</Head>
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p className="notification">
                    Solution below works however there is room for improvement. The upcoming styling api will greatly improve dynamic theme switching ability, eliminates the prerequisites with the introduction of CSS variables and dynamic imports.
                </p>
                <p>
                    Themes can be dynamically changed using the <i>changeTheme</i> function in <i>PrimeReactContext</i>. For this feature to work, there are two prerequisites. To begin with, the themes should be publicly available under the{' '}
                    <i>public</i> folder in your project by copying them from PrimeReact <i>resources/themes</i> folder. Second part is making the theme.css accessible via a link element so that the id of the link can be provided as the 3rd parameter
                    to the <i>changeTheme</i> function.
                </p>
            </DocSectionText>
            <DocSectionCode code={code1} hideToggleCode import hideStackBlitz />
            <div className="doc-section-description">
                <p>
                    If you have access to the <i>index.html</i> directly, the link can be placed at head section.
                </p>
            </div>
            <DocSectionCode code={code2} hideToggleCode import hideStackBlitz />
            <div className="doc-section-description">
                <p>
                    <a href="https://nextjs.org/">Next.js</a> applications can configure the link element using <a href="https://nextjs.org/docs/api-reference/next/head">next/head</a> component or custom{' '}
                    <a href="https://nextjs.org/docs/advanced-features/custom-document">document</a>.
                </p>
            </div>
            <DocSectionCode code={code3} hideToggleCode import hideStackBlitz />
        </>
    );
}
