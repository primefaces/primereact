import { Badge } from '@primereact/ui/badge';
import { Button } from '@primereact/ui/button';

export default function ButtonPT() {
    return (
        <Button severity="secondary">
            <i className="pi pi-user" />
            Profile
            <Badge.Root severity="contrast" shape="circle">
                2
            </Badge.Root>
        </Button>
    );
}
