import DocApiTable from '../../components/doc/common/docapitable';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/speeddial/accessibilitydoc';
import { CircleDoc } from '../../components/doc/speeddial/circledoc';
import { CustomDoc } from '../../components/doc/speeddial/customdoc';
import { ImportDoc } from '../../components/doc/speeddial/importdoc';
import { LinearDoc } from '../../components/doc/speeddial/lineardoc';
import { MaskDoc } from '../../components/doc/speeddial/maskdoc';
import { PTDoc } from '../../components/doc/speeddial/pt/ptdoc';
import { Wireframe } from '../../components/doc/speeddial/pt/wireframe';
import { QuarterCircleDoc } from '../../components/doc/speeddial/quartercircledoc';
import { SemiCircleDoc } from '../../components/doc/speeddial/semicircledoc';
import { StyleDoc } from '../../components/doc/speeddial/styledoc';
import { TooltipDoc } from '../../components/doc/speeddial/tooltipdoc';

const SpeedDialDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'linear',
            label: 'Linear',
            component: LinearDoc
        },
        {
            id: 'circle',
            label: 'Circle',
            component: CircleDoc
        },
        {
            id: 'semicircle',
            label: 'Semi Circle',
            component: SemiCircleDoc
        },
        {
            id: 'quartercircle',
            label: 'Quarter Circle',
            component: QuarterCircleDoc
        },
        {
            id: 'tooltip',
            label: 'Tooltip',
            component: TooltipDoc
        },
        {
            id: 'mask',
            label: 'Mask',
            component: MaskDoc
        },
        {
            id: 'custom',
            label: 'Custom',
            component: CustomDoc
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
            id: 'pt.speeddial.options',
            label: 'SpeedDial PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React Speed Dial Component" header="Speed Dial" description="SpeedDial is a floating button with a popup menu." componentDocs={docs} apiDocs={['SpeedDial']} ptDocs={ptDocs} />;
};

export default SpeedDialDemo;
