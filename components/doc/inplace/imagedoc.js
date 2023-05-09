import React from 'react';
import { Inplace, InplaceContent, InplaceDisplay } from '../../../components/lib/inplace/Inplace';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ImageDoc(props) {
    const code = {
        basic: `
<Inplace>
    <InplaceDisplay>
        <span className="inline-flex align-items-center">
            <span className="pi pi-image"></span>
            <span className="ml-2">View Picture</span>
        </span>
    </InplaceDisplay>
    <InplaceContent>
        <img alt="Nature" src="/images/nature/nature1.jpg" />
    </InplaceContent>
</Inplace>
        `,
        javascript: `
import React from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';

export default function ImageDemo() {
    return (
        <Inplace>
            <InplaceDisplay>
                <span className="inline-flex align-items-center">
                    <span className="pi pi-image"></span>
                    <span className="ml-2">View Picture</span>
                </span>
            </InplaceDisplay>
            <InplaceContent>
                <img alt="Nature" src="https://primefaces.org/cdn/primereact/images/nature/nature1.jpg" />
            </InplaceContent>
        </Inplace>
    );
}
        `,
        typescript: `
import React from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';

export default function ImageDemo() {
    return (
        <Inplace>
            <InplaceDisplay>
                <span className="inline-flex align-items-center">
                    <span className="pi pi-image"></span>
                    <span className="ml-2">View Picture</span>
                </span>
            </InplaceDisplay>
            <InplaceContent>
                <img alt="Nature" src="https://primefaces.org/cdn/primereact/images/nature/nature1.jpg" />
            </InplaceContent>
        </Inplace>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Any content such as an image can be placed inside an Inplace.</p>
            </DocSectionText>
            <div className="card">
                <Inplace>
                    <InplaceDisplay>
                        <span className="inline-flex align-items-center">
                            <span className="pi pi-image"></span>
                            <span className="ml-2">View Picture</span>
                        </span>
                    </InplaceDisplay>
                    <InplaceContent>
                        <img alt="Nature" src="https://primefaces.org/cdn/primereact/images/nature/nature1.jpg" />
                    </InplaceContent>
                </Inplace>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
