import { Skeleton } from 'primereact/skeleton';

export default function ShapesDemo() {
    return (
        <div className="card">
            <div className="flex flex-wrap">
                <div className="w-full xl:w-6/12 p-4">
                    <h5>Rectangle</h5>
                    <Skeleton className="mb-2"></Skeleton>
                    <Skeleton width="10rem" className="mb-2"></Skeleton>
                    <Skeleton width="5rem" className="mb-2"></Skeleton>
                    <Skeleton height="2rem" className="mb-2"></Skeleton>
                    <Skeleton width="10rem" height="4rem"></Skeleton>
                </div>
                <div className="w-full xl:w-6/12 p-4">
                    <h5>Rounded</h5>
                    <Skeleton className="mb-2" borderRadius="16px"></Skeleton>
                    <Skeleton width="10rem" className="mb-2" borderRadius="16px"></Skeleton>
                    <Skeleton width="5rem" borderRadius="16px" className="mb-2"></Skeleton>
                    <Skeleton height="2rem" className="mb-2" borderRadius="16px"></Skeleton>
                    <Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>
                </div>
                <div className="w-full xl:w-6/12 p-4">
                    <h5 className="mt-4">Square</h5>
                    <div className="flex items-end">
                        <Skeleton size="2rem" className="mr-2"></Skeleton>
                        <Skeleton size="3rem" className="mr-2"></Skeleton>
                        <Skeleton size="4rem" className="mr-2"></Skeleton>
                        <Skeleton size="5rem"></Skeleton>
                    </div>
                </div>
                <div className="w-full xl:w-6/12 p-4">
                    <h5 className="mt-4">Circle</h5>
                    <div className="flex items-end">
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
