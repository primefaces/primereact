import Head from 'next/head';
import React from 'react';
import { ApiDoc } from '../../components/doc/autocomplete/apidoc';
import { BasicDoc } from '../../components/doc/autocomplete/basicdoc';
import { DropdownDoc } from '../../components/doc/autocomplete/dropdowndoc';
import { ForceSelectionDoc } from '../../components/doc/autocomplete/forceselectiondoc';
import { GroupDoc } from '../../components/doc/autocomplete/groupdoc';
import { ImportDoc } from '../../components/doc/autocomplete/importdoc';
import { MultipleDoc } from '../../components/doc/autocomplete/multipledoc';
import { ObjectsDoc } from '../../components/doc/autocomplete/objectsdoc';
import { TemplateDoc } from '../../components/doc/autocomplete/templatedoc';
import { ValidationDoc } from '../../components/doc/autocomplete/validationdoc';
import { VirtualScrollDoc } from '../../components/doc/autocomplete/virtualscrolldoc';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';

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
            id: 'dropdown',
            label: 'Dropdown',
            component: DropdownDoc
        },
        {
            id: 'objects',
            label: 'Objects',
            component: ObjectsDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'group',
            label: 'Group',
            component: GroupDoc
        },
        {
            id: 'forceselection',
            label: 'Force Selection',
            component: ForceSelectionDoc
        },
        {
            id: 'virtualscroll',
            label: 'Virtual Scroll',
            component: VirtualScrollDoc
        },
        {
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDoc
        },
        {
            id: 'validation',
            label: 'Validation',
            component: ValidationDoc
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
                <title>React AutoComplete Component</title>
                <meta name="description" content="AutoComplete is an input component that provides real-time suggestions when being typed." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>AutoComplete</h1>
                    <p>AutoComplete is an input component that provides real-time suggestions when being typed.</p>
                </div>
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default AutoCompleteDemo;
