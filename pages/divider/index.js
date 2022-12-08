import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { ImportDoc } from '../../components/doc/divider/importdoc';
import { BasicDoc } from '../../components/doc/divider/basicdoc';
import { ContentDoc } from '../../components/doc/divider/contentdoc';
import { TextDoc } from '../../components/doc/divider/textdoc';
import { VerticalDoc } from '../../components/doc/divider/verticaldoc';
import { VerticalContentDoc } from '../../components/doc/divider/verticalcontentdoc';
import { ApiDoc } from '../../components/doc/divider/apidoc';

const DividerDemo = () => {
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
            id: 'text',
            label: 'Text with Dashed Style',
            component: TextDoc
        },
        {
            id: 'content',
            label: 'Content',
            component: ContentDoc
        },
        {
            id: 'vertical',
            label: 'Vertical',
            component: VerticalDoc
        },
        {
            id: 'verticalcontent',
            label: 'Vertical with Content',
            component: VerticalContentDoc
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
                <title>React Divider Component</title>
                <meta name="description" content="Divider is used to separate contents." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <div>
                        <h1>Divider</h1>
                        <p>Divider is used to separate contents.</p>
                    </div>
                </div>
                <DocActions github="divider/index.js" />
            </div>

            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default DividerDemo;
