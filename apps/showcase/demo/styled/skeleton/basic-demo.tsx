import { Skeleton } from '@primereact/ui/skeleton';

export default function BasicDemo() {
    return (
        <div className="flex gap-4 max-w-xs mx-auto">
            <Skeleton shape="circle" size="2.5rem" />
            <div className="flex-1 flex flex-col gap-1.5 py-0.5">
                <Skeleton width="100%" borderRadius="4px" className="h-auto! flex-1" />
                <Skeleton width="90%" borderRadius="4px" className="h-auto! flex-1" />
            </div>
        </div>
    );
}
