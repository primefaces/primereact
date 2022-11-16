import React from 'react';
import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ImportDoc } from '../../components/doc/inputmask/importdoc';
import { BasicDoc } from '../../components/doc/inputmask/basicdoc';
import { MaskDoc } from '../../components/doc/inputmask/maskdoc';
import { OptionalDoc } from '../../components/doc/inputmask/optionaldoc';
import { SlotCharDoc } from '../../components/doc/inputmask/slotchardoc';
import { FloatLabelDoc } from '../../components/doc/inputmask/floatlabeldoc';
import { InvalidDoc } from '../../components/doc/inputmask/invaliddoc';
import { DisabledDoc } from '../../components/doc/inputmask/disableddoc';
import { ApiDoc } from '../../components/doc/inputmask/apidoc';

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
