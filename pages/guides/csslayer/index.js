import Head from 'next/head';
import { DocSectionNav } from '@/components/doc/common/docsectionnav';
import { DocSections } from '@/components/doc/common/docsections';
import { SpecificityDoc } from '@/components/doc/csslayer/specificitydoc';
import { ResetDoc } from '@/components/doc/csslayer/resetdoc';
import { TailwindDoc } from '@/components/doc/csslayer/tailwinddoc';
import { BootstrapDoc } from '@/components/doc/csslayer/bootstrapdoc';
import { NormalizeDoc } from '@/components/doc/csslayer/normalizedoc';

const AccessibilityDoc = () => {
    const docs = [
        {
            id: 'specificity',
            label: 'Specificity',
            component: SpecificityDoc
        },
        {
            id: 'reset',
            label: 'Reset',
            component: ResetDoc
        },
        {
            id: 'libraries',
            label: 'Libraries',
            description: 'Compatibility between PrimeReact and CSS libraries.',
            children: [
                {
                    id: 'tailwind',
                    label: 'Tailwind CSS',
                    component: TailwindDoc
                },
                {
                    id: 'bootstrap',
                    label: 'Bootstrap',
                    component: BootstrapDoc
                },
                {
                    id: 'normalize',
                    label: 'Normalize',
                    component: NormalizeDoc
                }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>CSS Layer - PrimeReact</title>
                <meta name="description" content="Best practices for the PrimeReact cascade layer in styled mode." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>CSS Layer</h1>
                        <p>Best practices for the PrimeReact cascade layer in styled mode.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default AccessibilityDoc;
