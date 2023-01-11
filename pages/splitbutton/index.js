import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { BasicDoc } from '../../components/doc/splitbutton/basic';
import { ImportDoc } from '../../components/doc/splitbutton/importdoc';
import { SeveritiesDoc } from '../../components/doc/splitbutton/severitiesdoc';
import { RaisedButtonsDoc } from '../../components/doc/splitbutton/raisedbuttonsdoc';
import { RoundedButtonsDoc } from '../../components/doc/splitbutton/roundedbuttonsdoc';
import { TextButtonsDoc } from '../../components/doc/splitbutton/textbuttonsdoc';
import { RaisedTextButtonsDoc } from '../../components/doc/splitbutton/raisedtextbuttonsdoc';
import { OutlinedButtonsDoc } from '../../components/doc/splitbutton/outlinedbuttonsdoc';
import { SizesDoc } from '../../components/doc/splitbutton/sizesdoc';
import { ApiDoc } from '../../components/doc/splitbutton/apidoc';
import { AccessibilityDoc } from '../../components/doc/splitbutton/accessibilitydoc';
import { StyleDoc } from '../../components/doc/splitbutton/styledoc';
import { LoadingDoc } from '../../components/doc/splitbutton/loadingdoc';
import { DisabledDoc } from '../../components/doc/splitbutton/disableddoc';

const SplitButtonDemo = () => {
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
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'loading',
            label: 'Loading',
            component: LoadingDoc
        },
        {
            id: 'severities',
            label: 'Severities',
            component: SeveritiesDoc
        },
        {
            id: 'raisedbuttons',
            label: 'Raised',
            component: RaisedButtonsDoc
        },
        {
            id: 'roundedbuttons',
            label: 'Rounded',
            component: RoundedButtonsDoc
        },
        {
            id: 'textbuttons',
            label: 'Text',
            component: TextButtonsDoc
        },
        {
            id: 'raisedtextbuttons',
            label: 'Raised Text',
            component: RaisedTextButtonsDoc
        },
        {
            id: 'outlinedbuttons',
            label: 'Outlined',
            component: OutlinedButtonsDoc
        },
        {
            id: 'sizes',
            label: 'Sizes',
            component: SizesDoc
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
            component: ApiDoc,
            children: [
                {
                    id: 'menumodelapi',
                    label: 'MenuModel'
                },
                {
                    id: 'severity',
                    label: 'Severity'
                },
                {
                    id: 'raisedrounded',
                    label: 'Raised and Rounded Buttons'
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
                <title>React SplitButton Component</title>
                <meta name="description" content="SplitButton groups a set of commands in an overlay with a default command." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>SplitButton</h1>
                    <p>SplitButton groups a set of commands in an overlay with a default command.</p>
                </div>

                <DocActions github="splitbutton/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default SplitButtonDemo;
