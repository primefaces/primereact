import DocApiTable from '../../components/doc/common/docapitable';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/dialog/accessibilitydoc';
import { BasicDoc } from '../../components/doc/dialog/basicdoc';
import { FooterDoc } from '../../components/doc/dialog/footerdoc';
import { ImportDoc } from '../../components/doc/dialog/importdoc';
import { LongContentDoc } from '../../components/doc/dialog/longcontentdoc';
import { MaximizableDoc } from '../../components/doc/dialog/maximizabledoc';
import { PositionDoc } from '../../components/doc/dialog/positiondoc';
import { PTDoc } from '../../components/doc/dialog/pt/ptdoc';
import { Wireframe } from '../../components/doc/dialog/pt/wireframe';
import { ResponsiveDoc } from '../../components/doc/dialog/responsivedoc';
import { StyleDoc } from '../../components/doc/dialog/styledoc';
import { WithoutModalDoc } from '../../components/doc/dialog/withoutmodaldoc';

const DialogDemo = () => {
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
            id: 'footer',
            label: 'Footer',
            component: FooterDoc
        },
        {
            id: 'longcontent',
            label: 'Long Content',
            component: LongContentDoc
        },
        {
            id: 'modal',
            label: 'Without Modal',
            component: WithoutModalDoc
        },
        {
            id: 'responsive',
            label: 'Responsive',
            component: ResponsiveDoc
        },
        {
            id: 'position',
            label: 'Position',
            component: PositionDoc
        },
        {
            id: 'maximizable',
            label: 'Maximizable',
            component: MaximizableDoc
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
            id: 'pt.dialog.options',
            label: 'Dialog PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React Dialog Component" header="Dialog" description="Dialog is a container to display content in an overlay window" componentDocs={docs} apiDocs={['Dialog']} ptDocs={ptDocs} />;
};

export default DialogDemo;
