import Head from 'next/head';
import { DocSectionNav } from '../../../components/doc/common/docsectionnav';
import { DocSections } from '../../../components/doc/common/docsections';
import { ImportDoc } from '../../../components/doc/hooks/usecounter/importdoc';
import { BasicDemo } from '../../../components/doc/hooks/usecounter/basicdoc';
import { OptionsDemo } from '../../../components/doc/hooks/usecounter/optionsdoc';

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
            component: BasicDemo
        },
        {
            id: 'options',
            label: 'Options',
            component: OptionsDemo
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'Hooks', pathname: '/modules/hooks.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React useCounter Custom Hook</title>
                {/**
                 * @todo Add a description
                 */}
                <meta name="description" content="" />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>useCounter</h1>
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
