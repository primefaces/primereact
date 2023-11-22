import { OverviewDoc } from '@/components/doc/colors/overviewdoc';
import { PaletteDoc } from '@/components/doc/colors/palettedoc';
import { SurfacesDoc } from '@/components/doc/colors/surfacesdoc';
import { DocSectionNav } from '@/components/doc/common/docsectionnav';
import { DocSections } from '@/components/doc/common/docsections';
import Head from 'next/head';

const IconsDoc = () => {
    const docs = [
        {
            id: 'overview',
            label: 'Overview',
            component: OverviewDoc
        },
        {
            id: 'surfaces',
            label: 'Surfaces',
            component: SurfacesDoc
        },
        {
            id: 'palette',
            label: 'Palette',
            component: PaletteDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>Color System - PrimeReact</title>
                <meta name="description" content="Each PrimeReact theme exports its own color palette." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Color System</h1>
                        <p>Each PrimeReact theme exports its own color palette.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default IconsDoc;
