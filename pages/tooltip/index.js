import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/tooltip/accessibilitydoc';
import { ApiDoc } from '../../components/doc/tooltip/apidoc';
import { AutoHideDoc } from '../../components/doc/tooltip/autohidedoc';
import { DelayDoc } from '../../components/doc/tooltip/delaydoc';
import { DisabledDoc } from '../../components/doc/tooltip/disableddoc';
import { EventDoc } from '../../components/doc/tooltip/eventdoc';
import { ImportDoc } from '../../components/doc/tooltip/importdoc';
import { MouseTrackDoc } from '../../components/doc/tooltip/mousetrackdoc';
import { PositionDoc } from '../../components/doc/tooltip/positiondoc';
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
        },
        {
            id: 'api',
            label: 'API',
            component: ApiDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React Tooltip Component</title>
                <meta name="description" content="Tooltip functionality is integrated within various PrimeReact components." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Tooltip</h1>
                    <p>Tooltip functionality is integrated within various PrimeReact components.</p>
                </div>

                <DocActions github="/tooltip" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default TooltipDemo;
