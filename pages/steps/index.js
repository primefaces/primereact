import React, { useState, useRef } from 'react';
import { Steps } from '../../components/lib/steps/Steps';
import { Toast } from '../../components/lib/toast/Toast';
import StepsDoc from '../../components/doc/steps';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const StepsDemo = () => {

    const [activeIndex, setActiveIndex] = useState(1);
    const toast = useRef(null);

    const items = [
        {
            label: 'Personal',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'First Step', detail: event.item.label });
            }
        },
        {
            label: 'Seat',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Seat Selection', detail: event.item.label });
            }
        },
        {
            label: 'Payment',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Pay with CC', detail: event.item.label });
            }
        },
        {
            label: 'Confirmation',
            command: (event) => {
                toast.current.show({ severity: 'info', summary: 'Last Step', detail: event.item.label });
            }
        }
    ];


    return (
        <div>
            <Head>
                <title>React Stepper Component</title>
                <meta name="description" content="Steps also known as Stepper, is an indicator for the steps in a workflow. Layout of steps component is optimized for responsive design." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>Steps</h1>
                    <p>Steps also known as Stepper, is an indicator for the steps in a workflow. Layout of steps component is optimized for responsive design.</p>
                </div>
                <DocActions github="steps/index.js" />
            </div>

            <div className="content-section implementation steps-demo">
                <Toast ref={toast}></Toast>

                <div className="card">
                    <h5>Basic</h5>
                    <Steps model={items} />

                    <h5>Interactive</h5>
                    <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
                </div>
            </div>

            <StepsDoc />
        </div>
    );
}

export default StepsDemo;
