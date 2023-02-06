import Head from 'next/head';
import { DocSectionNav } from '../../../components/doc/common/docsectionnav';
import { DocSections } from '../../../components/doc/common/docsections';
import { ImportDoc } from '../../../components/doc/hooks/useoverlayscrolllistener/importdoc';
import { BasicDoc } from '../../../components/doc/hooks/useoverlayscrolllistener/basicdoc';

const CounterDemo = () => {
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
            id: 'api',
            label: 'API',
            doc: [{ name: 'useOverlayScrollListener', pathname: '/functions/hooks.useOverlayScrollListener.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React useOverlayScrollListener Custom Hook</title>
                {/**
                 * @todo Add a description
                 */}
                <meta name="description" content="" />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>useOverlayScrollListener</h1>
                        {/**
                         * @todo Add a description
                         */}
                        <p></p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default CounterDemo;
