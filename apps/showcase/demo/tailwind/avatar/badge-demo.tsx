import { Avatar } from '@primereact/ui/avatar';
import { Badge } from '@primereact/ui/badge';
import { OverlayBadge } from '@primereact/ui/overlaybadge';

const BadgeDemo = () => {
    return (
        <div className="flex items-center justify-center gap-8">
            <OverlayBadge>
                <Avatar.Root size="large" shape="circle">
                    <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" />
                    <Avatar.Fallback>O</Avatar.Fallback>
                </Avatar.Root>
                <Badge size="small" shape="circle" severity="success">
                    2
                </Badge>
            </OverlayBadge>
            <OverlayBadge>
                <Avatar.Root size="large">
                    <Avatar.Image src="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" />
                    <Avatar.Fallback>W</Avatar.Fallback>
                </Avatar.Root>
                <Badge shape="circle" severity="danger"></Badge>
            </OverlayBadge>
        </div>
    );
};

export default BadgeDemo;
