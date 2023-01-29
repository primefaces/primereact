import React from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { Tag } from '../../lib/tag/Tag';

export function TemplateDoc(props) {
    const code = {
        basic: `
<Tag style={{background: 'linear-gradient(-225deg,#AC32E4 0%,#7918F2 48%,#4801FF 100%)'}}>
    <div className="flex align-items-center gap-2">
        <img alt="Country" src="/images/flag/flag_placeholder.png" className="flag flag-it" style={{ width: '18px' }}/>
        <span className="text-base">Italia</span>
        <i className="pi pi-times text-xs"></i>
    </div>
</Tag>
        `,
        javascript: `
import React from 'react';
import { Tag } from 'primereact/tag';

export default function TemplateDemo() {
    return (
        <Tag style={{background: 'linear-gradient(-225deg,#AC32E4 0%,#7918F2 48%,#4801FF 100%)'}}>
            <div className="flex align-items-center gap-2">
                <img alt="Country" src={\`https://primereact.org/images/flag/flag_placeholder.png\`}
                    className="flag flag-it" style={{ width: '18px' }}/>
                <span className="text-base">Italia</span>
                <i className="pi pi-times text-xs"></i>
            </div>
        </Tag>
    );
}
        `,
        typescript: `
import React from 'react';
import { Tag } from 'primereact/tag';

export default function TemplateDemo() {
    return (
        <Tag style={{background: 'linear-gradient(-225deg,#AC32E4 0%,#7918F2 48%,#4801FF 100%)'}}>
            <div className="flex align-items-center gap-2">
                <img alt="Country" src={\`https://primereact.org/images/flag/flag_placeholder.png\`}
                    className="flag flag-it" style={{ width: '18px' }}/>
                <span className="text-base">Italia</span>
                <i className="pi pi-times text-xs"></i>
            </div>
        </Tag>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Children of the component are passed as the content for templating.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Tag style={{ background: 'linear-gradient(-225deg,#AC32E4 0%,#7918F2 48%,#4801FF 100%)' }}>
                    <div className="flex align-items-center gap-2">
                        <img alt="Country" src={`/images/flag/flag_placeholder.png`} className="flag flag-it" style={{ width: '18px' }} />
                        <span className="text-base">Italia</span>
                        <i className="pi pi-times text-xs"></i>
                    </div>
                </Tag>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
