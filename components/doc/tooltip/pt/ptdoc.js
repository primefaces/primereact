import { useState } from 'react';
import { Button } from '../../../lib/button/Button';
import { Tooltip } from '../../../lib/tooltip/Tooltip';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function PTDoc(props) {
    const [count, setCount] = useState(0);

    const code = {
        basic: `
<Tooltip
    target=".tooltip-button"
    autoHide={false}
    pt={{
        root: {
            className: 'ml-2'
        },
        arrow: {
            style: {
                position: 'absolute',
                top: '50%',
                left: -5,
                transfom: 'translate(-50%, -50%)',
                width: '10px',
                height: '10px',
                backgroundColor: '#495057',
                borderRadius: '50%'
            }
        }
    }}
>
    <div className="flex align-items-center">
        <span style={{ minWidth: '5rem' }}>Count: {count}</span>
        <Button type="button" icon="pi pi-plus" onClick={() => setCount(count + 1)} className="p-button-rounded p-button-success ml-2"></Button>
        <Button type="button" icon="pi pi-minus" onClick={() => setCount(count - 1)} className="p-button-rounded p-button-danger ml-2"></Button>
    </div>
</Tooltip>
        `,
        javascript: `
import React, { useState } from 'react';
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';

export default function PTDemo() {
    const [count, setCount] = useState(0);

    return (
        <div className="card flex flex-wrap align-items-center justify-content-center gap-2">
            <Tooltip
                target=".tooltip-button"
                autoHide={false}
                pt={{
                    root: {
                        className: 'ml-2'
                    },
                    arrow: {
                        style: {
                            position: 'absolute',
                            top: '50%',
                            left: -5,
                            transfom: 'translate(-50%, -50%)',
                            width: '10px',
                            height: '10px',
                            backgroundColor: '#495057',
                            borderRadius: '50%'
                        }
                    }
                }}
            >
                <div className="flex align-items-center">
                    <span style={{ minWidth: '5rem' }}>Count: {count}</span>
                    <Button type="button" icon="pi pi-plus" onClick={() => setCount(count + 1)} className="p-button-rounded p-button-success ml-2"></Button>
                    <Button type="button" icon="pi pi-minus" onClick={() => setCount(count - 1)} className="p-button-rounded p-button-danger ml-2"></Button>
                </div>
            </Tooltip>
            <Button className="tooltip-button" type="button" label="Number" icon="pi pi-plus" />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Tooltip } from 'primereact/tooltip';
import { Button } from 'primereact/button';

export default function PTDemo() {
    const [count, setCount] = useState<number>(0);

    return (
        <div className="card flex flex-wrap align-items-center justify-content-center gap-2">
            <Tooltip
                target=".tooltip-button"
                autoHide={false}
                pt={{
                    root: {
                        className: 'ml-2'
                    },
                    arrow: {
                        style: {
                            position: 'absolute',
                            top: '50%',
                            left: -5,
                            transfom: 'translate(-50%, -50%)',
                            width: '10px',
                            height: '10px',
                            backgroundColor: '#495057',
                            borderRadius: '50%'
                        }
                    }
                }}
            >
                <div className="flex align-items-center">
                    <span style={{ minWidth: '5rem' }}>Count: {count}</span>
                    <Button type="button" icon="pi pi-plus" onClick={() => setCount(count + 1)} className="p-button-rounded p-button-success ml-2"></Button>
                    <Button type="button" icon="pi pi-minus" onClick={() => setCount(count - 1)} className="p-button-rounded p-button-danger ml-2"></Button>
                </div>
            </Tooltip>
            <Button className="tooltip-button" type="button" label="Number" icon="pi pi-plus" />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex flex-wrap align-items-center justify-content-center gap-2">
                <Tooltip
                    target=".tooltip-button"
                    autoHide={false}
                    pt={{
                        root: {
                            className: 'ml-2'
                        },
                        arrow: {
                            style: {
                                position: 'absolute',
                                top: '50%',
                                left: -5,
                                transfom: 'translate(-50%, -50%)',
                                width: '10px',
                                height: '10px',
                                backgroundColor: '#495057',
                                borderRadius: '50%'
                            }
                        }
                    }}
                >
                    <div className="flex align-items-center">
                        <span style={{ minWidth: '5rem' }}>Count: {count}</span>
                        <Button type="button" icon="pi pi-plus" onClick={() => setCount(count + 1)} className="p-button-rounded p-button-success ml-2"></Button>
                        <Button type="button" icon="pi pi-minus" onClick={() => setCount(count - 1)} className="p-button-rounded p-button-danger ml-2"></Button>
                    </div>
                </Tooltip>
                <Button className="tooltip-button" type="button" label="Number" icon="pi pi-plus" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
