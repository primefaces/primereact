import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AdvancedDoc } from '../../components/doc/fileupload/advanceddoc';
import { ApiDoc } from '../../components/doc/fileupload/apidoc';
import { BasicDoc } from '../../components/doc/fileupload/basicdoc';
import { BasicWithAuto } from '../../components/doc/fileupload/basicwithautodoc';
import { CustomDoc } from '../../components/doc/fileupload/customdoc';
import { ImportDoc } from '../../components/doc/fileupload/importdoc';
import { TemplateDoc } from '../../components/doc/fileupload/templatedoc';

const FileUploadDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'advanced',
            label: 'Advanced',
            component: AdvancedDoc
        },
        {
            id: 'template',
            label: 'Template',
            component: TemplateDoc
        },
        {
            id: 'basic',
            label: 'Basic',
            component: BasicDoc
        },
        {
            id: 'basicwithauto',
            label: 'Basic with Auto',
            component: BasicWithAuto
        },
        {
            id: 'custom',
            label: 'Custom (base64 encoded)',
            component: CustomDoc
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
                    id: 'events',
                    label: 'Events'
                },
                {
                    id: 'methods',
                    label: 'Methods'
                },
                {
                    id: 'styling',
                    label: 'Styling'
                }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Upload Component</title>
                <meta name="description" content="FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>FileUpload</h1>
                    <p>FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.</p>
                </div>
                <DocActions github="fileupload/index.js" />
            </div>

            <div className="content-section doc dropdown-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default FileUploadDemo;
