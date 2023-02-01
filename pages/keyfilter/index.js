import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/keyfilter/accessibilitydoc';
import { ImportDoc } from '../../components/doc/keyfilter/importdoc';
import { PresetsDoc } from '../../components/doc/keyfilter/presetsdoc';
import { RegexDoc } from '../../components/doc/keyfilter/regexdoc';

const KeyFilterDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'presets',
            label: 'Presets',
            component: PresetsDoc
        },
        {
            id: 'regex',
            label: 'Regex',
            component: RegexDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'KeyFilter', pathname: '/modules/keyfilter.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React KeyFilter Component</title>
                <meta name="description" content="KeyFilter is a built-in feature of InputText to restrict user input based on a regular expression." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>KeyFilter</h1>
                        <p>KeyFilter is a built-in feature of InputText to restrict user input based on a regular expression.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default KeyFilterDemo;
