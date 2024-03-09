import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { useResizeListener } from '@/components/lib/hooks/Hooks';
import { useEffect, useState } from 'react';

export function BasicDoc(props) {
    const [eventData, setEventData] = useState({ width: 0, height: 0 });

    const [bindWindowResizeListener, unbindWindowResizeListener] = useResizeListener({
        listener: (event) => {
            setEventData({
                width: event.currentTarget.innerWidth,
                height: event.currentTarget.innerHeight
            });
        }
    });

    useEffect(() => {
        setEventData({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    useEffect(() => {
        bindWindowResizeListener();

        return () => {
            unbindWindowResizeListener();
        };
    }, [bindWindowResizeListener, unbindWindowResizeListener]);

    const code = {
        basic: `
const [bindWindowResizeListener, unbindWindowResizeListener] = useResizeListener({
    listener: (event) => {
        setEventData({
            width: event.currentTarget.innerWidth,
            height: event.currentTarget.innerHeight,
        })
    }
});
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { useResizeListener } from 'primereact/hooks';

export default function BasicDemo() {
    const [eventData, setEventData] = useState({ width: 0, height: 0 });

    const [bindWindowResizeListener, unbindWindowResizeListener] = useResizeListener({
        listener: (event) => {
            setEventData({
                width: event.currentTarget.innerWidth,
                height: event.currentTarget.innerHeight
            });
        }
    });

    useEffect(() => {
        setEventData({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    useEffect(() => {
        bindWindowResizeListener();

        return () => {
            unbindWindowResizeListener();
        };
    }, [bindWindowResizeListener, unbindWindowResizeListener]);

    return (
        <div className="card flex flex-wrap justify-content-center gap-3 text-xl">
            <span>
                Width: <strong>{eventData.width}</strong>
            </span>
            <span>
                Height: <strong>{eventData.height}</strong>
            </span>
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { useResizeListener } from 'primereact/hooks';

export default function BasicDemo() {
    const [eventData, setEventData] = useState({ width: 0, height: 0 });

    const [bindWindowResizeListener, unbindWindowResizeListener] = useResizeListener({
        listener: (event) => {
            setEventData({
                width: event.currentTarget.innerWidth,
                height: event.currentTarget.innerHeight
            });
        }
    });

    useEffect(() => {
        setEventData({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    useEffect(() => {
        bindWindowResizeListener();

        return () => {
            unbindWindowResizeListener();
        };
    }, [bindWindowResizeListener, unbindWindowResizeListener]);

    return (
        <div className="card flex flex-wrap justify-content-center gap-3 text-xl">
            <span>
                Width: <strong>{eventData.width}</strong>
            </span>
            <span>
                Height: <strong>{eventData.height}</strong>
            </span>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Resize the browser window to view information about the resize event.</p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center gap-3 text-xl">
                <span>
                    Width: <strong>{eventData.width}</strong>
                </span>
                <span>
                    Height: <strong>{eventData.height}</strong>
                </span>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
