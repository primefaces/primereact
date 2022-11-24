import React from 'react';
import getConfig from 'next/config';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { Inplace, InplaceDisplay, InplaceContent } from '../../../components/lib/inplace/Inplace';

export function ImageDoc(props) {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    const code = {
        basic: `
<Inplace>
    <InplaceDisplay>
        <span className="inline-flex align-items-center">
            <span className="pi pi-search"></span>
            <span className="ml-2">View Picture</span>
        </span>
    </InplaceDisplay>
    <InplaceContent>
        <img alt="Nature" src="images/nature/nature1.jpg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    </InplaceContent>
</Inplace>
        `,
        javascript: `
import React from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';

export const ImageDoc = () => {

    return (
        <Inplace>
            <InplaceDisplay>
                <span className="inline-flex align-items-center">
                    <span className="pi pi-search"></span>
                    <span className="ml-2">View Picture</span>
                </span>
            </InplaceDisplay>
            <InplaceContent>
                <img alt="Nature" src="images/nature/nature1.jpg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
            </InplaceContent>
        </Inplace>
    );
}
        `,
        typescript: `
import React from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';

export const ImageDoc = () => {

    return (
        <Inplace>
            <InplaceDisplay>
                <span className="inline-flex align-items-center">
                    <span className="pi pi-search"></span>
                    <span className="ml-2">View Picture</span>
                </span>
            </InplaceDisplay>
            <InplaceContent>
                <img alt="Nature" src="images/nature/nature1.jpg" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
            </InplaceContent>
        </Inplace>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Image Demo Content.</p>
            </DocSectionText>
            <div className="card">
                <Inplace>
                    <InplaceDisplay>
                        <span className="inline-flex align-items-center">
                            <span className="pi pi-search"></span>
                            <span className="ml-2">View Picture</span>
                        </span>
                    </InplaceDisplay>
                    <InplaceContent>
                        <img alt="Nature" src={`${contextPath}/images/nature/nature1.jpg`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} />
                    </InplaceContent>
                </Inplace>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
