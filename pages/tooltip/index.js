import DocApiTable from '../../components/doc/common/docapitable';
import { DocComponent } from '../../components/doc/common/doccomponent';
import { AccessibilityDoc } from '../../components/doc/tooltip/accessibilitydoc';
import { AutoHideDoc } from '../../components/doc/tooltip/autohidedoc';
import { DelayDoc } from '../../components/doc/tooltip/delaydoc';
import { DisabledDoc } from '../../components/doc/tooltip/disableddoc';
import { EventDoc } from '../../components/doc/tooltip/eventdoc';
import { ImportDoc } from '../../components/doc/tooltip/importdoc';
import { MouseTrackDoc } from '../../components/doc/tooltip/mousetrackdoc';
import { PositionDoc } from '../../components/doc/tooltip/positiondoc';
import { PTDoc } from '../../components/doc/tooltip/pt/ptdoc';
import { Wireframe } from '../../components/doc/tooltip/pt/wireframe';
import { ReactiveDoc } from '../../components/doc/tooltip/reactivedoc';
import { StyleDoc } from '../../components/doc/tooltip/styledoc';
import { TargetDoc } from '../../components/doc/tooltip/targetdoc';
import { TemplateDoc } from '../../components/doc/tooltip/templatedoc';

const TooltipDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'position',
            label: 'Position',
            component: PositionDoc
        },
        {
            id: 'event',
            label: 'Event',
            component: EventDoc
        },
        {
            id: 'target',
            label: 'Target',
            component: TargetDoc
        },
        {
            id: 'mousetrack',
            label: 'Mouse Track',
            component: MouseTrackDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'autohide',
            label: 'Auto Hide',
            component: AutoHideDoc
        },
        {
            id: 'reactive',
            label: 'Reactive',
            component: ReactiveDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'delay',
            label: 'Delay',
            component: DelayDoc
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
            id: 'pt.tooltip.options',
            label: 'Tooltip PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    return <DocComponent title="React Tooltip Component" header="Tooltip" description="Tooltip functionality is integrated within various PrimeReact components." componentDocs={docs} apiDocs={['Tooltip', 'TooltipOptions']} ptDocs={ptDocs} />;
};

export default TooltipDemo;
