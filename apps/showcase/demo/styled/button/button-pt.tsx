import { Badge } from '@primereact/ui/badge';
import { Button } from '@primereact/ui/button';
import { User } from '@primeicons/react/user';

export default function ButtonPT() {
    return (
        <Button severity="secondary">
            <User />
            Profile
            <Badge severity="contrast" shape="circle">
                2
            </Badge>
        </Button>
    );
}
