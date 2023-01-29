import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/toast/accessibilitydoc';
import { BasicDoc } from '../../components/doc/toast/basicdoc';
import { ImportDoc } from '../../components/doc/toast/importdoc';
import { MultipleDoc } from '../../components/doc/toast/multipledoc';
import { PositionDoc } from '../../components/doc/toast/positiondoc';
import { SeverityDoc } from '../../components/doc/toast/severitydoc';
import { StickyDoc } from '../../components/doc/toast/stickydoc';
import { StyleDoc } from '../../components/doc/toast/styledoc';
import { TemplateDoc } from '../../components/doc/toast/templatedoc';

const ToastDemo = () => {
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
            id: 'severity',
            label: 'Severity',
            component: SeverityDoc
        },
        {
            id: 'position',
            label: 'Position',
            component: PositionDoc
        },
        {
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDoc
        },
        {
            id: 'stickydoc',
            label: 'Sticky',
            component: StickyDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
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
            doc: [{ name: 'Toast', pathname: '/modules/toast.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Toast Component</title>
                <meta name="description" content="Toast is used to display messages in an overlay." />
            </Head>
            <div className="content-section doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Toast</h1>
                        <p>Toast is used to display messages in an overlay.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ToastDemo;
