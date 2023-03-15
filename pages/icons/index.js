import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { BasicDoc } from '../../components/doc/icons/basicdoc';
import { ColorDoc } from '../../components/doc/icons/colordoc';
import { ConstantsDoc } from '../../components/doc/icons/constantsdoc';
import { DownloadDoc } from '../../components/doc/icons/downloaddoc';
import { ImportDoc } from '../../components/doc/icons/importdoc';
import { ListDoc } from '../../components/doc/icons/listdoc';
import { SizeDoc } from '../../components/doc/icons/sizedoc';
import { SpinDoc } from '../../components/doc/icons/spindoc';
import { SVGDoc } from '../../components/doc/icons/svgdoc';

const IconsDoc = () => {
    const docs = [
        {
            id: 'download',
            label: 'Download',
            component: DownloadDoc
        },
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
            id: 'svg',
            label: 'SVG',
            component: SVGDoc
        },
        {
            id: 'size',
            label: 'Size',
            component: SizeDoc
        },
        {
            id: 'color',
            label: 'Color',
            component: ColorDoc
        },
        {
            id: 'spin',
            label: 'Spin',
            component: SpinDoc
        },
        {
            id: 'constants',
            label: 'Constants',
            component: ConstantsDoc
        },
        {
            id: 'list',
            label: 'List',
            component: ListDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React Icon Library - PrimeReact</title>
                <meta name="description" content="PrimeIcons is the default icon library of PrimeReact." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Icons</h1>
                        <p>
                            <a href="https://github.com/primefaces/primeicons" className="text-primary hover:underline font-semibold">
                                PrimeIcons
                            </a>{' '}
                            is the default icon library of PrimeReact with over 250 open source icons developed by PrimeTek.
                        </p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default IconsDoc;
