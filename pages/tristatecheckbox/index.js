import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSections } from '../../components/doc/common/docsections';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { BasicDemo } from '../../components/doc/tristatecheckbox/basicdemo';
import { DisabledDoc } from '../../components/doc/tristatecheckbox/disableddoc';
import { ImportDoc } from '../../components/doc/tristatecheckbox/importdoc';
import { ApiDoc } from '../../components/doc/tristatecheckbox/apidoc';

const TriStateCheckboxDemo = () => {
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
            id: 'disabled',
            label: 'Disabled',
            component: DisabledDoc
        },
        {
            id: 'api',
            label: 'API',
            type: 'api',
            component: ApiDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React TriStateCheckbox Component</title>
                <meta name="description" content="TriStateCheckbox is used to select either true, false or null as the value." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>TriStateCheckbox</h1>
                    <p>TriStateCheckbox is used to select either "true", "false" or "null" as the value.</p>
                </div>

                <DocActions github="tristatecheckbox/index.js" />
            </div>
            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default TriStateCheckboxDemo;
