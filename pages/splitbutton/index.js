import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/splitbutton/accessibilitydoc';
import { BasicDoc } from '../../components/doc/splitbutton/basic';
import { DisabledDoc } from '../../components/doc/splitbutton/disableddoc';
import { ImportDoc } from '../../components/doc/splitbutton/importdoc';
import { LoadingDoc } from '../../components/doc/splitbutton/loadingdoc';
import { OutlinedButtonsDoc } from '../../components/doc/splitbutton/outlinedbuttonsdoc';
import { RaisedButtonsDoc } from '../../components/doc/splitbutton/raisedbuttonsdoc';
import { RaisedTextButtonsDoc } from '../../components/doc/splitbutton/raisedtextbuttonsdoc';
import { RoundedButtonsDoc } from '../../components/doc/splitbutton/roundedbuttonsdoc';
import { SeveritiesDoc } from '../../components/doc/splitbutton/severitiesdoc';
import { SizesDoc } from '../../components/doc/splitbutton/sizesdoc';
import { StyleDoc } from '../../components/doc/splitbutton/styledoc';
import { TextButtonsDoc } from '../../components/doc/splitbutton/textbuttonsdoc';

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
            doc: [{ name: 'SplitButton', pathname: '/modules/splitbutton.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React SplitButton Component</title>
                <meta name="description" content="SplitButton groups a set of commands in an overlay with a default command." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>SplitButton</h1>
                        <p>SplitButton groups a set of commands in an overlay with a default command.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default SplitButtonDemo;
