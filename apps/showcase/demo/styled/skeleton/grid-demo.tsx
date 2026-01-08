import { Skeleton } from '@primereact/ui/skeleton';

export default function GridDemo() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="p-4 rounded-lg bg-surface-50 dark:bg-surface-800/75">
                    <Skeleton width="100%" height="10rem" className="" />
                    <div className="mt-4 flex items-start gap-3">
                        <Skeleton shape="circle" size="2.5rem" />
                        <div className="flex-1 flex flex-col gap-2">
                            <Skeleton width="100%" borderRadius="4px" />
                            <Skeleton width="90%" borderRadius="4px" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
