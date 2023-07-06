import DocApiTable from '../../components/doc/common/docapitable';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/mention/accessibilitydoc';
import { AutoResizeDoc } from '../../components/doc/mention/autoresizedoc';
import { BasicDoc } from '../../components/doc/mention/basicdoc';
import { DisabledDoc } from '../../components/doc/mention/disableddoc';
import { FloatLabelDoc } from '../../components/doc/mention/floatlabeldoc';
import { FormikDoc } from '../../components/doc/mention/form/formikdoc';
import { HookFormDoc } from '../../components/doc/mention/form/hookformdoc';
import { ImportDoc } from '../../components/doc/mention/importdoc';
import { InvalidDoc } from '../../components/doc/mention/invaliddoc';
import { PTDoc } from '../../components/doc/mention/pt/ptdoc';
import { Wireframe } from '../../components/doc/mention/pt/wireframe';
import { StyleDoc } from '../../components/doc/mention/styledoc';
import { TriggersDoc } from '../../components/doc/mention/triggersdoc';

const MentionDemo = () => {
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
            id: 'triggers',
            label: 'Triggers',
            component: TriggersDoc
        },
        {
            id: 'autoresize',
            label: 'Auto Resize',
            component: AutoResizeDoc
        },
        {
            id: 'floatlabel',
            label: 'Float Label',
            component: FloatLabelDoc
        },
        {
            id: 'invalid',
            label: 'Invalid',
            component: InvalidDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'form',
            label: 'Form',
            description: 'Compatibility with popular React form libraries.',
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
            id: 'pt.mention.options',
            label: 'Mention PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React Mention Component" header="Mention" description="Mention component is used to tag objects in a text." componentDocs={docs} apiDocs={['Mention']} ptDocs={ptDocs} />;
};

export default MentionDemo;
