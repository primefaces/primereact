import { DocSectionNav } from '@/components/doc/common/docsectionnav';
import { DocSections } from '@/components/doc/common/docsections';
import { ArchitectureDoc } from '@/components/doc/theming/architecturedoc';
import { BuiltInThemesDoc } from '@/components/doc/theming/builtinthemesdoc';
import { CSSVariablesDoc } from '@/components/doc/theming/cssvariablesdoc';
import { CustomThemeDoc } from '@/components/doc/theming/customthemedoc';
import { PrimeFlexDoc } from '@/components/doc/theming/primeflexdoc';
import { ScaleDoc } from '@/components/doc/theming/scaledoc';
import { CssInJsDoc } from '@/components/doc/theming/scopedstyling/cssinjsdoc';
import { CSSModulesDoc } from '@/components/doc/theming/scopedstyling/cssmodulesdoc';
import { NamedClassDoc } from '@/components/doc/theming/scopedstyling/namedclassdoc';
import { SwitchThemesDoc } from '@/components/doc/theming/switchthemesdoc';
import { UtilsDoc } from '@/components/doc/theming/utilsdoc';
import Head from 'next/head';

const ThemingDoc = () => {
    const docs = [
        {
            id: 'architecture',
            label: 'Architecture',
            component: ArchitectureDoc
        },
        {
            id: 'builtinthemes',
            label: 'Built-in Themes',
            component: BuiltInThemesDoc
        },
        {
            id: 'switchthemes',
            label: 'Switch Themes',
            component: SwitchThemesDoc
        },
        {
            id: 'customtheme',
            label: 'Custom Theme',
            component: CustomThemeDoc
        },
        {
            id: 'scopedstyling',
            label: 'Scoped Styling',
            description: `Designer themes apply a global skin to the library, in case you need to change the style of a particular component, 
                you may use a named class, CSS Modules or a CSS-in-JS solution like styled-jsx. A video tutorial that goes through the alternatives below is available.`,
            content: (
                <div className="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/3pO79DdPpiU" frameBorder="0" allowFullScreen="true" title="Scoped CSS with PrimeReact"></iframe>
                </div>
            ),
            children: [
                {
                    id: 'namedclass',
                    label: 'Named Class',
                    component: NamedClassDoc
                },
                {
                    id: 'cssmodules',
                    label: 'CSS Modules',
                    component: CSSModulesDoc
                },
                {
                    id: 'cssinjs',
                    label: 'CSS in JS',
                    component: CssInJsDoc
                }
            ]
        },
        {
            id: 'scale',
            label: 'Scale',
            component: ScaleDoc
        },
        {
            id: 'primeflex',
            label: 'PrimeFlex',
            component: PrimeFlexDoc
        },
        {
            id: 'utils',
            label: 'Utils',
            component: UtilsDoc
        },
        {
            id: 'cssvariables',
            label: 'CSS Variables',
            component: CSSVariablesDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>Theming - PrimeReact</title>
                <meta name="description" content="Choose from a variety of themes or develop your own theme easily." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Theming</h1>
                        <p>Choose from a variety of themes or develop your own theme easily.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ThemingDoc;
