import Head from 'next/head';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { ImportDoc } from '../../components/doc/dataview/importdoc';
import { BasicDoc } from '../../components/doc/dataview/basicdoc';
import { ApiDoc } from '../../components/doc/dataview/apidoc';
import { AccessibilityDoc } from '../../components/doc/dataview/accessibilitydoc';
import { StylingDoc } from '../../components/doc/dataview/stylingdoc';
import { LazyDataViewDoc } from '../../components/doc/dataview/lazydoc';

const DataViewDemo = () => {
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
            id: 'lazy',
            label: 'Lazy',
            component: LazyDataViewDoc
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
                    id: 'propertiesofdataviewlayout',
                    label: 'Properties of DataViewLayoutOptions'
                },
                {
                    id: 'eventsofdataview',
                    label: 'Events of DataViewLayoutOptions'
                },
                {
                    id: 'paginator',
                    label: 'Paginator'
                },
                {
                    id: 'sorting',
                    label: 'Sorting'
                },
                {
                    id: 'lazyloading',
                    label: 'Lazy Loading'
                },
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
                <title>React DataView Component</title>
                <meta name="description" content="DataView displays data in grid or list layout with pagination and sorting features." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>DataView</h1>
                    <p>DataView displays data in grid or list layout with pagination and sorting features.</p>
                </div>

                <DocActions github="dataview/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default DataViewDemo;
