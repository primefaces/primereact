import React, { useRef } from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { StyleClass } from '../../lib/styleclass/StyleClass';
import { Button } from '../../lib/button/Button';
import { InputText } from '../../lib/inputtext/InputText';

export function ToggleClassDoc(props) {
    const toggleBtnRef = useRef(null);

    const code = {
        basic: `
<StyleClass nodeRef={toggleBtnRef} selector="@next" toggleClassName="p-disabled">
    <Button ref={toggleBtnRef} label="Toggle p-disabled" />
</StyleClass>
<InputText className="block mt-3" />
        `,
        javascript: `
import React, { useRef } from 'react';
import { StyleClass } from 'primereact/styleclass';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

export default function ToggleClassDoc() {
    const toggleBtnRef = useRef(null);

    return (
        <div className="card">
            <StyleClass nodeRef={toggleBtnRef} selector="@next" toggleClassName="p-disabled">
                <Button ref={toggleBtnRef} label="Toggle p-disabled" />
            </StyleClass>
            <InputText className="block mt-3" />
        </div>
    );
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { StyleClass } from 'primereact/styleclass';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

export default function ToggleClassDoc() {
    const toggleBtnRef = useRef<Button>(null);

    return (
        <div className="card">
            <StyleClass nodeRef={toggleBtnRef} selector="@next" toggleClassName="p-disabled">
                <Button ref={toggleBtnRef} label="Toggle p-disabled" />
            </StyleClass>
            <InputText className="block mt-3" />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Toggle Class Demo Content.</p>
            </DocSectionText>
            <div className="card">
                <StyleClass nodeRef={toggleBtnRef} selector="@next" toggleClassName="p-disabled">
                    <Button ref={toggleBtnRef} label="Toggle p-disabled" />
                </StyleClass>
                <InputText className="block mt-3" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
