import { Badge } from '@primereact/ui/badge';

export default function BasicDemo() {
    return (
        <div className="flex flex-wrap justify-center gap-6">
            <Badge.Overlay>
                <i className="pi pi-bell text-2xl" />
                <Badge.Root shape="circle">2</Badge.Root>
            </Badge.Overlay>
            <Badge.Overlay>
                <i className="pi pi-calendar text-2xl" />
                <Badge.Root shape="circle" severity="danger">
                    4
                </Badge.Root>
            </Badge.Overlay>
            <Badge.Overlay>
                <i className="pi pi-envelope text-2xl" />
                <Badge.Root shape="circle"></Badge.Root>
            </Badge.Overlay>
        </div>
    );
}
