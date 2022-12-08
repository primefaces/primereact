import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/tooltip/importdoc';
import { PositionsDoc } from '../../components/doc/tooltip/positionsdoc';
import { FocusDoc } from '../../components/doc/tooltip/focusdoc';
import { DynamicDoc } from '../../components/doc/tooltip/dynamicdoc';
import { MouseTrackDoc } from '../../components/doc/tooltip/mousetrackdoc';
import { AutoHideDoc } from '../../components/doc/tooltip/autohidedoc';
import { TemplateDoc } from '../../components/doc/tooltip/templatedoc';
import { DisabledDoc } from '../../components/doc/tooltip/disableddoc';
import { TargetDoc } from '../../components/doc/tooltip/targetdoc';
import { ColorDoc } from '../../components/doc/tooltip/colordoc';
import { DelayDoc } from '../../components/doc/tooltip/delaydoc';
import { ApiDoc } from '../../components/doc/tooltip/apidoc';

const TooltipDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'positions',
            label: 'Positions',
            component: PositionsDoc
        },
        {
            id: 'focus',
            label: 'Focus and Blur',
            component: FocusDoc
        },
        {
            id: 'dynamic',
            label: 'Dynamic Tooltip',
            component: DynamicDoc
        },
        {
            id: 'mousetrack',
            label: 'MouseTrack',
            component: MouseTrackDoc
        },
        {
            id: 'autohide',
            label: 'AutoHide',
            component: AutoHideDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'target',
            label: 'Target',
            component: TargetDoc
        },
        {
            id: 'delay',
            label: 'Delay',
            component: DelayDoc
        },
        {
            id: 'color',
            label: 'Color',
            component: ColorDoc
        },
        {
            id: 'api',
            label: 'API',
            component: ApiDoc,
            children: [
                {
                    id: 'tooltipproperties',
                    label: 'Tooltip Options'
                },
                {
                    id: 'globaltooltip',
                    label: 'Global Tooltip'
                },
                {
                    id: 'customcontent',
                    label: 'Custom Content'
                },
                {
                    id: 'targetelement',
                    label: 'Target Element Options'
                },
                {
                    id: 'tooltipcomponent',
                    label: 'Tooltip Component Properties'
                },
                {
                    id: 'methods',
                    label: 'Methods'
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
                <title>React Tooltip Component</title>
                <meta name="description" content="Tooltip functionality is integrated within various PrimeReact components." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Tooltip</h1>
                    <p>Tooltip functionality is integrated within various PrimeReact components.</p>
                </div>

                <DocActions github="tooltip/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default TooltipDemo;
