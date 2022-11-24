import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/skeleton/apidoc';
import { ImportDoc } from '../../components/doc/skeleton/importdoc';
import { ShapesDoc } from '../../components/doc/skeleton/shapesdoc';
import { ListDoc } from '../../components/doc/skeleton/listdoc';
import { CardDoc } from '../../components/doc/skeleton/carddoc';
import { DataTableDoc } from '../../components/doc/skeleton/datatabledoc';

const SkeletonDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'shapes',
            label: 'Shapes',
            component: ShapesDoc
        },
        {
            id: 'card',
            label: 'Card',
            component: CardDoc
        },
        {
            id: 'list',
            label: 'List',
            component: ListDoc
        },
        {
            id: 'datatable',
            label: 'DataTable',
            component: DataTableDoc
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
                },
                {
                    id: 'styling',
                    label: 'Styling'
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility'
                }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Skeleton Component</title>
                <meta name="description" content="Skeleton is a placeholder to display instead of the actual content." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Skeleton</h1>
                    <p>Skeleton is a placeholder to display instead of the actual content.</p>
                </div>
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default SkeletonDemo;
