import DocApiTable from '../../components/doc/common/docapitable';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/splitbutton/accessibilitydoc';
import { BasicDoc } from '../../components/doc/splitbutton/basicdoc';
import { DisabledDoc } from '../../components/doc/splitbutton/disableddoc';
import { ImportDoc } from '../../components/doc/splitbutton/importdoc';
import { LoadingDoc } from '../../components/doc/splitbutton/loadingdoc';
import { OutlinedDoc } from '../../components/doc/splitbutton/outlineddoc';
import { PTDoc } from '../../components/doc/splitbutton/pt/ptdoc';
import { Wireframe } from '../../components/doc/splitbutton/pt/wireframe';
import { RaisedDoc } from '../../components/doc/splitbutton/raiseddoc';
import { RaisedTextDoc } from '../../components/doc/splitbutton/raisedtextdoc';
import { RoundedDoc } from '../../components/doc/splitbutton/roundeddoc';
import { SeverityDoc } from '../../components/doc/splitbutton/severitydoc';
import { SizesDoc } from '../../components/doc/splitbutton/sizesdoc';
import { StyleDoc } from '../../components/doc/splitbutton/styledoc';
import { TextDoc } from '../../components/doc/splitbutton/textdoc';

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
            id: 'loading',
            label: 'Loading',
            component: LoadingDoc
        },
        {
            id: 'severity',
            label: 'Severity',
            component: SeverityDoc
        },
        {
            id: 'raised',
            label: 'Raised',
            component: RaisedDoc
        },
        {
            id: 'rounded',
            label: 'Rounded',
            component: RoundedDoc
        },
        {
            id: 'text',
            label: 'Text',
            component: TextDoc
        },
        {
            id: 'raisedtext',
            label: 'Raised Text',
            component: RaisedTextDoc
        },
        {
            id: 'outlinedbuttons',
            label: 'Outlined',
            component: OutlinedDoc
        },
        {
            id: 'sizes',
            label: 'Sizes',
            component: SizesDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
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
        }
    ];

    const ptDocs = [
        {
            id: 'pt.wireframe',
            label: 'Wireframe',
            component: Wireframe
        },
        {
            id: 'pt.splitbutton.options',
            label: 'SplitButton PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React SplitButton Component" header="SplitButton" description="SplitButton groups a set of commands in an overlay with a default action item." componentDocs={docs} apiDocs={['SplitButton']} ptDocs={ptDocs} />;
};

export default SplitButtonDemo;
