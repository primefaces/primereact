import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/inputnumber/accessibilitydoc';
import { ButtonsDoc } from '../../components/doc/inputnumber/buttonsdoc';
import { CurrencyDoc } from '../../components/doc/inputnumber/currencydoc';
import { DisabledDoc } from '../../components/doc/inputnumber/disableddoc';
import { FloatLabelDoc } from '../../components/doc/inputnumber/floatlabeldoc';
import { FormikDoc } from '../../components/doc/inputnumber/form/formikdoc';
import { HookFormDoc } from '../../components/doc/inputnumber/form/hookformdoc';
import { ImportDoc } from '../../components/doc/inputnumber/importdoc';
import { InvalidDoc } from '../../components/doc/inputnumber/invaliddoc';
import { LocaleDoc } from '../../components/doc/inputnumber/localedoc';
import { NumeralsDoc } from '../../components/doc/inputnumber/numberalsdoc';
import { PrefixSuffixDoc } from '../../components/doc/inputnumber/prefixsuffixdoc';
import { StyleDoc } from '../../components/doc/inputnumber/styledoc';
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
            id: 'prefixsuffix',
            label: 'Prefix & Suffix',
            component: PrefixSuffixDoc
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
            id: 'floatlabel',
            label: 'Float Label',
            component: FloatLabelDoc
        },
        {
            id: 'invalid',
            label: 'Invalid',
            component: InvalidDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'form',
            label: 'Form',
            description: 'Compatibility with popular React form libraries.',
            children: [
                {
                    id: 'formik',
                    label: 'Formik',
                    component: FormikDoc
                },
                {
                    id: 'hookform',
                    label: 'Hook Form',
                    component: HookFormDoc
                }
            ]
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'InputNumber', pathname: '/modules/inputnumber.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React InputNumber Component</title>
                <meta name="description" content="InputNumber is an input component to provide numerical input." />
            </Head>
            <div className="content-section doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>InputNumber</h1>
                        <p>InputNumber is an input component to provide numerical input.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default InputNumberDemo;
