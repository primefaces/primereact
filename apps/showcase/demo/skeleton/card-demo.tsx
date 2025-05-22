import { Skeleton } from 'primereact/skeleton';

export default function ShapesDemo() {
    return (
        <div className="card flex items-center justify-center">
            <div className="max-w-md w-full space-y-4">
                <div className="flex items-start gap-4">
                    <Skeleton shape="circle" size="3.5rem" />
                    <div className="flex-1">
                        <div className="flex items-center justify-between">
                            <Skeleton width="40%" height="1.75rem" />
                        </div>
                        <div className="space-y-1.5 mt-3">
                            <Skeleton width="100%" borderRadius="4px" />
                            <Skeleton width="90%" borderRadius="4px" />
                            <Skeleton width="30%" borderRadius="4px" />
                        </div>
                        <Skeleton className="mt-4" height="16rem" />
                        <div className="flex items-center gap-4 mt-4">
                            <Skeleton width="4rem" height="1.75rem" />
                            <Skeleton width="4rem" height="1.75rem" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
