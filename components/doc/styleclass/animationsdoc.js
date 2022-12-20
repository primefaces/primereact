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
<StyleClass nodeRef={openBtnRef} selector=".box" enterClassName="hidden" enterActiveClassName="fadein">
    <Button ref={openBtnRef} label="Show" className="mr-2" />
</StyleClass>
<StyleClass nodeRef={closeBtnRef} selector=".box" leaveActiveClassName="fadeout" leaveToClassName="hidden">
    <Button ref={closeBtnRef} label="Hide" />
</StyleClass>
<div className="hidden animation-duration-150 box">
    <div className="flex bg-green-500 text-white align-items-center justify-content-center py-3 border-round-md mt-3 font-bold shadow-2 w-8rem h-8rem">Content</div>
</div>
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
            <StyleClass nodeRef={openBtnRef} selector=".box" enterClassName="hidden" enterActiveClassName="fadein">
                <Button ref={openBtnRef} label="Show" className="mr-2" />
            </StyleClass>

            <StyleClass nodeRef={closeBtnRef} selector=".box" leaveActiveClassName="fadeout" leaveToClassName="hidden">
                <Button ref={closeBtnRef} label="Hide" />
            </StyleClass>

            <div className="hidden animation-duration-150 box">
                <div className="flex bg-green-500 text-white align-items-center justify-content-center py-3 border-round-md mt-3 font-bold shadow-2 w-8rem h-8rem">Content</div>
            </div>
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
            <StyleClass nodeRef={openBtnRef} selector=".box" enterClassName="hidden" enterActiveClassName="fadein">
                <Button ref={openBtnRef} label="Show" className="mr-2" />
            </StyleClass>

            <StyleClass nodeRef={closeBtnRef} selector=".box" leaveActiveClassName="fadeout" leaveToClassName="hidden">
                <Button ref={closeBtnRef} label="Hide" />
            </StyleClass>

            <div className="hidden animation-duration-150 box">
                <div className="flex bg-green-500 text-white align-items-center justify-content-center py-3 border-round-md mt-3 font-bold shadow-2 w-8rem h-8rem">Content</div>
            </div>
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
                <StyleClass nodeRef={openBtnRef} selector=".box" enterClassName="hidden" enterActiveClassName="fadein">
                    <Button ref={openBtnRef} label="Show" className="mr-2" />
                </StyleClass>

                <StyleClass nodeRef={closeBtnRef} selector=".box" leaveActiveClassName="fadeout" leaveToClassName="hidden">
                    <Button ref={closeBtnRef} label="Hide" />
                </StyleClass>

                <div className="hidden animation-duration-150 box">
                    <div className="flex bg-green-500 text-white align-items-center justify-content-center py-3 border-round-md mt-3 font-bold shadow-2 w-8rem h-8rem">Content</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
