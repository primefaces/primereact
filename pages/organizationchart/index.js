import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/organizationchart/accessibilitydoc';
import { AdvancedDoc } from '../../components/doc/organizationchart/advanceddoc';
import { BasicDoc } from '../../components/doc/organizationchart/basicdoc';
import { ImportDoc } from '../../components/doc/organizationchart/importdoc';
import { StyleDoc } from '../../components/doc/organizationchart/styledoc';

const OrganizationChartDemo = () => {
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
            id: 'advanced',
            label: 'Advanced',
            component: AdvancedDoc
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
            doc: [{ name: 'OrganizationChart', pathname: '/modules/organizationchart.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React OrganizationChart Component</title>
                <meta name="description" content="OrganizationChart visualizes hierarchical organization data." />
            </Head>
            <div className="content-section doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>OrganizationChart</h1>
                        <p>OrganizationChart visualizes hierarchical organization data.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default OrganizationChartDemo;
