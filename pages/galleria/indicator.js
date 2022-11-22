import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ClickEventDoc } from '../../components/doc/galleria/indicator/clickevent';
import { HoverEventDoc } from '../../components/doc/galleria/indicator/hoverevent';
import { InsideContentDoc } from '../../components/doc/galleria/indicator/insidecontent';
import { PositionTopDoc } from '../../components/doc/galleria/indicator/positiontop';
import { PositionLeftDoc } from '../../components/doc/galleria/indicator/positionleft';
import { PositionRightDoc } from '../../components/doc/galleria/indicator/positionright';
import { IndicatorTemplateDoc } from '../../components/doc/galleria/indicator/template';

const GalleriaIndicatorDemo = () => {
    const docs = [
        {
            id: 'clickevent',
            label: 'Indicators with Click Event',
            component: ClickEventDoc
        },
        {
            id: 'hoverevent',
            label: 'Indicators with Hover Event',
            component: HoverEventDoc
        },
        {
            id: 'insidecontent',
            label: 'Inside Content',
            component: InsideContentDoc
        },
        {
            id: 'positiontop',
            label: 'Positioned at Top',
            component: PositionTopDoc
        },
        {
            id: 'positionleft',
            label: 'Positioned at Left',
            component: PositionLeftDoc
        },
        {
            id: 'positionright',
            label: 'Positioned at Right',
            component: PositionRightDoc
        },
        {
            id: 'template',
            label: 'Indicator Template',
            component: IndicatorTemplateDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React Gallery Component - Indicator</title>
                <meta name="description" content="Indicators allow quick navigation between the items." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>
                        Galleria <span>Indicator</span>
                    </h1>
                    <p>Indicators allow quick navigation between the items.</p>
                </div>

                <DocActions github="galleria/indicator.js" />
            </div>
            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default GalleriaIndicatorDemo;
