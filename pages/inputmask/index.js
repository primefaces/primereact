import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/inputmask/apidoc';
import { AccessibilityDoc } from '../../components/doc/inputmask/accessibilitydoc';
import { StylingDoc } from '../../components/doc/inputmask/stylingdoc';
import { BasicDoc } from '../../components/doc/inputmask/basicdoc';
import { DisabledDoc } from '../../components/doc/inputmask/disableddoc';
import { FloatLabelDoc } from '../../components/doc/inputmask/floatlabeldoc';
import { ImportDoc } from '../../components/doc/inputmask/importdoc';
import { InvalidDoc } from '../../components/doc/inputmask/invaliddoc';
import { MaskDoc } from '../../components/doc/inputmask/maskdoc';
import { OptionalDoc } from '../../components/doc/inputmask/optionaldoc';
import { SlotCharDoc } from '../../components/doc/inputmask/slotchardoc';
import { ValidationDoc } from '../../components/doc/inputmask/validationdoc';

const InputMaskDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'mask',
            label: 'Mask',
            component: MaskDoc
        },
        {
            id: 'optional',
            label: 'Optional',
            component: OptionalDoc
        },
        {
            id: 'slotchar',
            label: 'Slot Char',
            component: SlotCharDoc
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
            id: 'validation',
            label: 'Validation',
            component: ValidationDoc
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
                <title>React Mask Component</title>
                <meta name="description" content="InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>InputMask</h1>
                    <p>InputMask component is used to enter input in a certain format such as numeric, date, currency, email and phone.</p>
                </div>
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default InputMaskDemo;
