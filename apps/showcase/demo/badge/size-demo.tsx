import { Badge } from 'primereact/badge';

export default function SizeDemo() {
    return (
        <div className="card flex flex-wrap items-center justify-center gap-2">
            <Badge size="small">Small</Badge>
            <Badge>Default</Badge>
            <Badge size="large">Large</Badge>
            <Badge size="xlarge">XLarge</Badge>
        </div>
    );
}
