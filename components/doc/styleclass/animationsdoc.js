import React, { useRef } from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { StyleClass } from '../../lib/styleclass/StyleClass';
import { Button } from '../../lib/button/Button';

export function AnimationsDoc(props) {
    const openBtnRef = useRef(null);
    const closeBtnRef = useRef(null);

    const code = {
        basic: `
<StyleClass nodeRef={openBtnRef} selector=".box" enterClassName="hidden" enterActiveClassName="my-fadein">
<Button ref={openBtnRef} label="Show" className="mr-2" />
</StyleClass>
<StyleClass nodeRef={closeBtnRef} selector=".box" leaveActiveClassName="my-fadeout" leaveToClassName="hidden">
    <Button ref={closeBtnRef} label="Hide" />
</StyleClass>
<div className="box hidden">Content</div>
        `,
        javascript: `
import React, { useRef } from 'react';
import { StyleClass } from 'primereact/styleclass';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

export const AnimationsDoc = () => {
    const openBtnRef = useRef(null);
    const closeBtnRef = useRef(null);

    return (
        <div className="card">
            <StyleClass nodeRef={openBtnRef} selector=".box" enterClassName="hidden" enterActiveClassName="my-fadein">
                <Button ref={openBtnRef} label="Show" className="mr-2" />
            </StyleClass>
            <StyleClass nodeRef={closeBtnRef} selector=".box" leaveActiveClassName="my-fadeout" leaveToClassName="hidden">
                <Button ref={closeBtnRef} label="Hide" />
            </StyleClass>
            <div className="box hidden">Content</div>
        </div>
    );
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { StyleClass } from 'primereact/styleclass';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

export const AnimationsDoc = () => {
    const openBtnRef = useRef<Button>(null);
    const closeBtnRef = useRef<Button>(null);

    return (
        <div className="card">
            <StyleClass nodeRef={openBtnRef} selector=".box" enterClassName="hidden" enterActiveClassName="my-fadein">
                <Button ref={openBtnRef} label="Show" className="mr-2" />
            </StyleClass>
            <StyleClass nodeRef={closeBtnRef} selector=".box" leaveActiveClassName="my-fadeout" leaveToClassName="hidden">
                <Button ref={closeBtnRef} label="Hide" />
            </StyleClass>
            <div className="box hidden">Content</div>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Animations Demo Content.</p>
            </DocSectionText>
            <div className="card">
                <StyleClass nodeRef={openBtnRef} selector=".box" enterClassName="hidden" enterActiveClassName="my-fadein">
                    <Button ref={openBtnRef} label="Show" className="mr-2" />
                </StyleClass>
                <StyleClass nodeRef={closeBtnRef} selector=".box" leaveActiveClassName="my-fadeout" leaveToClassName="hidden">
                    <Button ref={closeBtnRef} label="Hide" />
                </StyleClass>
                <div className="box hidden">Content</div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
