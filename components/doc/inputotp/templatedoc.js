import React, { useState } from 'react';
import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputOtp } from '@/components/lib/inputotp/inputotp';

export function TemplateDoc(props) {
    const [token, setTokens] = useState();

    const customInput = ({events, props: attr}) => <input {...events} {...attr} type="text" className="custom-otp-input" />;

    const code = {
        basic: `
<InputOtp value={token} onChange={(e) => setTokens(e.value)} inputTemplate={customInput}/>
        `,
        javascript: `
import React, { useState } from 'react';
import { InputOtp } from 'primereact/inputotp';

export default function TemplateDemo() {
    const [token, setTokens] = useState();

    const customInput = ({events, props}) => <input {...events} {...props} type="text" className="custom-otp-input" />;

    return (
        <div className="card flex justify-content-center">
            <style scoped>
                {\`
                    .custom-otp-input {
                        width: 40px;
                        font-size: 36px;
                        border: 0 none;
                        appearance: none;
                        text-align: center;
                        transition: all 0.2s;
                        background: transparent;
                        border-bottom: 2px solid var(--surface-500);
                    }

                    .custom-otp-input:focus {
                        outline: 0 none;
                        border-bottom-color: var(--primary-color);
                    }
                \`}
            </style>

            <InputOtp value={token} onChange={(e) => setTokens(e.value)} inputTemplate={customInput}/>
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from 'react';
import { InputOtp } from 'primereact/inputotp';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
    events: React.HTMLAttributes<HTMLInputElement>;
    props: React.HTMLAttributes<HTMLInputElement>;
}

export default function TemplateDemo() {
    const [token, setTokens] = useState<string | number | undefined>();

      
    const customInput = ({ events, props }: CustomInputProps) => (
    <input {...events} {...props} type="text" className="custom-otp-input" />
    );

    return (
        <div className="card flex justify-content-center">
            <style scoped>
                {\`
                    .custom-otp-input {
                        width: 40px;
                        font-size: 36px;
                        border: 0 none;
                        appearance: none;
                        text-align: center;
                        transition: all 0.2s;
                        background: transparent;
                        border-bottom: 2px solid var(--surface-500);
                    }

                    .custom-otp-input:focus {
                        outline: 0 none;
                        border-bottom-color: var(--primary-color);
                    }
                \`}
            </style>

            <InputOtp value={token} onChange={(e: any) => setTokens(e?.value)} inputTemplate={customInput}/>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Define a template with your own UI elements with bindings to the provided events and attributes to replace the default design.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <style scoped>
                    {`
                        .custom-otp-input {
                            width: 40px;
                            font-size: 36px;
                            border: 0 none;
                            appearance: none;
                            text-align: center;
                            transition: all 0.2s;
                            background: transparent;
                            border-bottom: 2px solid var(--surface-500);
                        }

                        .custom-otp-input:focus {
                            outline: 0 none;
                            border-bottom-color: var(--primary-color);
                        }
                    `}
                </style>

                <InputOtp value={token} onChange={(e) => setTokens(e.value)} inputTemplate={customInput}/>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
