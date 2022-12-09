import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { VerticalDoc } from '../../components/doc/treetable/scroll/verticaldoc';
import { HorizontalDoc } from '../../components/doc/treetable/scroll/horizontaldoc';
import { HorizontalAndVerticalDoc } from '../../components/doc/treetable/scroll/horizontalandverticaldoc';
import { FrozenColumnsDoc } from '../../components/doc/treetable/scroll/frozencolsdoc';

const TreeTableScrollDemo = () => {
    const docs = [
        {
            id: 'vertical',
            label: 'Vertical',
            component: VerticalDoc
        },
        {
            id: 'horizontal',
            label: 'Horizontal',
            component: HorizontalDoc
        },
        {
            id: 'horizontalandvertical',
            label: 'Horizontal and Vertical',
            component: HorizontalAndVerticalDoc
        },
        {
            id: 'frozencolumns',
            label: 'Frozen Columns',
            component: FrozenColumnsDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React TreeTable Component - Scroll</title>
                <meta name="description" content="Scrolling data is available horizontally, vertically or both with optional support for frozen columns." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>
                        TreeTable <span>Scroll</span>
                    </h1>
                    <p>Scrolling data is available horizontally, vertically or both with optional support for frozen columns.</p>
                </div>

                <DocActions github="treetable/scroll.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default TreeTableScrollDemo;
