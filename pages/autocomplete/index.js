import Head from 'next/head';
import React from 'react';
import { StylingDoc } from '../../components/doc/accordion/stylingdoc';
import { ApiDoc } from '../../components/doc/autocomplete/apidoc';
import { AccessibilityDoc } from '../../components/doc/autocomplete/accessibilitydoc';
import { StylingDoc } from '../../components/doc/autocomplete/stylingdoc';
import { BasicDoc } from '../../components/doc/autocomplete/basicdoc';
import { DisabledDoc } from '../../components/doc/autocomplete/disableddoc';
import { DropdownDoc } from '../../components/doc/autocomplete/dropdowndoc';
import { FloatlabelDoc } from '../../components/doc/autocomplete/floatlabeldoc';
import { ForceSelectionDoc } from '../../components/doc/autocomplete/forceselectiondoc';
import { GroupDoc } from '../../components/doc/autocomplete/groupdoc';
import { ImportDoc } from '../../components/doc/autocomplete/importdoc';
import { InvalidStateDoc } from '../../components/doc/autocomplete/invalidstatedoc';
import { MultipleDoc } from '../../components/doc/autocomplete/multipledoc';
import { ObjectsDoc } from '../../components/doc/autocomplete/objectsdoc';
import { AccessibilityDoc } from '../../components/doc/autocomplete/accessibilitydoc';
import { TemplateDoc } from '../../components/doc/autocomplete/templatedoc';
import { FormikDoc } from '../../components/doc/autocomplete/validation/formikdoc';
import { HookFormDoc } from '../../components/doc/autocomplete/validation/hookformdoc';
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
            id: 'floatlabel',
            label: 'Float Label',
            component: FloatlabelDoc
        },
        {
            id: 'invalidstate',
            label: 'Invalid State',
            component: InvalidStateDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
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
            description: 'Validate using popular React validation libraries.',
            children: [
                {
                    id: 'formik',
                    label: 'Formik',
                    component: FormikDoc
                },
                {
                    id: 'hookform',
                    label: 'Hook Form',
                    component: HookFormDoc
                }
            ]
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
