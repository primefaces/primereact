import Head from 'next/head';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { FormikFormDemo } from '../../components/doc/formlibraries/formikdoc';
import { ReactHookFormDemo } from '../../components/doc/formlibraries/reacthookformdoc';
import { ReactFinalFormDemo } from '../../components/doc/formlibraries/reactfinalformdoc';

const FormIntegrationDoc = () => {
    const docs = [
        {
            id: 'formik',
            label: 'Formik',
            component: FormikFormDemo
        },
        {
            id: 'hook',
            label: 'Hook Form',
            component: ReactHookFormDemo
        },
        {
            id: 'final',
            label: 'Final Form',
            component: ReactFinalFormDemo
        }
    ];

    return (
        <div>
            <Head>
                <title>Form Integration - PrimeReact</title>
                <meta name="description" content="PrimeReact components can be easily used/integrated with Formik" />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Form Integration</h1>
                    <p>
                        PrimeReact components can be easily used/integrated with <a href="https://formik.org/">Formik</a>. In these examples, a register panels are using Formik, React Hook Form and React Final Form.
                    </p>
                </div>

                <DocActions github="formik/index.js" showClassSource={false} showBrowserSource={false} />
            </div>
            <div className="content-section doc form-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default FormIntegrationDoc;
