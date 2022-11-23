import Head from 'next/head';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { DocActions } from '../../components/doc/common/docactions';
import { AdvancedDoc } from '../../components/doc/galleria/advanced/default';

const GalleriaAdvancedDemo = () => {
    const docs = [
        {
            id: 'default',
            label: 'Advanced',
            component: AdvancedDoc
        }
    ];

    return (
        <div>
            <Head>
                <title>React Gallery Component - Advanced</title>
                <meta name="description" content="Galleria can be extended further to implement complex requirements." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>
                        Galleria <span>Advanced</span>
                    </h1>
                    <p>Galleria can be extended further to implement complex requirements.</p>
                </div>

                <DocActions github="galleria/advanced.js" />
            </div>

            <div className="content-section doc  galleria-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default GalleriaAdvancedDemo;
