import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/speeddial/importdoc';
import { LinearDoc } from '../../components/doc/speeddial/lineardoc';
import { CircleDoc } from '../../components/doc/speeddial/circledoc';
import { TooltipDoc } from '../../components/doc/speeddial/tooltipdoc';
import { TransitionDoc } from '../../components/doc/speeddial/transitiondoc';
import { MaskDoc } from '../../components/doc/speeddial/maskdoc';
import { ApiDoc } from '../../components/doc/speeddial/apidoc';

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
            label: 'Circle, Semi-Circle and Quarter-Circle',
            component: CircleDoc
        },
        {
            id: 'tooltip',
            label: 'Tooltip',
            component: TooltipDoc
        },
        {
            id: 'transition',
            label: 'Transition Duration, Icon and No Rotate Animation',
            component: TransitionDoc
        },
        {
            id: 'mask',
            label: 'Mask',
            component: MaskDoc
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
                <title>React Speed Dial Component</title>
                <meta name="description" content="When pressed, a floating action button can display multiple primary actions that can be performed on a page." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Speed Dial</h1>
                    <p>When pressed, a floating action button can display multiple primary actions that can be performed on a page.</p>
                </div>

                <DocActions github="speeddial/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default SpeedDialDemo;
