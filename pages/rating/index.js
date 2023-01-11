import Head from 'next/head';
import React, { useState } from 'react';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSections } from '../../components/doc/common/docsections';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { ImportDoc } from '../../components/doc/rating/importdoc';
import { BasicDoc } from '../../components/doc/rating/basicdoc';
import { WithoutCancelDoc } from '../../components/doc/rating/withoutcanceldoc';
import { ReadOnlyDoc } from '../../components/doc/rating/readonlydoc';
import { DisabledDoc } from '../../components/doc/rating/disableddoc';
import { TemplateDoc } from '../../components/doc/rating/templatedoc';
import { ApiDoc } from '../../components/doc/rating/apidoc';
import { AccessibilityDoc } from '../../components/doc/rating/accessibilitydoc';
import { StyleDoc } from '../../components/doc/rating/styledoc';
import { NumberOfStarsDoc } from '../../components/doc/rating/numberofstarsdoc';

const RatingDemo = () => {
    const docs = [
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
            id: 'withoutcancel',
            label: 'Without Cancel',
            component: WithoutCancelDoc
        },
        {
            id: 'readonly',
            label: 'ReadOnly',
            component: ReadOnlyDoc
        },
        {
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'numberofstars',
            label: 'Number of Stars',
            component: NumberOfStarsDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
        },
        {
            id: 'accessibility',
            label: 'Accessibility',
            component: AccessibilityDoc
        },
        {
            id: 'api',
            label: 'API',
            type: 'api',
            component: ApiDoc,
            children: [
                {
                    id: 'properties',
                    label: 'Properties'
                },
                {
                    id: 'events',
                    label: 'Events'
                }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Rating Component</title>
                <meta name="description" content="Rating component is a star based selection input." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Rating</h1>
                    <p>Rating component is a star based selection input.</p>
                </div>

                <DocActions github="rating/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default RatingDemo;
