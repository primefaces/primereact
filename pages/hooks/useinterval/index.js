import Head from 'next/head';
import { DocSectionNav } from '../../../components/doc/common/docsectionnav';
import { DocSections } from '../../../components/doc/common/docsections';
import { ImportDoc } from '../../../components/doc/hooks/useInterval/importdoc';
import { BasicDoc } from '../../../components/doc/hooks/useInterval/basicdoc';

const IntervalDemo = () => {
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
            doc: [{ name: 'useInterval', pathname: '/functions/hooks.useInterval.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React useInterval Custom Hook</title>
                {/**
                 * @todo Add a description
                 */}
                <meta name="description" content="" />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>useInterval</h1>
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

export default IntervalDemo;
