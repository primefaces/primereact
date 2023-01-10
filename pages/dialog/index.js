import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/dialog/importdoc';
import { BasicDoc } from '../../components/doc/dialog/basicdoc';
import { FooterDoc } from '../../components/doc/dialog/footerdoc';
import { WithoutModalDoc } from '../../components/doc/dialog/withoutmodaldoc';
import { ResponsiveDoc } from '../../components/doc/dialog/responsivedoc';
import { MaximizableDoc } from '../../components/doc/dialog/maximizabledoc';
import { PositionDoc } from '../../components/doc/dialog/positiondoc';
import { ApiDoc } from '../../components/doc/dialog/apidoc';
import { AccessibilityDoc } from '../../components/doc/dialog/accessibilitydoc';
import { StylingDoc } from '../../components/doc/dialog/stylingdoc';
import { LengthyContentDoc } from '../../components/doc/dialog/lengthycontentdoc';

const DialogDemo = () => {
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
            id: 'footer',
            label: 'Footer',
            component: FooterDoc
        },
        {
            id: 'lengthycontent',
            label: 'Lengthy Content',
            component: LengthyContentDoc
        },
        {
            id: 'modal',
            label: 'Without Modal',
            component: WithoutModalDoc
        },
        {
            id: 'responsive',
            label: 'Responsive',
            component: ResponsiveDoc
        },
        {
            id: 'position',
            label: 'Position',
            component: PositionDoc
        },
        {
            id: 'maximizable',
            label: 'Maximizable',
            component: MaximizableDoc
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
                <title>React Dialog Component</title>
                <meta name="description" content="Dialog is a container to display content in an overlay window." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Dialog</h1>
                    <p>Dialog is a container to display content in an overlay window.</p>
                </div>
                <DocActions github="dialog/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default DialogDemo;
