import { Badge } from 'primereact/badge';

export default function SizeDemo() {
    return (
        <div className="card flex flex-wrap justify-center items-end gap-2">
            <Badge size="xlarge">XLarge</Badge>
            <Badge size="large">Large</Badge>
            <Badge>Default</Badge>
            <Badge size="small">Small</Badge>
        </div>
    );
}
