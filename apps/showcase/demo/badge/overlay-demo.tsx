import { Badge } from 'primereact/badge';

export default function BasicDemo() {
    return (
        <div className="card flex flex-wrap justify-center gap-6">
            <Badge.Overlay>
                <i className="pi pi-bell" style={{ fontSize: '2rem' }} />
                <Badge circle>2</Badge>
            </Badge.Overlay>
            <Badge.Overlay>
                <i className="pi pi-calendar" style={{ fontSize: '2rem' }} />
                <Badge circle severity="danger">
                    4
                </Badge>
            </Badge.Overlay>
            <Badge.Overlay>
                <i className="pi pi-envelope" style={{ fontSize: '2rem' }} />
                <Badge circle></Badge>
            </Badge.Overlay>
        </div>
    );
}
