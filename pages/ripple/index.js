import Head from 'next/head';
import React from 'react';
import { DocSectionNav } from '../../components/doc/common/docsectionnav';
import { DocSections } from '../../components/doc/common/docsections';
import { ApiDoc } from '../../components/doc/ripple/apidoc';
import { ImportDoc } from '../../components/doc/ripple/importdoc';
import { DefaultDemo } from '../../components/doc/ripple/defaultdoc';
import { CustomDemo } from '../../components/doc/ripple/stylingdoc';

const SkeletonDemo = () => {
    const docs = [
        {
            id: 'import',
            label: 'Import',
            component: ImportDoc
        },
        {
            id: 'default',
            label: 'Default',
            component: DefaultDemo
        },
        {
            id: 'custom',
            label: 'Custom',
            component: CustomDemo
        },
        {
            id: 'api',
            label: 'API',
            component: ApiDoc,
            children: [
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
                <title>React Ripple Component</title>
                <meta name="description" content="Ripple component adds ripple effect to the host element." />
            </Head>

            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Ripple</h1>
                    <p>Ripple component adds ripple effect to the host element.</p>
                </div>
            </div>

            <div className="content-section doc ripple-demo">
                <DocSections docs={docs} />
                <DocSectionNav docs={docs} />
            </div>
        </div>
    );
};

export default SkeletonDemo;

// import React from 'react';
// import RippleDoc from '../../components/doc/ripple';
// import { Ripple } from '../../components/lib/ripple/Ripple';
// import { DocActions } from '../../components/doc/common/docactions';
// import Head from 'next/head';

// const RippleDemo = () => {
//     return (
//         <div>
//             <Head>
//                 <title>React Ripple Component</title>
//                 <meta name="description" content="Ripple component adds ripple effect to the host element." />
//             </Head>
//             <div className="content-section introduction">
//                 <div className="feature-intro">
//                     <h1>Ripple</h1>
//                     <p>Ripple component adds ripple effect to the host element.</p>
//                 </div>

//                 <DocActions github="ripple/index.js" />
//             </div>

//             <div className="content-section implementation ripple-demo">
//                 <div className="card-container flex">
//                     <div className="card primary-box p-ripple">
//                         Default
//                         <Ripple />
//                     </div>
//                     <div className="card styled-box-green p-ripple">
//                         Green
//                         <Ripple />
//                     </div>
//                     <div className="card styled-box-orange p-ripple">
//                         Orange
//                         <Ripple />
//                     </div>
//                     <div className="card styled-box-purple p-ripple">
//                         Purple
//                         <Ripple />
//                     </div>
//                 </div>
//             </div>

//             <RippleDoc />
//         </div>
//     );
// };

// export default RippleDemo;
