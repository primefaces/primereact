import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/dialog/accessibilitydoc';
import { BasicDoc } from '../../components/doc/dialog/basicdoc';
import { FooterDoc } from '../../components/doc/dialog/footerdoc';
import { ImportDoc } from '../../components/doc/dialog/importdoc';
import { LongContentDoc } from '../../components/doc/dialog/longcontentdoc';
import { MaximizableDoc } from '../../components/doc/dialog/maximizabledoc';
import { PositionDoc } from '../../components/doc/dialog/positiondoc';
import { ResponsiveDoc } from '../../components/doc/dialog/responsivedoc';
import { StyleDoc } from '../../components/doc/dialog/styledoc';
import { WithoutModalDoc } from '../../components/doc/dialog/withoutmodaldoc';

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
            id: 'longcontent',
            label: 'Long Content',
            component: LongContentDoc
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
            doc: [{ name: 'Dialog', pathname: '/modules/dialog.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Dialog Component</title>
                <meta name="description" content="Dialog is a container to display content in an overlay window." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Dialog</h1>
                        <p>Dialog is a container to display content in an overlay window.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default DialogDemo;
