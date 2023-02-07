import React, { useState, useEffect } from 'react';
import { useResizeListener } from '../../../lib/hooks/Hooks';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';

export function BasicDoc(props) {
    const [eventData, setEventData] = useState({ width: window.innerWidth, height: window.innerHeight });

    const [bindWindowResizeListener, unbindWindowResizeListener] = useResizeListener({
        listener: (event) => {
            setEventData({
                width: event.currentTarget.innerWidth,
                height: event.currentTarget.innerHeight
            });
        }
    });

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
    const [eventData, setEventData] = useState({width: window.innerWidth, height: window.innerHeight});

    const [bindWindowResizeListener, unbindWindowResizeListener] = useResizeListener({
        listener: (event) => {
            setEventData({
                width: event.currentTarget.innerWidth,
                height: event.currentTarget.innerHeight,
            })
        }
    });

    useEffect(() => {
        bindWindowResizeListener();

        return () => {
            unbindWindowResizeListener();
        };
    }, [bindWindowResizeListener, unbindWindowResizeListener]);

    return (
        <div className="card flex flex-column justify-content-center align-items-start gap-2">
            <span className="field text-lg text-color">Change size of the page to see height and width.</span>
            <span className='field text-lg'>width: {eventData.width}, height: {eventData.height}</span>
            <span className='field text-lg'>Event Target: Window</span>
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { useResizeListener } from 'primereact/hooks';

export default function BasicDemo() {
    const [eventData, setEventData] = useState({width: window.innerWidth, height: window.innerHeight});

    const [bindWindowResizeListener, unbindWindowResizeListener] = useResizeListener({
        listener: (event) => {
            setEventData({
                width: event.currentTarget.innerWidth,
                height: event.currentTarget.innerHeight,
            })
        }
    });

    useEffect(() => {
        bindWindowResizeListener();

        return () => {
            unbindWindowResizeListener();
        };
    }, [bindWindowResizeListener, unbindWindowResizeListener]);

    return (
        <div className="card flex flex-column justify-content-center align-items-start gap-2">
            <span className="field text-lg text-color">Change size of the page to see height and width.</span>
            <span className='field text-lg'>width: {eventData.width}, height: {eventData.height}</span>
            <span className='field text-lg'>Event Target: Window</span>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                {/**
                 * @todo Add a description
                 */}
            </DocSectionText>
            <div className="card flex flex-column justify-content-center align-items-start gap-2">
                <span className="field text-lg text-color">Change size of the page to see height and width.</span>

                <span className="field text-lg">
                    width: {eventData.width}, height: {eventData.height}
                </span>
                <span className="field text-lg">Event Target: Window</span>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
