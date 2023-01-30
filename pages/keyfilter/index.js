import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/keyfilter/accessibilitydoc';
import { AlphabeticDoc } from '../../components/doc/keyfilter/alphabeticdoc';
import { AlphanumbericDoc } from '../../components/doc/keyfilter/alphanumberdoc';
import { HexDoc } from '../../components/doc/keyfilter/hexdoc';
import { ImportDoc } from '../../components/doc/keyfilter/importdoc';
import { IntegersDoc } from '../../components/doc/keyfilter/integersdoc';
import { MoneyDoc } from '../../components/doc/keyfilter/moneydoc';
import { NumbersDoc } from '../../components/doc/keyfilter/numbersdoc';
import { RegexDoc } from '../../components/doc/keyfilter/regexdoc';

const KeyFilterDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'integers',
            label: 'Integers',
            component: IntegersDoc
        },
        {
            id: 'numbers',
            label: 'Numbers',
            component: NumbersDoc
        },
        {
            id: 'money',
            label: 'Money',
            component: MoneyDoc
        },
        {
            id: 'hex',
            label: 'Hex',
            component: HexDoc
        },
        {
            id: 'alphabetic',
            label: 'Alphabetic',
            component: AlphabeticDoc
        },
        {
            id: 'alphanumberic',
            label: 'Alphannumeric',
            component: AlphanumbericDoc
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
                <meta name="description" content="KeyFilter feature restricts user input based on a regular expression." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>KeyFilter</h1>
                        <p>KeyFilter feature restricts user input based on a regular expression.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default KeyFilterDemo;
