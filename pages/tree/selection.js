import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { SingleSelectionDoc } from '../../components/doc/tree/selection/singleselectiondoc';
import { MultipleSelectionWithKeyDoc } from '../../components/doc/tree/selection/multipleselectionwithkeydoc';
import { MultipleSelectionWithoutKeyDoc } from '../../components/doc/tree/selection/multipleselectionwithoutkeydoc';
import { CheckboxSelectionDoc } from '../../components/doc/tree/selection/checkboxselectiondoc';

const TreeSelectionDemo = () => {
    const docs = [
        {
            id: 'singleselection',
            label: 'Single Selection',
            component: SingleSelectionDoc
        },
        {
            id: 'multipleselectionwithkey',
            label: 'Multiple Selection with MetaKey',
            component: MultipleSelectionWithKeyDoc
        },
        {
            id: 'multipleselectionwithoutkey',
            label: 'Multiple Selection without MetaKey',
            component: MultipleSelectionWithoutKeyDoc
        },
        {
            id: 'checkboxselection',
            label: 'Checkbox Selection',
            component: CheckboxSelectionDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React Tree Component - Selection</title>
                <meta name="description" content="Tree supports single, multiple and checkbox as selection modes." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>
                        Tree <span>Selection</span>
                    </h1>
                    <p>Tree supports "single", "multiple" and "checkbox" as selection modes.</p>
                </div>

                <DocActions github="tree/sort.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default TreeSelectionDemo;
