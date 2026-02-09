import { Badge } from '@primereact/ui/badge';
import { OverlayBadge } from '@primereact/ui/overlaybadge';
import { Bell } from '@primeicons/react/bell';
import { Calendar } from '@primeicons/react/calendar';
import { Envelope } from '@primeicons/react/envelope';

export default function BasicDemo() {
    return (
        <div className="flex flex-wrap justify-center gap-6">
            <OverlayBadge>
                <Bell className="text-2xl" />
                <Badge shape="circle">2</Badge>
            </OverlayBadge>
            <OverlayBadge>
                <Calendar className="text-2xl" />
                <Badge shape="circle" severity="danger">
                    4
                </Badge>
            </OverlayBadge>
            <OverlayBadge>
                <Envelope className="text-2xl" />
                <Badge shape="circle"></Badge>
            </OverlayBadge>
        </div>
    );
}
