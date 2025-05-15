import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';

export default function BadgeDemo() {
    return (
        <div className="card flex justify-center flex-wrap gap-4">
            <Button type="button">
                Emails
                <Badge severity="secondary" circle>
                    2
                </Badge>
            </Button>

            <Button type="button" variant="outlined">
                <i className="pi pi-users" />
                Messages
                <Badge severity="contrast" circle>
                    2
                </Badge>
            </Button>

            <Badge.Overlay>
                <Button type="button" variant="outlined">
                    <i className="pi pi-bell" />
                </Button>
                <Badge severity="info" className="animate-pulse" />
            </Badge.Overlay>
        </div>
    );
}
