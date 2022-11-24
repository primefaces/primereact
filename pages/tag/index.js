import Head from 'next/head';
import React from 'react';
import { DocActions } from '../../components/doc/common/docactions';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/tag/apidoc';
import { ImportDoc } from '../../components/doc/tag/importdoc';
import { TagsDoc } from '../../components/doc/tag/tagsdoc';
import { PillsDoc } from '../../components/doc/tag/pillsdoc';
import { IconsDoc } from '../../components/doc/tag/iconsdoc';

const AvatarDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'tags',
            label: 'Tags',
            component: TagsDoc
        },
        {
            id: 'pills',
            label: 'Pills',
            component: PillsDoc
        },
        {
            id: 'icons',
            label: 'Icons',
            component: IconsDoc
        },
        {
            id: 'apidoc',
            label: 'API',
            component: ApiDoc,
            children: [
                {
                    id: 'templating',
                    label: 'Templating'
                },
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
                <title>React Tag Component</title>
                <meta name="description" content="Tag component is used to categorize content." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Tag</h1>
                    <p>Tag component is used to categorize content.</p>
                </div>
                <DocActions github="avatar/index.js" />
            </div>
            <div className="content-section doc">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default AvatarDemo;

// import React from 'react';
// import { Tag } from '../../components/lib/tag/Tag';
// import TagDoc from '../../components/doc/tag';
// import { DocActions } from '../../components/doc/common/docactions';
// import Head from 'next/head';

// const TagDemo = () => {
//     return (
//         <div>
//             <Head>
//                 <title>React Tag Component</title>
//                 <meta name="description" content="Tag component is used to categorize content." />
//             </Head>
//             <div className="content-section introduction">
//                 <div className="feature-intro">
//                     <h1>Tag</h1>
//                     <p>Tag component is used to categorize content.</p>
//                 </div>

//                 <DocActions github="tag/index.js" />
//             </div>

//             <div className="content-section implementation">
//                 <div className="card">
//                     <h5>Tags</h5>
//                     <Tag className="mr-2" value="Primary"></Tag>
//                     <Tag className="mr-2" severity="success" value="Success"></Tag>
//                     <Tag className="mr-2" severity="info" value="Info"></Tag>
//                     <Tag className="mr-2" severity="warning" value="Warning"></Tag>
//                     <Tag severity="danger" value="Danger"></Tag>

//                     <h5>Pills</h5>
//                     <Tag className="mr-2" value="Primary" rounded></Tag>
//                     <Tag className="mr-2" severity="success" value="Success" rounded></Tag>
//                     <Tag className="mr-2" severity="info" value="Info" rounded></Tag>
//                     <Tag className="mr-2" severity="warning" value="Warning" rounded></Tag>
//                     <Tag severity="danger" value="Danger" rounded></Tag>

//                     <h5>Icons</h5>
//                     <Tag className="mr-2" icon="pi pi-user" value="Primary"></Tag>
//                     <Tag className="mr-2" icon="pi pi-check" severity="success" value="Success"></Tag>
//                     <Tag className="mr-2" icon="pi pi-info-circle" severity="info" value="Info"></Tag>
//                     <Tag className="mr-2" icon="pi pi-exclamation-triangle" severity="warning" value="Warning"></Tag>
//                     <Tag icon="pi pi-times" severity="danger" value="Danger"></Tag>
//                 </div>
//             </div>

//             <TagDoc />
//         </div>
//     );
// };

// export default TagDemo;
