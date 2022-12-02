import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ImportDoc } from '../../components/doc/galleria/importdoc';
import { GaleriaDemo } from '../../components/doc/galleria/galeriademo';
import { ApiDoc } from '../../components/doc/galleria/apidoc';
import { ProgrammaticDoc } from '../../components/doc/galleria/programmaticdoc';
import { ResponsiveDoc } from '../../components/doc/galleria/responsivedoc';
import { AutoPlayDemoDoc } from '../../components/doc/galleria/autoplaydoc';
import { CaptionDoc } from '../../components/doc/galleria/captiondoc';
import { AdvancedDoc } from '../../components/doc/galleria/advanceddoc';

const GalleriaDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'galeriademo',
            label: 'Basic',
            component: GaleriaDemo
        },
        {
            id: 'programmatic',
            label: 'Programmatic',
            component: ProgrammaticDoc
        },
        {
            label: 'Indicator',
            to: '/galleria/indicator'
        },
        {
            label: 'Thumbnail',
            to: '/galleria/thumbnail'
        },
        {
            label: 'Navigator',
            to: '/galleria/navigator'
        },
        {
            id: 'responsive',
            label: 'Responsive',
            component: ResponsiveDoc
        },
        {
            label: 'FullScreen',
            to: '/galleria/fullscreen'
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
                <title>React Gallery Component</title>
                <meta name="description" content="Galleria is a content gallery component." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Galleria</h1>
                    <p>Galleria is a content gallery component.</p>
                </div>
            </div>
            <div className="content-section doc button-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default GalleriaDemo;
