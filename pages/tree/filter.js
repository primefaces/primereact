import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { LenientFilterDoc } from '../../components/doc/tree/filter/lenientfilterdoc';
import { StrictFilterDoc } from '../../components/doc/tree/filter/strictfilterdoc';

const TreeFilterDemo = () => {
    const docs = [
        {
            id: 'lenientfilter',
            label: 'Lenient Filter',
            component: LenientFilterDoc
        },
        {
            id: 'strictfilter',
            label: 'Strict Filter',
            component: StrictFilterDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React Tree Component - Filter</title>
                <meta name="description" content="Filtering is enabled by setting the filter property as true in column object." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>
                        Tree <span>Filter</span>
                    </h1>
                    <p>Filtering updates the node based on the constraints.</p>
                </div>

                <DocActions github="tree/filter.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default TreeFilterDemo;
