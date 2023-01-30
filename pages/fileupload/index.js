import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { AdvancedDoc } from '../../components/doc/fileupload/advanceddoc';
import { AutoDoc } from '../../components/doc/fileupload/autodoc';
import { BasicDoc } from '../../components/doc/fileupload/basicdoc';
import { CustomUploadDoc } from '../../components/doc/fileupload/customuploaddoc';
import { ImportDoc } from '../../components/doc/fileupload/importdoc';
import { StyleDoc } from '../../components/doc/fileupload/styledoc';
import { TemplateDoc } from '../../components/doc/fileupload/templatedoc';

const FileUploadDemo = () => {
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
            id: 'auto',
            label: 'Auto',
            component: AutoDoc
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
            id: 'custom',
            label: 'Custom Upload',
            component: CustomUploadDoc
        },

        {
            id: 'style',
            label: 'Style',
            component: StyleDoc
        },
        {
            id: 'api',
            label: 'API',
            doc: [{ name: 'FileUpload', pathname: '/modules/fileupload.html' }]
        }
    ];

    return (
        <div>
            <Head>
                <title>React Upload Component</title>
                <meta name="description" content="FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>FileUpload</h1>
                        <p>FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.</p>
                    </div>
                    <DocSections docs={docs} />
                </div>
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default FileUploadDemo;
