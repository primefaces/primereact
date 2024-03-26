import React from 'react';
import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputText } from '@/components/lib/inputtext/InputText';

export function PTDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>
                    InputText is used as a controlled input with <i>value</i> and <i>onChange</i> properties.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputText
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    pt={{
                        root: { className: 'border-primary-400' }
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
