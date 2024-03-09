import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputText } from '@/components/lib/inputtext/InputText';

export function PTDoc(props) {
    const code = {
        basic: `
<InputText
    type="text"
    tooltip="Enter your username"
    tooltipOptions={{
        pt: {
            text: {
                className: 'bg-orange-500'
            }
        }
    }}
/>
        `,
        javascript: `
import React from 'react';
import { InputText } from 'primereact/inputtext';

export default function PTDemo() {

    return (
        <div className="card flex flex-wrap align-items-center justify-content-center gap-2">
            <InputText
                type="text"
                tooltip="Enter your username"
                tooltipOptions={{
                    pt: {
                        text: {
                            className: 'bg-orange-500'
                        }
                    }
                }}
            />
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { InputText } from 'primereact/inputtext';

export default function PTDemo() {

    return (
        <div className="card flex flex-wrap align-items-center justify-content-center gap-2">
            <InputText
                type="text"
                tooltip="Enter your username"
                tooltipOptions={{
                    pt: {
                        text: {
                            className: 'bg-orange-500'
                        }
                    }
                }}
            />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex flex-wrap align-items-center justify-content-center gap-2">
                <InputText
                    type="text"
                    tooltip="Enter your username"
                    tooltipOptions={{
                        pt: {
                            text: {
                                className: 'bg-orange-500'
                            }
                        }
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
