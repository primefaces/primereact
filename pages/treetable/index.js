import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ApiDoc } from '../../components/doc/treetable/apidoc';
import { PaginatorDoc } from '../../components/doc/treetable/paginatordoc';
import { TemplatingDoc } from '../../components/doc/treetable/templatingdoc';
import { ImportDoc } from '../../components/doc/treetable/importdoc';
import { BasicDoc } from '../../components/doc/treetable/basicdoc';
import { ProgrammaticDoc } from '../../components/doc/treetable/programmaticdoc';
import { ColGroupDoc } from '../../components/doc/treetable/colgroupdoc';
import { LazyDoc } from '../../components/doc/treetable/lazydoc';
import { EditDoc } from '../../components/doc/treetable/editdoc';
import { ReorderDoc } from '../../components/doc/treetable/reorderdoc';
import { ColToggleDoc } from '../../components/doc/treetable/coltoggledoc';
import { StyleDoc } from '../../components/doc/treetable/styledoc';
import { ContextMenuDoc } from '../../components/doc/treetable/contextmenudoc';
import { ResponsiveDoc } from '../../components/doc/treetable/responsivedoc';

const TreeTableDemo = () => {
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
            id: 'programmatic',
            label: 'Programmatic',
            component: ProgrammaticDoc
        },
        {
            id: 'templating',
            label: 'Templating',
            component: TemplatingDoc
        },
        {
            id: 'paginator',
            label: 'Paginator',
            component: PaginatorDoc
        },
        {
            label: 'Sort',
            to: '/treetable/sort'
        },
        {
            label: 'Filter',
            to: '/treetable/filter'
        },
        {
            id: 'colgroup',
            label: 'ColGroup',
            component: ColGroupDoc
        },
        {
            id: 'lazy',
            label: 'Lazy',
            component: LazyDoc
        },
        {
            id: 'edit',
            label: 'Edit',
            component: EditDoc
        },
        {
            label: 'Scroll',
            to: '/treetable/scroll'
        },
        {
            label: 'Resize',
            to: '/treetable/resize'
        },
        {
            id: 'reorder',
            label: 'Reorder',
            component: ReorderDoc
        },
        {
            id: 'coltoggle',
            label: 'ColToggle',
            component: ColToggleDoc
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
        },
        {
            id: 'contextmenu',
            label: 'ContextMenu',
            component: ContextMenuDoc
        },
        {
            id: 'responsive',
            label: 'Responsive',
            component: ResponsiveDoc
        },
        {
            id: 'apidoc',
            label: 'API',
            component: ApiDoc,
            children: [
                {
                    id: 'treenodeapi',
                    label: 'TreeNode API'
                },
                {
                    id: 'columncomponent',
                    label: 'Column Component'
                },
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
                <title>React TreeTable Component</title>
                <meta name="description" content="TreeTable is used to display hierarchical data in tabular format." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>TreeTable</h1>
                    <p>TreeTable is used to display hierarchical data in tabular format.</p>
                </div>

                <DocActions github="treetable/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default TreeTableDemo;
