import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/virtualscroller/importdoc';
import { BasicDoc } from '../../components/doc/virtualscroller/basicdoc';
import { ApiDoc } from '../../components/doc/virtualscroller/apidoc';
import { ScrollDelayDoc } from '../../components/doc/virtualscroller/scrolldelaydoc';
import { LoadingDoc } from '../../components/doc/virtualscroller/loadingdoc';
import { LazyDoc } from '../../components/doc/virtualscroller/lazydoc';
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
            id: 'api',
            label: 'API',
            component: ApiDoc,
            children: [
                {
                    id: 'properties',
                    label: 'Properties'
                },
                {
                    id: 'events',
                    label: 'Events'
                },
                {
                    id: 'methods',
                    label: 'Methods'
                },
                {
                    id: 'styling',
                    label: 'Styling'
                },
                {
                    id: 'accessibility',
                    label: 'Accessibility'
                }
            ]
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

                <DocActions github="virtualscroller/index.js" />
            </div>

            <div className="content-section doc virtualscroller-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default VirtualScrollerDemo;
