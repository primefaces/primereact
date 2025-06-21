import { Badge } from 'primereact/badge';

export default function BadgePT() {
    return (
        <div className="flex flex-wrap gap-8">
            <Badge shape="circle">2</Badge>
            <Badge.Overlay>
                <i className="pi pi-bell" style={{ fontSize: '2rem' }} />
                <Badge shape="circle">4</Badge>
            </Badge.Overlay>
        </div>
    );
}
