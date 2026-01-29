import { Button } from '@/components/ui/button';
import { Badge } from 'primereact/badge';
import { OverlayBadge } from 'primereact/overlaybadge';

export default function BadgeDemo() {
    return (
        <div className="flex justify-center flex-wrap gap-4">
            <Button type="button">
                Emails
                <Badge severity="secondary" shape="circle">
                    2
                </Badge>
            </Button>

            <Button type="button" variant="outlined">
                <i className="pi pi-users" />
                Messages
                <Badge severity="contrast" shape="circle">
                    2
                </Badge>
            </Button>

            <OverlayBadge>
                <Button type="button" variant="outlined">
                    <i className="pi pi-bell" />
                </Button>
                <Badge severity="info" className="animate-pulse" />
            </OverlayBadge>
        </div>
    );
}
