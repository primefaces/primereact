import { Tag } from 'primereact/tag';

export default function IconDemo() {
    return (
        <div className="card flex flex-wrap justify-center gap-2">
            <Tag>
                <Tag.Icon icon="pi pi-user" />
                <Tag.Label>Primary</Tag.Label>
            </Tag>
            <Tag severity="secondary">
                <Tag.Icon icon="pi pi-user" />
                <Tag.Label>Secondary</Tag.Label>
            </Tag>
            <Tag severity="success">
                <Tag.Icon icon="pi pi-check" />
                <Tag.Label>Success</Tag.Label>
            </Tag>
            <Tag severity="info">
                <Tag.Icon icon="pi pi-search" />
                <Tag.Label>Info</Tag.Label>
            </Tag>
            <Tag severity="warn">
                <Tag.Icon icon="pi pi-exclamation-triangle" />
                <Tag.Label>Warn</Tag.Label>
            </Tag>
            <Tag severity="danger">
                <Tag.Icon icon="pi pi-times" />
                <Tag.Label>Danger</Tag.Label>
            </Tag>
            <Tag severity="contrast">
                <Tag.Icon icon="pi pi-cog" />
                <Tag.Label>Contrast</Tag.Label>
            </Tag>
        </div>
    );
}
