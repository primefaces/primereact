import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AccessibilityDoc } from '../../components/doc/virtualscroller/accessibilitydoc';
import { ApiDoc } from '../../components/doc/virtualscroller/apidoc';
import { BasicDoc } from '../../components/doc/virtualscroller/basicdoc';
import { ImportDoc } from '../../components/doc/virtualscroller/importdoc';
import { LazyDoc } from '../../components/doc/virtualscroller/lazydoc';
import { LoadingDoc } from '../../components/doc/virtualscroller/loadingdoc';
import { ScrollDelayDoc } from '../../components/doc/virtualscroller/scrolldelaydoc';
import { StyleDoc } from '../../components/doc/virtualscroller/styledoc';
import { TemplateDoc } from '../../components/doc/virtualscroller/templatedoc';

const VirtualScrollerDemo = () => {
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
            id: 'scrolldelay',
            label: 'Scroll Delay',
            component: ScrollDelayDoc
        },
        {
            id: 'loading',
            label: 'Loading',
            component: LoadingDoc
        },
        {
            id: 'lazy',
            label: 'Lazy',
            component: LazyDoc
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
            component: ApiDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React VirtualScroller Component</title>
                <meta name="description" content="VirtualScroller is a performant approach to handle huge data efficiently." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>VirtualScroller</h1>
                    <p>VirtualScroller is a performant approach to handle huge data efficiently.</p>
                </div>

                <DocActions github="/virtualscroller" />
            </div>

            <div className="content-section doc virtualscroller-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default VirtualScrollerDemo;
