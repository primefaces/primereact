import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/inputnumber/apidoc';
import { AccessibilityDoc } from '../../components/doc/inputnumber/accessibilitydoc';
import { StylingDoc } from '../../components/doc/inputnumber/stylingdoc';
import { ButtonsDoc } from '../../components/doc/inputnumber/buttonsdoc';
import { CurrencyDoc } from '../../components/doc/inputnumber/currencydoc';
import { DisabledDoc } from '../../components/doc/inputnumber/disableddoc';
import { FloatLabelDoc } from '../../components/doc/inputnumber/floatlabeldoc';
import { ImportDoc } from '../../components/doc/inputnumber/importdoc';
import { InvalidDoc } from '../../components/doc/inputnumber/invaliddoc';
import { LocaleDoc } from '../../components/doc/inputnumber/localedoc';
import { NumeralsDoc } from '../../components/doc/inputnumber/numberalsdoc';
import { PrefixDoc } from '../../components/doc/inputnumber/prefixdoc';
import { FormikDoc } from '../../components/doc/inputnumber/validation/formikdoc';
import { HookFormDoc } from '../../components/doc/inputnumber/validation/hookformdoc';
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
            description: 'Validate using popular React validation libraries.',
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
            id: 'styling',
            label: 'Styling',
            component: StylingDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
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
