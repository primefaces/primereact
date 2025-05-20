import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';

const BadgeDemo = () => {
    return (
        <div className="card flex items-center justify-center gap-8">
            <Badge.Overlay>
                <Avatar size="large" shape="circle">
                    <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" />
                    <Avatar.Fallback>O</Avatar.Fallback>
                </Avatar>
                <Badge size="small" circle severity="success">
                    2
                </Badge>
            </Badge.Overlay>
            <Badge.Overlay>
                <Avatar size="large">
                    <Avatar.Image src="https://primefaces.org/cdn/primevue/images/organization/walter.jpg" />
                    <Avatar.Fallback>W</Avatar.Fallback>
                </Avatar>
                <Badge circle severity="danger"></Badge>
            </Badge.Overlay>
        </div>
    );
};

export default BadgeDemo;
