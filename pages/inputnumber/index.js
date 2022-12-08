import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/inputnumber/apidoc';
import { ButtonsDoc } from '../../components/doc/inputnumber/buttonsdoc';
import { CurrencyDoc } from '../../components/doc/inputnumber/currencydoc';
import { ImportDoc } from '../../components/doc/inputnumber/importdoc';
import { LocaleDoc } from '../../components/doc/inputnumber/localedoc';
import { NumeralsDoc } from '../../components/doc/inputnumber/numberalsdoc';
import { PrefixDoc } from '../../components/doc/inputnumber/prefixdoc';
import { ValidationDoc } from '../../components/doc/inputnumber/validationdoc';
import { VerticalDoc } from '../../components/doc/inputnumber/verticaldoc';

const InputNumberDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'numerals',
            label: 'Numerals',
            component: NumeralsDoc
        },
        {
            id: 'locale',
            label: 'Locale',
            component: LocaleDoc
        },
        {
            id: 'currency',
            label: 'Currency',
            component: CurrencyDoc
        },
        {
            id: 'prefix',
            label: 'Prefix and Suffix',
            component: PrefixDoc
        },
        {
            id: 'buttons',
            label: 'Buttons',
            component: ButtonsDoc
        },
        {
            id: 'vertical',
            label: 'Vertical',
            component: VerticalDoc
        },
        {
            id: 'validation',
            label: 'Validation',
            component: ValidationDoc
        },
        {
            id: 'api',
            label: 'API',
            component: ApiDoc,
            children: [
                {
                    id: 'properties',
                    label: 'Properties'
                },
                {
                    id: 'events',
                    label: 'Events'
                },
                {
                    id: 'styling',
                    label: 'Styling'
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
                <title>React InputNumber Component</title>
                <meta name="description" content="InputNumber is an input component to provide numerical input." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>InputNumber</h1>
                    <p>InputNumber is an input component to provide numerical input.</p>
                </div>

                <DocActions github="inputnumber/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default InputNumberDemo;
