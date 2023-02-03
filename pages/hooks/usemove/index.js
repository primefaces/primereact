import Head from 'next/head';
import { DocSectionNav } from '../../../components/doc/common/docsectionnav';
import { DocSections } from '../../../components/doc/common/docsections';
import { ImportDoc } from '../../../components/doc/hooks/usemove/importdoc';
import { BasicDoc } from '../../../components/doc/hooks/usemove/basicdoc';
import { HorizontalDoc } from '../../../components/doc/hooks/usemove/horizontaldoc';
import { VerticalDoc } from '../../../components/doc/hooks/usemove/verticaldoc';
import { ResetDoc } from '../../../components/doc/hooks/usemove/resetdoc';

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
            id: 'horizontal',
            label: 'Horizontal',
            component: HorizontalDoc
        },
        {
            id: 'vertical',
            label: 'Vertical',
            component: VerticalDoc
        },
        {
            id: 'reset',
            label: 'Reset',
            component: ResetDoc
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'useMove', pathname: '/functions/hooks.useMove.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React useMove Custom Hook</title>
                {/**
                 * @todo Add a description
                 */}
                <meta name="description" content="" />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>useMove</h1>
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
