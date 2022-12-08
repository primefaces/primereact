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
            id: 'severities',
            label: 'Severities',
            component: SeveritiesDoc
        },
        {
            id: 'raisedbuttons',
            label: 'Raised Buttons',
            component: RaisedButtonsDoc
        },
        {
            id: 'roundedbuttons',
            label: 'Rounded Buttons',
            component: RoundedButtonsDoc
        },
        {
            id: 'textbuttons',
            label: 'Text Buttons',
            component: TextButtonsDoc
        },
        {
            id: 'raisedtextbuttons',
            label: 'Raised Text Buttons',
            component: RaisedTextButtonsDoc
        },
        {
            id: 'outlinedbuttons',
            label: 'Outlined Buttons',
            component: OutlinedButtonsDoc
        },
        {
            id: 'sizes',
            label: 'Sizes',
            component: SizesDoc
        },
        {
            id: 'api',
            label: 'API',
            component: ApiDoc,
            children: [
                {
                    id: 'menumodelapi',
                    label: 'MenuModel API'
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
