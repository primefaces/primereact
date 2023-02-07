import Head from 'next/head';
import { DocSectionNav } from '../../../components/doc/common/docsectionnav';
import { DocSections } from '../../../components/doc/common/docsections';
import { CounterPreviousDoc } from '../../../components/doc/hooks/useprevious/counterpreviousdoc';
import { ImportDoc } from '../../../components/doc/hooks/useprevious/importdoc';
import { InputPreviousDoc } from '../../../components/doc/hooks/useprevious/inputpreviousdoc';

const CounterDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'input',
            label: 'Input',
            component: InputPreviousDoc
        },
        {
            id: 'counter',
            label: 'Counter',
            component: CounterPreviousDoc
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'usePrevious', pathname: '/functions/hooks.usePrevious.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React usePrevious Custom Hook</title>
                {/**
                 * @todo Add a description
                 */}
                <meta name="description" content="" />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>usePrevious</h1>
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
