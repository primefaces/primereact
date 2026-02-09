import { Button } from '@/components/ui/button';
import { Badge } from 'primereact/badge';
import { OverlayBadge } from 'primereact/overlaybadge';
import { Bell } from '@primeicons/react/bell';
import { Users } from '@primeicons/react/users';

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
                <Users />
                Messages
                <Badge severity="contrast" shape="circle">
                    2
                </Badge>
            </Button>

            <OverlayBadge>
                <Button type="button" variant="outlined">
                    <Bell />
                </Button>
                <Badge severity="info" className="animate-pulse" />
            </OverlayBadge>
        </div>
    );
}
