import DocApiTable from '@/components/doc/common/docapitable';
import { DocComponent } from '@/components/doc/common/doccomponent';
import { AccessibilityDoc } from '@/components/doc/galleria/accessibilitydoc';
import { AdvancedDoc } from '@/components/doc/galleria/advanceddoc';
import { AutoPlayDoc } from '@/components/doc/galleria/autoplaydoc';
import { BasicDoc } from '@/components/doc/galleria/basicdoc';
import { CaptionDoc } from '@/components/doc/galleria/captiondoc';
import { ControlledDoc } from '@/components/doc/galleria/controlleddoc';
import { CustomContentDoc } from '@/components/doc/galleria/fullscreen/customcontentdoc';
import { WithoutThumbnailsDoc } from '@/components/doc/galleria/fullscreen/withoutthumbnailsdoc';
import { WithThumbnailsDoc } from '@/components/doc/galleria/fullscreen/withthumbnailsdoc';
import { ImportDoc } from '@/components/doc/galleria/importdoc';
import { ClickEventDoc } from '@/components/doc/galleria/indicator/clickeventdoc';
import { HoverEventDoc } from '@/components/doc/galleria/indicator/hovereventdoc';
import { PositionDoc } from '@/components/doc/galleria/indicator/positiondoc';
import { IndicatorTemplateDoc } from '@/components/doc/galleria/indicator/templatedoc';
import { HoverDoc } from '@/components/doc/galleria/navigator/hoverdoc';
import { IndicatorsDoc } from '@/components/doc/galleria/navigator/indicatorsdoc';
import { ItemThumbnailsDoc } from '@/components/doc/galleria/navigator/itemthumbnailsdoc';
import { ItemWithoutThumbnailsDoc } from '@/components/doc/galleria/navigator/itemwithouthumbnailsdoc';
import { PTDoc } from '@/components/doc/galleria/pt/ptdoc';
import { Wireframe } from '@/components/doc/galleria/pt/wireframe';
import { ResponsiveDoc } from '@/components/doc/galleria/responsivedoc';
import { StyledDoc } from '@/components/doc/galleria/theming/styleddoc';
import { TailwindDoc } from '@/components/doc/galleria/theming/tailwinddoc';
import { ThumbnailDoc } from '@/components/doc/galleria/thumbnaildoc';

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
            description: 'In fullscreen mode content covers the whole page over a modal layer.',
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
            description: 'Navigators are used to move back and forth between the images.',
            children: [
                {
                    id: 'itemthumbnails',
                    label: 'With Thumbnails',
                    component: ItemThumbnailsDoc
                },
                {
                    id: 'itemwithouthumbnails',
                    label: 'Without Thumbnails',
                    component: ItemWithoutThumbnailsDoc
                },
                {
                    id: 'itemhover',
                    label: 'Display on Hover',
                    component: HoverDoc
                },
                {
                    id: 'indicators',
                    label: 'With Indicators',
                    component: IndicatorsDoc
                }
            ]
        },
        {
            id: 'autoplay',
            label: 'AutoPlay',
            component: AutoPlayDoc
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
            id: 'pt.galleria.options',
            label: 'Galleria PT Options',
            component: DocApiTable
        },
        {
            id: 'pt.demo',
            label: 'Example',
            component: PTDoc
        }
    ];

    const themingDocs = [
        {
            id: 'styled',
            label: 'Styled',
            component: StyledDoc
        },
        {
            id: 'unstyled',
            label: 'Unstyled',
            description: 'Theming is implemented with the pass through properties in unstyled mode.',
            children: [
                {
                    id: 'tailwind',
                    label: 'Tailwind',
                    component: TailwindDoc
                }
            ]
        }
    ];

    return <DocComponent title="React Gallery Component" header="Galleria" description="Galleria is a content gallery component." componentDocs={docs} apiDocs={['Galleria']} ptDocs={ptDocs} themingDocs={themingDocs} />;
};

export default GalleriaDemo;
