import Head from 'next/head';
import { DocSectionNav } from '../../../components/doc/common/docsectionnav';
import { DocSections } from '../../../components/doc/common/docsections';
import { ImportDoc } from '../../../components/doc/hooks/usemouse/importdoc';
import { ElementDoc } from '../../../components/doc/hooks/usemouse/elementdoc';
import { ResetDoc } from '../../../components/doc/hooks/usemouse/resetdoc';
import { DocumentDoc } from '../../../components/doc/hooks/usemouse/documentdoc';

const MouseDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'element',
            label: 'Element',
            component: ElementDoc
        },
        {
            id: 'reset',
            label: 'Reset',
            component: ResetDoc
        },
        {
            id: 'document',
            label: 'Document',
            component: DocumentDoc
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
                <title>React useMouse Custom Hook</title>
                {/**
                 * @todo Add a description
                 */}
                <meta name="description" content="" />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>useMouse</h1>
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

export default MouseDemo;
