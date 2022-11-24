import React, { useState, useEffect, useRef } from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { ProgressBar } from '../../lib/progressbar/ProgressBar';
import { Toast } from '../../lib/toast/Toast';

export function DynamicDoc(props) {
    const [value1, setValue1] = useState(0);
    const toast = useRef(null);
    const interval = useRef(null);

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
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<ProgressBar value={value1}></ProgressBar>
        `,
        javascript: `
import React, { useState, useEffect, useRef } from 'react';
import { ProgressBar } from 'primereact/progressbar';
import { Toast } from 'primereact/toast';

export const DynamicDoc = () => {
    const [value1, setValue1] = useState(0);
    const toast = useRef(null);
    const interval = useRef(null);

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
        };
    }, []);

    return (
        <div className="card">
            <Toast ref={toast}></Toast>
            <ProgressBar value={value1}></ProgressBar>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect, useRef } from 'react';
import { ProgressBar } from 'primereact/progressbar';
import { Toast } from 'primereact/toast';

export const DynamicDoc = () => {
    const [value1, setValue1] = useState<number>(0);
    const toast = useRef<Toast | null>(null);
    const interval = useRef<NodeJS.Timeout | null>(null);

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
        };
    }, []);

    return (
        <div className="card">
            <Toast ref={toast}></Toast>
            <ProgressBar value={value1}></ProgressBar>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Dynamic Demo Content.</p>
            </DocSectionText>
            <div className="card">
                <Toast ref={toast}></Toast>
                <ProgressBar value={value1}></ProgressBar>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
