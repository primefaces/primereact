import React from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { Skeleton } from '../../lib/skeleton/Skeleton';

export function ListDoc(props) {
    const code = {
        basic: `
<Skeleton shape="circle" size="4rem" className="mr-2" />
    <Skeleton width="100%" className="mb-2" />
    <Skeleton width="75%" />
<Skeleton shape="circle" size="4rem" className="mr-2" />
    <Skeleton width="100%" className="mb-2" />
    <Skeleton width="75%" />
<Skeleton shape="circle" size="4rem" className="mr-2" />
    <Skeleton width="100%" className="mb-2" />
    <Skeleton width="75%" />
<Skeleton shape="circle" size="4rem" className="mr-2" />
    <Skeleton width="100%" className="mb-2" />
    <Skeleton width="75%" />
        `,
        javascript: `
import React from 'react';
import { Skeleton } from 'primereact/skeleton';

export const ListDoc = () => {

    return (
        <div className="card">
            <div className="border-round-sm border-solid border-1 surface-border p-4">
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

export const ListDoc = () => {

    return (
        <div className="card">
            <div className="border-round-sm border-solid border-1 surface-border p-4">
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
                <p>List Demo Content.</p>
            </DocSectionText>
            <div className="card">
                <div className="border-round-sm border-solid border-1 surface-border p-4">
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
