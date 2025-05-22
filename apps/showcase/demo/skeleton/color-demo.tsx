import { Skeleton } from 'primereact/skeleton';

export default function ColorDemo() {
    return (
        <div className="card flex items-center justify-center">
            <div className="max-w-md w-full space-y-1.5">
                <Skeleton width="100%" borderRadius="4px" className="!bg-blue-500/20" />
                <Skeleton width="90%" borderRadius="4px" className="!bg-red-500/20" />
                <Skeleton width="30%" borderRadius="4px" className="!bg-yellow-500/20" />
            </div>
        </div>
    );
}
