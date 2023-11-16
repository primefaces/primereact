import { ColorsDoc } from '@/components/doc/accessibility/colorsdoc';
import { FormControlsDoc } from '@/components/doc/accessibility/formcontrolsdoc';
import { IntroductionDoc } from '@/components/doc/accessibility/introductiondoc';
import { SemanticHTMLDoc } from '@/components/doc/accessibility/semantichtmldoc';
import { WAIAriaDoc } from '@/components/doc/accessibility/waiariadoc';
import { WCAGDoc } from '@/components/doc/accessibility/wcagdoc';
import { DocSectionNav } from '@/components/doc/common/docsectionnav';
import { DocSections } from '@/components/doc/common/docsections';
import Head from 'next/head';

const AccessibilityDoc = () => {
    const docs = [
        {
            id: 'introduction',
            label: 'Introduction',
            component: IntroductionDoc
        },
        {
            id: 'wcag',
            label: 'WCAG',
            component: WCAGDoc
        },
        {
            id: 'formcontrols',
            label: 'Form Controls',
            component: FormControlsDoc
        },
        {
            id: 'semantichtml',
            label: 'Semantic HTML',
            component: SemanticHTMLDoc
        },
        {
            id: 'waiaria',
            label: 'WAI ARIA',
            component: WAIAriaDoc
        },
        {
            id: 'colors',
            label: 'Colors',
            component: ColorsDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>Accessibility - PrimeReact</title>
                <meta name="description" content="Accessible React UI Components." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Accessibility</h1>
                        <p>An introduction to accessibility and how it translates to React UI Components.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default AccessibilityDoc;
