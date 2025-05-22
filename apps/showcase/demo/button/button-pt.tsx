import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';

export default function ButtonPT() {
    return (
        <Button.Secondary>
            <i className="pi pi-user" />
            Profile
            <Badge severity="contrast" shape="circle">
                2
            </Badge>
        </Button.Secondary>
    );
}
