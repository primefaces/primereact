import React, { useState } from 'react';
import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ImportDoc } from '../../components/doc/chips/importdoc';
import { BasicDoc } from '../../components/doc/chips/basicdoc';
import { FloatLabelDoc } from '../../components/doc/chips/floatlabeldoc';
import { InvalidDoc } from '../../components/doc/chips/invaliddoc';
import { DisabledDoc } from '../../components/doc/chips/disableddoc';
import { SeparatorDoc } from '../../components/doc/chips/separatordoc';
import { TemplateDoc } from '../../components/doc/chips/templatedoc';
import { KeyFilterDoc } from '../../components/doc/chips/keyfilterdoc';
import { ApiDoc } from '../../components/doc/chips/apidoc';

const ChipsDemo = () => {
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
            id: 'separator',
            label: 'Separator',
            component: SeparatorDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'keyfilter',
            label: 'Key Filter',
            component: KeyFilterDoc
        },
        {
            id: 'apidoc',
            label: 'API',
            component: ApiDoc
        }
    ];

    const [values1, setValues1] = useState([]);
    const [values2, setValues2] = useState([]);
    const [values3, setValues3] = useState([]);

    const customChip = (item) => {
        return (
            <div>
                <span>{item} - (active) </span>
                <i className="pi pi-user-plus" style={{ fontSize: '14px' }}></i>
            </div>
        );
    };

    return (
        <div>
            <Head>
                <title>React Chips Component</title>
                <meta name="description" content="Chips is used to enter multiple values on an input field." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Chips</h1>
                    <p>Chips is used to enter multiple values on an input field.</p>
                </div>
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ChipsDemo;
