import { OverlayBadge } from 'primereact/overlaybadge';

export default function BasicDemo() {
    return (
        <div className="card flex flex-wrap justify-center gap-6">
            <OverlayBadge value="2">
                <i className="pi pi-bell" style={{ fontSize: '2rem' }} />
            </OverlayBadge>
            <OverlayBadge value="4" severity="danger">
                <i className="pi pi-calendar" style={{ fontSize: '2rem' }} />
            </OverlayBadge>
            <OverlayBadge severity="danger">
                <i className="pi pi-envelope" style={{ fontSize: '2rem' }} />
            </OverlayBadge>
        </div>
    );
}
