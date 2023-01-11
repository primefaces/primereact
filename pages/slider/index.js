import React from 'react';
import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ImportDoc } from '../../components/doc/slider/importdoc';
import { BasicDoc } from '../../components/doc/slider/basicdoc';
import { InputDoc } from '../../components/doc/slider/inputdoc';
import { StepDoc } from '../../components/doc/slider/stepdoc';
import { RangeDoc } from '../../components/doc/slider/rangedoc';
import { VerticalDoc } from '../../components/doc/slider/verticaldoc';
import { ApiDoc } from '../../components/doc/slider/apidoc';
import { AccessibilityDoc } from '../../components/doc/slider/accessibilitydoc';
import { StyleDoc } from '../../components/doc/slider/styledoc';

const SliderDemo = () => {
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
            id: 'input',
            label: 'Input',
            component: InputDoc
        },
        {
            id: 'step',
            label: 'Step',
            component: StepDoc
        },
        {
            id: 'range',
            label: 'Range',
            component: RangeDoc
        },
        {
            id: 'vertical',
            label: 'Vertical',
            component: VerticalDoc
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
                <title>React Slider Component</title>
                <meta name="description" content="Slider is a component to provide input with a drag handle." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Slider</h1>
                    <p>Slider is a component to provide input with a drag handle.</p>
                </div>
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default SliderDemo;
