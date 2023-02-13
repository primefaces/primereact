import React from 'react';
import { DocComponent } from '../../components/doc/common/doccomponent';
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
        }
    ];

    return <DocComponent title="React Slider Component" header="Slider" description="Slider is a component to provide input with a drag handle." componentDocs={docs} apiDocs={['Slider']} />;
};

export default SliderDemo;
