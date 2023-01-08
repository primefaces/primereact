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
<StyleClass nodeRef={toggleBtnRef} selector="@next" toggleClassName="p-disabled" />
<Button ref={toggleBtnRef} label="Toggle p-disabled" />
<InputText />
        `,
        javascript: `
import React, { useRef } from 'react';
import { StyleClass } from 'primereact/styleclass';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

export default function ToggleClassDoc() {
    const toggleBtnRef = useRef(null);

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <StyleClass nodeRef={toggleBtnRef} selector="@next" toggleClassName="p-disabled" />
            <Button ref={toggleBtnRef} label="Toggle p-disabled" />
            <InputText />
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
        <div className="card flex flex-column align-items-center gap-3">
            <StyleClass nodeRef={toggleBtnRef} selector="@next" toggleClassName="p-disabled" />
            <Button ref={toggleBtnRef} label="Toggle p-disabled" />
            <InputText />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    <i>StyleClass</i> is bind to the element that triggers the click event with the <i>nodeRef</i> property that points to the <i>ref</i> of the element. The target element to change the styling is defined with the <i>selector</i>{' '}
                    property that accepts any valid CSS selector or keywords including <i>@next</i>, <i>prev</i>, <i>parent</i>, <i>grandparent</i>
                </p>
            </DocSectionText>
            <div className="card flex flex-column align-items-center gap-3">
                <StyleClass nodeRef={toggleBtnRef} selector="@next" toggleClassName="p-disabled" />
                <Button ref={toggleBtnRef} label="Toggle p-disabled" />
                <InputText />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
