import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/slider/accessibilitydoc';
import { BasicDoc } from '../../components/doc/slider/basicdoc';
import { ImportDoc } from '../../components/doc/slider/importdoc';
import { InputDoc } from '../../components/doc/slider/inputdoc';
import { RangeDoc } from '../../components/doc/slider/rangedoc';
import { StepDoc } from '../../components/doc/slider/stepdoc';
import { StyleDoc } from '../../components/doc/slider/styledoc';
import { VerticalDoc } from '../../components/doc/slider/verticaldoc';

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
            doc: [{ name: 'Slider', pathname: '/modules/slider.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Slider Component</title>
                <meta name="description" content="Slider is a component to provide input with a drag handle." />
            </Head>
            <div className="content-section doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Slider</h1>
                        <p>Slider is a component to provide input with a drag handle.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default SliderDemo;
