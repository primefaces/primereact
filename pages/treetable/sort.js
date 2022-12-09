import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { SingleDoc } from '../../components/doc/treetable/sort/singledoc';
import { MultipleDoc } from '../../components/doc/treetable/sort/multipledoc';

const TreeTableSortDemo = () => {
    const docs = [
        {
            id: 'single',
            label: 'Single',
            component: SingleDoc
        },
        {
            id: 'multiple',
            label: 'Multiple',
            component: MultipleDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React TreeTable Component - Sort</title>
                <meta name="description" content="TreeTable supports both single column and multiple column sorting." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>
                        TreeTable <span>Sort</span>
                    </h1>
                    <p>TreeTable supports both single column and multiple column sorting.</p>
                </div>

                <DocActions github="treetable/sort.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default TreeTableSortDemo;
