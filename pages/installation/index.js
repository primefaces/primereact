import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ContextDoc } from '../../components/doc/installation/context';
import { DownloadDoc } from '../../components/doc/installation/downloaddoc';
import { ExamplesDoc } from '../../components/doc/installation/examplesdoc';
import { StylesDoc } from '../../components/doc/installation/stylesdoc';
import { UsageDoc } from '../../components/doc/installation/usagedoc';
import { CRADoc } from '../../components/doc/installation/videos/cradoc';
import { NextJSDoc } from '../../components/doc/installation/videos/nextjsdoc';

const InstallationPage = () => {
    const docs = [
        {
            id: 'download',
            label: 'Download',
            component: DownloadDoc
        },
        {
            id: 'context',
            label: 'Context',
            component: ContextDoc
        },
        {
            id: 'styles',
            label: 'Styles',
            component: StylesDoc
        },
        {
            id: 'usage',
            label: 'Usage',
            component: UsageDoc
        },
        {
            id: 'examples',
            label: 'Examples',
            component: ExamplesDoc
        },
        {
            id: 'videos',
            label: 'Videos',
            description: 'Video tutorials to take you through step-by-step.',
            children: [
                {
                    id: 'cra',
                    label: 'CRA',
                    component: CRADoc
                },
                {
                    id: 'nextjs',
                    label: 'Next.js',
                    component: NextJSDoc
                }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>Getting Started - PrimeReact</title>
                <meta name="description" content="PrimeReact is a rich set of open source components for React." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Installation</h1>
                        <p>PrimeReact is a rich set of open source UI components for React.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default InstallationPage;
