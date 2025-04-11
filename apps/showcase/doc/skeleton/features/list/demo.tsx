import { Skeleton } from 'primereact/skeleton';

export default function ListDemo() {
    return (
        <div className="card">
            <div className="rounded border border-surface-200 dark:border-surface-700 p-6 bg-surface-0 dark:bg-surface-900">
                <ul className="m-0 p-0 list-none">
                    <li className="mb-4">
                        <div className="flex">
                            <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                            <div className="self-center" style={{ flex: 1 }}>
                                <Skeleton width="100%" className="mb-2"></Skeleton>
                                <Skeleton width="75%"></Skeleton>
                            </div>
                        </div>
                    </li>
                    <li className="mb-4">
                        <div className="flex">
                            <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                            <div className="self-center" style={{ flex: 1 }}>
                                <Skeleton width="100%" className="mb-2"></Skeleton>
                                <Skeleton width="75%"></Skeleton>
                            </div>
                        </div>
                    </li>
                    <li className="mb-4">
                        <div className="flex">
                            <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                            <div className="self-center" style={{ flex: 1 }}>
                                <Skeleton width="100%" className="mb-2"></Skeleton>
                                <Skeleton width="75%"></Skeleton>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex">
                            <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                            <div className="self-center" style={{ flex: 1 }}>
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
