import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { LenientFilterDoc } from '../../components/doc/treetable/filter/lenientfilterdoc';
import { StrictFilterDoc } from '../../components/doc/treetable/filter/strictfilterdoc';

const TreeTableFilterDemo = () => {
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
                <title>React TreeTable Component - Filter</title>
                <meta name="description" content="Filtering is enabled by setting the filter property as true in column object." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>
                        TreeTable <span>Filter</span>
                    </h1>
                    <p>
                        Filtering is enabled by setting the filter property as true in column object. Default match mode is "startsWith" and this can be configured using filterMatchMode property of column object that also accepts "contains",
                        "endsWith", "equals", "in" and "custom". An optional global filter feature is available to search all fields with a keyword. By default input fields are generated as filter elements and using templating any component can be
                        used as a filter.
                    </p>
                </div>

                <DocActions github="treetable/filter.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default TreeTableFilterDemo;
