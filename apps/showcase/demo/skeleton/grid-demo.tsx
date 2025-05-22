import { Skeleton } from 'primereact/skeleton';

export default function GridDemo() {
    return (
        <div className="card grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="border rounded-md border-surface-200 dark:border-surface-700">
                    <Skeleton width="100%" height="10rem" className="!rounded-t-md !rounded-b-none" />
                    <div className="p-4 flex items-start gap-3">
                        <Skeleton shape="circle" size="3rem" />
                        <div className="flex-1 flex flex-col gap-2">
                            <Skeleton width="100%" borderRadius="4px" />
                            <Skeleton width="90%" borderRadius="4px" />
                            <Skeleton width="20%" borderRadius="4px" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
