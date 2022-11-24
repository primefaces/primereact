import React from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { Skeleton } from '../../../components/lib/skeleton/Skeleton';

export function ShapesDemo(props) {
    const code = {
        basic: `
<h5>Rectangle</h5>
<Skeleton className="mb-2"></Skeleton>
<Skeleton width="10rem" className="mb-2"></Skeleton>
<Skeleton width="5rem" className="mb-2"></Skeleton>
<Skeleton height="2rem" className="mb-2"></Skeleton>
<Skeleton width="10rem" height="4rem"></Skeleton>

<h5>Rounded</h5>
<Skeleton className="mb-2" borderRadius="16px"></Skeleton>
<Skeleton width="10rem" className="mb-2" borderRadius="16px"></Skeleton>
<Skeleton width="5rem" borderRadius="16px" className="mb-2"></Skeleton>
<Skeleton height="2rem" className="mb-2" borderRadius="16px"></Skeleton>
<Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>

<h5 className="mt-3">Square</h5>
<Skeleton size="2rem" className="mr-2"></Skeleton>
<Skeleton size="3rem" className="mr-2"></Skeleton>
<Skeleton size="4rem" className="mr-2"></Skeleton>
<Skeleton size="5rem"></Skeleton>

<h5 className="mt-3">Circle</h5>
<Skeleton shape="circle" size="2rem" className="mr-2"></Skeleton>
<Skeleton shape="circle" size="3rem" className="mr-2"></Skeleton>
<Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
<Skeleton shape="circle" size="5rem"></Skeleton>
        `,
        javascript: `
import React from 'react';
import { Skeleton } from 'primereact/skeleton';

export const ShapesDemo = () => {

    return (
        <div className="card">
            <div className="grid formgrid">
                <div className="field col-12 md:col-6">
                    <h5>Rectangle</h5>
                    <Skeleton className="mb-2"></Skeleton>
                    <Skeleton width="10rem" className="mb-2"></Skeleton>
                    <Skeleton width="5rem" className="mb-2"></Skeleton>
                    <Skeleton height="2rem" className="mb-2"></Skeleton>
                    <Skeleton width="10rem" height="4rem"></Skeleton>
                </div>
                <div className="field col-12 md:col-6">
                    <h5>Rounded</h5>
                    <Skeleton className="mb-2" borderRadius="16px"></Skeleton>
                    <Skeleton width="10rem" className="mb-2" borderRadius="16px"></Skeleton>
                    <Skeleton width="5rem" borderRadius="16px" className="mb-2"></Skeleton>
                    <Skeleton height="2rem" className="mb-2" borderRadius="16px"></Skeleton>
                    <Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>
                </div>
                <div className="field col-12 md:col-6">
                    <h5 className="mt-3">Square</h5>
                    <div className="flex align-items-end">
                        <Skeleton size="2rem" className="mr-2"></Skeleton>
                        <Skeleton size="3rem" className="mr-2"></Skeleton>
                        <Skeleton size="4rem" className="mr-2"></Skeleton>
                        <Skeleton size="5rem"></Skeleton>
                    </div>
                </div>
                <div className="field col-12 md:col-6">
                    <h5 className="mt-3">Circle</h5>
                    <div className="flex align-items-end">
                        <Skeleton shape="circle" size="2rem" className="mr-2"></Skeleton>
                        <Skeleton shape="circle" size="3rem" className="mr-2"></Skeleton>
                        <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                        <Skeleton shape="circle" size="5rem"></Skeleton>
                    </div>
                </div>
            </div>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Skeleton } from 'primereact/skeleton';

export const ShapesDemo = () => {

    return (
        <div className="card">
            <div className="grid formgrid">
                <div className="field col-12 md:col-6">
                    <h5>Rectangle</h5>
                    <Skeleton className="mb-2"></Skeleton>
                    <Skeleton width="10rem" className="mb-2"></Skeleton>
                    <Skeleton width="5rem" className="mb-2"></Skeleton>
                    <Skeleton height="2rem" className="mb-2"></Skeleton>
                    <Skeleton width="10rem" height="4rem"></Skeleton>
                </div>
                <div className="field col-12 md:col-6">
                    <h5>Rounded</h5>
                    <Skeleton className="mb-2" borderRadius="16px"></Skeleton>
                    <Skeleton width="10rem" className="mb-2" borderRadius="16px"></Skeleton>
                    <Skeleton width="5rem" borderRadius="16px" className="mb-2"></Skeleton>
                    <Skeleton height="2rem" className="mb-2" borderRadius="16px"></Skeleton>
                    <Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>
                </div>
                <div className="field col-12 md:col-6">
                    <h5 className="mt-3">Square</h5>
                    <div className="flex align-items-end">
                        <Skeleton size="2rem" className="mr-2"></Skeleton>
                        <Skeleton size="3rem" className="mr-2"></Skeleton>
                        <Skeleton size="4rem" className="mr-2"></Skeleton>
                        <Skeleton size="5rem"></Skeleton>
                    </div>
                </div>
                <div className="field col-12 md:col-6">
                    <h5 className="mt-3">Circle</h5>
                    <div className="flex align-items-end">
                        <Skeleton shape="circle" size="2rem" className="mr-2"></Skeleton>
                        <Skeleton shape="circle" size="3rem" className="mr-2"></Skeleton>
                        <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                        <Skeleton shape="circle" size="5rem"></Skeleton>
                    </div>
                </div>
            </div>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Shapes Demo Content.</p>
            </DocSectionText>
            <div className="card">
                <div className="grid formgrid">
                    <div className="field col-12 md:col-6">
                        <h5>Rectangle</h5>
                        <Skeleton className="mb-2"></Skeleton>
                        <Skeleton width="10rem" className="mb-2"></Skeleton>
                        <Skeleton width="5rem" className="mb-2"></Skeleton>
                        <Skeleton height="2rem" className="mb-2"></Skeleton>
                        <Skeleton width="10rem" height="4rem"></Skeleton>
                    </div>
                    <div className="field col-12 md:col-6">
                        <h5>Rounded</h5>
                        <Skeleton className="mb-2" borderRadius="16px"></Skeleton>
                        <Skeleton width="10rem" className="mb-2" borderRadius="16px"></Skeleton>
                        <Skeleton width="5rem" borderRadius="16px" className="mb-2"></Skeleton>
                        <Skeleton height="2rem" className="mb-2" borderRadius="16px"></Skeleton>
                        <Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>
                    </div>
                    <div className="field col-12 md:col-6">
                        <h5 className="mt-3">Square</h5>
                        <div className="flex align-items-end">
                            <Skeleton size="2rem" className="mr-2"></Skeleton>
                            <Skeleton size="3rem" className="mr-2"></Skeleton>
                            <Skeleton size="4rem" className="mr-2"></Skeleton>
                            <Skeleton size="5rem"></Skeleton>
                        </div>
                    </div>
                    <div className="field col-12 md:col-6">
                        <h5 className="mt-3">Circle</h5>
                        <div className="flex align-items-end">
                            <Skeleton shape="circle" size="2rem" className="mr-2"></Skeleton>
                            <Skeleton shape="circle" size="3rem" className="mr-2"></Skeleton>
                            <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                            <Skeleton shape="circle" size="5rem"></Skeleton>
                        </div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
