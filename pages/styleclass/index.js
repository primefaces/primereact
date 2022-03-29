import React, { useRef } from 'react';
import { StyleClass } from '../../components/lib/styleclass/StyleClass';
import { Button } from '../../components/lib/button/Button';
import { InputText } from '../../components/lib/inputtext/InputText';
import StyleClassDoc from '../../components/doc/styleclass';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const StyleClassDemo = () => {

    const toggleBtnRef = useRef(null);
    const openBtnRef = useRef(null);
    const closeBtnRef = useRef(null);

    return (
        <div>
            <Head>
                <title>React StyleClass Component</title>
                <meta name="description" content="StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>StyleClass</h1>
                    <p>StyleClass manages css classes declaratively to during enter/leave animations or just to toggle classes on an element.</p>
                </div>

                <DocActions github="styleclass/index.js" />
            </div>

            <div className="content-section implementation styleclass-demo">
                <div className="card">
                    <h5>Toggle Class</h5>
                    <StyleClass nodeRef={toggleBtnRef} selector="@next" toggleClassName="p-disabled">
                        <Button ref={toggleBtnRef} label="Toggle p-disabled" />
                    </StyleClass>
                    <InputText className="block mt-3" />

                    <h5>Animations</h5>
                    <StyleClass nodeRef={openBtnRef} selector=".box" enterClassName="hidden" enterActiveClassName="my-fadein">
                        <Button ref={openBtnRef} label="Show" className="mr-2" />
                    </StyleClass>

                    <StyleClass nodeRef={closeBtnRef} selector=".box" leaveActiveClassName="my-fadeout" leaveToClassName="hidden">
                        <Button ref={closeBtnRef} label="Hide" />
                    </StyleClass>

                    <div className="box hidden">Content</div>
                </div>
            </div>

            <StyleClassDoc />
        </div>
    )
}

export default StyleClassDemo;
