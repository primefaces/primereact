import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/paginator/accessibilitydoc';
import { BasicDoc } from '../../components/doc/paginator/basicdoc';
import { ContentDoc } from '../../components/doc/paginator/contentdoc';
import { CustomDoc } from '../../components/doc/paginator/customdoc';
import { ImportDoc } from '../../components/doc/paginator/importdoc';
import { StyleDoc } from '../../components/doc/paginator/styledoc';

const PaginatorDemo = () => {
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
            id: 'custom',
            label: 'Custom Template',
            component: CustomDoc
        },
        {
            id: 'content',
            label: 'Left and Right Content',
            component: ContentDoc
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
            doc: [{ name: 'Paginator', pathname: '/modules/paginator.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Paginator Component</title>
                <meta name="description" content="Paginator is a generic widget to display content in paged format." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Paginator</h1>
                        <p>Paginator is a generic widget to display content in paged format.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default PaginatorDemo;
