import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/organizationchart/importdoc';
import { ApiDoc } from '../../components/doc/organizationchart/apidoc';
import { AccessibilityDoc } from '../../components/doc/organizationchart/accessibilitydoc';
import { StyleDoc } from '../../components/doc/organizationchart/styledoc';
import { AdvancedDoc } from '../../components/doc/organizationchart/advanceddoc';
import { BasicDoc } from '../../components/doc/organizationchart/basicdoc';

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
            id: 'styling',
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
                <title>React OrganizationChart Component</title>
                <meta name="description" content="OrganizationChart visualizes hierarchical organization data." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>OrganizationChart</h1>
                    <p>OrganizationChart visualizes hierarchical organization data.</p>
                </div>

                <DocActions github="organizationchart/index.js" />
            </div>

            <div className="content-section doc organizationchart-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default OrganizationChartDemo;
