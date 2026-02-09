import { Badge } from '@primereact/ui/badge';
import { OverlayBadge } from '@primereact/ui/overlaybadge';
import { Bell } from '@primeicons/react/bell';

export default function BadgePT() {
    return (
        <div className="flex flex-wrap gap-8">
            <Badge shape="circle">2</Badge>
            <OverlayBadge>
                <Bell />
                <Badge shape="circle">4</Badge>
            </OverlayBadge>
        </div>
    );
}
