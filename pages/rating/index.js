import React from 'react';
import DocApiTable from '../../components/doc/common/docapitable';
import { PTDoc } from '../../components/doc/rating/pt/ptdoc';
import { Wireframe } from '../../components/doc/rating/pt/wireframe';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/rating/accessibilitydoc';
import { BasicDoc } from '../../components/doc/rating/basicdoc';
import { DisabledDoc } from '../../components/doc/rating/disableddoc';
import { ImportDoc } from '../../components/doc/rating/importdoc';
import { NumberOfStarsDoc } from '../../components/doc/rating/numberofstarsdoc';
import { ReadOnlyDoc } from '../../components/doc/rating/readonlydoc';
import { StyleDoc } from '../../components/doc/rating/styledoc';
import { TemplateDoc } from '../../components/doc/rating/templatedoc';
import { WithoutCancelDoc } from '../../components/doc/rating/withoutcanceldoc';

const RatingDemo = () => {
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
            id: 'withoutcancel',
            label: 'Without Cancel',
            component: WithoutCancelDoc
        },
        {
            id: 'numberofstars',
            label: 'Number of Stars',
            component: NumberOfStarsDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'readonly',
            label: 'ReadOnly',
            component: ReadOnlyDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
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
    const ptDocs = [
        {
            id: 'pt.wireframe',
            label: 'Wireframe',
            component: Wireframe
        },
        {
            id: 'pt.rating.options',
            label: 'Rating PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React Rating Component" header="Rating" description="Rating component is a star based selection input." componentDocs={docs} apiDocs={['Rating']} ptDocs={ptDocs} />;
};

export default RatingDemo;
