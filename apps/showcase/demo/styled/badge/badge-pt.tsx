import { Badge } from '@primereact/ui/badge';
import { OverlayBadge } from '@primereact/ui/overlaybadge';

export default function BadgePT() {
    return (
        <div className="flex flex-wrap gap-8">
            <Badge shape="circle">2</Badge>
            <OverlayBadge>
                <i className="pi pi-bell" style={{ fontSize: '2rem' }} />
                <Badge shape="circle">4</Badge>
            </OverlayBadge>
        </div>
    );
}
