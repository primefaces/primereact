import Head from 'next/head';
import React from 'react';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/skeleton/accessibilitydoc';
import { ApiDoc } from '../../components/doc/skeleton/apidoc';
import { CardDoc } from '../../components/doc/skeleton/carddoc';
import { DataTableDoc } from '../../components/doc/skeleton/datatabledoc';
import { ImportDoc } from '../../components/doc/skeleton/importdoc';
import { ListDoc } from '../../components/doc/skeleton/listdoc';
import { ShapesDoc } from '../../components/doc/skeleton/shapesdoc';
import { StyleDoc } from '../../components/doc/skeleton/styledoc';

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
            component: ApiDoc
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
                <DocActions github="/skeleton" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default SkeletonDemo;
