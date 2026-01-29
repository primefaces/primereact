import { Badge } from '@primereact/ui/badge';
import { OverlayBadge } from '@primereact/ui/overlaybadge';

export default function BasicDemo() {
    return (
        <div className="flex flex-wrap justify-center gap-6">
            <OverlayBadge>
                <i className="pi pi-bell text-2xl" />
                <Badge shape="circle">2</Badge>
            </OverlayBadge>
            <OverlayBadge>
                <i className="pi pi-calendar text-2xl" />
                <Badge shape="circle" severity="danger">
                    4
                </Badge>
            </OverlayBadge>
            <OverlayBadge>
                <i className="pi pi-envelope text-2xl" />
                <Badge shape="circle"></Badge>
            </OverlayBadge>
        </div>
    );
}
