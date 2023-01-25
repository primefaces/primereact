import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/keyfilter/accessibilitydoc';
import { AlphabeticDoc } from '../../components/doc/keyfilter/alphabeticdoc';
import { AlphanumbericDoc } from '../../components/doc/keyfilter/alphanumberdoc';
import { ApiDoc } from '../../components/doc/keyfilter/apidoc';
import { HexDoc } from '../../components/doc/keyfilter/hexdoc';
import { IntegersDoc } from '../../components/doc/keyfilter/integersdoc';
import { MoneyDoc } from '../../components/doc/keyfilter/moneydoc';
import { NumbersDoc } from '../../components/doc/keyfilter/numbersdoc';
import { RegexDoc } from '../../components/doc/keyfilter/regexdoc';

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
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        },
        {
            id: 'api',
            label: 'API',
            component: ApiDoc
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
                <DocActions github="/keyfilter" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default KeyFilterDemo;
