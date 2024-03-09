import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { StyleClass } from '@/components/lib/styleclass/StyleClass';
import { useRef } from 'react';

export function AnimationDoc(props) {
    const openBtnRef = useRef(null);
    const closeBtnRef = useRef(null);

    const code = {
        basic: `
<StyleClass nodeRef={openBtnRef} selector=".box" enterClassName="hidden" enterActiveClassName="fadein">
    <Button ref={openBtnRef} label="Show" className="mr-2" />
</StyleClass>

<StyleClass nodeRef={closeBtnRef} selector=".box" leaveActiveClassName="fadeout" leaveToClassName="hidden">
    <Button ref={closeBtnRef} severity="secondary" label="Hide" />
</StyleClass>

<div className="hidden animation-duration-500 box">
    <div className="flex bg-green-500 text-white align-items-center justify-content-center py-3 border-round-md mt-3 font-bold shadow-2 w-8rem h-8rem">Content</div>
</div>
        `,
        javascript: `
import React, { useRef } from 'react';
import { StyleClass } from 'primereact/styleclass';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

export default function AnimationsDoc() {
    const openBtnRef = useRef(null);
    const closeBtnRef = useRef(null);

    return (
        <div className="card flex flex-column align-items-center">
            <div>
                <StyleClass nodeRef={openBtnRef} selector=".box" enterClassName="hidden" enterActiveClassName="fadein">
                    <Button ref={openBtnRef} label="Show" className="mr-2" />
                </StyleClass>

                <StyleClass nodeRef={closeBtnRef} selector=".box" leaveActiveClassName="fadeout" leaveToClassName="hidden">
                    <Button ref={closeBtnRef} severity="secondary" label="Hide" />
                </StyleClass>
            </div>

            <div className="hidden animation-duration-500 box">
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

export default function AnimationsDoc() {
    const openBtnRef = useRef<Button>(null);
    const closeBtnRef = useRef<Button>(null);

    return (
        <div className="card flex flex-column align-items-center">
            <div>
                <StyleClass nodeRef={openBtnRef} selector=".box" enterClassName="hidden" enterActiveClassName="fadein">
                    <Button ref={openBtnRef} label="Show" className="mr-2" />
                </StyleClass>

                <StyleClass nodeRef={closeBtnRef} selector=".box" leaveActiveClassName="fadeout" leaveToClassName="hidden">
                    <Button ref={closeBtnRef} severity="secondary" label="Hide" />
                </StyleClass>
            </div>

            <div className="hidden animation-duration-500 box">
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
                <p>
                    Classes to apply during enter and leave animations are specified using the <i>enterClassName</i>, <i>enterActiveClassName</i>, <i>enterToClassName</i>, <i>leaveClassName</i>, <i>leaveActiveClassName</i>,<i>leaveToClassName</i>{' '}
                    properties. In addition in case the target is an overlay, <i>hideOnOutsideClick</i> would be handy to hide the target if outside of the popup is clicked.
                </p>
            </DocSectionText>
            <div className="card flex flex-column align-items-center">
                <div>
                    <StyleClass nodeRef={openBtnRef} selector=".box" enterClassName="hidden" enterActiveClassName="fadein">
                        <Button ref={openBtnRef} label="Show" className="mr-2" />
                    </StyleClass>

                    <StyleClass nodeRef={closeBtnRef} selector=".box" leaveActiveClassName="fadeout" leaveToClassName="hidden">
                        <Button ref={closeBtnRef} severity="secondary" label="Hide" />
                    </StyleClass>
                </div>

                <div className="hidden animation-duration-500 box ">
                    <div className="flex bg-green-500 text-white align-items-center justify-content-center py-3 border-round-md mt-3 font-bold shadow-2 w-8rem h-8rem">Content</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
