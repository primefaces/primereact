import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { FitModeDoc } from '../../components/doc/treetable/resize/fitmodedoc';
import { ExpandModeDoc } from '../../components/doc/treetable/resize/expandmodedoc';
import { ScrollableDoc } from '../../components/doc/treetable/resize/scrollabledoc';
import { ScrollableWithVariableWidthDoc } from '../../components/doc/treetable/resize/scrollablewithvariabledoc';

const TreeTableResizeDemo = () => {
    const docs = [
        {
            id: 'fitmode',
            label: 'Fit Mode',
            component: FitModeDoc
        },
        {
            id: 'expandmode',
            label: 'Expand Mode',
            component: ExpandModeDoc
        },
        {
            id: 'scrollable',
            label: 'Scrollable',
            component: ScrollableDoc
        },
        {
            id: 'scrollablewithvariable',
            label: 'Scrollable with Variable Width',
            component: ScrollableWithVariableWidthDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React TreeTable Component - Column Resize</title>
                <meta name="description" content="Columns can be resized using drag drop by setting the resizableColumns to true." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>
                        TreeTable <span>Column Resize</span>
                    </h1>
                    <p>
                        Columns can be resized using drag drop by setting the resizableColumns to true. There are two resize modes; "fit" and "expand". Fit is the default one and the overall table width does not change when a column is resized
                        whereas in "expand" mode, table width also changes along with the column width.
                    </p>
                </div>

                <DocActions github="treetable/resize.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default TreeTableResizeDemo;
