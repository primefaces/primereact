import { Badge } from 'primereact/badge';

export default function SeverityDemo() {
    return (
        <div className="card flex flex-wrap justify-center gap-2">
            <Badge>Default</Badge>
            <Badge severity="secondary">Secondary</Badge>
            <Badge severity="success">Success</Badge>
            <Badge severity="info">Info</Badge>
            <Badge severity="warn">Warning</Badge>
            <Badge severity="danger">Danger</Badge>
            <Badge severity="contrast">Contrast</Badge>
        </div>
    );
}
