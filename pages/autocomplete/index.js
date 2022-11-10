import React from 'react';
import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/autocomplete/importdoc';
import { BasicDoc } from '../../components/doc/autocomplete/basicdoc';
import { GroupedDoc } from '../../components/doc/autocomplete/groupeddoc';
import { TemplatingDoc } from '../../components/doc/autocomplete/templatingdoc';
import { VirtualScrollDoc } from '../../components/doc/autocomplete/virtualscrolldoc';
import { MultipleDoc } from '../../components/doc/autocomplete/multipledoc';
import { ApiDoc } from '../../components/doc/autocomplete/apidoc';

const AutoCompleteDemo = () => {
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
            id: 'grouped',
            label: 'Grouped',
            component: GroupedDoc
        },
        {
            id: 'templating',
            label: 'Dropdown, Templating and Force Selection',
            component: TemplatingDoc
        },
        {
            id: 'virtualscroll',
            label: 'Virtual Scroll (100000 Items)',
            component: VirtualScrollDoc
        },
        {
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDoc
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
                <title>React AutoComplete Component</title>
                <meta name="description" content="AutoComplete is an input component that provides real-time suggestions when being typed." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>AutoComplete</h1>
                    <p>AutoComplete is an input component that provides real-time suggestions when being typed.</p>
                </div>
                <DocActions github="autocomplete/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default AutoCompleteDemo;
