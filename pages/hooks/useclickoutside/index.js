import Head from 'next/head';
import { DocSectionNav } from '../../../components/doc/common/docsectionnav';
import { DocSections } from '../../../components/doc/common/docsections';
import { ImportDoc } from '../../../components/doc/hooks/useclickoutside/importdoc';
import { BasicDoc } from '../../../components/doc/hooks/useclickoutside/basicdoc';

const ClickOutsideDemo = () => {
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
            doc: [{ name: 'useClickOutside', pathname: '/functions/hooks.useClickOutside.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React useClickOutside Custom Hook</title>

                <meta name="description" content="The useClickOutside hook is a custom hook that listens for a click outside of a specified element." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>useClickOutside</h1>
                        <p>The useClickOutside hook is a custom hook that listens for a click outside of a specified element.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default ClickOutsideDemo;
