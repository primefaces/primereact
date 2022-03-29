import React, { useState, useEffect, useRef } from 'react';
import { ProgressBar } from '../../components/lib/progressbar/ProgressBar';
import { Toast } from '../../components/lib/toast/Toast';
import ProgressBarDoc from '../../components/doc/progressbar';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

const ProgressBarDemo = () => {

    const [value1, setValue1] = useState(0);
    const toast = useRef(null);
    const interval = useRef(null);

    const displayValueTemplate = (value) => {
        return (
            <React.Fragment>
                {value}/<b>100</b>
            </React.Fragment>
        );
    }

    useEffect(() => {
        let val = value1;
        interval.current = setInterval(() => {
            val += Math.floor(Math.random() * 10) + 1;

            if (val >= 100) {
                val = 100;
                toast.current.show({ severity: 'info', summary: 'Success', detail: 'Process Completed' });
                clearInterval(interval.current);
            }

            setValue1(val);
        }, 2000);

        return () => {
            if (interval.current) {
                clearInterval(interval.current);
                interval.current = null;
            }
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <Head>
                <title>React ProgressBar Component</title>
                <meta name="description" content="ProgressBar is a process status indicator." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>ProgressBar</h1>
                    <p>ProgressBar is a process status indicator.</p>
                </div>

                <DocActions github="progressbar/index.js" />
            </div>

            <div className="content-section implementation">
                <Toast ref={toast}></Toast>

                <div className="card">
                    <h5>Dynamic</h5>
                    <ProgressBar value={value1}></ProgressBar>

                    <h5>Static</h5>
                    <ProgressBar value={50}></ProgressBar>

                    <h5>Custom display value</h5>
                    <ProgressBar value={40} displayValueTemplate={displayValueTemplate}></ProgressBar>

                    <h5>Indeterminate</h5>
                    <ProgressBar mode="indeterminate" style={{ height: '6px' }}></ProgressBar>
                </div>
            </div>

            <ProgressBarDoc />
        </div>
    );
}

export default ProgressBarDemo;
