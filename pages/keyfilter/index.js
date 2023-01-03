import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { IntegersDoc } from '../../components/doc/keyfilter/integersdoc';
import { NumbersDoc } from '../../components/doc/keyfilter/numbersdoc';
import { MoneyDoc } from '../../components/doc/keyfilter/moneydoc';
import { HexDoc } from '../../components/doc/keyfilter/hexdoc';
import { AlphabeticDoc } from '../../components/doc/keyfilter/alphabeticdoc';
import { AlphanumbericDoc } from '../../components/doc/keyfilter/alphanumberdoc';
import { RegexDoc } from '../../components/doc/keyfilter/regexdoc';
import { ApiDoc } from '../../components/doc/keyfilter/apidoc';
import { ImportDoc } from '../../components/doc/keyfilter/importdoc';

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
            id: 'api',
            label: 'API',
            component: ApiDoc,
            children: [
                {
                    id: 'builtin',
                    label: 'Built-in Filters'
                },
                {
                    id: 'custom',
                    label: 'Custom Filter'
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility'
                }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React KeyFilter Component</title>
                <meta name="description" content="KeyFilter feature restricts user input based on a regular expression." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>KeyFilter</h1>
                    <p>KeyFilter feature restricts user input based on a regular expression.</p>
                </div>
                <DocActions github="keyfilter/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default KeyFilterDemo;
