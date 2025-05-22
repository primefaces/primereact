import { Skeleton } from 'primereact/skeleton';

export default function ShapesDemo() {
    return (
        <div className="card">
            <div className="flex flex-col items-start gap-8 max-w-sm">
                <div className="w-full">
                    <h5>Circle</h5>
                    <div className="flex items-end gap-4">
                        <Skeleton shape="circle" size="5rem" />
                        <Skeleton shape="circle" size="4rem" />
                        <Skeleton shape="circle" size="3rem" />
                        <Skeleton shape="circle" size="2rem" />
                    </div>
                </div>
                <div className="w-full">
                    <h5>Square</h5>
                    <div className="flex items-end gap-4">
                        <Skeleton size="5rem" />
                        <Skeleton size="4rem" />
                        <Skeleton size="3rem" />
                        <Skeleton size="2rem" />
                    </div>
                </div>
                <div className="w-full">
                    <h5>Rectangle</h5>
                    <div className="flex flex-col gap-2 w-full">
                        <Skeleton />
                        <Skeleton width="12rem" />
                        <Skeleton width="7rem" />
                        <Skeleton height="4rem" />
                        <Skeleton width="12rem" height="4rem" />
                    </div>
                </div>
                <div className="w-full">
                    <h5>Rounded</h5>
                    <div className="flex flex-col gap-2 w-full">
                        <Skeleton borderRadius="16px" />
                        <Skeleton width="12rem" borderRadius="16px" />
                        <Skeleton width="7rem" borderRadius="16px" />
                        <Skeleton height="4rem" borderRadius="16px" />
                        <Skeleton width="12rem" height="4rem" borderRadius="16px" />
                    </div>
                </div>
            </div>
        </div>
    );
}
