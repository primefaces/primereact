import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Skeleton } from '@/components/lib/skeleton/Skeleton';

export function ListDoc(props) {
    const code = {
        basic: `
<div className="border-round border-1 surface-border p-4">
    <ul className="m-0 p-0 list-none">
        <li className="mb-3">
            <div className="flex">
                <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                <div style={{ flex: '1' }}>
                    <Skeleton width="100%" className="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                </div>
            </div>
        </li>
        <li className="mb-3">
            <div className="flex">
                <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                <div style={{ flex: '1' }}>
                    <Skeleton width="100%" className="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                </div>
            </div>
        </li>
        <li className="mb-3">
            <div className="flex">
                <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                <div style={{ flex: '1' }}>
                    <Skeleton width="100%" className="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                </div>
            </div>
        </li>
        <li>
            <div className="flex">
                <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                <div style={{ flex: '1' }}>
                    <Skeleton width="100%" className="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                </div>
            </div>
        </li>
    </ul>
</div>
        `,
        javascript: `
import React from 'react';
import { Skeleton } from 'primereact/skeleton';

export default function ListDemo() {
    return (
        <div className="card">
            <div className="border-round border-1 surface-border p-4">
                <ul className="m-0 p-0 list-none">
                    <li className="mb-3">
                        <div className="flex">
                            <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                            <div style={{ flex: '1' }}>
                                <Skeleton width="100%" className="mb-2"></Skeleton>
                                <Skeleton width="75%"></Skeleton>
                            </div>
                        </div>
                    </li>
                    <li className="mb-3">
                        <div className="flex">
                            <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                            <div style={{ flex: '1' }}>
                                <Skeleton width="100%" className="mb-2"></Skeleton>
                                <Skeleton width="75%"></Skeleton>
                            </div>
                        </div>
                    </li>
                    <li className="mb-3">
                        <div className="flex">
                            <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                            <div style={{ flex: '1' }}>
                                <Skeleton width="100%" className="mb-2"></Skeleton>
                                <Skeleton width="75%"></Skeleton>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex">
                            <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                            <div style={{ flex: '1' }}>
                                <Skeleton width="100%" className="mb-2"></Skeleton>
                                <Skeleton width="75%"></Skeleton>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Skeleton } from 'primereact/skeleton';

export default function ListDemo() {
    return (
        <div className="card">
            <div className="border-round border-1 surface-border p-4">
                <ul className="m-0 p-0 list-none">
                    <li className="mb-3">
                        <div className="flex">
                            <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                            <div style={{ flex: '1' }}>
                                <Skeleton width="100%" className="mb-2"></Skeleton>
                                <Skeleton width="75%"></Skeleton>
                            </div>
                        </div>
                    </li>
                    <li className="mb-3">
                        <div className="flex">
                            <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                            <div style={{ flex: '1' }}>
                                <Skeleton width="100%" className="mb-2"></Skeleton>
                                <Skeleton width="75%"></Skeleton>
                            </div>
                        </div>
                    </li>
                    <li className="mb-3">
                        <div className="flex">
                            <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                            <div style={{ flex: '1' }}>
                                <Skeleton width="100%" className="mb-2"></Skeleton>
                                <Skeleton width="75%"></Skeleton>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex">
                            <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                            <div style={{ flex: '1' }}>
                                <Skeleton width="100%" className="mb-2"></Skeleton>
                                <Skeleton width="75%"></Skeleton>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Sample List implementation using different Skeleton components and PrimeFlex CSS utilities.</p>
            </DocSectionText>
            <div className="card">
                <div className="border-round border-1 surface-border p-4">
                    <ul className="m-0 p-0 list-none">
                        <li className="mb-3">
                            <div className="flex">
                                <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                                <div style={{ flex: '1' }}>
                                    <Skeleton width="100%" className="mb-2"></Skeleton>
                                    <Skeleton width="75%"></Skeleton>
                                </div>
                            </div>
                        </li>
                        <li className="mb-3">
                            <div className="flex">
                                <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                                <div style={{ flex: '1' }}>
                                    <Skeleton width="100%" className="mb-2"></Skeleton>
                                    <Skeleton width="75%"></Skeleton>
                                </div>
                            </div>
                        </li>
                        <li className="mb-3">
                            <div className="flex">
                                <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                                <div style={{ flex: '1' }}>
                                    <Skeleton width="100%" className="mb-2"></Skeleton>
                                    <Skeleton width="75%"></Skeleton>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex">
                                <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                                <div style={{ flex: '1' }}>
                                    <Skeleton width="100%" className="mb-2"></Skeleton>
                                    <Skeleton width="75%"></Skeleton>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
