import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ImportDoc } from '../../components/doc/galleria/importdoc';
import { BasicDoc } from '../../components/doc/galleria/basicdoc';
import { ApiDoc } from '../../components/doc/galleria/apidoc';
import { AccessibilityDoc } from '../../components/doc/galleria/accessibilitydoc';
import { StyleDoc } from '../../components/doc/galleria/styledoc';
import { ControlledDoc } from '../../components/doc/galleria/controlleddoc';
import { ResponsiveDoc } from '../../components/doc/galleria/responsivedoc';
import { AutoPlayDemoDoc } from '../../components/doc/galleria/autoplaydoc';
import { CaptionDoc } from '../../components/doc/galleria/captiondoc';
import { AdvancedDoc } from '../../components/doc/galleria/advanceddoc';
import { ClickEventDoc } from '../../components/doc/galleria/indicator/clickeventdoc';
import { HoverEventDoc } from '../../components/doc/galleria/indicator/hovereventdoc';
import { PositionDoc } from '../../components/doc/galleria/indicator/positiondoc';
import { IndicatorTemplateDoc } from '../../components/doc/galleria/indicator/templatedoc';
import { WithThumbnailsDoc } from '../../components/doc/galleria/fullscreen/withthumbnails';
import { WithoutThumbnailsDoc } from '../../components/doc/galleria/fullscreen/withoutthumbnails';
import { CustomContentDoc } from '../../components/doc/galleria/fullscreen/custom';
import { ItemThumbnailsDoc } from '../../components/doc/galleria/navigator/itemthumbnails';
import { ItemWithoutThumbnailsDoc } from '../../components/doc/galleria/navigator/itemwithouthumbnails';
import { ItemHoverDoc } from '../../components/doc/galleria/navigator/hover';
import { IndicatorsDoc } from '../../components/doc/galleria/navigator/indicators';
import { ThumbnailDoc } from '../../components/doc/galleria/thumbnaildoc';

const GalleriaDemo = () => {
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
            id: 'controlled',
            label: 'Controlled',
            component: ControlledDoc
        },
        {
            id: 'indicator',
            label: 'Indicator',
            description: 'Indicators allow quick navigation between the items.',
            children: [
                {
                    id: 'indciatorbasic',
                    label: 'Click Event',
                    component: ClickEventDoc
                },
                {
                    id: 'indciatorhoverevent',
                    label: 'Hover Event',
                    component: HoverEventDoc
                },
                {
                    id: 'indicatorposition',
                    label: 'Position',
                    component: PositionDoc
                },
                {
                    id: 'indciatortemplate',
                    label: 'Template',
                    component: IndicatorTemplateDoc
                }
            ]
        },
        {
            id: 'thumbnail',
            label: 'Thumbnail',
            component: ThumbnailDoc
        },
        {
            id: 'responsive',
            label: 'Responsive',
            component: ResponsiveDoc
        },
        {
            id: 'fullscreen',
            label: 'Full Screen',
            description: 'In fullscreen mode content covers the whole page over a mask.',
            children: [
                {
                    id: 'fullscreenwiththumbnail',
                    label: 'With Thumbnails',
                    component: WithThumbnailsDoc
                },
                {
                    id: 'fullscreenwithoutthumnails',
                    label: 'Without Thumbnails',
                    component: WithoutThumbnailsDoc
                },
                {
                    id: 'fullscreencustom',
                    label: 'Custom Content',
                    component: CustomContentDoc
                }
            ]
        },
        {
            id: 'navigator',
            label: 'Navigator',
            description: 'Combining item navigators, thumbnails and indicators provide various UI alternatives.',
            children: [
                {
                    id: 'itemthumbnails',
                    label: 'Item Navigators and Thumbnails',
                    component: ItemThumbnailsDoc
                },
                {
                    id: 'itemwithouthumbnails',
                    label: 'Item Navigators without Thumbnails',
                    component: ItemWithoutThumbnailsDoc
                },
                {
                    id: 'itemhover',
                    label: 'Item Navigators on Hover',
                    component: ItemHoverDoc
                },
                {
                    id: 'indicators',
                    label: 'Item Navigators and Indicators',
                    component: IndicatorsDoc
                }
            ]
        },
        {
            id: 'autoplay',
            label: 'AutoPlay',
            component: AutoPlayDemoDoc
        },
        {
            id: 'caption',
            label: 'Caption',
            component: CaptionDoc
        },
        {
            id: 'advanced',
            label: 'Advanced',
            component: AdvancedDoc
        },
        {
            id: 'styling',
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
                    id: 'properties',
                    label: 'Properties'
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
                <title>React Gallery Component</title>
                <meta name="description" content="Galleria is a content gallery component." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Galleria</h1>
                    <p>Galleria is a content gallery component.</p>
                </div>
            </div>
            <div className="content-section doc galleria-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default GalleriaDemo;
