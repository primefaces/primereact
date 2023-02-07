import Head from 'next/head';
import { DocSectionNav } from '../../../components/doc/common/docsectionnav';
import { DocSections } from '../../../components/doc/common/docsections';
import { ImportDoc } from '../../../components/doc/hooks/usestorage/importdoc';
import { CounterDoc } from '../../../components/doc/hooks/usestorage/counterstorage';

const CounterDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },

        {
            id: 'counter',
            label: 'Counter',
            component: CounterDoc
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'useStorage', pathname: '/functions/hooks.useStorage.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React useStorage Custom Hook</title>
                {/**
                 * @todo Add a description
                 */}
                <meta name="description" content="" />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>useStorage</h1>
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
