import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/skeleton/apidoc';
import { ImportDoc } from '../../components/doc/skeleton/importdoc';
import { ShapesDemo } from '../../components/doc/skeleton/shapesdoc';
import { ListDemo } from '../../components/doc/skeleton/listdoc';
import { CardDemo } from '../../components/doc/skeleton/carddoc';
import { DataTableDemo } from '../../components/doc/skeleton/datatabledoc';

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
            component: ShapesDemo
        },
        {
            id: 'card',
            label: 'Card',
            component: CardDemo
        },
        {
            id: 'list',
            label: 'List',
            component: ListDemo
        },
        {
            id: 'datatable',
            label: 'DataTable',
            component: DataTableDemo
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
